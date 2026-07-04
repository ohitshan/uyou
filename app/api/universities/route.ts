import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const { data, error } = await supabase
    .from('university_info')
    .select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // 서버 측에서 날짜 파싱 후 정렬
  const sortedData = data?.sort((a: any, b: any) => {
    const dateA = a.content.match(/\d{4}-\d{2}-\d{2}/)?.[0] || '0000-00-00';
    const dateB = b.content.match(/\d{4}-\d{2}-\d{2}/)?.[0] || '0000-00-00';
    return dateB.localeCompare(dateA); // 최신순
  });

  return NextResponse.json({ data: sortedData });
}
