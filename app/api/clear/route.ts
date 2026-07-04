import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST() {
  const { error } = await supabase
    .from('university_info')
    .delete()
    .neq('university_name', 'non_existent_university'); // Delete everything by using a condition that matches all

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Data cleared' });
}
