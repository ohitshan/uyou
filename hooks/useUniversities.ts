'use client';

import { useQuery } from '@tanstack/react-query';
import { useUniversityStore } from '@/store/useUniversityStore';
import { UniversityInfo } from '@/types';

async function fetchUniversities(): Promise<UniversityInfo[]> {
  const response = await fetch('/api/universities');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const { data } = await response.json();
  return data;
}

export function useUniversities() {
  const setUniversities = useUniversityStore((state) => state.setUniversities);
  
  return useQuery({
    queryKey: ['universities'],
    queryFn: fetchUniversities,
    staleTime: 60000,
    gcTime: 300000,
  });
}
