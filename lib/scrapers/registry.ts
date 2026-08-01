import type { Scraper } from "./types";
import { gachonScraper } from "./gachon";
import { sejongScraper } from "./sejong";
import { chungangScraper } from "./chungang";
import { hanyangScraper } from "./hanyang";
import { sogangScraper } from "./sogang";
import { sungkyunkwanScraper } from "./sungkyunkwan";
import { kyungheeScraper } from "./kyunghee";
import { yonseiScraper } from "./yonsei";
import { hufsScraper } from "./hufs";
import { uosScraper } from "./uos";
import { donggukScraper } from "./dongguk";
import { hanyangEricaScraper } from "./hanyang-erica";
import { soongsilScraper } from "./soongsil";
import { konkukScraper } from "./konkuk";
import { hongikScraper } from "./hongik";
/**
 * 새 대학 스크래퍼를 추가할 때:
 * 1. lib/scrapers/{slug}.ts 파일 작성 (gachon.ts, sejong.ts, cau.ts 참고)
 * 2. 여기 import 후 배열에 추가
 */
export const scrapers: Scraper[] = [
  gachonScraper,
  sejongScraper,
  chungangScraper,
  hanyangScraper,
  sogangScraper,
  sungkyunkwanScraper,
  kyungheeScraper,
  yonseiScraper,
  hufsScraper,
  uosScraper,
  donggukScraper,
  hanyangEricaScraper,
  soongsilScraper,
  konkukScraper,
  hongikScraper,
];
