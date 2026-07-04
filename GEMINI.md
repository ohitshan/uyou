# 프로젝트 : 유학정보 관련 앱

## 1. 개요
* 한국에서 공부를 희망하는 유학생들을 위해 대학 및 대학 어학원 정보를 얻을 수 있는 서비스

## 2. 기술 스택
* Frontend: Next.js (App Router), Tailwind CSS , shadcn/ui, react-query
* State Management : Zustand
* Language: TypeScript
* Linting: ESLint
* Package Manager: pnpm

## 3. 핵심 기능 (Features)
* **대학/어학원 정보 조회**: 국내 주요 대학 및 어학원의 코스 정보, 모집 요강, 학비 등을 열람.
* **통합 게시판 및 정보 피드**: 각 대학 공지사항과 유학 관련 최신 뉴스를 한곳에서 확인.


## 4. 데이터 수집 및 업데이트 방식 (중요)
각 대학 및 어학원 공식 웹사이트 게시판을 크롤링하여 데이터를 자동 업데이트합니다.

* **수집 방식 (Data Ingestion)**
  - Next.js API Routes 또는 별도의 Cron Job 스크립트를 사용하여 대학 공지사항 게시판을 주기적으로 파싱(Scraping)합니다.
  - 보안 및 봇 차단 우회를 위해 헤드리스 브라우저 환경(Puppeteer 또는 Playwright)이나 경량 크롤러 라이브러리(Cheerio)를 백엔드 단에서 활용합니다.
* **업데이트 주기 (Sync Schedule)**
  - 대학별 학사 일정 및 어학원 공지 빈도를 고려하여 **매일 새벽 2시(KST)**에 크롤링 스크립트를 실행해 데이터베이스를 갱신합니다.
* **데이터 관리 방식**
  - 게시판의 고유 글 번호, URL, 제목, 작성일, 본문 텍스트를 구조화하여 저장합니다.
  - 중복 수집을 방지하기 위해 게시글 URL 또는 고유 ID를 고유키(Unique Key)로 검증합니다.

## 빌드 및 실행

이 프로젝트는 `pnpm`을 패키지 매니저로 사용합니다.

- **개발:** `pnpm dev`
- **빌드:** `pnpm build`
- **시작:** `pnpm start`
- **린트:** `pnpm lint`

## 개발 관례

- **언어:** TypeScript
- **프레임워크:** Next.js (App Router)
- **스타일링:** Tailwind CSS
- **린트:** ESLint
- **패키지 매니저:** pnpm
- **레이아웃:** 모든 페이지의 최대 너비(max-width)는 1920px로 제한하며, 화면 중앙에 정렬합니다. (RootLayout에서 적용)
