-- Migration: create_university_posts
-- 대학별로 크롤링한 게시물(공지사항 등)을 저장하는 테이블
-- 카테고리 구분은 아직 미정이라 넣지 않음. 필요해지면 이후 마이그레이션에서 컬럼 추가.

create table if not exists university_posts (
  id uuid primary key default gen_random_uuid(),
  university_id uuid not null references universities(id) on delete cascade,

  created_at timestamptz not null default now(), -- 우리 DB에 row가 생성된 시각
  crawled_at timestamptz not null default now(),  -- 크롤러가 수집한 시각
  published_at timestamptz,                       -- 대학 사이트에 실제 게시된 시각 (알 수 없으면 null)

  title text not null,
  url text not null
);

-- 특정 대학의 게시물을 최신순으로 조회할 일이 많으므로 인덱스 생성
create index if not exists idx_university_posts_university_id on university_posts (university_id);
create index if not exists idx_university_posts_published_at on university_posts (published_at desc);

-- RLS: 읽기는 누구나 가능, 쓰기는 service_role만 (크롤러 전용)
alter table university_posts enable row level security;

drop policy if exists "누구나 읽기 가능" on university_posts;

create policy "누구나 읽기 가능"
on university_posts for select
using (true);

grant select on university_posts to anon, authenticated;