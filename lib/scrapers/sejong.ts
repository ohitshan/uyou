import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const LIST_URL = "https://ipsi.sejong.ac.kr/ipsi/overseas/notice.do";

function normalizeDate(dateText: string): string | null {
  const match = dateText.match(/(\d{4})[./-](\d{1,2})[./-](\d{1,2})/);

  if (!match) {
    return null;
  }

  const [, year, month, day] = match;

  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

async function run(page: Page): Promise<ScrapedPost[]> {
  await page.goto(LIST_URL, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await page.waitForSelector("tbody > tr", {
    timeout: 30000,
  });

  const rawPosts = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll("tbody > tr"));

    return rows
      .map((row) => {
        const titleAnchor = row.querySelector(
          ".b-td-title .b-title-box > a",
        ) as HTMLAnchorElement | null;

        const title =
          titleAnchor?.querySelector(".b-title")?.textContent?.trim() || "";

        const href = titleAnchor?.getAttribute("href") || "";

        const dateText =
          row.querySelector(".b-date")?.textContent?.trim() || "";

        return {
          title,
          href,
          dateText,
        };
      })
      .filter((post) => post.title !== "" && post.href !== "");
  });

  return rawPosts.map(({ title, href, dateText }) => ({
    title,
    url: href.startsWith("http") ? href : `${LIST_URL}${href}`,
    publishedAt: normalizeDate(dateText),
  }));
}

export const sejongScraper: Scraper = {
  universitySlug: "sejong-university",
  run,
};
