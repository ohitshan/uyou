import { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { supabase } from "@/lib/supabase";
import { UniversityCard } from "@/components/university-card";
import { UniversityRanking } from "@/components/university-ranking";
import { Button } from "@/components/ui/button";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Uyou - 한국 유학 정보 통합 플랫폼",
  description: "최신 대학 입학 정보와 모집 요강을 한눈에 확인하세요.",
  openGraph: {
    title: "Uyou - 한국 유학 정보 통합 플랫폼",
    description: "최신 대학 입학 정보와 모집 요강을 한눈에 확인하세요.",
    images: [{ url: "/banner.png" }],
  },
};

async function getUniversities(locale: string) {
  const { data, error } = await supabase
    .from("universities")
    .select(
      `id, name, region, logo_url, slug,
       university_translations!left(name, region)`,
    )
    .eq("university_translations.locale", locale);

  if (error) throw error;
  return data;
}

async function getTopRankings() {
  // 가장 최근 연도 확인 (연도별 데이터가 늘어나도 항상 최신 기준으로 순위 계산)
  const { data: latestYearRow, error: yearError } = await supabase
    .from("university_statistics")
    .select("year")
    .order("year", { ascending: false })
    .limit(1)
    .single();

  if (yearError || !latestYearRow) return [];

  const { data, error } = await supabase
    .from("university_statistics")
    .select(
      `id, university_name, campus_name, foreign_student_count,
       universities(slug)`,
    )
    .eq("year", latestYearRow.year)
    .order("foreign_student_count", { ascending: false })
    .limit(10);

  if (error) throw error;

  return data.map((row) => ({
    id: row.id,
    universityName: row.university_name,
    campusName: row.campus_name,
    foreignStudentCount: row.foreign_student_count,
    slug: row.universities?.[0]?.slug ?? null,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Home");
  const universities = await getUniversities(locale);
  const rankings = await getTopRankings();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* 배너 */}
      <div className="relative mb-10 flex h-[280px] w-full items-center justify-center overflow-hidden rounded-xl shadow-md">
        <Image
          src="/banner.png"
          alt="Uyou 배너"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-active/60" />
        <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            {t("bannerTitle")}
          </h1>
          <p className="text-sm text-white/90 md:text-base">
            {t("bannerSubtitle")}
          </p>
          <Button
            size="lg"
            variant="secondary"
            render={<a href="mailto:uyou9599@gmail.com" />}
          >
            {t("contactButton")}
          </Button>
        </div>
      </div>

      {/* 외국인 유학생 수 Top 10 */}
      {rankings.length > 0 && (
        <div className="mb-10">
          <h2 className="mb-4 text-h2 font-bold text-text-primary">
            {t("rankingTitle")}
          </h2>
          <UniversityRanking items={rankings} locale={locale} />
        </div>
      )}

      {/* 대학 리스트 */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-h2 font-bold text-text-primary">
          {t("listTitle")}
        </h2>
        <span className="text-sm text-text-secondary">
          {t("count", { count: universities?.length ?? 0 })}
        </span>
      </div>

      {universities.length === 0 ? (
        <div className="rounded-lg border border-border bg-surface p-12 text-center text-text-secondary">
          {t("empty")}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((u) => {
            const translation = u.university_translations?.[0];
            return (
              <UniversityCard
                key={u.id}
                name={translation?.name || u.name}
                region={translation?.region || u.region}
                logoUrl={u.logo_url}
                href={`/${locale}/universities/${u.slug}`}
              />
            );
          })}
        </div>
      )}
    </main>
  );
}
