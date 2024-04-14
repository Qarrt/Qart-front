import { useAxios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';

const getCheckAllSaveArt = async (axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.get('/temp-pieces');
  return response.data;
};
export const useGetCheckAllSaveArt = () => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['checkAllSaveArt'],
    queryFn: () => getCheckAllSaveArt(axiosInstance),
  });
};
