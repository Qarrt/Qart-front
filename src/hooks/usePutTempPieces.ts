import { useAxios } from '@/lib/axios';
import { SaveArtData } from '@/types/Art';
import { useMutation } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';

const putTempPieces = async (
  { piecesId, artData }: { piecesId: string; artData: SaveArtData },
  axiosInstance: AxiosInstance,
): Promise<SaveArtData> => {
  const response = await axiosInstance.put(`/pieces/${piecesId}`, artData);
  return response.data;
};

export function usePutTempPieces() {
  const { axiosInstance } = useAxios();
  const mutation = useMutation({
    mutationFn: ({
      piecesId,
      artData,
    }: {
      piecesId: string;
      artData: SaveArtData;
    }) => putTempPieces({ piecesId, artData }, axiosInstance),
  });

  return mutation;
}
