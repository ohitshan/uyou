-- schema.sql
-- Run this script in your Supabase SQL Editor (https://supabase.com/dashboard) to set up the database tables and policies.

CREATE TABLE IF NOT EXISTS public.universities (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,

    logo_path TEXT,
    banner_path TEXT,

    site_url TEXT NOT NULL,

    region TEXT NOT NULL,

    address TEXT,

    description TEXT,

    is_active BOOLEAN NOT NULL DEFAULT true,

    display_order INTEGER NOT NULL DEFAULT 0
);

-- Optional migration for existing tables (run safely if columns/indexes already exist)
ALTER TABLE public.university_info
ADD COLUMN IF NOT EXISTS posted_at DATE;

CREATE INDEX IF NOT EXISTS idx_university_info_university_name
ON public.university_info (university_name);

CREATE INDEX IF NOT EXISTS idx_university_info_posted_at
ON public.university_info (posted_at DESC);

CREATE INDEX IF NOT EXISTS idx_university_info_created_at
ON public.university_info (created_at DESC);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.university_info ENABLE ROW LEVEL SECURITY;

-- 3. Create Row Level Security (RLS) Policies
DROP POLICY IF EXISTS "Allow public read access" ON public.university_info;
DROP POLICY IF EXISTS "Allow public insert" ON public.university_info;
DROP POLICY IF EXISTS "Allow public update" ON public.university_info;
DROP POLICY IF EXISTS "Allow service role write access" ON public.university_info;

-- Allow anyone to read university info
CREATE POLICY "Allow public read access"
ON public.university_info 
FOR SELECT 
USING (true);

-- Restrict writes to service role only
CREATE POLICY "Allow service role write access"
ON public.university_info 
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');
