import { useAxios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
export const useCheckDetailArt = (pieceId: string) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['checkArt', pieceId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/temp-pieces/${pieceId}`);
      return response.data;
    },
  });
};
