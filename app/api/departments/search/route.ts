import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() || "";
  const locale = searchParams.get("locale") || "ko";

  if (q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const { data, error } = await supabase
    .from("university_departments")
    .select(
      `id, department_name_ko, department_name_en,
       universities!inner(slug, name, logo_url, university_translations!left(name))`,
    )
    .eq("universities.university_translations.locale", locale)
    .or(`department_name_ko.ilike.%${q}%,department_name_en.ilike.%${q}%`)
    .limit(30);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ results: data });
}
