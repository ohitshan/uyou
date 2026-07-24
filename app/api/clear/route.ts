import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

function isAuthorizedRequest(request: Request): boolean {
  const adminSecret = process.env.ADMIN_API_SECRET;
  if (!adminSecret) {
    return true;
  }

  const authorizationHeader = request.headers.get('authorization');
  if (!authorizationHeader) {
    return false;
  }

  const [scheme, token] = authorizationHeader.split(' ');
  return scheme.toLowerCase() === 'bearer' && token === adminSecret;
}

export async function POST(request: Request) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized request' }, { status: 401 });
  }

  const { error } = await supabase
    .from('university_info')
    .delete()
    .not('id', 'is', null);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Data cleared' });
}
