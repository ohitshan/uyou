import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const LIST_URL = "https://www.hongik.ac.kr/kr/admission/recruitment-is.do";

// 이 사이트는 날짜가 "YY.MM.DD" 2자리 연도 형식이라 20YY로 변환
function normalizeDate(dateText: string): string | null {
  const match = dateText.match(/(\d{2})\.(\d{2})\.(\d{2})/);
  if (!match) {
    return null;
  }

  const [, yy, month, day] = match;
  return `20${yy}-${month}-${day}`;
}

async function run(page: Page): Promise<ScrapedPost[]> {
  await page.goto(LIST_URL, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector(".b-list-box", { timeout: 30000 });

  const rawPosts = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll("li .b-list-box"));

    return items
      .map((box) => {
        const anchor = box.querySelector(".b-title-box a.b-title");
        const title =
          anchor?.getAttribute("title")?.trim() ||
          (anchor?.textContent || "").replace(/\s+/g, " ").trim();
        const href = anchor?.getAttribute("href") || "";

        const dateText =
          box.querySelector(".b-info-box .b-date span")?.textContent?.trim() ||
          "";

        return { title, href, dateText };
      })
      .filter((post) => post.href !== "" && post.title !== "");
  });

  return rawPosts.map(({ title, href, dateText }) => ({
    title,
    // href가 "?mode=view&..." 형태라 목록 URL 뒤에 그대로 붙임
    url: href.startsWith("http") ? href : `${LIST_URL}${href}`,
    publishedAt: normalizeDate(dateText),
  }));
}

export const hongikScraper: Scraper = {
  universitySlug: "hongik-university",
  run,
};
