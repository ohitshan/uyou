import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import os from "os";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { scrapers } from "@/lib/scrapers/registry";
import { revalidatePath } from "next/cache";

function isAuthorizedRequest(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    return true;
  }

  const authorizationHeader = request.headers.get("authorization");
  if (!authorizationHeader) {
    return false;
  }

  const [scheme, token] = authorizationHeader.split(" ");
  return scheme.toLowerCase() === "bearer" && token === cronSecret;
}

export async function GET(request: Request) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: "Unauthorized request" }, { status: 401 });
  }

  console.log(`[Scraping Started] Time: ${new Date().toISOString()}`);

  let browser = null;
  const results: Record<string, { count: number; error?: string }> = {};

  try {
    const isMac = os.platform() === "darwin";
    const executablePath = isMac
      ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      : await chromium.executablePath();

    browser = await puppeteer.launch({
      args: isMac ? [] : chromium.args,
      defaultViewport: null,
      executablePath,
      headless: true,
    });

    for (const scraper of scrapers) {
      try {
        // 대학 slug → id 조회
        const { data: university, error: universityError } = await supabaseAdmin
          .from("universities")
          .select("id")
          .eq("slug", scraper.universitySlug)
          .single();

    if (universityError || !university) {
  console.error(`[Skip] university lookup failed: ${scraper.universitySlug}`, universityError);
  results[scraper.universitySlug] = {
    count: 0,
    error: universityError?.message ?? "university not found",
  };
  continue;
}

        const page = await browser.newPage();
        await page.setUserAgent(
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        );

        const posts = await scraper.run(page);
        await page.close();

        console.log(`[${scraper.universitySlug}] scraped ${posts.length} posts`);

        if (posts.length === 0) {
          results[scraper.universitySlug] = { count: 0 };
          continue;
        }

        const rows = posts.map((post) => ({
          university_id: university.id,
          title: post.title,
          url: post.url,
          published_at: post.publishedAt,
          crawled_at: new Date().toISOString(),
        }));

        const { error: upsertError } = await supabaseAdmin
          .from("university_posts")
          .upsert(rows, { onConflict: "university_id,url" });

revalidatePath("/"); // 홈 화면 갱신
          revalidatePath(`/universities/${scraper.universitySlug}`); 

        if (upsertError) {
          console.error(`[${scraper.universitySlug}] upsert error`, upsertError);
          results[scraper.universitySlug] = {
            count: 0,
            error: upsertError.message,
          };
          continue;
        }

        results[scraper.universitySlug] = { count: rows.length };
      } catch (scraperError: unknown) {
        const message =
          scraperError instanceof Error ? scraperError.message : "Unknown error";
        console.error(`[${scraper.universitySlug}] failed`, scraperError);
        results[scraper.universitySlug] = { count: 0, error: message };
      }
    }

    return NextResponse.json({ message: "Success", results });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown scraping error";
    console.error("[Scraping Error]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}