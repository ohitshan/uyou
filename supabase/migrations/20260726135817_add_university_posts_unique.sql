alter table university_posts
  add constraint university_posts_university_id_url_key unique (university_id, url);