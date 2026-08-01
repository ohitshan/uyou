import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const LIST_URL =
  "https://studyerica.hanyang.ac.kr/bbs/board.php?bo_table=s4_2_1";

async function run(page: Page): Promise<ScrapedPost[]> {
  await page.goto(LIST_URL, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector(".table1 table tbody tr", { timeout: 30000 });

  const rawPosts = await page.evaluate(() => {
    const rows = Array.from(
      document.querySelectorAll(".table1 table tbody tr"),
    );

    return rows
      .map((row) => {
        const anchor = row.querySelector("td.left a");
        const title = (anchor?.textContent || "").replace(/\s+/g, " ").trim();
        const href = anchor?.getAttribute("href") || "";

        return { title, href };
      })
      .filter((post) => post.href !== "" && post.title !== "");
  });

  return rawPosts.map(({ title, href }) => ({
    title,
    url: href, // 이미 절대경로(https://...)로 되어있어 그대로 사용
    // 원본에 날짜가 "MM-DD"만 있고 연도가 없어 잘못된 연도를 추측하는 것보다
    // null로 두는 게 안전함 (예: "12-19"가 올해인지 작년인지 알 수 없음)
    publishedAt: null,
  }));
}

export const hanyangEricaScraper: Scraper = {
  universitySlug: "hanyang-erica-campus",
  run,
};
