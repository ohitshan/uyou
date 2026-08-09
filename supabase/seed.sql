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

insert into universities (name, slug, logo_url, site_url, region, address, description)
values (
  '한양대학교 ERICA',
  'hanyang-erica-campus',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/hanyang/hanyang-logo.png?token=******',
  'https://www.hanyang.ac.kr/web/www/erica',
  '경기도',
  '경기도 안산시 상록구 한양대학로 55',
  '한양대학교 ERICA는 경기도 안산시에 위치한 한양대학교의 분교 캠퍼스로, 공학·과학·디자인·국제학 등 다양한 분야에서 실무 중심 교육과 산학협력을 강화해 온 글로벌 캠퍼스입니다.'
);

insert into universities (name, slug, logo_url, site_url, region, address, description)
values (
  '서강대학교',
  'sogang-university',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/sogang/sogang-logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODAzYTU4ZS1lNWFiLTQ0N2ItODYyNS1lYzYzMmI4NDJmOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1eW91L3VuaXZlcnNpdGllcy9zb2dhbmcvc29nYW5nLWxvZ28ucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NTIxNDIxNCwiZXhwIjo0OTM4ODE0MjE0fQ.IH3tI5xo5YeUceeP4Il4r826uIG1JsvTeSHovmSRrVw',
  'https://www.sogang.ac.kr',
  '서울특별시',
  '서울특별시 마포구 백범로 35',
  '서강대학교는 서울특별시 마포구에 위치한 사립 종합대학으로, 1960년 예수회가 설립하였습니다. 인문·사회과학과 경영학 분야에서 높은 명성을 보유하고 있으며, 공학과 자연과학 분야에서도 우수한 교육과 연구를 제공하고 있습니다. 소수정예 교육과 국제화, 학부 중심의 교육 환경을 바탕으로 국내를 대표하는 명문 사립대학교 중 하나로 평가받고 있습니다.'
);

insert into universities (name, slug, logo_url, site_url, region, address, description)
values (
  '성균관대학교',
  'sungkyunkwan-university',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/sungkyunkwan/sungkyunkwan-logo.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODAzYTU4ZS1lNWFiLTQ0N2ItODYyNS1lYzYzMmI4NDJmOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1eW91L3VuaXZlcnNpdGllcy9zdW5na3l1bmt3YW4vc3VuZ2t5dW5rd2FuLWxvZ28uanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NTIxNjUzNywiZXhwIjo0OTM4ODE2NTM3fQ.iEdgAbkWhSBjzg1V6LWFBlZTCkwcVMQYh3tjYD3CvX8',
  'https://www.skku.edu',
  '서울특별시',
  '서울특별시 종로구 성균관로 25-2',
  '성균관대학교는 서울특별시 종로구와 경기도 수원시에 자연과학캠퍼스를 둔 사립 종합대학으로, 1398년 조선시대 성균관의 전통을 계승하여 1946년 현대적 대학으로 출범하였습니다. 인문·사회·경영·자연과학·공학·의약학 등 다양한 분야에서 세계적 수준의 교육과 연구를 수행하고 있으며, 삼성과의 산학협력을 기반으로 연구 경쟁력과 글로벌 역량을 갖춘 국내 대표 명문대학교 중 하나로 평가받고 있습니다.'
);

insert into universities (name, slug, logo_url, site_url, region, address, description)
values (
  '경희대학교',
  'kyunghee-university',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/kyunghee/kyunghee-logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODAzYTU4ZS1lNWFiLTQ0N2ItODYyNS1lYzYzMmI4NDJmOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1eW91L3VuaXZlcnNpdGllcy9reXVuZ2hlZS9reXVuZ2hlZS1sb2dvLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODUyMTk2NzEsImV4cCI6NDkzODgxOTY3MX0.EMQnTh-cHwdULHwDVolMlELacDTSvtgPUfygwPuFrOA',
  'https://www.khu.ac.kr',
  '서울특별시',
  '서울특별시 동대문구 경희대로 26',
  '경희대학교는 서울특별시 동대문구 서울캠퍼스와 경기도 용인시 국제캠퍼스를 운영하는 사립 종합대학으로, 1949년 신흥초급대학으로 설립되어 1952년 경희대학교로 개편되었습니다. 인문·사회·법·경영·의학·치의학·약학·한의학·이공계·예술·체육 등 다양한 분야에서 교육과 연구를 수행하고 있으며, 국제화와 학문 융합을 핵심 가치로 세계 여러 대학과 활발한 교류를 이어가는 국내 대표 사립대학교 중 하나입니다.'
);

insert into universities (name, slug, logo_url, site_url, region, address, description)
values (
  '연세대학교',
  'yonsei-university',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/yonsei/logo.jpg',
  'https://www.yonsei.ac.kr',
  '서울특별시',
  '서울특별시 서대문구 연세로 50',
  '연세대학교는 서울특별시 서대문구에 위치한 대한민국의 대표적인 사립 종합대학교입니다.'
);

insert into universities (name, slug, logo_url, site_url, region, address, description)
values (
  '한국외국어대학교',
  'hankuk-university-of-foreign-studies',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/hufs/logo.jpg',
  'https://www.hufs.ac.kr',
  '서울특별시',
  '서울특별시 동대문구 이문로 107',
  '한국외국어대학교는 서울특별시 동대문구에 위치한 대한민국의 대표적인 사립 종합대학교로, 외국어 및 국제 분야 교육과 연구에 특화된 대학입니다.'
);

insert into universities (name, slug, logo_url, site_url, region, address, description)
values (
  '서울시립대학교',
  'university-of-seoul',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/uos/logo.jpg',
  'https://www.uos.ac.kr',
  '서울특별시',
  '서울특별시 동대문구 서울시립대로 163',
  '서울시립대학교는 서울특별시 동대문구에 위치한 서울특별시가 설립·운영하는 공립 종합대학교입니다.'
);

insert into universities ( name, slug, logo_url, site_url, region, address, description)
values (
  '동국대학교',
  'dongguk-university',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/dongguk/logo.jpg',
  'https://www.dongguk.edu',
  '서울특별시',
  '서울특별시 중구 필동로1길 30',
  '동국대학교는 서울특별시 중구에 위치한 대한민국의 대표적인 사립 종합대학교입니다.'
);


insert into universities ( name, slug, logo_url, site_url, region, address, description)
values (
  '숭실대학교',
  'soongsil-university',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/soongsil/logo.jpg',
  'https://www.ssu.ac.kr',
  '서울특별시',
  '서울특별시 동작구 상도로 369',
  '숭실대학교는 서울특별시 동작구에 위치한 대한민국의 사립 종합대학교입니다.'
);

insert into universities (name, slug, logo_url, site_url, region, address, description)
values (
  '건국대학교',
  'konkuk-university',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/konkuk/logo.jpg',
  'https://www.konkuk.ac.kr',
  '서울특별시',
  '서울특별시 광진구 능동로 120',
  '건국대학교는 서울특별시 광진구에 위치한 대한민국의 사립 종합대학교입니다.'
);

insert into universities ( name, slug, logo_url, site_url, region, address, description)
values (
  '홍익대학교',
  'hongik-university',
  'https://skzdwrzrmbiqlrevwdgb.supabase.co/storage/v1/object/sign/uyou/universities/hongik/logo.jpg',
  'https://www.hongik.ac.kr',
  '서울특별시',
  '서울특별시 마포구 와우산로 94',
  '홍익대학교는 서울특별시 마포구에 위치한 대한민국의 사립 종합대학교입니다.'
);

-- ============================================================
-- 영어 번역 (university_translations)
-- 20260726110000_create_university_translations.sql 마이그레이션 필요
-- ============================================================

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'en',
  'Gachon University',
  'Gyeonggi-do',
  '1342 Seongnam-daero, Sujeong-gu, Seongnam-si, Gyeonggi-do',
  'Gachon University is a comprehensive university located in Seongnam, Gyeonggi-do.'
from universities where slug = 'gachon-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'en',
  'Sejong University',
  'Seoul',
  '209 Neungdong-ro, Gwangjin-gu, Seoul (Gunja-dong)',
  'Sejong University is a private comprehensive university located in Gwangjin-gu, Seoul, founded in 1940. It has built a strong global reputation through its research capabilities and specialized programs such as Hotel Management and Computer Science.'
from universities where slug = 'sejong-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'en',
  'Chung-Ang University',
  'Seoul',
  '84 Heukseok-ro, Dongjak-gu, Seoul',
  'Chung-Ang University is a private comprehensive university with campuses in Dongjak-gu, Seoul and Anseong, Gyeonggi-do, founded in 1918. It offers excellent education and research across the humanities, social sciences, arts, engineering, and medicine, and is especially well known for its strengths in performing arts and media.'
from universities where slug = 'chungang-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'en',
  'Hanyang University',
  'Seoul',
  '222 Wangsimni-ro, Seongdong-gu, Seoul',
  'Hanyang University is a private comprehensive university with its main campus in Seongdong-gu, Seoul and the ERICA campus in Ansan, Gyeonggi-do, founded in 1939. Centered on engineering, it provides excellent education and research across the humanities, social sciences, natural sciences, medicine, and arts and physical education, and is regarded as one of Korea''s leading universities in industry-academia cooperation, entrepreneurship, and global competitiveness.'
from universities where slug = 'hanyang-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'en',
  'Hanyang University ERICA Campus',
  'Gyeonggi-do',
  '55 Hanyangdaehak-ro, Sangnok-gu, Ansan-si, Gyeonggi-do',
  'Hanyang University ERICA Campus is Hanyang University''s branch campus located in Ansan, Gyeonggi-do, recognized for practice-oriented education and strong industry-academia collaboration across engineering, science, design, and international studies.'
from universities where slug = 'hanyang-erica-campus';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'en',
  'Sogang University',
  'Seoul',
  '35 Baekbeom-ro, Mapo-gu, Seoul',
  'Sogang University is a private comprehensive university located in Mapo-gu, Seoul, founded by the Society of Jesus (Jesuits) in 1960. It holds a strong reputation in the humanities, social sciences, and business administration, while also providing excellent education and research in engineering and natural sciences. Known for its small-class education, internationalization, and undergraduate-focused environment, it is regarded as one of Korea''s leading private universities.'
from universities where slug = 'sogang-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'en',
  'Sungkyunkwan University',
  'Seoul',
  '25-2 Seonggyungwan-ro, Jongno-gu, Seoul',
  'Sungkyunkwan University is a private comprehensive university with campuses in Jongno-gu, Seoul and its Natural Sciences Campus in Suwon, Gyeonggi-do. Tracing its roots to the Sungkyunkwan of the Joseon Dynasty founded in 1398, it was reestablished as a modern university in 1946. It conducts world-class education and research across the humanities, social sciences, business, natural sciences, engineering, and medicine, and is recognized as one of Korea''s leading universities for its research competitiveness and global capabilities, bolstered by its industry-academia partnership with Samsung.'
from universities where slug = 'sungkyunkwan-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'en',
  'Kyung Hee University',
  'Seoul',
  '26 Kyungheedae-ro, Dongdaemun-gu, Seoul',
  'Kyung Hee University is a private comprehensive university operating the Seoul Campus in Dongdaemun-gu, Seoul and the Global Campus in Yongin, Gyeonggi-do. It was founded in 1949 as Shinheung College and reorganized as Kyung Hee University in 1952. It conducts education and research across the humanities, social sciences, law, business, medicine, dentistry, pharmacy, Korean medicine, science and engineering, arts, and physical education, and is one of Korea''s leading private universities, actively exchanging with universities worldwide under its core values of internationalization and interdisciplinary convergence.'
from universities where slug = 'kyunghee-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'en',
  'Yonsei University',
  'Seoul',
  '50 Yonsei-ro, Seodaemun-gu, Seoul',
  'Yonsei University is one of South Korea''s leading private comprehensive universities, located in Seodaemun-gu, Seoul.'
from universities where slug = 'yonsei-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'en',
  'Hankuk University of Foreign Studies',
  'Seoul',
  '107 Imun-ro, Dongdaemun-gu, Seoul',
  'Hankuk University of Foreign Studies (HUFS) is a leading private comprehensive university located in Dongdaemun-gu, Seoul, specializing in foreign language and international studies education and research.'
from universities where slug = 'hankuk-university-of-foreign-studies';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'en',
  'University of Seoul',
  'Seoul',
  '163 Seoulsiripdae-ro, Dongdaemun-gu, Seoul',
  'The University of Seoul is a public comprehensive university operated by the Seoul Metropolitan Government, located in Dongdaemun-gu, Seoul.'
from universities
where slug = 'university-of-seoul';


insert into university_translations (university_id,locale,name,region,address,description)
select id, 'en',
  'Dongguk University',
  'Seoul',
  '30 Pildong-ro 1-gil, Jung-gu, Seoul',
  'Dongguk University is a private comprehensive university located in Jung-gu, Seoul, and is one of the leading Buddhist universities in South Korea.'
from universities
where slug = 'dongguk-university';

insert into university_translations ( university_id, locale, name, region, address, description)
select id, 'en',
  'Soongsil University',
  'Seoul',
  '369 Sangdo-ro, Dongjak-gu, Seoul',
  'Soongsil University is a private comprehensive university located in Dongjak-gu, Seoul.'
from universities
where slug = 'soongsil-university';

insert into university_translations (university_id,locale,name,region,address,description)
select
  id,
  'en',
  'Konkuk University',
  'Seoul',
  '120 Neungdong-ro, Gwangjin-gu, Seoul',
  'Konkuk University is a private comprehensive university located in Gwangjin-gu, Seoul.'
from universities
where slug = 'konkuk-university';

insert into university_translations ( university_id, locale, name, region, address, description)
select id, 'en',
  'Hongik University',
  'Seoul',
  '94 Wausan-ro, Mapo-gu, Seoul',
  'Hongik University is a private comprehensive university located in Mapo-gu, Seoul.'
from universities
where slug = 'hongik-university';


-- ============================================================
-- 미얀마어 번역 (university_translations, locale='my')
-- 학교명/지역명은 영어 표기 유지, 소개문만 미얀마어로 번역
-- ============================================================

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Gachon University',
  'Gyeonggi-do',
  '1342 Seongnam-daero, Sujeong-gu, Seongnam-si, Gyeonggi-do',
  'Gachon University သည် Gyeonggi-do ပြည်နယ်၊ Seongnam မြို့တွင် တည်ရှိသော ဘက်စုံတက္ကသိုလ်တစ်ခုဖြစ်သည်။'
from universities where slug = 'gachon-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Sejong University',
  'Seoul',
  '209 Neungdong-ro, Gwangjin-gu, Seoul (Gunja-dong)',
  'Sejong University သည် Seoul မြို့၊ Gwangjin-gu ဒေသတွင် တည်ရှိသည့် ပုဂ္ဂလိကဘက်စုံတက္ကသိုလ်ဖြစ်ပြီး ၁၉၄၀ ခုနှစ်တွင် တည်ထောင်ခဲ့သည်။ Hotel Management နှင့် Computer Science ဆိုင်ရာ ပညာရေးနှင့် သုတေသနတွင် ထင်ရှားသည်။'
from universities where slug = 'sejong-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Chung-Ang University',
  'Seoul',
  '84 Heukseok-ro, Dongjak-gu, Seoul',
  'Chung-Ang University သည် Seoul မြို့၊ Dongjak-gu ဒေသနှင့် Gyeonggi-do ပြည်နယ်၊ Anseong မြို့တို့တွင် ကျောင်းဝင်းများရှိသော ပုဂ္ဂလိကဘက်စုံတက္ကသိုလ်ဖြစ်ပြီး ၁၉၁၈ ခုနှစ်တွင် တည်ထောင်ခဲ့သည်။ ဖျော်ဖြေရေးအနုပညာနှင့် မီဒီယာဆိုင်ရာ ထင်ရှားသည်။'
from universities where slug = 'chungang-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Hanyang University',
  'Seoul',
  '222 Wangsimni-ro, Seongdong-gu, Seoul',
  'Hanyang University သည် Seoul မြို့၊ Seongdong-gu ဒေသတွင် ပင်မကျောင်းဝင်းရှိပြီး Gyeonggi-do ပြည်နယ်၊ Ansan မြို့တွင် ERICA ကျောင်းဝင်းရှိသော ပုဂ္ဂလိကဘက်စုံတက္ကသိုလ်ဖြစ်သည်။ အင်ဂျင်နီယာပညာရပ်ကို အဓိကထား၍ စက်မှုလုပ်ငန်း-ပညာရေးပူးပေါင်းမှုတွင် ထင်ရှားသည်။'
from universities where slug = 'hanyang-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Hanyang University ERICA Campus',
  'Gyeonggi-do',
  '55 Hanyangdaehak-ro, Sangnok-gu, Ansan-si, Gyeonggi-do',
  'Hanyang University ERICA Campus သည် Gyeonggi-do ပြည်နယ်၊ Ansan မြို့တွင် တည်ရှိသော Hanyang University ၏ ဌာနခွဲကျောင်းဝင်းဖြစ်သည်။ အင်ဂျင်နီယာ၊ သိပ္ပံ၊ ဒီဇိုင်းနှင့် နိုင်ငံတကာဆိုင်ရာ ပညာရပ်များတွင် လက်တွေ့လုပ်ငန်းခွင်ဆိုင်ရာ ပညာရေးကို အလေးထားသည်။'
from universities where slug = 'hanyang-erica-campus';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Sogang University',
  'Seoul',
  '35 Baekbeom-ro, Mapo-gu, Seoul',
  'Sogang University သည် Seoul မြို့၊ Mapo-gu ဒေသတွင် တည်ရှိသော ပုဂ္ဂလိကဘက်စုံတက္ကသိုလ်ဖြစ်ပြီး ၁၉၆၀ ခုနှစ်တွင် ယေဇူးအသင်းက တည်ထောင်ခဲ့သည်။ လူသားရေးနှင့် စီးပွားရေးစီမံခန့်ခွဲမှုပညာရပ်များတွင် ထင်ရှားသည်။'
from universities where slug = 'sogang-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Sungkyunkwan University',
  'Seoul',
  '25-2 Seonggyungwan-ro, Jongno-gu, Seoul',
  'Sungkyunkwan University သည် Seoul မြို့၊ Jongno-gu ဒေသနှင့် Gyeonggi-do ပြည်နယ်၊ Suwon မြို့ရှိ သဘာဝသိပ္ပံကျောင်းဝင်းတို့ရှိသည့် ပုဂ္ဂလိကတက္ကသိုလ်ဖြစ်သည်။ Samsung ကုမ္ပဏီနှင့် စက်မှုလုပ်ငန်း-ပညာရေးပူးပေါင်းမှုအားဖြင့် ထင်ရှားသည်။'
from universities where slug = 'sungkyunkwan-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Kyung Hee University',
  'Seoul',
  '26 Kyungheedae-ro, Dongdaemun-gu, Seoul',
  'Kyung Hee University သည် Seoul မြို့ကျောင်းဝင်းနှင့် Gyeonggi-do ပြည်နယ်၊ Yongin မြို့ရှိ နိုင်ငံတကာကျောင်းဝင်းတို့ကို လည်ပတ်နေသော ပုဂ္ဂလိကဘက်စုံတက္ကသိုလ်ဖြစ်သည်။ နိုင်ငံတကာသဘောထားနှင့် ပညာရပ်ပေါင်းစည်းမှုကို အဓိကထားသည်။'
from universities where slug = 'kyunghee-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Yonsei University',
  'Seoul',
  '50 Yonsei-ro, Seodaemun-gu, Seoul',
  'Yonsei University သည် Seoul မြို့၊ Seodaemun-gu ဒေသတွင် တည်ရှိသော တောင်ကိုရီးယားနိုင်ငံ၏ ထိပ်တန်းပုဂ္ဂလိကဘက်စုံတက္ကသိုလ်များထဲမှတစ်ခုဖြစ်သည်။'
from universities where slug = 'yonsei-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Hankuk University of Foreign Studies',
  'Seoul',
  '107 Imun-ro, Dongdaemun-gu, Seoul',
  'Hankuk University of Foreign Studies (HUFS) သည် Seoul မြို့၊ Dongdaemun-gu ဒေသတွင် တည်ရှိပြီး နိုင်ငံခြားဘာသာစကားနှင့် နိုင်ငံတကာပညာရပ်ဆိုင်ရာ ပညာရေးနှင့် သုတေသနတွင် ထူးချွန်သော ပုဂ္ဂလိကဘက်စုံတက္ကသိုလ်ဖြစ်သည်။'
from universities where slug = 'hankuk-university-of-foreign-studies';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'University of Seoul',
  'Seoul',
  '163 Seoulsiripdae-ro, Dongdaemun-gu, Seoul',
  'University of Seoul သည် Seoul မြို့တော်အစိုးရမှ တည်ထောင်လည်ပတ်သော Seoul မြို့၊ Dongdaemun-gu ဒေသရှိ နိုင်ငံပိုင်ဘက်စုံတက္ကသိုလ်ဖြစ်သည်။'
from universities where slug = 'university-of-seoul';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Dongguk University',
  'Seoul',
  '30 Pildong-ro 1-gil, Jung-gu, Seoul',
  'Dongguk University သည် Seoul မြို့၊ Jung-gu ဒေသတွင် တည်ရှိပြီး တောင်ကိုရီးယားနိုင်ငံ၏ ထင်ရှားသော ဗုဒ္ဓဘာသာဆိုင်ရာ တက္ကသိုလ်များထဲမှတစ်ခုဖြစ်သော ပုဂ္ဂလိကဘက်စုံတက္ကသိုလ်ဖြစ်သည်။'
from universities where slug = 'dongguk-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Soongsil University',
  'Seoul',
  '369 Sangdo-ro, Dongjak-gu, Seoul',
  'Soongsil University သည် Seoul မြို့၊ Dongjak-gu ဒေသတွင် တည်ရှိသော တောင်ကိုရီးယားနိုင်ငံ၏ ပုဂ္ဂလိကဘက်စုံတက္ကသိုလ်တစ်ခုဖြစ်သည်။'
from universities where slug = 'soongsil-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Konkuk University',
  'Seoul',
  '120 Neungdong-ro, Gwangjin-gu, Seoul',
  'Konkuk University သည် Seoul မြို့၊ Gwangjin-gu ဒေသတွင် တည်ရှိသော တောင်ကိုရီးယားနိုင်ငံ၏ ပုဂ္ဂလိကဘက်စုံတက္ကသိုလ်တစ်ခုဖြစ်သည်။'
from universities where slug = 'konkuk-university';

insert into university_translations (university_id, locale, name, region, address, description)
select id, 'my',
  'Hongik University',
  'Seoul',
  '94 Wausan-ro, Mapo-gu, Seoul',
  'Hongik University သည် Seoul မြို့၊ Mapo-gu ဒေသတွင် တည်ရှိသော တောင်ကိုရီးယားနိုင်ငံ၏ ပုဂ္ဂလိကဘက်စုံတက္ကသိုလ်တစ်ခုဖြစ်ပြီး အနုပညာနှင့် ဒီဇိုင်းပညာရပ်များဖြင့် ထင်ရှားသည်။'
from universities where slug = 'hongik-university';

-- ============================================================
-- 유학생 통계 (university_statistics) - 전체 226개 대학
-- 출처: 교육부 공공데이터 "Status of foreign students (University), 2025"
-- foreign_student_count = 원본의 Total(D=A+B+C) 컬럼 (학위과정+co-op교육과정+연수과정 합산)
-- region = 원본 데이터의 Region 컬럼
-- campus_name = 원본 School명 접미사(_Principal university/_Campus 2/_Branch campus 등) 기준.
--   "Principal university"는 단일/본교 캠퍼스를 의미하므로 null로 처리.
-- university_id = UYOU 지원 대학(7개)만 매핑, 나머지는 null로 원본 그대로 보관.
-- 20260726120000_create_university_statistics.sql 마이그레이션 필요
-- ============================================================

insert into university_statistics (university_id, university_name, campus_name, region, year, foreign_student_count)
values
(null, 'Ulsan National Institute of Science and Technology', null, 'Ulsan', 2025, 84),
(null, 'University Of Ulsan', null, 'Ulsan', 2025, 257),
(null, 'Kookmin University', null, 'Seoul', 2025, 1533),
(null, 'Presbyterian University & Theological Seminary', null, 'Seoul', 2025, 5),
(null, 'Kwangwoon University', null, 'Seoul', 2025, 1009),
((select id from universities where slug='chungang-university'), 'Chung-Ang University', null, 'Seoul', 2025, 4257),
(null, 'Chongshin University', null, 'Seoul', 2025, 7),
(null, 'Korea University', null, 'Seoul', 2025, 4471),
(null, 'Chugye University For The Arts', null, 'Seoul', 2025, 45),
((select id from universities where slug='kyunghee-university'), 'Kyung Hee University', null, 'Seoul', 2025, 3535),
(null, 'Korean Bible University', null, 'Seoul', 2025, 113),
(null, 'Hankuk University of Foreign Studies', null, 'Seoul', 2025, 2949),
(null, 'Hansung University', null, 'Seoul', 2025, 506),
((select id from universities where slug='hanyang-university'), 'Hanyang University', null, 'Seoul', 2025, 3988),
(null, 'Seoul Hanyoung University', null, 'Seoul', 2025, 308),
(null, 'Hongik University', null, 'Seoul', 2025, 1394),
(null, 'Kyonggi University', 'Campus 2', 'Seoul', 2025, 294),
(null, 'GANGSEO UNIVERSITY', null, 'Seoul', 2025, 706),
(null, 'Yonsei University', null, 'Seoul', 2025, 4740),
(null, 'Sahmyook University', null, 'Seoul', 2025, 361),
((select id from universities where slug='sogang-university'), 'Sogang University', null, 'Seoul', 2025, 2021),
(null, 'Seokyeong University', null, 'Seoul', 2025, 1077),
(null, 'Seoul Women''s University', null, 'Seoul', 2025, 1131),
(null, 'Sungkonghoe University', null, 'Seoul', 2025, 275),
(null, 'Myongji University Social Science Campus', 'Campus 2', 'Seoul', 2025, 2127),
((select id from universities where slug='sungkyunkwan-university'), 'Sungkyunkwan University', null, 'Seoul', 2025, 3911),
(null, 'Sungshin Women''s University', null, 'Seoul', 2025, 890),
((select id from universities where slug='sejong-university'), 'Sejong University', null, 'Seoul', 2025, 2844),
(null, 'Sookmyung Women''S University', null, 'Seoul', 2025, 520),
(null, 'Soongsil University', null, 'Seoul', 2025, 2479),
(null, 'Dongduk Women''s University', null, 'Seoul', 2025, 56),
(null, 'Dongguk University', null, 'Seoul', 2025, 2691),
(null, 'Duksung Women''s University', null, 'Seoul', 2025, 571),
(null, 'Seoul Christian University', null, 'Seoul', 2025, 838),
(null, 'Ewha Womans University', null, 'Seoul', 2025, 2089),
(null, 'Konkuk University', null, 'Seoul', 2025, 2228),
(null, 'Sangmyung University (Seoul)', null, 'Seoul', 2025, 194),
(null, 'Digital Seoul Culture Arts University', null, 'Seoul', 2025, 34),
(null, 'Korea Soongsil Cyber University', null, 'Seoul', 2025, 98),
(null, 'Seoul National University', null, 'Seoul', 2025, 1383),
(null, 'Korea Cyber University', null, 'Seoul', 2025, 172),
(null, 'Cyber Hankuk University Of Foreign Studies', null, 'Seoul', 2025, 312),
(null, 'Korea National University Of Arts', null, 'Seoul', 2025, 86),
(null, 'Hanyang Cyber University', null, 'Seoul', 2025, 151),
(null, 'Open Cyber University Of Korea (OCU)', null, 'Seoul', 2025, 30),
(null, 'Sejong Cyber University', null, 'Seoul', 2025, 134),
(null, 'Seoul Cyber University', null, 'Seoul', 2025, 62),
(null, 'Seoul Digital University', null, 'Seoul', 2025, 62),
(null, 'Korea National Sport University', null, 'Seoul', 2025, 11),
(null, 'Kyung Hee Cyber University', null, 'Seoul', 2025, 229),
(null, 'Methodist Theological University', null, 'Seoul', 2025, 3),
(null, 'Seoul National University Of Science And Technology', null, 'Seoul', 2025, 1129),
(null, 'Korea National Open University', null, 'Seoul', 2025, 432),
(null, 'The Catholic University Of Korea', 'Campus 3', 'Seoul', 2025, 9),
(null, 'TAEJAE UNIVERSITY', null, 'Seoul', 2025, 13),
(null, 'University Of Seoul', null, 'Seoul', 2025, 725),
(null, 'Seoul National University Of Education', null, 'Seoul', 2025, 6),
(null, 'Daejeoncatholicuniversity', null, 'Sejong', 2025, 1),
(null, 'Hongik University', 'Campus 2', 'Sejong', 2025, 86),
(null, 'Korea University Sejong Campus', 'Branch campus', 'Sejong', 2025, 596),
(null, 'Mokpo National Maritime University', null, 'Jeollanam-do', 2025, 154),
(null, 'Gwangju Catholic University', null, 'Jeollanam-do', 2025, 1),
(null, 'Dongshinuniversity', null, 'Jeollanam-do', 2025, 989),
(null, 'Chodang University', null, 'Jeollanam-do', 2025, 349),
(null, 'Mokpo National University', null, 'Jeollanam-do', 2025, 71),
(null, 'Chonnam National University', 'Campus 2', 'Jeollanam-do', 2025, 149),
(null, 'Sehan University', null, 'Jeollanam-do', 2025, 62),
(null, 'Sunchon National University', null, 'Jeollanam-do', 2025, 261),
(null, 'Youngsan University Of Seon Studies', null, 'Jeollanam-do', 2025, 2),
(null, 'Kunsan National University', null, 'Jeollabuk-do', 2025, 422),
(null, 'Yewon Arts University', null, 'Jeollabuk-do', 2025, 104),
(null, 'Howon University', null, 'Jeollabuk-do', 2025, 689),
(null, 'Woosuk University', null, 'Jeollabuk-do', 2025, 1111),
(null, 'Wonkwang Digital University', null, 'Jeollabuk-do', 2025, 54),
(null, 'Wonkwang University', null, 'Jeollabuk-do', 2025, 132),
(null, 'Haniluniv.&Presb.Theol.Sem.', null, 'Jeollabuk-do', 2025, 276),
(null, 'Jeonbuk National University', null, 'Jeollabuk-do', 2025, 1112),
(null, 'Jeonju University', null, 'Jeollabuk-do', 2025, 245),
(null, 'Jejuinternationaluniversity', null, 'Jeju', 2025, 208),
(null, 'Jeju National University', null, 'Jeju', 2025, 331),
(null, 'Incheon National University', null, 'Incheon', 2025, 430),
(null, 'Incheon Catholic University', 'Campus 2', 'Incheon', 2025, 1),
(null, 'Incheon Catholic University', null, 'Incheon', 2025, 6),
(null, 'Inha University', null, 'Incheon', 2025, 1954),
(null, 'Gyeongin National University Of Education', null, 'Incheon', 2025, 6),
(null, 'Youngsan University', 'Campus 2', 'Gyeongsangnam-do', 2025, 98),
(null, 'Inje University', null, 'Gyeongsangnam-do', 2025, 893),
(null, 'Kaya University', null, 'Gyeongsangnam-do', 2025, 12),
(null, 'Changshin University', null, 'Gyeongsangnam-do', 2025, 229),
(null, 'Changwon National University', null, 'Gyeongsangnam-do', 2025, 277),
(null, 'Gyeongsang National University', null, 'Gyeongsangnam-do', 2025, 335),
(null, 'Kyungnam University', null, 'Gyeongsangnam-do', 2025, 407),
(null, 'Uiduk University', null, 'Gyeongsangbuk-do', 2025, 93),
(null, 'Daegu Catholic University', null, 'Gyeongsangbuk-do', 2025, 1178),
(null, 'Daegu Arts University', null, 'Gyeongsangbuk-do', 2025, 227),
(null, 'Daeshin University', null, 'Gyeongsangbuk-do', 2025, 950),
(null, 'Daegu Cyber University', null, 'Gyeongsangbuk-do', 2025, 31),
(null, 'Daegu University', null, 'Gyeongsangbuk-do', 2025, 1660),
(null, 'Youngnam Theological University & Seminary', null, 'Gyeongsangbuk-do', 2025, 28),
(null, 'Yeungnam University', null, 'Gyeongsangbuk-do', 2025, 1439),
(null, 'Dongguk University', 'Branch campus', 'Gyeongsangbuk-do', 2025, 420),
(null, 'Kyungwoon University', null, 'Gyeongsangbuk-do', 2025, 909),
(null, 'Gimcheon University', null, 'Gyeongsangbuk-do', 2025, 466),
(null, 'Gyeongguk National University', null, 'Gyeongsangbuk-do', 2025, 73),
(null, 'Kumoh National Institute Of Technology', null, 'Gyeongsangbuk-do', 2025, 30),
(null, 'Daegu Haany University', null, 'Gyeongsangbuk-do', 2025, 1637),
(null, 'Dongyang University', null, 'Gyeongsangbuk-do', 2025, 725),
(null, 'Pohang University of Science and Technology (POSTECH)', null, 'Gyeongsangbuk-do', 2025, 47),
(null, 'SinGyeongju University', null, 'Gyeongsangbuk-do', 2025, 168),
(null, 'Kyungil University', null, 'Gyeongsangbuk-do', 2025, 946),
(null, 'Handong Global University', null, 'Gyeongsangbuk-do', 2025, 177),
(null, 'Calvin University', null, 'Gyeonggi-do', 2025, 1940),
((select id from universities where slug='hanyang-university'), 'Hanyang University Erica Campus', 'Branch campus', 'Gyeonggi-do', 2025, 2503),
(null, 'HYUPSUNG UNIVERSITY', null, 'Gyeonggi-do', 2025, 98),
(null, 'The Catholic University Of Korea', null, 'Gyeonggi-do', 2025, 1665),
(null, 'Kangnam University', null, 'Gyeonggi-do', 2025, 485),
(null, 'Hansei University', null, 'Gyeonggi-do', 2025, 22),
((select id from universities where slug='gachon-university'), 'Gachon University', null, 'Gyeonggi-do', 2025, 4996),
(null, 'Kyonggi University', null, 'Gyeonggi-do', 2025, 812),
((select id from universities where slug='chungang-university'), 'Chung-Ang University', 'Campus 2', 'Gyeonggi-do', 2025, 678),
(null, 'Tech University of Korea', null, 'Gyeonggi-do', 2025, 529),
(null, 'Korea Aerospace University', null, 'Gyeonggi-do', 2025, 194),
(null, 'Joong-Ang Sangha University', null, 'Gyeonggi-do', 2025, 4),
(null, 'Yewon Arts University', 'Campus 2', 'Gyeonggi-do', 2025, 309),
(null, 'HWASUNG MEDI-SCIENCE UNIVERSITY', null, 'Gyeonggi-do', 2025, 1),
(null, 'CHA University', null, 'Gyeonggi-do', 2025, 29),
(null, 'Pyeongtaek University', null, 'Gyeonggi-do', 2025, 149),
(null, 'Hankyong National University', null, 'Gyeonggi-do', 2025, 245),
(null, 'Dankook University', null, 'Gyeonggi-do', 2025, 956),
(null, 'Seoul Theological University', null, 'Gyeonggi-do', 2025, 407),
(null, 'Eulji University', 'Campus 3', 'Gyeonggi-do', 2025, 1),
(null, 'Seoul Jangsin University', null, 'Gyeonggi-do', 2025, 42),
(null, 'Shinhan University', 'Campus 2', 'Gyeonggi-do', 2025, 1127),
(null, 'Sungkyul University', null, 'Gyeonggi-do', 2025, 388),
(null, 'Kyungdong University', 'Campus 4', 'Gyeonggi-do', 2025, 392),
(null, 'Myongji University Natural Science Campus', null, 'Gyeonggi-do', 2025, 301),
(null, 'Shinhan Unvirsity', null, 'Gyeonggi-do', 2025, 10),
(null, 'Suwon Catholic University', null, 'Gyeonggi-do', 2025, 1),
(null, 'The University Of Suwon', null, 'Gyeonggi-do', 2025, 73),
(null, 'ACTS University', null, 'Gyeonggi-do', 2025, 2),
(null, 'Ajou University', null, 'Gyeonggi-do', 2025, 2411),
(null, 'Hanshin University', null, 'Gyeonggi-do', 2025, 242),
(null, 'Eulji University', 'Campus 2', 'Gyeonggi-do', 2025, 18),
(null, 'Gukje Cyber University', null, 'Gyeonggi-do', 2025, 9),
(null, 'Yong In University', null, 'Gyeonggi-do', 2025, 138),
(null, 'Daejin University', null, 'Gyeonggi-do', 2025, 1104),
(null, 'Anyang University', null, 'Gyeonggi-do', 2025, 16),
(null, 'Chonnam National University', null, 'Gwangju', 2025, 960),
(null, 'Songwon University', null, 'Gwangju', 2025, 400),
(null, 'Gwangju Institute Of Science And Technology', null, 'Gwangju', 2025, 69),
(null, 'Chosun University', null, 'Gwangju', 2025, 295),
(null, 'Nambu University', null, 'Gwangju', 2025, 231),
(null, 'Kwangshin University', null, 'Gwangju', 2025, 115),
(null, 'Honam Theological University & Seminary', null, 'Gwangju', 2025, 2),
(null, 'Kwangju Women''S University', null, 'Gwangju', 2025, 533),
(null, 'Gwangju University', null, 'Gwangju', 2025, 692),
(null, 'Honam University', null, 'Gwangju', 2025, 1118),
(null, 'Kyungdong University', 'Campus 3', 'Gangwon-do', 2025, 2),
(null, 'Kangwon National University', null, 'Gangwon-do', 2025, 1015),
(null, 'Gangneung Wonju National University', 'Campus 2', 'Gangwon-do', 2025, 8),
(null, 'Kangwon National University', 'Campus 2', 'Gangwon-do', 2025, 99),
(null, 'Kyungdong University', null, 'Gangwon-do', 2025, 1169),
(null, 'Gangneung Wonju National University', null, 'Gangwon-do', 2025, 299),
(null, 'Sangji University', null, 'Gangwon-do', 2025, 75),
(null, 'Hallym University', null, 'Gangwon-do', 2025, 168),
(null, 'Halla University', null, 'Gangwon-do', 2025, 196),
(null, 'Yonsei University MIRAE Campus', 'Branch campus', 'Gangwon-do', 2025, 622),
(null, 'Catholic Kwandong University', null, 'Gangwon-do', 2025, 157),
(null, 'Pai Chai University', null, 'Daejeon', 2025, 1131),
(null, 'Mokwon University', null, 'Daejeon', 2025, 1494),
(null, 'Korea Advanced Institute of Science and Technology(KAIST)', null, 'Daejeon', 2025, 481),
(null, 'Konyang Cyber University', null, 'Daejeon', 2025, 13),
(null, 'Chungnam National University', null, 'Daejeon', 2025, 674),
(null, 'Daejeon University', null, 'Daejeon', 2025, 356),
(null, 'Eulji University', null, 'Daejeon', 2025, 2),
(null, 'Hanbat National University', null, 'Daejeon', 2025, 305),
(null, 'Konyang University', 'Campus 2', 'Daejeon', 2025, 42),
(null, 'Woosong University', null, 'Daejeon', 2025, 2302),
(null, 'Korea Baptist Theological University/Seminary', null, 'Daejeon', 2025, 4),
(null, 'Hannam University', null, 'Daejeon', 2025, 1599),
(null, 'Kyungpook National University', null, 'Daegu', 2025, 1660),
(null, 'Daegu National University Of Education', null, 'Daegu', 2025, 2),
(null, 'Daegu Gyeongbuk Institute of Science and Technology', null, 'Daegu', 2025, 15),
(null, 'Keimyung University', null, 'Daegu', 2025, 3044),
(null, 'Sun Moon University', null, 'Chungcheongnam-do', 2025, 2200),
(null, 'Korea University of Technology and Education', null, 'Chungcheongnam-do', 2025, 75),
(null, 'Kongju National University', null, 'Chungcheongnam-do', 2025, 307),
(null, 'Hoseo University', null, 'Chungcheongnam-do', 2025, 504),
(null, 'Global Cyber University', null, 'Chungcheongnam-do', 2025, 168),
(null, 'Sangmyung University', 'Campus 2', 'Chungcheongnam-do', 2025, 45),
(null, 'Korea National University Of Heritage', null, 'Chungcheongnam-do', 2025, 4),
(null, 'Chungwoon University', null, 'Chungcheongnam-do', 2025, 458),
(null, 'Hanseo University', null, 'Chungcheongnam-do', 2025, 205),
(null, 'Korea Nazarene University', null, 'Chungcheongnam-do', 2025, 413),
(null, 'Soonchunhyang University', null, 'Chungcheongnam-do', 2025, 675),
(null, 'Joongbu University', null, 'Chungcheongnam-do', 2025, 971),
(null, 'Dankook University', 'Campus 2', 'Chungcheongnam-do', 2025, 147),
(null, 'Konyang University', null, 'Chungcheongnam-do', 2025, 430),
(null, 'Namseoul University', null, 'Chungcheongnam-do', 2025, 1544),
(null, 'Baekseok University', null, 'Chungcheongnam-do', 2025, 469),
(null, 'Semyung University', null, 'Chungcheongbuk-do', 2025, 237),
(null, 'Catholic Kkottongnae University', null, 'Chungcheongbuk-do', 2025, 2),
(null, 'Seowon University', null, 'Chungcheongbuk-do', 2025, 1001),
(null, 'U1 University', null, 'Chungcheongbuk-do', 2025, 185),
(null, 'Chungbuk National University', null, 'Chungcheongbuk-do', 2025, 826),
(null, 'Cheongju University', null, 'Chungcheongbuk-do', 2025, 1952),
(null, 'Korea National University Of Transportation', null, 'Chungcheongbuk-do', 2025, 113),
(null, 'Jungwon University', null, 'Chungcheongbuk-do', 2025, 172),
(null, 'Far East University', null, 'Chungcheongbuk-do', 2025, 806),
(null, 'Konkuk University', 'Branch campus', 'Chungcheongbuk-do', 2025, 218),
(null, 'Korea National University Of Education', null, 'Chungcheongbuk-do', 2025, 2),
(null, 'Catholic University Of Pusan', null, 'Busan', 2025, 614),
(null, 'Busan University Of Foreign Studies', null, 'Busan', 2025, 1192),
(null, 'Youngsan University', null, 'Busan', 2025, 842),
(null, 'Dong-Eui University', null, 'Busan', 2025, 586),
(null, 'Dong-A University', null, 'Busan', 2025, 1676),
(null, 'Hwashin Cyber University', null, 'Busan', 2025, 4),
(null, 'Dongseo University', null, 'Busan', 2025, 1497),
(null, 'Pukyong National University', null, 'Busan', 2025, 1115),
(null, 'Pusan National University', null, 'Busan', 2025, 1134),
(null, 'Silla University', null, 'Busan', 2025, 1093),
(null, 'Busandigital University', null, 'Busan', 2025, 48),
(null, 'Tongmyong University', null, 'Busan', 2025, 1056),
(null, 'Korea Maritime & Ocean University', null, 'Busan', 2025, 241),
(null, 'Kosin University', null, 'Busan', 2025, 79),
(null, 'Kyungsung University', null, 'Busan', 2025, 1966);



-- ============================================================
-- 가천대학교 학과
-- 기준: 2026학년도 2학기 외국인 학부 신입학 모집요강
-- ============================================================

insert into university_departments (
  university_id,
  department_name_ko,
  department_name_en,
  guideline_year
)
select
  u.id,
  d.department_name_ko,
  d.department_name_en,
  d.guideline_year
from universities u
cross join (
  values

    -- 국제대학
    ('국제학부 한국학전공', 'International (Koreanology)', 2026),
    ('국제자유전공', 'International Liberal Studies', 2026),

    -- 경영대학
    ('경영학과', 'Business Administration', 2026),
    ('경영학과(ENG)', 'Business Administration (ENG)', 2026),
    ('미디어커뮤니케이션학과', 'Media Communication', 2026),
    ('관광경영학과', 'Tourism Management', 2026),
    ('심리학과', 'Psychology', 2026),
    ('한국어교육학과', 'Korean Language Education', 2026),

    -- IT융합대학
    ('컴퓨터공학과', 'Computer Engineering', 2026),
    ('컴퓨터공학과(ENG)', 'Computer Engineering (ENG)', 2026),

    -- 금융수학과 / 회계세무 / 의료산업경영
    ('회계세무학과', 'Accounting & Taxation', 2026),
    ('의료산업경영학과', 'Healthcare Industrial Management', 2026),
    ('금융·빅데이터학부', 'Finance & Big Data', 2026),

    -- 사회과학
    ('경제학과', 'Economics', 2026),
    ('응용통계학과', 'Applied Statistics', 2026),
    ('패션산업학과', 'Fashion Industry', 2026),

    -- 법과대학
    -- 모집단위가 비어 있고 비고에서 2학년 선택 전공을 확인
    ('법학과', 'Law', 2026),
    ('행정학과', 'Public Administration', 2026),

    -- AI인문대학
    -- 모집단위가 비어 있고 비고에서 2학년 선택 전공을 확인
    ('한국어문학과', 'Korean Language & Literature', 2026),
    ('영미어문학과', 'English Language & Literature', 2026),
    ('중국어문학과', 'Chinese Language & Literature', 2026),
    ('일본어문학과', 'Japanese Language & Literature', 2026),
    ('유럽어문학과', 'European Language & Literature', 2026),

    -- 공과대학
    ('도시계획·조경학부', 'Urban Planning & Landscape', 2026),
    ('건축학부', 'Architecture', 2026),
    ('건축공학과', 'Architecture Engineering', 2026),
    ('화공생명배터리공학부', 'Chemical & Biological & Battery Engineering', 2026),
    ('기계공학부', 'Mechanical Engineering', 2026),
    ('건설환경공학과', 'Construction Environment Engineering', 2026),
    ('신소재공학과', 'New Material Engineering', 2026),

    -- 바이오나노 / 자연과학
    ('바이오나노학과', 'Bio-Nano', 2026),
    ('식품생명공학과', 'Food & Life Engineering', 2026),
    ('식품영양학과', 'Food & Nutrition', 2026),
    ('생명과학과', 'Life Science', 2026),
    ('반도체물리학과', 'Semiconductor Physics', 2026),
    ('화학과', 'Chemistry', 2026),

    -- 전기공학
    ('전기공학과', 'Electrical Engineering', 2026),

    -- 반도체대학
    -- 모집단위는 비어 있고 비고에서 전자공학 전공 선택
    ('전자공학', 'Electronic Engineering', 2026),

    -- 미술·디자인
    ('미술·디자인학부 - 회화전공', 'Arts & Design - Fine Arts', 2026),
    ('미술·디자인학부 - 조소전공', 'Arts & Design - Sculpture', 2026),
    ('미술·디자인학부 - 시각디자인전공', 'Arts & Design - Visual Design', 2026),
    ('미술·디자인학부 - 산업디자인전공', 'Arts & Design - Industrial Design', 2026),

    -- 음악
    ('음악학부 - 성악전공', 'Music - Voice', 2026),
    ('음악학부 - 기악전공(관현악)', 'Music - Pipe & String Music', 2026),
    ('음악학부 - 기악전공(피아노)', 'Music - Piano', 2026),
    ('음악학부 - 작곡전공', 'Music - Composition', 2026),

    -- 체육
    ('체육학부 - 체육전공', 'Physical Education - Physical Education', 2026),
    ('체육학부 - 태권도전공', 'Physical Education - Taekwondo', 2026),

    -- 연기
    ('연기예술학과', 'Acting Arts', 2026),

    -- 메디컬캠퍼스
    ('치위생학과', 'Dental Hygiene', 2026),
    ('응급구조학과', 'Emergency Medical Technology', 2026),
    ('물리치료학과', 'Physical Therapy', 2026),
    ('방사선학과', 'Radiology', 2026)

) as d(
  department_name_ko,
  department_name_en,
  guideline_year
)
where u.slug = 'gachon-university'

on conflict (university_id, department_name_ko, guideline_year)
do update set
  department_name_en = excluded.department_name_en,
  updated_at = now();

  

  insert into university_departments (
  university_id,
  department_name_ko,
  department_name_en,
  guideline_year
)
select
  u.id,
  d.department_name_ko,
  d.department_name_en,
  d.guideline_year
from universities u
cross join (
  values

    -- 대양휴머니티칼리지
    ('자유전공학부', 'Liberal Studies', 2027),

    -- 인문과학대학
    ('국어국문학과', 'Korean Language and Literature', 2027),
    ('국제학부 - 영어데이터융합전공', 'International Studies - English Data Convergence', 2027),
    ('국제학부 - 국제일본학전공', 'International Studies - International Japanese Studies', 2027),
    ('국제학부 - 중국통상학전공', 'International Studies - Chinese Trade and Commerce', 2027),
    ('역사학과', 'History', 2027),
    ('교육학과', 'Education', 2027),

    -- 사회과학대학
    ('행정학과', 'Public Administration', 2027),
    ('미디어커뮤니케이션학과', 'Media and Communication', 2027),
    ('법학과', 'Law', 2027),

    -- 경영경제대학
    ('경영학부', 'Faculty of Business Administration', 2027),
    ('경제학과', 'Economics', 2027),

    -- 호텔관광대학
    ('호텔관광외식경영학부 - 호텔관광경영학전공', 'Hotel, Tourism and Food Service Management - Hospitality and Tourism Management', 2027),
    ('호텔관광외식경영학부 - 외식경영학전공', 'Hotel, Tourism and Food Service Management - Food Service Management', 2027),

    -- 자연과학대학
    ('수학통계학과', 'Mathematics and Statistics', 2027),
    ('물리천문학과', 'Physics and Astronomy', 2027),
    ('화학과', 'Chemistry', 2027),

    -- 생명과학대학
    ('생명시스템학부 - 식품생명공학전공', 'School of Biological Systems - Food Science and Biotechnology', 2027),
    ('생명시스템학부 - 바이오융합공학전공', 'School of Biological Systems - Integrative Bioscience and Biotechnology', 2027),
    ('생명시스템학부 - 바이오산업자원공학전공', 'School of Biological Systems - Bioresources Engineering', 2027),
    ('스마트생명산업융합학과', 'Integrative Biological Sciences and Industry', 2027),

    -- 인공지능융합대학
    ('AI융합전자공학과', 'AI Convergence Electronic Engineering', 2027),
    ('반도체시스템공학과', 'Semiconductor Systems Engineering', 2027),
    ('컴퓨터공학과', 'Computer Science and Engineering', 2027),
    ('정보보호학과', 'Computer and Information Security', 2027),
    ('양자지능정보학과', 'Quantum Information Science and Engineering', 2027),

    -- 창의소프트학부
    ('창의소프트학부 - 디자인이노베이션전공', 'Faculty of Creative Studies - Design Innovation', 2027),
    ('창의소프트학부 - 만화애니메이션텍전공', 'Faculty of Creative Studies - Comics & Animation Technology', 2027),

    -- 첨단융합
    ('인공지능데이터사이언스학과', 'Artificial Intelligence and Data Science', 2027),
    ('AI로봇학과', 'Artificial Intelligence and Robotics', 2027),
    ('지능정보융합학과', 'Intelligence and Information Convergence', 2027),
    ('콘텐츠소프트웨어학과', 'Software', 2027),

    -- 공과대학
    ('건축공학과', 'Architectural Engineering', 2027),
    ('건축학과(5년)', 'Architecture (5-year)', 2027),
    ('건설환경공학과', 'Civil and Environmental Engineering', 2027),
    ('환경융합공학과', 'Environment and Energy', 2027),
    ('에너지자원공학과', 'Energy Resources and Geosystems Engineering', 2027),
    ('기계공학과', 'Mechanical Engineering', 2027),

    -- 우주항공시스템공학부
    ('우주항공시스템공학부 - 우주항공공학전공', 'School of Aerospace System Engineering - Aerospace Engineering', 2027),
    ('우주항공시스템공학부 - 지능형드론융합전공', 'School of Aerospace System Engineering - Intelligent Drone Convergence', 2027),

    ('나노신소재공학과', 'Nano Technology and Advanced Materials Engineering', 2027),
    ('양자원자력공학과', 'Quantum and Nuclear Engineering', 2027),

    -- 예체능대학
    ('회화과', 'Painting', 2027),
    ('패션디자인학과', 'Fashion Design', 2027),
    ('음악과', 'Music', 2027),
    ('체육학과', 'Physical Education', 2027),
    ('무용과', 'Dance', 2027),
    ('영화예술학과', 'Film Art', 2027)

) as d(
  department_name_ko,
  department_name_en,
  guideline_year
)
where u.slug = 'sejong-university'

on conflict (university_id, department_name_ko, guideline_year)
do update set
  department_name_en = excluded.department_name_en,
  updated_at = now();


  insert into university_departments (
  university_id,
  department_name_ko,
  department_name_en,
  guideline_year
)
select
  u.id,
  d.department_name_ko,
  d.department_name_en,
  d.guideline_year
from universities u
cross join (
  values

    -- ========================================
    -- 인문대학
    -- ========================================

    ('국어국문학부 - 국어국문학',
     'School of Korean Language and Literature - Korean Language and Literature',
     2027),

    ('국어국문학부 - 한국어교육·한국문화',
     'School of Korean Language and Literature - Korean Language Education and Culture',
     2027),

    ('영어영문학과',
     'Department of English Language and Literature',
     2027),

    ('유럽문화학부 - 독일어문학',
     'School of European Languages and Cultures - German Language and Literature',
     2027),

    ('유럽문화학부 - 프랑스어문학',
     'School of European Languages and Cultures - French Language and Literature',
     2027),

    ('유럽문화학부 - 러시아어문학',
     'School of European Languages and Cultures - Russian Language and Literature',
     2027),

    ('아시아문화학부 - 일본어문학',
     'School of Asian Languages and Cultures - Japanese Language and Literature',
     2027),

    ('아시아문화학부 - 중국어문학',
     'School of Asian Languages and Cultures - Chinese Language and Literature',
     2027),

    ('철학과',
     'Department of Philosophy',
     2027),

    ('역사학과',
     'Department of History',
     2027),


    -- ========================================
    -- 사회과학대학
    -- ========================================

    ('정치국제학과',
     'Department of Political Science and International Relations',
     2027),

    ('공공인재학부',
     'School of Public Service',
     2027),

    ('심리학과',
     'Department of Psychology',
     2027),

    ('문헌정보학과',
     'Department of Library and Information Science',
     2027),

    ('사회복지학부',
     'School of Social Welfare',
     2027),

    ('미디어커뮤니케이션학부',
     'School of Media and Communication',
     2027),

    ('사회학과',
     'Department of Sociology',
     2027),

    ('도시계획·부동산학과',
     'Department of Urban Planning and Real Estate',
     2027),


    -- ========================================
    -- 자연과학대학
    -- ========================================

    ('물리학과',
     'Department of Physics',
     2027),

    ('화학과',
     'Department of Chemistry',
     2027),

    ('생명과학과',
     'Department of Biological Sciences',
     2027),

    ('수학과',
     'Department of Mathematics',
     2027),


    -- ========================================
    -- 공과대학
    -- ========================================

    ('사회기반시스템공학부 - 건설환경플랜트공학',
     'School of Civil and Infrastructure Engineering - Civil, Environmental and Plant Engineering',
     2027),

    ('사회기반시스템공학부 - 도시시스템공학',
     'School of Civil and Infrastructure Engineering - Urban Systems Engineering',
     2027),

    ('건축학부 - 건축학 5년제',
     'School of Architecture and Building Science - Architecture (5-year)',
     2027),

    ('건축학부 - 건축공학 4년제',
     'School of Architecture and Building Science - Architectural Engineering (4-year)',
     2027),

    ('화학공학과',
     'Department of Chemical Engineering',
     2027),

    ('기계공학부',
     'School of Mechanical Engineering',
     2027),


    -- ========================================
    -- 창의ICT공과대학
    -- ========================================

    ('전자전기공학부',
     'School of Electrical and Electronics Engineering',
     2027),

    ('융합공학부 - 나노소재공학',
     'School of Integrative Engineering - Nano Materials Engineering',
     2027),

    ('융합공학부 - 바이오메디컬공학',
     'School of Integrative Engineering - Biomedical Engineering',
     2027),


    -- ========================================
    -- 소프트웨어대학
    -- ========================================

    ('소프트웨어학부',
     'School of Computer Science and Engineering',
     2027),


    -- ========================================
    -- 경영경제대학
    -- ========================================

    ('경영학부 - 경영학',
     'School of Business Administration - Business Administration',
     2027),

    ('경제학부',
     'School of Economics',
     2027),

    ('응용통계학과',
     'Department of Applied Statistics',
     2027),

    ('광고홍보학부 - 글로벌광고PR',
     'School of Advertising and Public Relations - Global Advertising and PR',
     2027),

    ('국제물류학과',
     'Department of International Logistics',
     2027),


    -- ========================================
    -- 의과대학
    -- ========================================

    ('의학부',
     'College of Medicine - Medicine',
     2027),


    -- ========================================
    -- 가상융합대학
    -- ========================================

    ('게임융합학과',
     'Department of Game Convergence',
     2027),


    -- ========================================
    -- 생명공학대학
    -- ========================================

    ('생명자원공학부 - 동물생명공학',
     'School of Animal and Plant Resources - Animal Biotechnology',
     2027),

    ('생명자원공학부 - 식물생명공학',
     'School of Animal and Plant Resources - Plant Biotechnology',
     2027),

    ('식품공학부 - 식품공학',
     'School of Food Science and Technology - Food Science and Engineering',
     2027),

    ('식품공학부 - 식품영양학',
     'School of Food Science and Technology - Food and Nutrition',
     2027),


    -- ========================================
    -- 예술대학
    -- ========================================

    ('공연영상창작학부 - 연극(연기)',
     'School of Performing Arts and Media - Theatre (Acting)',
     2027),

    ('공연영상창작학부 - 영화',
     'School of Performing Arts and Media - Film',
     2027),

    ('공연영상창작학부 - 사진',
     'School of Performing Arts and Media - Photography',
     2027),

    ('공연영상창작학부 - 무용(한국/현대/발레)',
     'School of Performing Arts and Media - Dance (Korean/Contemporary/Ballet)',
     2027),

    ('디자인학부 - 공예',
     'School of Design - Crafts',
     2027),

    ('디자인학부 - 산업디자인',
     'School of Design - Industrial Design',
     2027),

    ('디자인학부 - 시각디자인',
     'School of Design - Visual Communication Design',
     2027),

    ('디자인학부 - 실내환경디자인',
     'School of Design - Housing and Interior Design',
     2027),

    ('디자인학부 - 패션',
     'School of Design - Fashion Design',
     2027),

    ('음악학부 - 작곡',
     'School of Music - Composition',
     2027),

    ('음악학부 - 성악',
     'School of Music - Vocal Music',
     2027),

    ('음악학부 - 피아노',
     'School of Music - Piano',
     2027),

    ('음악학부 - 관현악',
     'School of Music - Orchestral Music',
     2027),

    ('전통예술학부 - 음악예술',
     'School of Traditional Arts - Korean Music Arts',
     2027),

    ('전통예술학부 - 연희예술',
     'School of Traditional Arts - Traditional Performing Arts',
     2027),

    ('글로벌예술학부 - TV방송연예',
     'School of Global Arts - TV Broadcasting and Entertainment',
     2027),

    ('글로벌예술학부 - 실용음악',
     'School of Global Arts - Applied Music',
     2027),

    ('글로벌예술학부 - 게임콘텐츠·애니메이션',
     'School of Global Arts - Game Contents and Animation',
     2027),


    -- ========================================
    -- 체육대학
    -- ========================================

    ('스포츠과학부 - 생활·레저스포츠/스포츠산업',
     'School of Sport Sciences - Leisure and Sports / Sports Industry',
     2027),


    -- ========================================
    -- 예술공학대학
    -- ========================================

    ('예술공학부',
     'School of Art and Technology',
     2027)

) as d(
  department_name_ko,
  department_name_en,
  guideline_year
)
where u.slug = 'chungang-university'

on conflict (university_id, department_name_ko, guideline_year)
do update set
  department_name_en = excluded.department_name_en,
  updated_at = now();

  insert into university_departments (
  university_id,
  department_name_ko,
  department_name_en,
  guideline_year
)
select
  u.id,
  d.department_name_ko,
  d.department_name_en,
  d.guideline_year
from universities u
cross join (
  values

    -- ========================================
    -- 공과대학
    -- ========================================

    ('건축학부(5년제)',
     'School of Architecture (5-year)',
     2028),

    ('건축공학부(4년제)',
     'School of Architectural Engineering (4-year)',
     2028),

    ('건설환경공학과',
     'Department of Civil and Environmental Engineering',
     2028),

    ('도시공학과',
     'Department of Urban Engineering',
     2028),

    ('자원환경공학과',
     'Department of Earth Resources and Environmental Engineering',
     2028),

    ('융합전자공학부',
     'School of Electronic Engineering',
     2028),

    ('컴퓨터소프트웨어학부',
     'School of Computer Science and Software',
     2028),

    ('정보시스템학과',
     'Department of Information Systems',
     2028),

    ('전기·생체공학부 - 전기공학',
     'School of Electrical and Biomedical Engineering - Electrical Engineering',
     2028),

    ('전기·생체공학부 - 바이오메디컬공학',
     'School of Electrical and Biomedical Engineering - Biomedical Engineering',
     2028),

    ('신소재공학부',
     'School of Materials Science and Engineering',
     2028),

    ('화학공학과',
     'Department of Chemical Engineering',
     2028),

    ('생명공학과',
     'Department of Biological Engineering',
     2028),

    ('유기나노공학과',
     'Department of Organic and Nano Engineering',
     2028),

    ('에너지공학과',
     'Department of Energy Engineering',
     2028),

    ('기계공학부',
     'School of Mechanical Engineering',
     2028),

    ('원자력공학과',
     'Department of Nuclear Engineering',
     2028),

    ('산업공학과',
     'Department of Industrial Engineering',
     2028),

    ('미래자동차공학과',
     'Department of Automotive Engineering',
     2028),

    ('데이터사이언스학부(영어과정)',
     'School of Data Science (English Program)',
     2028),


    -- ========================================
    -- 인문과학대학
    -- ========================================

    ('국어국문학과',
     'Department of Korean Language and Literature',
     2028),

    ('중어중문학과',
     'Department of Chinese Language and Literature',
     2028),

    ('영어영문학과',
     'Department of English Language and Literature',
     2028),

    ('독어독문학과',
     'Department of German Language and Literature',
     2028),

    ('사학과',
     'Department of History',
     2028),

    ('철학과',
     'Department of Philosophy',
     2028),


    -- ========================================
    -- 사회과학대학
    -- ========================================

    ('정치외교학과',
     'Department of Political Science and International Studies',
     2028),

    ('사회학과',
     'Department of Sociology',
     2028),

    ('미디어커뮤니케이션학과',
     'Department of Media and Communication',
     2028),

    ('관광학부',
     'School of Tourism',
     2028),


    -- ========================================
    -- 자연과학대학
    -- ========================================

    ('수학과',
     'Department of Mathematics',
     2028),

    ('물리학과',
     'Department of Physics',
     2028),

    ('화학과',
     'Department of Chemistry',
     2028),

    ('생명과학과',
     'Department of Life Science',
     2028),


    -- ========================================
    -- 정책과학대학
    -- ========================================

    ('정책학과',
     'Department of Policy Studies',
     2028),

    ('행정학과',
     'Department of Public Administration',
     2028),


    -- ========================================
    -- 경제금융대학
    -- ========================================

    ('경제금융학부',
     'School of Economics and Finance',
     2028),


    -- ========================================
    -- 경영대학
    -- ========================================

    ('경영학부',
     'School of Business',
     2028),

    ('경영학부(영어과정)',
     'School of Business (English Program)',
     2028),

    ('파이낸스경영학과',
     'Department of Finance',
     2028),


    -- ========================================
    -- 사범대학
    -- 2028학년도부터 외국인 신입생 모집
    -- ========================================

    ('국어교육과',
     'Department of Korean Language Education',
     2028),


    -- ========================================
    -- 생활과학대학
    -- ========================================

    ('의류학과(인문)',
     'Department of Clothing and Textiles (Humanities)',
     2028),

    ('식품영양학과(자연)',
     'Department of Food and Nutrition (Natural Sciences)',
     2028),

    ('실내건축디자인학과(인문)',
     'Department of Interior Architecture Design (Humanities)',
     2028),


    -- ========================================
    -- 음악대학
    -- ========================================

    ('성악과',
     'Department of Vocal Music',
     2028),

    ('작곡과',
     'Department of Composition',
     2028),

    ('피아노과',
     'Department of Piano',
     2028),

    ('관현악과 - 바이올린',
     'Department of Orchestral Music - Violin',
     2028),

    ('관현악과 - 비올라',
     'Department of Orchestral Music - Viola',
     2028),

    ('관현악과 - 첼로',
     'Department of Orchestral Music - Cello',
     2028),

    ('관현악과 - 더블베이스',
     'Department of Orchestral Music - Double Bass',
     2028),

    ('관현악과 - 플루트',
     'Department of Orchestral Music - Flute',
     2028),

    ('관현악과 - 오보에',
     'Department of Orchestral Music - Oboe',
     2028),

    ('관현악과 - 클라리넷',
     'Department of Orchestral Music - Clarinet',
     2028),

    ('관현악과 - 바순',
     'Department of Orchestral Music - Bassoon',
     2028),

    ('관현악과 - 색소폰',
     'Department of Orchestral Music - Saxophone',
     2028),

    ('관현악과 - 호른',
     'Department of Orchestral Music - Horn',
     2028),

    ('관현악과 - 트럼펫',
     'Department of Orchestral Music - Trumpet',
     2028),

    ('관현악과 - 테너트롬본',
     'Department of Orchestral Music - Tenor Trombone',
     2028),

    ('관현악과 - 베이스트롬본',
     'Department of Orchestral Music - Bass Trombone',
     2028),

    ('관현악과 - 튜바',
     'Department of Orchestral Music - Tuba',
     2028),

    ('관현악과 - 타악기',
     'Department of Orchestral Music - Percussion',
     2028),

    ('국악과 - 가야금',
     'Department of Korean Traditional Music - Gayageum',
     2028),

    ('국악과 - 거문고',
     'Department of Korean Traditional Music - Geomungo',
     2028),

    ('국악과 - 피리',
     'Department of Korean Traditional Music - Piri',
     2028),

    ('국악과 - 대금',
     'Department of Korean Traditional Music - Daegeum',
     2028),

    ('국악과 - 해금',
     'Department of Korean Traditional Music - Haegeum',
     2028),

    ('국악과 - 아쟁',
     'Department of Korean Traditional Music - Ajaeng',
     2028),

    ('국악과 - 타악',
     'Department of Korean Traditional Music - Percussion',
     2028),

    ('국악과 - 성악(정가)',
     'Department of Korean Traditional Music - Vocal (Jeongga)',
     2028),

    ('국악과 - 성악(판소리)',
     'Department of Korean Traditional Music - Vocal (Pansori)',
     2028),

    ('국악과 - 성악(경서도소리)',
     'Department of Korean Traditional Music - Vocal (Gyeongseo-do Traditional Song)',
     2028),

    ('국악과 - 작곡',
     'Department of Korean Traditional Music - Composition',
     2028),

    ('국악과 - 이론',
     'Department of Korean Traditional Music - Theory',
     2028),


    -- ========================================
    -- 예술·체육대학
    -- ========================================

    ('스포츠산업과학부 - 스포츠매니지먼트',
     'School of Sport Industry and Science - Sport Management',
     2028),

    ('스포츠산업과학부 - 스포츠사이언스',
     'School of Sport Industry and Science - Sport Science',
     2028),

    ('연극영화학과 - 영화',
     'Department of Theatre and Film - Film',
     2028),

    ('연극영화학과 - 연출 및 스탭',
     'Department of Theatre and Film - Directing and Staff',
     2028),

    ('연극영화학과 - 연기',
     'Department of Theatre and Film - Acting',
     2028),

    ('무용학과 - 한국무용',
     'Department of Dance - Korean Dance',
     2028),

    ('무용학과 - 현대무용',
     'Department of Dance - Contemporary Dance',
     2028),

    ('무용학과 - 발레',
     'Department of Dance - Ballet',
     2028),


    -- ========================================
    -- 국제대학
    -- ========================================

    ('국제학부(영어과정)',
     'School of International Studies (English Program)',
     2028),

    ('글로벌콘텐츠융합학부',
     'School of Global Content Convergence',
     2028)

) as d(
  department_name_ko,
  department_name_en,
  guideline_year
)
where u.slug = 'hanyang-university'

on conflict (university_id, department_name_ko, guideline_year)
do update set
  department_name_en = excluded.department_name_en,
  updated_at = now();


insert into university_departments (
  university_id,
  department_name_ko,
  department_name_en,
  guideline_year
)
select
  u.id,
  d.department_name_ko,
  d.department_name_en,
  d.guideline_year
from universities u
cross join (
  values

    -- ========================================
    -- 인문대학
    -- ========================================

    ('국어국문학과',
     'Department of Korean Language and Literature',
     2028),

    ('사학과',
     'Department of History',
     2028),

    ('철학과',
     'Department of Philosophy',
     2028),

    ('종교학과',
     'Department of Religious Studies',
     2028),

    ('영문학부(영미어문전공)',
     'School of English - English and American Language and Literature',
     2028),

    ('유럽문화학과',
     'Department of European Culture',
     2028),

    ('중국문화학과',
     'Department of Chinese Culture',
     2028),

    ('인문학기반자유전공학부',
     'School of Liberal Arts and Humanities',
     2028),


    -- ========================================
    -- 사회과학대학
    -- ========================================

    ('사회학과',
     'Department of Sociology',
     2028),

    ('정치외교학과',
     'Department of Political Science and Diplomacy',
     2028),

    ('심리학과',
     'Department of Psychology',
     2028),


    -- ========================================
    -- 경제대학
    -- ========================================

    ('경제학과',
     'Department of Economics',
     2028),


    -- ========================================
    -- 경영대학
    -- ========================================

    ('경영학부(경영학전공)',
     'School of Business - Business Administration',
     2028),


    -- ========================================
    -- 로욜라국제대학
    -- ========================================

    ('글로벌한국학부(한국언어문화전공)',
     'School of Global Korean Studies - Korean Language and Culture',
     2028),

    ('글로벌융합학부(글로벌경영전공)',
     'School of Global Interdisciplinary Studies - Global Business',
     2028),

    ('글로벌융합학부(글로벌경제전공)',
     'School of Global Interdisciplinary Studies - Global Economics',
     2028),

    ('글로벌융합학부(글로벌미디어전공)',
     'School of Global Interdisciplinary Studies - Global Media',
     2028),


    -- ========================================
    -- 지식융합미디어대학
    -- ========================================

    ('신문방송학과',
     'Department of Journalism and Mass Communication',
     2028),

    ('미디어&엔터테인먼트학과',
     'Department of Media and Entertainment',
     2028),

    ('아트&테크놀로지학과',
     'Department of Art & Technology',
     2028),


    -- ========================================
    -- 자연과학대학
    -- ========================================

    ('수학과',
     'Department of Mathematics',
     2028),

    ('물리학과',
     'Department of Physics',
     2028),

    ('화학과',
     'Department of Chemistry',
     2028),

    ('생명과학과',
     'Department of Life Sciences',
     2028),

    ('SCIENCE기반자유전공학부',
     'School of Science-Based Liberal Studies',
     2028),



    -- ========================================
    -- 공과대학
    -- ========================================

    ('전자공학과',
     'Department of Electronic Engineering',
     2028),

    ('화공생명공학과',
     'Department of Chemical and Biomolecular Engineering',
     2028),

    ('기계공학과',
     'Department of Mechanical Engineering',
     2028),

    ('반도체공학과',
     'Department of Semiconductor Engineering',
     2028),


    -- ========================================
    -- 소프트웨어융합대학
    -- ========================================

    ('컴퓨터공학과',
     'Department of Computer Science and Engineering',
     2028),

    ('인공지능학과',
     'Department of Artificial Intelligence',
     2028),

    ('AI기반자유전공학부',
     'School of AI-Based Liberal Studies',
     2028),


    -- ========================================
    -- 영어트랙
    -- ========================================

    ('영문학부(미국문화전공)',
     'School of English - American Culture',
     2028),

    ('경제학과',
     'Department of Economics',
     2028),

    ('경영학부(경영학전공)',
     'School of Business - Business Administration',
     2028),

    ('글로벌한국학부(글로벌한국학전공)',
     'School of Global Korean Studies - Global Korean Studies',
     2028),

    ('게페르트국제학부(국제관계전공)',
     'Gephardt Institute of International Studies - International Relations',
     2028),

    ('게페르트국제학부(국제통상전공)',
     'Gephardt Institute of International Studies - International Trade',
     2028),

    ('게페르트국제학부(아시아전공)',
     'Gephardt Institute of International Studies - Asian Studies',
     2028)

) as d(
  department_name_ko,
  department_name_en,
  guideline_year
)
where u.slug = 'sogang-university'

on conflict (university_id, department_name_ko, guideline_year)
do update set
  department_name_en = excluded.department_name_en,
  updated_at = now();
