import { Metadata } from 'next';
import UniversityListContent from '@/components/UniversityListContent';

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

export default async function Page() {
  return <UniversityListContent />;
}
