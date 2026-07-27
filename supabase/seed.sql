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

insert into universities (name, slug, logo_url, site_url, region, address, description)
values (
  '중앙대학교',
  'chungang-university',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/chungang/chungang-logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODAzYTU4ZS1lNWFiLTQ0N2ItODYyNS1lYzYzMmI4NDJmOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1eW91L3VuaXZlcnNpdGllcy9jaHVuZ2FuZy9jaHVuZ2FuZy1sb2dvLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODUxNjIyNjUsImV4cCI6NDkzODc2MjI2NX0.1UC4idL-DbyDNlY6MK4hwPXy4ziVDy_kCIFgh1MhhA8',
  'https://www.cau.ac.kr',
  '서울특별시',
  '서울특별시 동작구 흑석로 84',
  '중앙대학교는 서울 동작구와 경기도 안성시에 캠퍼스를 둔 사립 종합대학으로, 1918년 설립되었습니다. 인문·사회·예술·공학·의약학 등 다양한 분야에서 우수한 교육과 연구를 제공하며, 특히 공연예술과 미디어 분야의 강점으로 잘 알려져 있습니다.'
);

insert into universities (name, slug, logo_url, site_url, region, address, description)
values (
  '한양대학교',
  'hanyang-university',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/hanyang/hanyang-logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODAzYTU4ZS1lNWFiLTQ0N2ItODYyNS1lYzYzMmI4NDJmOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1eW91L3VuaXZlcnNpdGllcy9oYW55YW5nL2hhbnlhbmctbG9nby5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1MTc4NTI0LCJleHAiOjQ5Mzg3Nzg1MjR9.sdFNrC2nEaqNJ09Wwto5u97m5jo6tQ5P_IHIhx0tulI',
  'https://www.hanyang.ac.kr',
  '서울특별시',
  '서울특별시 성동구 왕십리로 222',
  '한양대학교는 서울특별시 성동구와 경기도 안산시에 ERICA 캠퍼스를 둔 사립 종합대학으로, 1939년 설립되었습니다. 공학 분야를 중심으로 인문·사회·자연과학·의학·예술체육 등 다양한 분야에서 우수한 교육과 연구를 제공하며, 산학협력과 창업, 글로벌 경쟁력에서 국내를 대표하는 대학 중 하나로 평가받고 있습니다.'
);
