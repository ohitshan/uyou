-- 개발용 테스트 데이터
-- pnpm supabase db reset 실행 시 마이그레이션 이후 자동으로 실행됨

insert into universities (name, slug, logo_url, site_url, region, address, description)
values (
  '가천대학교',
  'gachon-university',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/gachon/logo.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODAzYTU4ZS1lNWFiLTQ0N2ItODYyNS1lYzYzMmI4NDJmOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1eW91L3VuaXZlcnNpdGllcy9nYWNob24vbG9nby5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1MDU0NzY4LCJleHAiOjE4MTY1OTA3Njh9.tn0nDoaDgnY0AeaqbZL4OST1b96-VXQfc7D6fMmdtiQ',
  'https://www.gachon.ac.kr',
  '경기도',
  '경기도 성남시 수정구 성남대로 1342',
  '가천대학교는 경기도 성남시에 위치한 종합대학입니다.'
);

insert into universities (name, slug, logo_url, site_url, region, address, description)
values (
  '세종대학교',
  'sejong-university',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/sejong/sejong-logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODAzYTU4ZS1lNWFiLTQ0N2ItODYyNS1lYzYzMmI4NDJmOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1eW91L3VuaXZlcnNpdGllcy9zZWpvbmcvc2Vqb25nLWxvZ28ucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NTA4MjQ4MiwiZXhwIjoxODE2NjE4NDgyfQ.VR7m7LHFG6PWnLbvr0wHIXYHPs8KlWr0mudUoYSxz48',
  'https://www.sejong.ac.kr/kor/index.do',
  '서울특별시',
  '서울특별시 광진구 능동로 209(군자동)',
  '세종대학교는 서울 광진구에 위치한 사립 종합대학으로, 1940년 설립된 역사 깊은 학교입니다. 뛰어난 연구 역량과 호텔경영학·컴퓨터과학 등의 특성화로 세계적인 대학 발전을 이뤄가고 있습니다.'
);

