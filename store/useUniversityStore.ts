import { create } from 'zustand';
import { UniversityInfo } from '@/types';

interface UniversityState {
  universities: UniversityInfo[];
  setUniversities: (universities: UniversityInfo[]) => void;
}

export const useUniversityStore = create<UniversityState>((set) => ({
  universities: [],
  setUniversities: (universities) => set({ universities }),
}));
