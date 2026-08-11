import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const BASE_URL = "https://international.hufs.ac.kr";
const LIST_URL =
  "https://international.hufs.ac.kr/international/14929/subview.do";

function normalizeDate(dateText: string): string | null {
  const match = dateText.match(/(\d{4})[./-](\d{1,2})[./-](\d{1,2})/);

  if (!match) {
    return null;
  }

  const [, year, month, day] = match;

  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function normalizeUrl(url: string): string {
  try {
    return new URL(url, BASE_URL).href;
  } catch {
    return url;
  }
}

async function run(page: Page): Promise<ScrapedPost[]> {
  await page.goto(LIST_URL, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await page.waitForSelector("table.board-table tbody tr", {
    timeout: 30000,
  });

  const rawPosts = await page.evaluate(() => {
    const rows = Array.from(
      document.querySelectorAll("table.board-table tbody tr"),
    );

    return rows
      .map((row) => {
        const anchor = row.querySelector("td.td-subject a");

        const title = (anchor?.textContent || "").replace(/\s+/g, " ").trim();

        const href = anchor?.getAttribute("href") || "";

        const dateText =
          row.querySelector("td.td-date")?.textContent?.trim() || "";

        return {
          title,
          href,
          dateText,
        };
      })
      .filter((post) => post.href !== "" && post.title !== "");
  });

  const posts: ScrapedPost[] = rawPosts.map(({ title, href, dateText }) => ({
    title,
    url: normalizeUrl(href),
    publishedAt: normalizeDate(dateText),
  }));

  // 고정 공지 + 일반 공지에 같은 게시글이 중복으로 노출될 수 있으므로
  // URL을 기준으로 중복 제거
  const uniquePosts = Array.from(
    new Map(posts.map((post) => [post.url, post])).values(),
  );

  return uniquePosts;
}

export const hufsScraper: Scraper = {
  universitySlug: "hankuk-university-of-foreign-studies",
  run,
};
