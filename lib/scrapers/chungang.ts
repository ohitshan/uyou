import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const BASE_URL = "https://oias.cau.ac.kr/cauoie/under/notice.do";

function normalizeDate(dateText: string): string | null {
  const match = dateText.match(/(\d{4})[./-](\d{1,2})[./-](\d{1,2})/);
  if (!match) {
    return null;
  }

  const [, year, month, day] = match;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

async function run(page: Page): Promise<ScrapedPost[]> {
  await page.goto(BASE_URL, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector(".b-list-common-wrap table tbody tr", {
    timeout: 30000,
  });

  const rawPosts = await page.evaluate(() => {
    const rows = Array.from(
      document.querySelectorAll(".b-list-common-wrap table tbody tr")
    );

    return rows
      .map((row) => {
        const anchor = row.querySelector("td.b-td-title .b-title-box a");
        const titleSpan = anchor?.querySelector(".b-title");
        // span 안에 개행/공백이 많아서 하나로 정리
        const title = (titleSpan?.textContent || "").replace(/\s+/g, " ").trim();

        const href = anchor?.getAttribute("href") || "";

        const dateSpan = row.querySelector(".b-m-con .b-date span");
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

export const chungangScraper: Scraper = {
  universitySlug: "chungang-university",
  run,
};