'use client';

import Image from 'next/image';
import { UniversityInfo } from '@/types';

interface HomePageContentProps {
  initialUniversities: UniversityInfo[];
}

export default function HomePageContent({ initialUniversities }: HomePageContentProps) {
  // 클라이언트에서 추가적인 업데이트를 위해 훅을 사용할 수 있지만, 
  // 초기 데이터는 props로 전달받아 SSR/ISR을 활용합니다.
  
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* 히어로 배너 */}
        <div className="relative w-full h-[400px] mb-12 rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center">
          <Image
            src="/banner.png"
            alt="Banner"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-blue-900/60" />
          <div className="relative z-10 text-center text-white p-8">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              꿈꾸는 한국 유학,<br />Uyou와 함께 시작하세요
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              최신 대학 입학 정보와 모집 요강을 한눈에 확인하세요.
            </p>
          </div>
        </div>
        
        {/* 대학 정보 그리드 */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">최신 대학 입학 정보</h2>
          <span className="text-sm text-gray-500">{initialUniversities?.length || 0}개의 정보</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialUniversities?.map((u) => (
            <div 
              key={u.id} 
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {u.university_name}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                {u.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-4">
                {u.content}
              </p>
              <a 
                href={u.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                상세 정보 보기
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
