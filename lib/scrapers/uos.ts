import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const BASE_URL = "https://oia.uos.ac.kr";

const LIST_URL = "https://oia.uos.ac.kr/oia/web/bbs/oia_adn01/list";

function normalizeDate(dateText: string): string | null {
  const match = dateText.match(/(\d{4})-(\d{2})-(\d{2})/);

  if (!match) {
    return null;
  }

  return `${match[1]}-${match[2]}-${match[3]}`;
}

async function run(page: Page): Promise<ScrapedPost[]> {
  await page.goto(LIST_URL, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await page.waitForSelector("ul.brd-lstp1 > li", {
    timeout: 30000,
  });

  const rawPosts = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("ul.brd-lstp1 > li"))
      .map((item) => {
        const anchor = item.querySelector(".ti a");

        const title = anchor?.textContent?.replace(/\s+/g, " ").trim() ?? "";

        const href = anchor?.getAttribute("href") ?? "";

        const dateText =
          item
            .querySelector(".da p:nth-of-type(2) span:last-child")
            ?.textContent?.trim() ?? "";

        return {
          title,
          href,
          dateText,
        };
      })
      .filter((post) => post.title && post.href);
  });

  return rawPosts.map(({ title, href, dateText }) => ({
    title,
    url: href.startsWith("http") ? href : `${BASE_URL}${href}`,
    publishedAt: normalizeDate(dateText),
  }));
}

export const uosScraper: Scraper = {
  universitySlug: "university-of-seoul",
  run,
};
