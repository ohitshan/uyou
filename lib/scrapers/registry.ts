import type { Scraper } from "./types";
import { gachonScraper } from "./gachon";
import { sejongScraper } from "./sejong";
import { chungangScraper } from "./chungang";
import { hanyangScraper } from "./hanyang";

/**
 * 새 대학 스크래퍼를 추가할 때:
 * 1. lib/scrapers/{slug}.ts 파일 작성 (gachon.ts, sejong.ts, cau.ts 참고)
 * 2. 여기 import 후 배열에 추가
 */
export const scrapers: Scraper[] = [gachonScraper, sejongScraper, chungangScraper,hanyangScraper,];