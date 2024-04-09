import { ArtData, SaveArtData } from '@/types/Art';
import { create } from 'zustand';

interface ArtStoreState {
  artData: ArtData;
  saveArtData: SaveArtData;
  setArtData: (newData: Partial<ArtData>) => void;
  setSaveArtData: (newData: Partial<SaveArtData>) => void;
}
const useArtStore = create<ArtStoreState>((set) => ({
  artData: {
    tempPieceId: undefined,
    title: '',
    material: '',
    year: 0,
    width: 0,
    height: 0,
    exhibited: false,
    authorComment: '',
    description: '',
    file: null,
    image: undefined,
  },
  saveArtData: {
    tempPieceId: undefined,
    title: '',
    material: null,
    year: 0,
    width: 0,
    height: 0,
    exhibited: false,
    authorComment: '',
    description: '',
    file: null,
    image: undefined,
  },
  setArtData: (newData) =>
    set((state) => ({
      ...state,
      artData: { ...state.artData, ...newData },
    })),
  setSaveArtData: (newData) =>
    set((state) => ({
      ...state,
      saveArtData: { ...state.saveArtData, ...newData },
    })),
}));

export default useArtStore;
