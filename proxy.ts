import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // api, _next, 정적 파일 등은 제외하고 나머지 경로에만 적용
  matcher: ["/((?!api|_next|pwa|.*\\..*).*)"],
};
