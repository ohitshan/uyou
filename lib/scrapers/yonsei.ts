import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const BASE_URL =
  "https://admission.yonsei.ac.kr/seoul/admission/html/international/";
const LIST_URL =
  "https://admission.yonsei.ac.kr/seoul/admission/html/international/notice.asp?s_type=TYPE5&s_code=BBS_SUBJECT&s_data=&s_page=1";

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
  await page.waitForSelector("table.bList tbody tr", { timeout: 30000 });

  const rawPosts = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll("table.bList tbody tr"));

    return rows
      .map((row) => {
        const anchor = row.querySelector("td.subject a");
        const titleSpan = anchor?.querySelector(".tit");
        const title = (titleSpan?.textContent || "")
          .replace(/\s+/g, " ")
          .trim();

        const href = anchor?.getAttribute("href") || "";

        const dateSpan = anchor?.querySelector(".date");
        const dateText = dateSpan?.textContent?.trim() || "";

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

export const yonseiScraper: Scraper = {
  universitySlug: "yonsei-university",
  run,
};
