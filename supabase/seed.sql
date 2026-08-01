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