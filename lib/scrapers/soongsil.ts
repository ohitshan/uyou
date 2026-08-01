import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const BASE_URL = "https://iphak.ssu.ac.kr/board/";
const LIST_URL =
  "https://iphak.ssu.ac.kr/board/notice_list.asp?page=1&srchoption=&keyword=&flag=7&page_no=1_7_1";

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
  await page.waitForSelector("li.tr .board_tit_box a.board_tit", {
    timeout: 30000,
  });

  const rawPosts = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll("li.tr"));

    return rows
      .map((row) => {
        const anchor = row.querySelector(".board_tit_box a.board_tit");
        const title = (anchor?.textContent || "").replace(/\s+/g, " ").trim();
        const href = anchor?.getAttribute("href") || "";

        // 헤더 행(No/제목/작성일/조회수)은 board_tit_box 자체가 없어 자연스럽게 걸러짐
        // 날짜는 직계 자식 div 중 3번째 (no, full_mo, 날짜, 조회수 순서)
        const directDivs = row.querySelectorAll(":scope > div");
        const dateText = directDivs[2]?.textContent?.trim() || "";

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

export const soongsilScraper: Scraper = {
  universitySlug: "soongsil-university",
  run,
};
