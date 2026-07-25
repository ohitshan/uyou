# UYOU Spacing & Layout
Version: 1.0
Last Updated: 2026-07-26

관련 문서: [design-system.md](./design-system.md)

---

# 개요
UYOU는 Mobile First 원칙에 따라 여백, 레이아웃, Radius, Shadow의 기준을 정의합니다.
모든 수치는 4px 기준 배수 체계(4pt grid)를 사용하여 일관성을 유지합니다.

---

# 사용 규칙 (중요)
- 정의된 토큰 외의 임의 px 값(예: `13px`, `22px`)을 사용하지 않습니다.
- 여백은 반드시 아래 Spacing Scale 안에서만 선택합니다.
- 컴포넌트 내부 여백(padding)과 컴포넌트 간 여백(margin/gap)을 구분해서 사용합니다.

---

# Spacing Scale

4px를 기본 단위로 하는 배수 체계입니다. Tailwind의 기본 spacing 단위(1 = 4px)와 그대로 매핑됩니다.

| Token | Value | Tailwind | 용도 |
|---|---|---|---|
| `--space-1` | 4px | `1` | 아이콘과 텍스트 사이 최소 간격 |
| `--space-2` | 8px | `2` | 인풋 내부 padding, 좁은 요소 간 간격 |
| `--space-3` | 12px | `3` | 버튼 내부 padding, 작은 카드 padding |
| `--space-4` | 16px | `4` | 기본 컴포넌트 padding, 리스트 아이템 간격 |
| `--space-5` | 20px | `5` | 카드 내부 padding |
| `--space-6` | 24px | `6` | 섹션 내부 요소 간 간격 |
| `--space-8` | 32px | `8` | 섹션 간 간격 (모바일 기준) |
| `--space-10` | 40px | `10` | 섹션 간 간격 (태블릿 이상) |
| `--space-12` | 48px | `12` | 큰 섹션 구분, 페이지 상하 여백 |
| `--space-16` | 64px | `16` | 페이지 최상단/최하단 여백 (Desktop) |

> 5px 이하 미세 조정이 필요한 경우가 아니라면 항상 위 스케일 안에서만 선택합니다.

---

# Layout Container

| Breakpoint | 최소 너비 | Container 최대 너비 | 좌우 padding |
|---|---|---|---|
| Mobile | 0px | 100% | `--space-4` (16px) |
| Tablet | 768px | 720px | `--space-6` (24px) |
| Desktop | 1024px | 1120px | `--space-8` (32px) |
| Wide | 1280px | 1280px | `--space-8` (32px) |

> Breakpoint 값은 Tailwind 기본 breakpoint(`md: 768px`, `lg: 1024px`, `xl: 1280px`)를 그대로 따릅니다.
> 모든 레이아웃은 Mobile 기준으로 먼저 설계하고, 위 breakpoint에서 자연스럽게 확장합니다.

---

# Grid System

- Mobile: 4 column grid, gutter `--space-4` (16px)
- Tablet: 8 column grid, gutter `--space-5` (20px)
- Desktop: 12 column grid, gutter `--space-6` (24px)

---

# 컴포넌트 간격 가이드

**카드 내부**
- Padding: `--space-5` (20px)
- 카드 내부 요소 간 간격: `--space-3` (12px)

**리스트**
- 아이템 간 간격: `--space-4` (16px)
- 아이템 내부 padding: `--space-4` (16px)

**폼(Form)**
- 인풋 내부 padding: `--space-3` (12px)
- 인풋 간 간격: `--space-4` (16px)
- 라벨과 인풋 사이: `--space-2` (8px)

**섹션**
- 섹션 내부 요소 간: `--space-6` (24px)
- 섹션과 섹션 사이 (Mobile): `--space-8` (32px)
- 섹션과 섹션 사이 (Desktop): `--space-12` (48px)

---

# Border Radius

| Token | Value | 용도 |
|---|---|---|
| `--radius-sm` | 4px | 작은 뱃지, 태그, 체크박스 |
| `--radius-md` | 8px | 버튼, 인풋 |
| `--radius-lg` | 12px | 카드 |
| `--radius-xl` | 16px | 모달, 큰 컨테이너 |
| `--radius-full` | 9999px | 원형 아바타, 필(pill) 형태 버튼/뱃지 |

> 하나의 화면 안에서 같은 종류의 요소(예: 버튼)는 항상 동일한 radius를 사용합니다.

---

# Shadow (Elevation)

그림자는 "정보 계층"을 표현하는 용도로만 사용하며, 장식 목적으로 남용하지 않습니다.

| Token | Value | 용도 |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(15, 23, 42, 0.06)` | 기본 카드, 인풋 |
| `--shadow-md` | `0 4px 8px rgba(15, 23, 42, 0.08)` | Hover 상태의 카드, 드롭다운 |
| `--shadow-lg` | `0 12px 24px rgba(15, 23, 42, 0.12)` | 모달, 팝오버 |

> 그림자 단계는 3단계로 제한합니다. 더 진한 그림자가 필요하다고 느껴진다면 border(`--color-border`)를 함께 사용하는 것을 먼저 고려합니다.

---

# 반응형 원칙 요약
- 모든 spacing/radius/shadow 값은 breakpoint에 관계없이 동일한 토큰을 사용합니다. (값 자체를 breakpoint별로 바꾸지 않음)
- breakpoint별로 달라지는 것은 **container 너비, padding, column 수**뿐입니다.
- 요소 크기(폰트, 버튼 높이 등)를 breakpoint마다 다르게 키우지 않고, 레이아웃 여백과 컬럼 수로 화면 확장에 대응합니다.

---

# 하지 않는 것 (Anti-pattern)
- 스케일에 없는 임의 px 값을 사용하지 않는다. (예: `18px`, `26px`)
- 같은 컴포넌트인데 페이지마다 다른 padding 값을 사용하지 않는다.
- Radius를 요소마다 임의로 다르게 주지 않는다. (버튼은 항상 `--radius-md`)
- 그림자를 장식 목적으로 여러 겹 사용하지 않는다.
- Desktop이라고 해서 카드 padding이나 버튼 높이를 임의로 키우지 않는다. (컨테이너 너비와 컬럼 수로만 확장)

---

# Changelog
- v1.0 (2026-07-26): 4px 기준 Spacing Scale, Layout Container, Grid, Radius, Shadow 체계 최초 작성