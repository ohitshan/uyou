import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // 지원 언어 목록. 나중에 중국어 등 추가할 땐 여기 배열에 한 줄만 추가하면 됨.
  locales: ["ko", "en"],
  defaultLocale: "ko",
});