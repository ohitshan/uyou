-- Migration: create_universities
-- 대학 정보를 저장하는 기본 테이블

create extension if not exists pgcrypto;

create table if not exists universities (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  name text not null,
  slug text not null unique,
  logo_url text,
  site_url text not null,

  region text not null,
  address text,
  description text
);

-- slug로 조회할 일이 많으므로 인덱스 생성
-- (unique 제약이 이미 인덱스를 생성하지만, 명시적으로 남겨 의도를 분명히 함)
create index if not exists idx_universities_slug on universities (slug);

-- updated_at 자동 갱신 트리거
-- row가 수정될 때마다 updated_at을 현재 시각으로 자동 업데이트
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_universities_updated_at on universities;

create trigger trg_universities_updated_at
before update on universities
for each row
execute function set_updated_at();