import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const BASE_URL = "https://oia.hanyang.ac.kr";
const LIST_URL = "https://oia.hanyang.ac.kr/sub4_01";

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
  await page.waitForSelector("table.list_wrap tbody tr", { timeout: 30000 });

  const rawPosts = await page.evaluate(() => {
    const rows = Array.from(
      document.querySelectorAll("table.list_wrap tbody tr")
    );

    return rows
      .map((row) => {
        const anchor = row.querySelector("td.title a");
        const title = (anchor?.textContent || "").replace(/\s+/g, " ").trim();
        const href = anchor?.getAttribute("href") || "";

        const dateCell = row.querySelector("td.time");
        const dateText = dateCell?.textContent?.trim() || "";

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

export const hanyangScraper: Scraper = {
  universitySlug: "hanyang-university",
  run,
};