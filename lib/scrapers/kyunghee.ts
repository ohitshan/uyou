import type { Page } from "puppeteer-core";
import type { Scraper, ScrapedPost } from "./types";

const LIST_URL =
  "https://com.khu.ac.kr/gglobalcenter/user/bbs/BMSR00040/list.do?menuNo=8000023";

// 이 게시판은 상세보기가 POST + Referer + 세션 체크 방식이라
// 개별 게시물에 대한 공유 가능한 permalink가 없음.
// 그래서 모든 게시물의 url을 목록 페이지로 통일함.
// (사용자는 목록 페이지에서 제목으로 직접 찾아야 함)

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
  await page.waitForSelector(".bbs_tbl-st1 table tbody tr", { timeout: 30000 });

  const rawPosts = await page.evaluate(() => {
    const rows = Array.from(
      document.querySelectorAll(".bbs_tbl-st1 table tbody tr")
    );

    return rows
      .map((row) => {
        const titleCell = row.querySelector("td.tal a");
        const title = (titleCell?.textContent || "").replace(/\s+/g, " ").trim();

        // 날짜는 마지막 td
        const cells = row.querySelectorAll("td");
        const dateText = cells[cells.length - 1]?.textContent?.trim() || "";

        return { title, dateText };
      })
      .filter((post) => post.title !== "");
  });

  // 같은 페이지 안에서 제목이 완전히 동일한 항목(예: 공지 중복 노출)은
  // 하나로 합침. index를 fragment에 넣으면 다음 크롤링 때 순서가 밀려
  // 같은 게시물이 매번 다른 url로 인식되어 중복 저장되므로 사용하지 않음.
  const uniquePosts = Array.from(
    new Map(rawPosts.map((post) => [post.title, post])).values()
  );

  return uniquePosts.map(({ title, dateText }) => ({
    title,
    // 개별 permalink가 없어서 목록 페이지로 통일하되,
    // (university_id, url) unique 제약과 충돌하지 않도록
    // 제목 기반 fragment(#...)를 붙여 게시물마다 값을 다르게 만듦.
    // fragment는 서버로 전송되지 않으므로 실제 이동 결과는 항상 목록 페이지 그대로임.
    // 주의: 인코딩 후 자르면 한글이 %EC%95%88처럼 늘어나서 실제로는
    // 몇 글자 안 남고 잘려 서로 다른 제목이 충돌할 수 있음.
    // 반드시 원본 문자열 기준으로 먼저 자른 뒤 인코딩해야 함.
    url: `${LIST_URL}#${encodeURIComponent(title.slice(0, 100))}`,
    publishedAt: normalizeDate(dateText),
  }));
}

export const kyungheeScraper: Scraper = {
  universitySlug: "kyunghee-university",
  run,
};