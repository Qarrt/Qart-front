import { useAxios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';

const getCheckMyArtList = async (axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.get('/pieces/my');
  console.log(response.data);
  return response.data;
};

export function useGetCheckMyArtList() {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['checkMyAllArtList'],
    queryFn: () => getCheckMyArtList(axiosInstance),
  });
}
