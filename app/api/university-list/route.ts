import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const { data, error } = await supabase
    .from('university_info')
    .select('university_name');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const uniqueUniversityNames = Array.from(
    new Set((data ?? []).map((item) => item.university_name))
  ).filter(Boolean);

  return NextResponse.json({ data: uniqueUniversityNames });
}
