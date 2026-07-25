# UYOU Typography
Version: 1.0
Last Updated: 2026-07-26

관련 문서: [design-system.md](./design-system.md), [colors.md](./colors.md)

---

# 개요
UYOU는 한국어와 영어(및 추후 다국어)를 함께 다루는 서비스이므로,
한글과 라틴 문자 모두 가독성이 좋은 폰트를 기준으로 타이포그래피 시스템을 정의합니다.

---

# 사용 규칙 (중요)
- 정의된 Type Scale 외의 임의 font-size를 사용하지 않습니다.
- 한 화면에서 폰트 굵기(weight)는 최대 3단계까지만 사용합니다.
- 본문 텍스트에는 `text-tertiary` 색상을 사용하지 않습니다. (colors.md 참조)

---

# Font Family

| Token | 값 | 용도 |
|---|---|---|
| `--font-sans` | `Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | 기본 폰트 (한글 + 영문 전체) |

**Pretendard를 기본 폰트로 채택한 이유**
- 한글과 라틴 문자(영문/숫자)를 하나의 폰트 안에서 자연스럽게 함께 표기할 수 있음
- 오픈소스로 라이선스 비용 없이 상업적 사용 가능
- Toss, 당근마켓 등 국내 서비스에서 검증된 가독성
- Variable font 형태로 제공되어 weight 전환 시 파일 용량 부담이 적음

> 추후 베트남어, 중국어 등 추가 언어를 지원할 경우, 해당 언어의 폰트 폴백을 이 문서에 추가합니다. (예: 중국어 지원 시 `"Noto Sans SC"` 폴백 추가)

---

# Font Weight

| Token | Value | 용도 |
|---|---|---|
| `--font-regular` | 400 | 본문 텍스트 |
| `--font-medium` | 500 | 강조가 필요한 본문, 라벨 |
| `--font-semibold` | 600 | 소제목, 버튼 텍스트 |
| `--font-bold` | 700 | 제목(Heading) |

> 한 화면 안에서는 위 4단계 중 최대 3단계까지만 사용합니다. (예: regular / semibold / bold)

---

# Type Scale

Mobile 기준 크기이며, Desktop에서는 Heading 계열만 한 단계 확대합니다. (아래 "반응형 규칙" 참조)

| Token | Size | Line Height | Weight | 용도 |
|---|---|---|---|---|
| `--text-display` | 32px | 40px | Bold (700) | 페이지 최상단 히어로 타이틀 |
| `--text-h1` | 28px | 36px | Bold (700) | 페이지 타이틀 |
| `--text-h2` | 24px | 32px | Bold (700) | 섹션 타이틀 |
| `--text-h3` | 20px | 28px | Semibold (600) | 카드 타이틀, 서브 섹션 |
| `--text-h4` | 18px | 26px | Semibold (600) | 리스트 아이템 타이틀 |
| `--text-body-lg` | 16px | 24px | Regular (400) | 본문 (기본) |
| `--text-body-md` | 14px | 22px | Regular (400) | 보조 본문, 카드 설명 |
| `--text-body-sm` | 13px | 20px | Regular (400) | 캡션, 메타 정보 |
| `--text-label` | 14px | 20px | Medium (500) | 버튼, 폼 라벨, 탭 |
| `--text-caption` | 12px | 16px | Regular (400) | 타임스탬프, 보조 설명 |

> `--text-body-sm`과 `--text-caption`은 `--color-text-tertiary`와 함께 쓰더라도 정보 전달용 본문에는 사용하지 않습니다. (대비 부족, colors.md 참조)

---

# 반응형 규칙

Mobile First 원칙에 따라 Body/Label/Caption 크기는 breakpoint와 관계없이 고정합니다.
Heading 계열(`display`, `h1`, `h2`)만 Desktop에서 한 단계 확대합니다.

| Token | Mobile | Desktop (lg 이상) |
|---|---|---|
| `--text-display` | 32px | 40px |
| `--text-h1` | 28px | 32px |
| `--text-h2` | 24px | 28px |
| `--text-h3` ~ `--text-caption` | 동일 | 동일 |

> 본문 텍스트 크기를 화면 크기에 따라 키우지 않습니다. 가독성 있는 최소 크기(14~16px)를 화면 크기와 무관하게 유지하는 것이 원칙입니다.

---

# Letter Spacing

| Token | Value | 용도 |
|---|---|---|
| `--tracking-tight` | -0.02em | Heading 계열 (display, h1, h2) |
| `--tracking-normal` | 0em | 본문, 라벨, 캡션 |

> 한글은 라틴 문자보다 자간 조정에 민감하므로, 본문에는 자간을 조정하지 않습니다.

---

# 사용 예시 가이드

**페이지 타이틀**
- `--text-h1` + `--font-bold` + `--color-text-primary`

**카드 타이틀 + 설명**
- 타이틀: `--text-h3` + `--font-semibold` + `--color-text-primary`
- 설명: `--text-body-md` + `--font-regular` + `--color-text-secondary`

**버튼 텍스트**
- `--text-label` + `--font-semibold`

**폼 라벨 / 에러 메시지**
- 라벨: `--text-label` + `--color-text-primary`
- 에러 메시지: `--text-body-sm` + `--color-error` (colors.md 참조)

**리스트 아이템 (예: 대학 카드)**
- 학교명: `--text-h4` + `--font-semibold`
- 부가 정보(지역, 학과 수 등): `--text-body-sm` + `--color-text-secondary`
- 메타 정보(업데이트일 등): `--text-caption` + `--color-text-tertiary`

---

# 하지 않는 것 (Anti-pattern)
- Type Scale에 없는 임의 font-size를 사용하지 않는다. (예: `15px`, `21px`)
- 한 화면에서 4단계 이상의 font-weight를 사용하지 않는다.
- 본문 텍스트를 Desktop이라고 해서 임의로 키우지 않는다.
- `text-tertiary` 색상을 본문/중요 정보에 사용하지 않는다.
- 강조를 위해 밑줄이나 이탤릭을 남용하지 않는다. (weight와 color 조합으로 강조 표현)
- 한글에 과도한 letter-spacing을 적용하지 않는다.

---

# Changelog
- v1.0 (2026-07-26): Pretendard 기반 Type Scale, Weight, Letter Spacing, 반응형 규칙 최초 작성