import type { Page } from "puppeteer-core";

export interface ScrapedPost {
  title: string;
  url: string;
  /** ISO 형식(YYYY-MM-DD) 문자열, 파싱 실패 시 null */
  publishedAt: string | null;
}

export interface Scraper {
  /** universities.slug 값과 정확히 일치해야 함 */
  universitySlug: string;
  /** 이미 열려있는 page를 받아서, 해당 대학 게시물 목록을 반환 */
  run: (page: Page) => Promise<ScrapedPost[]>;
}