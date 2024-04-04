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
  file?: File;
  image?: string;
}
