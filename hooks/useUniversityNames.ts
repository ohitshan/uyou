'use client';

import { useQuery } from '@tanstack/react-query';

async function fetchUniversityNames(): Promise<string[]> {
  const response = await fetch('/api/university-list');
  if (!response.ok) {
    throw new Error('Failed to fetch university list');
  }

  const { data } = await response.json();
  return data;
}

export function useUniversityNames() {
  return useQuery({
    queryKey: ['university-list'],
    queryFn: fetchUniversityNames,
    staleTime: 60000,
    gcTime: 300000,
  });
}
