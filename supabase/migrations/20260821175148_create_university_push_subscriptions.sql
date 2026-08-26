create table public.university_push_subscriptions (
  id uuid primary key default gen_random_uuid(),

  subscription_id uuid not null
    references public.push_subscriptions(id)
    on delete cascade,

  university_id uuid not null
    references public.universities(id)
    on delete cascade,

  created_at timestamptz not null default now(),

  unique (subscription_id, university_id)
);

create index idx_university_push_subscriptions_university_id
on public.university_push_subscriptions (university_id);

create index idx_university_push_subscriptions_subscription_id
on public.university_push_subscriptions (subscription_id);

grant select, insert, update, delete
on public.university_push_subscriptions
to service_role;