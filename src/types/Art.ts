export interface ArtData {
  tempPieceId?: string;
  title: string;
  material: string;
  year: number;
  width: number;
  height: number;
  exhibited: boolean;
  authorComment: string;
  description: string;
  file?: File | null | undefined;
  image?: string;
  id?: string | null | undefined;
  user: {
    name: string;
    email?: string;
    id: string;
    image?: string;
  };
}

export interface SaveArtData {
  tempPieceId?: string;
  title: string;
  material?: string | null | undefined;
  year?: number;
  width?: number;
  height?: number;
  exhibited: boolean;
  authorComment?: string;
  description?: string;
  file?: File | null | undefined;
  image?: string | null | undefined;
}
