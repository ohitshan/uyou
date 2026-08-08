-- Migration: create_university_departments
-- 최신 외국인 신입학 모집요강 기준 학과 목록
--
-- 목적:
-- 1. 외국인이 원하는 학과를 대학별로 검색할 수 있도록 제공
-- 2. 최신 모집요강에서 확인된 학과의 존재 여부만 관리
-- 3. 모집인원, 지원자격 등 상세 모집정보는 저장하지 않음
-- 4. guideline_year를 통해 해당 학과 정보의 기준 연도를 안내
--
-- 데이터 정책:
-- - 외국인 신입학 기준
-- - 최신 모집요강 기준
-- - 과거 학과 데이터는 유지하지 않음
-- - 다음 연도 모집요강 업데이트 시 기존 데이터를 교체

create table if not exists university_departments (
  id uuid primary key default gen_random_uuid(),
  university_id uuid not null
    references universities(id)
    on delete cascade,
  department_name_ko text not null,
  department_name_en text,
  -- 해당 학과 정보를 추출한 모집요강의 기준 연도
  guideline_year integer not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- 같은 대학·같은 연도에 동일 학과가 중복 저장되는 것을 방지
  unique (university_id, department_name_ko, guideline_year)
);

-- 대학별 학과 조회
create index if not exists idx_university_departments_university_id
  on university_departments (university_id);

-- 학과명 부분 검색을 위한 Trigram
create extension if not exists pg_trgm;

create index if not exists idx_university_departments_name_ko_trgm
  on university_departments
  using gin (department_name_ko gin_trgm_ops);

create index if not exists idx_university_departments_name_en_trgm
  on university_departments
  using gin (department_name_en gin_trgm_ops);

-- updated_at 자동 갱신
drop trigger if exists trg_university_departments_updated_at
  on university_departments;

create trigger trg_university_departments_updated_at
before update on university_departments
for each row
execute function set_updated_at();

-- RLS 활성화
alter table university_departments enable row level security;

-- 누구나 조회 가능
create policy "누구나 읽기 가능"
on university_departments
for select
using (true);

-- 서버의 service_role만 데이터 수정 가능
grant select on university_departments to anon, authenticated;
grant select, insert, update, delete
on university_departments to service_role;