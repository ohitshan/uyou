# UYOU Components
Version: 1.0
Last Updated: 2026-07-26

관련 문서: [design-system.md](./design-system.md), [colors.md](./colors.md), [spacing.md](./spacing.md), [typography.md](./typography.md)

---

# 개요
UYOU의 공통 컴포넌트는 **shadcn/ui**를 기반으로 합니다.
아직 실제로 구현된 공통 컴포넌트는 없으며, 이 문서는 앞으로 컴포넌트를 만들 때 따라야 할 규칙과 각 컴포넌트의 variant/size/state 기준을 정의합니다.

---

# 사용 규칙 (중요)
- 새로운 UI가 필요할 때 반드시 아래 순서로 검토합니다.
  1. shadcn/ui에 동일한 컴포넌트가 있는가?
  2. 프로젝트에 이미 만든 공통 컴포넌트가 있는가?
  3. 위 두 가지가 모두 없을 때만 새로 만든다.
- 새 컴포넌트를 만들 경우, 반드시 colors.md / spacing.md / typography.md의 토큰만 사용합니다.
- 컴포넌트의 variant/size는 이 문서에 정의된 범위 안에서만 사용하며, 페이지별로 임의 변형을 만들지 않습니다.
- shadcn/ui 컴포넌트를 커스터마이징할 경우, 원본 컴포넌트를 복제해 project 공통 컴포넌트 폴더에서 관리하고 이 문서에 변경 사항을 기록합니다.

---

# 컴포넌트 우선순위

| 우선순위 | 대상 | 비고 |
|---|---|---|
| 1 | shadcn/ui 기본 컴포넌트 | Button, Input, Card, Badge, Dialog, Select, Tabs 등 |
| 2 | 프로젝트 공통 컴포넌트 (`/components/common`) | shadcn 기반으로 커스터마이징한 것들 |
| 3 | 신규 컴포넌트 | 위 두 가지로 해결 안 될 때만, 이 문서에 규칙 추가 후 생성 |

---

# Button

**Variant**

| Variant | 용도 | 배경 | 텍스트 |
|---|---|---|---|
| `primary` | 핵심 액션 (한 화면에 1개 원칙) | `--color-primary` | `#FFFFFF` |
| `secondary` | 보조 액션 | `--color-surface` + `--color-border-strong` 아웃라인 | `--color-text-primary` |
| `ghost` | 부가적인 액션, 텍스트 위주 버튼 | 투명 | `--color-primary` |
| `destructive` | 삭제 등 위험한 액션 | `--color-error` | `#FFFFFF` |

**Size**

| Size | Height | Padding (좌우) | Font |
|---|---|---|---|
| `sm` | 32px | `--space-3` | `--text-label` |
| `md` (기본) | 40px | `--space-4` | `--text-label` |
| `lg` | 48px | `--space-5` | `--text-body-lg` + Semibold |

**State**
- Hover: `--color-primary-hover`
- Active: `--color-primary-active`
- Disabled: `--color-disabled-bg` 배경 + `--color-disabled-text` 텍스트, 클릭 불가
- Focus: `--color-focus-ring` outline 2px

> 한 화면에서 `primary` 버튼은 원칙적으로 1개만 사용합니다. (핵심 액션을 명확히 하기 위함)

---

# Input / TextField

**기본 스펙**
- Height: 40px (기본), `sm` 32px
- Padding: `--space-3`
- Border: `--color-border-strong`, Radius `--radius-md`
- Font: `--text-body-lg`, placeholder는 `--color-text-tertiary`

**State**

| State | Border | 비고 |
|---|---|---|
| Default | `--color-border-strong` | |
| Focus | `--color-primary` + `--color-focus-ring` outline | |
| Error | `--color-error` | 하단에 `--text-body-sm` + `--color-error`로 에러 메시지 표시 |
| Disabled | `--color-disabled-bg` 배경 | 텍스트 `--color-disabled-text` |

> 에러 메시지는 색상뿐 아니라 아이콘(예: 느낌표)을 함께 표시하여 색상만으로 상태를 전달하지 않습니다. (design-system.md 접근성 원칙)

---

# Card

**기본 스펙**
- Background: `--color-surface`
- Border: `--color-border`
- Radius: `--radius-lg`
- Shadow: `--shadow-sm` (기본), Hover 시 `--shadow-md`
- Padding: `--space-5`

**용도별 구성 (예: 대학 정보 카드)**
- 타이틀: `--text-h4` + Semibold
- 부가 정보: `--text-body-sm` + `--color-text-secondary`
- 메타 정보(업데이트일 등): `--text-caption` + `--color-text-tertiary`

> 카드 간 간격은 spacing.md의 리스트 아이템 간격(`--space-4`) 기준을 따릅니다.

---

# Badge / Tag

**Variant**

| Variant | 배경 | 텍스트 | 용도 |
|---|---|---|---|
| `default` | `--color-primary-light` | `--color-primary` | 일반 태그 (학과, 지역 등) |
| `success` | `--color-success-bg` | `--color-success` | 긍정적 상태 (모집중 등) |
| `warning` | `--color-warning-bg` | `--color-warning` | 주의 상태 (마감 임박 등) |
| `error` | `--color-error-bg` | `--color-error` | 부정적 상태 (마감, 불가 등) |

- Radius: `--radius-full`
- Font: `--text-caption` + Medium
- Padding: 좌우 `--space-2`, 상하 4px

---

# Navigation (Header / Bottom Nav)

- Mobile: 하단 고정 Bottom Navigation 사용 (아이콘 + 라벨)
- Desktop: 상단 고정 Header Navigation 사용
- 활성 메뉴 표시: 아이콘/텍스트 색상을 `--color-primary`로, 배경은 `--color-primary-light` (선택 사항)
- Height: Mobile bottom nav 56px, Desktop header 64px

---

# Modal / Dialog

- Overlay: `--color-overlay`
- Container: `--color-surface`, Radius `--radius-xl`, Shadow `--shadow-lg`
- Padding: `--space-6`
- Mobile에서는 하단에서 올라오는 Bottom Sheet 형태를 우선 고려 (모바일 사용성)
- Desktop에서는 중앙 정렬 Dialog 사용

---

# Empty State / Loading

- 검색 결과 없음, 데이터 없음 등의 상황에서는 아이콘 + 짧은 설명 문구로 구성
- 설명 문구는 쉬운 언어로 작성 (design-system.md Voice & Tone 원칙)
- 로딩 상태는 Skeleton UI를 우선 사용하고, Spinner는 버튼 내부 등 좁은 영역에만 사용

---

# 하지 않는 것 (Anti-pattern)
- 페이지마다 다른 버튼 크기/스타일을 임의로 만들지 않는다.
- 한 화면에 `primary` 버튼을 2개 이상 두지 않는다.
- shadcn/ui 컴포넌트를 그대로 두고 인라인 스타일로 색상/크기를 덮어쓰지 않는다. (필요하면 공통 컴포넌트로 분리)
- 에러 상태를 색상만으로 표현하지 않는다. (아이콘/텍스트 병행)
- 이 문서에 없는 새로운 variant를 임의로 추가하지 않는다. (필요하면 문서를 먼저 업데이트)

---

# Changelog
- v1.0 (2026-07-26): Button, Input, Card, Badge, Navigation, Modal, Empty State 기준 최초 작성