import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

function normalizeDate(dateText: string): string | null {
  const match = dateText.match(/(\d{4})[./-](\d{1,2})[./-](\d{1,2})/);
  if (!match) {
    return null;
  }

  const [, year, month, day] = match;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

async function run(page: Page): Promise<ScrapedPost[]> {
  const url = "https://oia.gachon.ac.kr/international/a/m/graduateInfo.do";

  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  await page.waitForSelector("#admissioninfo", { timeout: 30000 });
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const rawPosts = await page.evaluate(() => {
    const baseUrl = "https://oia.gachon.ac.kr";
    const items = Array.from(document.querySelectorAll("#admissioninfo ul li"));

    return items
      .map((li) => {
        const p = li.querySelector(".col_3 p");
        const title = p?.childNodes[0]?.textContent?.trim() || "입학 정보";
        const dateText = li.querySelector(".col_5")?.textContent?.trim() || "";

        const onclick = p?.getAttribute("onclick") || "";
        const match = onclick.match(/fnGoBoardDetail\('([^']+)',\s*'([^']+)'\)/);
        const postUrl = match ? `${baseUrl}${match[1]}?borKey=${match[2]}` : "";

        return { title, dateText, postUrl };
      })
      .filter((post) => post.postUrl !== "");
  });

  return rawPosts.map(({ title, dateText, postUrl }) => ({
    title,
    url: postUrl,
    publishedAt: normalizeDate(dateText),
  }));
}

export const gachonScraper: Scraper = {
  universitySlug: "gachon-university",
  run,
};