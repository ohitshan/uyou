import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const BASE_URL = "https://ipsi.sejong.ac.kr";
const LIST_URL =
  "https://ipsi.sejong.ac.kr/sub_page/sub3/0106_list.asp?tab1=3&B_CODE=BOARD_1455878015&B_CATEGORY=3";

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
  await page.waitForSelector(".board_list1 ul li", { timeout: 30000 });

  const rawPosts = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll(".board_list1 ul li"));

    return items
      .map((li) => {
        const titleAnchor = li.querySelector(".summary dl dt a");
        const title = titleAnchor?.textContent?.trim() || "";
        const href = titleAnchor?.getAttribute("href") || "";

        // dd 안의 첫 번째 span이 "등록일_YYYY.MM.DD" 형태
        const dateSpan = li.querySelector(".summary dl dd span");
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

export const sejongScraper: Scraper = {
  universitySlug: "sejong-university",
  run,
};