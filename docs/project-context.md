# UYOU 프로젝트 컨텍스트

> AI 보조 개발을 위한 기준 문서입니다.
>
> 이 문서는 UYOU 프로젝트의 중요한 아키텍처, 컨벤션, 제약 사항을 설명합니다.
>
> 이 문서는 소스코드 전체를 완전히 대체하지 않습니다.
> **항상 실제 소스코드를 최종 기준(Source of Truth)으로 간주하세요.**
>
> 중요한 아키텍처/동작/프로젝트 제약이 변경될 때만 문서를 갱신합니다.

---

## 1. 프로젝트 개요

UYOU는 다음 기술 스택을 사용하는 Next.js 웹 애플리케이션입니다.

- Next.js App Router
- TypeScript
- Supabase
- next-intl
- ISR
- PWA / Service Worker
- Locale 기반 라우팅

지원 로케일:

- `ko`
- `en`
- `my`

---

## 2. Next.js 렌더링 / 데이터 아키텍처

### 기본 원칙

메인 페이지 데이터는 **Server Component**에서 Supabase로 조회합니다.

Client Component는 원칙적으로 서버에서 조회한 데이터를 props로 전달받아 사용합니다.

특별한 요구사항이 없는 한, 클라이언트 측 추가 데이터 페칭/캐싱
(SWR, React Query, 브라우저에서 Supabase 직접 조회 등)은 지양합니다.

### ISR

메인 로케일 페이지는 다음 설정을 사용합니다.

```ts
export const revalidate = 3600;
```

즉, 페이지 단위 서버 출력은 1시간 주기로 재생성됩니다.

### 현재 예외

일부 인터랙티브 기능(예: 검색 UI)에서는 클라이언트 쿼리를 사용합니다.
이는 기본 전략이 아니라 예외적 사용입니다.

---

## 3. i18n 라우팅

- 로케일 라우팅은 `next-intl`로 관리합니다.
- 라우팅 설정 파일: `i18n/routing.ts`
- 미들웨어 파일: `proxy.ts`
- 미들웨어 matcher 제외 경로:
  - `/api`
  - `/_next`
  - `/pwa`
  - 정적 파일 경로

`/pwa`는 설치형 앱 진입 로직을 위해 locale 미들웨어에서 의도적으로 제외합니다.

---

## 4. PWA / Service Worker

### Manifest

- 파일: `app/manifest.ts`
- 현재 주요 값:
  - `name`: `UYOU`
  - `short_name`: `UYOU`
  - `start_url`: `/pwa`
  - `scope`: `/`
  - `display`: `standalone`

### 서비스워커 연결 지점

- SW 파일: `public/sw.js`
- 등록 컴포넌트: `components/service-worker-register.tsx`
- 등록 위치: `app/[locale]/layout.tsx`

### 서비스워커 캐시 정책 (현재)

- same-origin `GET` 요청만 처리
- `/api/*`는 SW 처리 제외
- `/_next/static/*` (immutable 청크): **Cache First**
- `navigate` 요청(HTML 페이지): **Network First**
  - `content-type`에 `text/html`이 포함된 성공 응답만 캐시 저장
  - 오프라인 fallback: 요청 페이지 캐시 우선, 없으면 `/`
- non-navigation 요청(RSC/내부 fetch/기타 에셋):
  - Network First 동작
  - HTML fallback 강제 대체 없음

---

## 5. Supabase / 콘텐츠 데이터 메모

- 대학 콘텐츠 데이터는 Supabase에 저장합니다.
- `url` 유니크 + upsert 기반 적재가 중복 방지의 핵심 규칙입니다.
- 정렬은 `posted_at` 우선, 필요 시 `created_at` fallback으로 안정적인 최신순을 유지합니다.

---

## 6. 운영 보안 컨벤션

- 쓰기성 API는 시크릿이 설정된 경우 토큰으로 보호합니다.
  - `/api/scrape`는 `CRON_SECRET`(Bearer) 사용
  - `/api/clear`는 `ADMIN_API_SECRET`(Bearer) 사용
- 서버 Supabase 키 우선순위:
  - `SUPABASE_SERVICE_ROLE_KEY` 우선
  - 필요 시에만 `NEXT_PUBLIC_SUPABASE_ANON_KEY` fallback

---

## 7. UI / 레이아웃 컨벤션

- Root Layout에서 페이지를 중앙 정렬하고 max width 제약을 유지합니다.
- 간격/크기는 4px 또는 6px 배수 가이드를 따릅니다.
- 기본 UI 구현 방식은 Tailwind 기반 반응형입니다.
