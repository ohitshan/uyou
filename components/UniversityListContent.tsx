'use client';

import Image from 'next/image';
import { useUniversityNames } from '@/hooks/useUniversityNames';
import { Button } from '@/components/ui/button';

export default function UniversityListContent() {
  const { data: universities, isLoading, isError } = useUniversityNames();
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 md:px-12 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-12 flex h-[300px] w-full items-center justify-center overflow-hidden rounded-[2rem] shadow-lg">
          <Image src="/banner.png" alt="Banner" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-blue-900/60" />
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">Uyou와 함께 꿈꾸는 한국 유학</h1>
            <Button size="lg" variant="secondary" type="button">
              문의하기
            </Button>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">대학 리스트</h2>
          <span className="text-sm text-gray-500">{universities?.length ?? 0}개</span>
        </div>

        {isLoading ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center text-gray-500">
            대학 리스트를 불러오는 중입니다.
          </div>
        ) : isError ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-12 text-center text-red-600">
            대학 리스트를 불러오지 못했습니다.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {universities?.map((university) => (
              <article
                key={university}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900">{university}</h3>
              </article>
            ))}
          </div>
        )}

        {universities?.length === 0 && !isLoading && !isError && (
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-12 text-center text-gray-500">
            등록된 대학 정보가 없습니다.
          </div>
        )}
      </div>
    </main>
  );
}
