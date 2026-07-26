-- Migration: grant_service_role
-- service_role은 RLS를 우회하지만, 테이블 자체에 대한 GRANT 권한은 별도로 필요함
-- 크롤러(supabaseAdmin)가 universities/university_posts에 쓰기 작업을 하려면 필수

grant usage on schema public to service_role;

grant select, insert, update, delete on universities to service_role;
grant select, insert, update, delete on university_posts to service_role;
