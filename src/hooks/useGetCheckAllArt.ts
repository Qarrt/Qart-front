import { useAxios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const useCheckArt = () => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['checkAllArt'],
    queryFn: async () => {
      const response = await axiosInstance.get('/temp-pieces/');
      return response.data;
    },
  });
};
