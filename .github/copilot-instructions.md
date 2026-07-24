# Copilot 작업 지침 (`uyou`)

## 빌드/실행/린트 명령어
- 의존성 설치: `pnpm install`
- 개발 서버: `pnpm dev`
- 프로덕션 빌드: `pnpm build`
- 프로덕션 실행: `pnpm start`
- 린트: `pnpm lint`

## 테스트 명령어
- 현재 `package.json`에 테스트 스크립트가 없고, 저장소에 `*.test.*`/`*.spec.*` 파일도 없습니다.
- 단일 테스트 실행 명령어는 현재 구성에서 제공되지 않습니다.

## 아키텍처 개요
- **기본 구조**: Next.js App Router(`app/`) + TypeScript + Tailwind CSS v4 + shadcn/ui 조합입니다.
- **데이터 저장소**: Supabase `public.university_info` 테이블(`schema.sql`)에 크롤링 게시글을 저장하며, `url`이 고유키(UNIQUE)입니다.
- **메인 페이지 흐름**:
  - `app/page.tsx`는 ISR(`revalidate = 3600`)을 사용하는 Server Component입니다.
  - Supabase에서 `university_name` 목록을 조회해 `components/UniversityListContent.tsx`로 전달합니다.
  - `UniversityListContent`는 Client Component이며, 대학 카드를 `/detail/[university_id]` 링크로 렌더링합니다.
- **API 계층** (`app/api/*`):
  - `/api/scrape`: Puppeteer 기반 크롤러. macOS에서는 로컬 Chrome, 그 외 환경에서는 `@sparticuz/chromium` 사용. 가천대 OIA 페이지를 수집해 Supabase에 적재합니다.
  - `/api/universities`: `university_info` 전체 조회 후 `content` 문자열에서 날짜를 추출해 정렬합니다.
  - `/api/count`: `university_info` 전체 건수 반환.
  - `/api/clear`: `university_info` 데이터 전체 삭제.
- **주기 실행**: `vercel.json`의 cron 설정으로 `/api/scrape`를 주기 호출합니다.
- **클라이언트 데이터 계층**:
  - `components/providers.tsx`에서 React Query Provider를 전역 적용합니다.
  - `hooks/useUniversities.ts`에서 `/api/universities`를 React Query로 조회합니다.
  - `store/useUniversityStore.ts`에 Zustand 상태 저장소가 정의되어 있습니다.

## 이 저장소의 핵심 관례
- **패키지 매니저**: `pnpm` 기준으로 명령어를 사용합니다.
- **레이아웃 규칙**: 모든 페이지는 RootLayout(`app/layout.tsx`)에서 `max-width: 1920px`, 가운데 정렬을 유지합니다.
- **간격 규칙**: 마진/패딩/크기는 4px 또는 6px 배수를 사용합니다.
- **디자인 기준 문서**: `docs/design/main-page.md`, `DESIGN.md`를 우선 기준으로 따릅니다.
- **앱 디렉토리 규칙**: `app/GEMINI.md`의 지침(반응형, Tailwind 기반 UI, 일관된 간격)을 준수합니다.
- **경로 별칭**: `tsconfig.json`의 `@/*` 별칭 import를 우선 사용합니다.
- **Supabase 환경변수**: `lib/supabase.ts`에서 `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`를 사용합니다.
- **스타일링 구성**: `app/globals.css`에서 Tailwind v4 + `tw-animate-css` + shadcn 스타일 import를 통합 관리합니다.
