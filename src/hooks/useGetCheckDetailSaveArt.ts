import { useAxios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';
const getCheckDetailSaveArt = async (
  axiosInstance: AxiosInstance,
  pieceId: string,
) => {
  const response = await axiosInstance.get(`/temp-pieces/${pieceId}`);
  return response.data;
};

export const useGetCheckDetailSaveArt = (pieceId: string) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['checkDetailSaveArt', pieceId],
    queryFn: () => getCheckDetailSaveArt(axiosInstance, pieceId),
  });
};
