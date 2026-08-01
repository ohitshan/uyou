import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const LIST_URL = "https://iadmission.dongguk.edu/dkglobal5_5";
const TARGET_URL = "https://iadmission.dongguk.edu/dkglobal3_3/1";

async function run(page: Page): Promise<ScrapedPost[]> {
  await page.goto(LIST_URL, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await page.waitForSelector(".board-list-content .board-list-body", {
    timeout: 30000,
  });

  const rawPosts = await page.evaluate(() => {
    const rows = Array.from(
      document.querySelectorAll(".board-list-content li.board-list-body"),
    );

    return rows
      .map((row) => {
        const title = (row.querySelector(".bo_tit")?.textContent || "")
          .replace(/\s+/g, " ")
          .trim();

        return {
          title,
        };
      })
      .filter((post) => post.title !== "");
  });

  const uniquePosts = Array.from(
    new Map(rawPosts.map((post) => [post.title, post])).values(),
  );

  return uniquePosts.map(({ title }) => ({
    title,
    // 상세 permalink가 없어도 upsert 충돌을 피하기 위해 제목 기반 fragment를 부여
    // fragment는 서버로 전송되지 않아 실제 이동은 TARGET_URL 페이지로 동일함.
    url: `${TARGET_URL}#${encodeURIComponent(title.slice(0, 100))}`,
    publishedAt: null,
  }));
}

export const donggukScraper: Scraper = {
  universitySlug: "dongguk-university",
  run,
};
