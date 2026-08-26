create table public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),

  endpoint text not null unique,
  p256dh text not null,
  auth text not null,

  expiration_time timestamptz null,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger push_subscriptions_updated_at
before update on public.push_subscriptions
for each row
execute function public.update_updated_at_column();

grant select, insert, update, delete
on public.push_subscriptions
to service_role;