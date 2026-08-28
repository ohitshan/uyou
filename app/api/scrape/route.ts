import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import os from "os";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { scrapers } from "@/lib/scrapers/registry";
import { revalidatePath } from "next/cache";
import { sendUniversityPush } from "@/lib/push/send-push";

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
    return NextResponse.json(
      { error: "Unauthorized request" },
      { status: 401 },
    );
  }

  console.log(`[Scraping Started] Time: ${new Date().toISOString()}`);

  let browser = null;

  const results: Record<
    string,
    {
      count: number;
      newCount?: number;
      error?: string;
    }
  > = {};

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
      let page = null;

      try {
        /* =====================================================
         * 1. 대학 조회
         * ===================================================== */

        const { data: university, error: universityError } = await supabaseAdmin
          .from("universities")
          .select("id, slug")
          .eq("slug", scraper.universitySlug)
          .single();

        if (universityError || !university) {
          console.error(
            `[Skip] university lookup failed: ${scraper.universitySlug}`,
            universityError,
          );

          results[scraper.universitySlug] = {
            count: 0,
            error: universityError?.message ?? "university not found",
          };

          continue;
        }

        /* =====================================================
         * 2. Scraping
         * ===================================================== */

        page = await browser.newPage();

        await page.setUserAgent(
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        );

        const posts = await scraper.run(page);

        console.log(
          `[${scraper.universitySlug}] scraped ${posts.length} posts`,
        );

        if (posts.length === 0) {
          results[scraper.universitySlug] = {
            count: 0,
            newCount: 0,
          };

          continue;
        }

        /* =====================================================
         * 3. 이번 크롤링 게시물 URL 목록
         * ===================================================== */

        const postUrls = posts.map((post) => post.url);

        /* =====================================================
         * 4. 기존 게시물 조회
         *
         * university_id + url 기준
         * ===================================================== */

        const { data: existingPosts, error: existingPostsError } =
          await supabaseAdmin
            .from("university_posts")
            .select("url")
            .eq("university_id", university.id)
            .in("url", postUrls);

        if (existingPostsError) {
          console.error(
            `[${scraper.universitySlug}] existing posts lookup error`,
            existingPostsError,
          );

          results[scraper.universitySlug] = {
            count: 0,
            newCount: 0,
            error: existingPostsError.message,
          };

          continue;
        }

        /* =====================================================
         * 5. 기존 URL Set 생성
         * ===================================================== */

        const existingUrlSet = new Set(
          (existingPosts ?? []).map((post) => post.url),
        );

        /* =====================================================
         * 6. 신규 게시물만 추출
         * ===================================================== */

        const newPosts = posts.filter((post) => !existingUrlSet.has(post.url));

        console.log(
          `[${scraper.universitySlug}] new posts: ${newPosts.length}`,
        );

        /* =====================================================
         * 7. DB 저장
         * ===================================================== */

        const rows = posts.map((post) => ({
          university_id: university.id,
          title: post.title,
          url: post.url,
          published_at: post.publishedAt,
          crawled_at: new Date().toISOString(),
        }));

        const { error: upsertError } = await supabaseAdmin
          .from("university_posts")
          .upsert(rows, {
            onConflict: "university_id,url",
          });

        if (upsertError) {
          console.error(
            `[${scraper.universitySlug}] upsert error`,
            upsertError,
          );

          results[scraper.universitySlug] = {
            count: 0,
            newCount: 0,
            error: upsertError.message,
          };

          continue;
        }

        /* =====================================================
         * 8. ISR / Cache Revalidation
         * ===================================================== */

        revalidatePath("/");
        revalidatePath(`/universities/${scraper.universitySlug}`);

        /* =====================================================
         * 9. 신규 게시물이 있을 때만 Push
         * ===================================================== */

        if (newPosts.length > 0) {
          try {
            await sendUniversityPush(
              university.id,
              scraper.universitySlug,
              newPosts.map((post) => ({
                title: post.title,
                url: post.url,
              })),
            );
          } catch (pushError) {
            console.error(`[${scraper.universitySlug}] push error`, pushError);
          }
        }

        /* =====================================================
         * 10. 결과
         * ===================================================== */

        results[scraper.universitySlug] = {
          count: rows.length,
          newCount: newPosts.length,
        };
      } catch (scraperError: unknown) {
        const message =
          scraperError instanceof Error
            ? scraperError.message
            : "Unknown error";

        console.error(`[${scraper.universitySlug}] failed`, scraperError);

        results[scraper.universitySlug] = {
          count: 0,
          newCount: 0,
          error: message,
        };
      } finally {
        if (page) {
          await page.close();
        }
      }
    }

    return NextResponse.json({
      message: "Success",
      results,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown scraping error";

    console.error("[Scraping Error]", error);

    return NextResponse.json({ error: message }, { status: 500 });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
