-- schema.sql
-- Run this script in your Supabase SQL Editor (https://supabase.com/dashboard) to set up the database tables and policies.

-- 1. Create university_info table
CREATE TABLE IF NOT EXISTS public.university_info (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    university_name TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    url TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.university_info ENABLE ROW LEVEL SECURITY;

-- 3. Create Row Level Security (RLS) Policies
-- Allow anyone to read university info
CREATE POLICY "Allow public read access" 
ON public.university_info 
FOR SELECT 
USING (true);

-- Allow anyone to insert university info (required for scraping/ingesting)
CREATE POLICY "Allow public insert" 
ON public.university_info 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to update university info (required for upsert operations)
CREATE POLICY "Allow public update" 
ON public.university_info 
FOR UPDATE 
USING (true);
