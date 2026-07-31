-- Migration: create_university_statistics
-- 공공 API 원본 유학생 통계 데이터를 저장.
-- university_name은 공공데이터 원본 표기 그대로 저장하며,
-- university_id는 UYOU가 지원하는 대학일 때만 연결(느슨한 매핑).
-- 지원하지 않는 대학 데이터도 원본 그대로 보관 가능하도록 university_id는 nullable.

create table if not exists university_statistics (
  id uuid primary key default gen_random_uuid(),

  university_id uuid references universities(id) on delete set null,

  university_name text not null,
  campus_name text,
  -- 캠퍼스가 실제로 위치한 지역. universities.region(본교 기준)과 다를 수 있어
  -- (예: 한양대 본교=서울, ERICA캠퍼스=경기도) 이 테이블 자체에 독립적으로 저장함.
  region text not null,

  year integer not null,
  foreign_student_count integer not null check (foreign_student_count >= 0),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique (university_name, campus_name, year)
);

-- 특정 대학(UYOU 등록 대학)의 연도별 추이 조회가 잦을 것이므로 인덱스 생성
create index if not exists idx_university_statistics_university_id
  on university_statistics (university_id);

create index if not exists idx_university_statistics_year
  on university_statistics (year);

-- updated_at 자동 갱신 트리거 (universities 테이블과 동일한 함수 재사용)
drop trigger if exists trg_university_statistics_updated_at on university_statistics;

create trigger trg_university_statistics_updated_at
before update on university_statistics
for each row
execute function set_updated_at();

-- RLS: 읽기는 누구나 가능, 쓰기는 service_role만 (연 1회 수동 업데이트)
alter table university_statistics enable row level security;

create policy "누구나 읽기 가능"
on university_statistics for select
using (true);

grant select on university_statistics to anon, authenticated;
grant select, insert, update, delete on university_statistics to service_role;