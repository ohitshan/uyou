import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const { data, error } = await supabase
    .from('university_info')
    .select('university_name, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const uniqueUniversityNames: string[] = [];
  const seen = new Set<string>();

  for (const item of data ?? []) {
    const name = item.university_name?.trim();
    if (!name || seen.has(name)) {
      continue;
    }
    seen.add(name);
    uniqueUniversityNames.push(name);
  }

  return NextResponse.json({ data: uniqueUniversityNames });
}
