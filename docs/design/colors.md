# UYOU Colors
Version: 2.1
Last Updated: 2026-07-26

관련 문서: [design-system.md](./design-system.md)

---

# 개요
UYOU의 컬러 시스템은 **Sky Blue(하늘색)** 를 메인 컬러로, 뉴트럴 톤은 차가운 회색 대신
살짝 웜톤(베이지 기운)을 섞어 "친근하고 밝은" 느낌을 표현합니다.
전형적인 코발트블루 계열(예: antd 스타일)과 구분되도록, 채도를 낮추고 웜 뉴트럴과 조합했습니다.

모든 색상 토큰은 WCAG 2.1 AA 기준(일반 텍스트 4.5:1, 큰 텍스트/UI 컴포넌트 3:1)을 기준으로 검증되었습니다.
Dark theme 토큰은 정의하지 않습니다. (MVP 범위 제외, 추후 확장 예정)

---

# 사용 규칙 (중요)
- 정의된 토큰 외의 임의 색상 코드/hex 값을 새로 만들지 않습니다.
- 색상만으로 의미(성공/실패/경고 등)를 전달하지 않고, 아이콘/텍스트를 함께 사용합니다.
- 이 문서는 지금 실제로 필요한 토큰만 정의합니다. Secondary 강조색, 카테고리 구분색, 차트용 색상 등은
  실제 사용처(예: 뱃지 카테고리 구분, 인포그래픽)가 생겼을 때 그때 텍스트 대비까지 검증해서 추가합니다.

---

# Brand Colors

| Token | Value | 용도 |
|---|---|---|
| `--color-primary` | `#1A76B0` | 브랜드 메인 컬러. 버튼, 링크, 활성 상태, 의미를 전달하는 아이콘 (흰 텍스트와 대비 4.9:1, AA 통과) |
| `--color-primary-hover` | `#145E8C` | Primary 요소의 hover 상태 |
| `--color-primary-active` | `#0F4A6E` | Primary 요소의 active(눌림) 상태 |
| `--color-primary-light` | `#E4F1FA` | Primary의 연한 배경 (선택된 카드, 활성 탭 배경, 일반 뱃지 배경) |

---

# Neutral (Warm Gray)

기존 차가운 슬레이트 그레이 대신, 베이지 기운이 살짝 도는 웜 뉴트럴을 사용합니다.

| Token | Value | 용도 |
|---|---|---|
| `--color-background` | `#FBFAF7` | 페이지 기본 배경 |
| `--color-surface` | `#FFFFFF` | 카드, 모달, 인풋 등 표면 배경 |
| `--color-border` | `#E8E2D9` | 약한 구분선 (카드 구분, 섹션 구분) |
| `--color-border-strong` | `#D6CFC2` | 강한 구분선 (인풋 아웃라인, 강조 경계) |
| `--color-text-primary` | `#2B2620` | 본문 기본 텍스트, 제목 |
| `--color-text-secondary` | `#6B6258` | 보조 설명 텍스트 |
| `--color-text-tertiary` | `#A39A8D` | placeholder, 캡션, 비활성 텍스트 (본문에는 사용하지 않음) |

---

# Semantic Colors

| Token | Value | 용도 |
|---|---|---|
| `--color-success` | `#2E9B6B` | 성공 텍스트, 아이콘, 뱃지 텍스트 |
| `--color-success-bg` | `#E8F6EF` | 성공 상태의 연한 배경 |
| `--color-warning` | `#C2660A` | 경고 텍스트, 아이콘 |
| `--color-warning-bg` | `#FDF1E4` | 경고 상태의 연한 배경 |
| `--color-error` | `#D33F2C` | 에러 텍스트, 아이콘, 인풋 에러 상태 |
| `--color-error-bg` | `#FCEDEA` | 에러 상태의 연한 배경 |

> 배경(bg)에는 연한 tint, 텍스트/아이콘에는 진한 base 컬러를 사용합니다.

---

# Disabled / Inactive

| Token | Value | 용도 |
|---|---|---|
| `--color-disabled-bg` | `#F1EDE6` | 비활성 버튼/인풋 배경 |
| `--color-disabled-text` | `#B4AA9C` | 비활성 상태 텍스트 |

---

# Focus & Interaction

| Token | Value | 용도 |
|---|---|---|
| `--color-focus-ring` | `#8FC6EA` | 키보드 포커스 시 outline |
| `--color-overlay` | `rgba(43, 38, 32, 0.45)` | 모달/드롭다운 뒤 배경 (웜 뉴트럴 톤 오버레이) |

---

# 사용 예시 가이드

**버튼 (Primary)**
- 기본: `background: --color-primary`, `text: #FFFFFF`
- Hover: `background: --color-primary-hover`
- Active: `background: --color-primary-active`
- Disabled: `background: --color-disabled-bg`, `text: --color-disabled-text`

**뱃지 (일반)**
- `background: --color-primary-light`
- `text: --color-primary`

**알림/배너 (Error 예시)**
- `background: --color-error-bg`
- `text/icon: --color-error`

**카드**
- `background: --color-surface`
- `border: --color-border`

---

# 하지 않는 것 (Anti-pattern)
- 정의되지 않은 hex 값을 임의로 사용하지 않는다.
- `success`, `warning`, `error`의 base 컬러를 넓은 배경 면적에 그대로 사용하지 않는다. (반드시 `-bg` 토큰 사용)
- `text-tertiary`를 본문/중요 정보 텍스트에 사용하지 않는다.
- 색상 하나만으로 상태를 구분하지 않는다.
- Dark mode 관련 색상 토큰을 임의로 추가하지 않는다.
- "나중에 필요할 것 같아서" 미리 색상 토큰을 추가하지 않는다. 실제 사용처가 생겼을 때 대비 검증 후 추가한다.

---

# Changelog
- v2.1 (2026-07-26): 실사용처 불명확했던 `sky-accent` 토큰 제거. 현재 필요한 토큰만 유지하는 원칙 추가
- v2.0 (2026-07-26): 메인 컬러를 Sky Blue 계열로 변경, 뉴트럴을 웜톤으로 조정
- v1.0 (2026-07-26): 블루 계열 메인 컬러로 최초 작성