import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const LIST_URL =
  "https://oisa-admission.sogang.ac.kr/new/html/notice/notice.asp?s_cate=B010405";

function buildDetailUrl(idx: string): string {
  return `https://oisa-admission.sogang.ac.kr/new/html/notice/notice_view.asp?BOARD_IDX=${idx}&s_cate=B010405&page=1&s_code=BOARD_TITLE&s_data=`;
}

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
        const anchor = row.querySelector("td.subject .text a");
        const title = (anchor?.textContent || "").replace(/\s+/g, " ").trim();

        // onclick="viewData('1906')" 에서 게시물 번호만 추출
        const onclick = anchor?.getAttribute("onclick") || "";
        const idxMatch = onclick.match(/viewData\('(\d+)'\)/);
        const idx = idxMatch ? idxMatch[1] : "";

        const regText = row.querySelector("td.subject .text .reg")?.textContent || "";

        return { title, idx, regText };
      })
      .filter((post) => post.idx !== "" && post.title !== "");
  });

  return rawPosts.map(({ title, idx, regText }) => ({
    title,
    url: buildDetailUrl(idx),
    publishedAt: normalizeDate(regText),
  }));
}

export const sogangScraper: Scraper = {
  universitySlug: "sogang-university",
  run,
};