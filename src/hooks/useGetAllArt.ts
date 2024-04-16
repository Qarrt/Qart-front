import { useAxios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';

const getAllArt = async (axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.get('/pieces');
  console.log(response.data);
  return response.data;
};

export const useGetAllArt = () => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['allArt'],
    queryFn: () => getAllArt(axiosInstance),
  });
};
