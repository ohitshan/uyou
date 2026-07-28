import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const BASE_URL = "https://admission-global.skku.edu";
const LIST_URL =
  "https://admission-global.skku.edu/chn/etc/bbs_list.html?bbsid=global_notice_re_chn&ctg_cd=&mode=list";

function normalizeDate(dateText: string): string | null {
  const match = dateText.match(/(\d{4})[./-](\d{1,2})[./-](\d{1,2})/);
  if (!match) {
    return null;
  }

  const [, year, month, day] = match;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

async function run(page: Page): Promise<ScrapedPost[]> {
  await page.goto(LIST_URL, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("ul.list li", { timeout: 30000 });

  const rawPosts = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll("ul.list li"));

    return items
      .map((li) => {
        const anchor = li.querySelector("p.bbsTit a");
        const title = (anchor?.textContent || "").replace(/\s+/g, " ").trim();
        const href = anchor?.getAttribute("href") || "";

        const dateText = li.querySelector(".dateHit .date")?.textContent?.trim() || "";

        return { title, href, dateText };
      })
      .filter((post) => post.href !== "" && post.title !== "");
  });

  return rawPosts.map(({ title, href, dateText }) => ({
    title,
    url: href.startsWith("http") ? href : `${BASE_URL}${href}`,
    publishedAt: normalizeDate(dateText),
  }));
}

export const sungkyunkwanScraper: Scraper = {
  universitySlug: "sungkyunkwan-university",
  run,
};