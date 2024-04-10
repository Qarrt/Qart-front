import { useAxios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';

const checkMyArtList = async (axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.get('/pieces');

  return response.data;
};

export function useCheckMyArtList() {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['checkMyArtList'],
    queryFn: () => checkMyArtList(axiosInstance),
  });
}
