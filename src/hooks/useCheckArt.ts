import { useAxios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const useCheckArt = (artPieceId: string) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['checkArt', artPieceId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/temp-pieces/${artPieceId}`);
      return response.data;
    },
    enabled: !!artPieceId,
  });
};
