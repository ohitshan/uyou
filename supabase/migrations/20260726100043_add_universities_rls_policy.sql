alter table universities enable row level security;

drop policy if exists "누구나 읽기 가능" on universities;

create policy "누구나 읽기 가능"
on universities for select
using (true);

grant usage on schema public to anon, authenticated;
grant select on universities to anon, authenticated;