import { useAxios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';

const getMyInfo = async (axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.get('/my-info');
  return response.data;
};
export const useGetMyInfo = () => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['myInfo'],
    queryFn: () => getMyInfo(axiosInstance),
    staleTime: 1000 * 60 * 30,
  });
};
