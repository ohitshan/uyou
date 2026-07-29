-- Migration: create_university_translations
-- 언어별 번역을 컬럼이 아니라 별도 테이블로 정규화.
-- 언어가 늘어나도 스키마 변경 없이 row만 추가하면 되도록 설계함.
-- universities 테이블의 기존 컬럼(name, region, address, description)은
-- 한국어 원본(canonical) 데이터로 그대로 유지.

create table if not exists university_translations (
  id uuid primary key default gen_random_uuid(),
  university_id uuid not null references universities(id) on delete cascade,

  locale text not null, -- 'en', 'ja', 'zh' 등. 'ko'는 넣지 않음 (universities 원본 사용)
  name text not null,
  region text,
  address text,
  description text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique (university_id, locale)
);

create index if not exists idx_university_translations_lookup
  on university_translations (university_id, locale);

-- RLS: 읽기는 누구나 가능
alter table university_translations enable row level security;

create policy "누구나 읽기 가능"
on university_translations for select
using (true);

grant select on university_translations to anon, authenticated;
grant select, insert, update, delete on university_translations to service_role;
