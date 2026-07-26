import { Metadata } from 'next';
import Image from 'next/image';
import { supabase } from "@/lib/supabase";
import { UniversityCard } from "@/components/university-card";
import { Button } from "@/components/ui/button";

export const revalidate = 3600; // ISR: 1시간마다 재생성

export const metadata: Metadata = {
  title: 'Uyou - 한국 유학 정보 통합 플랫폼',
  description: '최신 대학 입학 정보와 모집 요강을 한눈에 확인하세요.',
  openGraph: {
    title: 'Uyou - 한국 유학 정보 통합 플랫폼',
    description: '최신 대학 입학 정보와 모집 요강을 한눈에 확인하세요.',
    images: [{ url: '/banner.png' }],
  },
};

async function getUniversities() {
  const { data, error } = await supabase
    .from("universities")
    .select("id, name, region, logo_url, slug");

  if (error) throw error;
  return data;
}

export default async function Page() {
  const universities = await getUniversities();

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
            Uyou와 함께 꿈꾸는 한국 유학
          </h1>
          <Button size="lg" variant="secondary" type="button">
            문의하기
          </Button>
        </div>
      </div>

      {/* 대학 리스트 */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-h2 font-bold text-text-primary">대학 리스트</h2>
        <span className="text-sm text-text-secondary">
          {universities?.length ?? 0}개
        </span>
      </div>

      {universities.length === 0 ? (
        <div className="rounded-lg border border-border bg-surface p-12 text-center text-text-secondary">
          등록된 대학 정보가 없습니다.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((u) => (
            <UniversityCard
              key={u.id}
              name={u.name}
              region={u.region}
              logoUrl={u.logo_url}
              href={`/universities/${u.slug}`}
            />
          ))}
        </div>
      )}
    </main>
  );
}