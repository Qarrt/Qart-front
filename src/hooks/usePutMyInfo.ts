import { useAxios } from '@/lib/axios';
import { User } from '@/types/User';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';

const putMyInfo = async (
  { userData }: { userData: User },
  axiosInstance: AxiosInstance,
): Promise<User> => {
  const response = await axiosInstance.put('/my-info', userData);
  return response.data;
};

export const usePutMyInfo = () => {
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ userData }: { userData: User }) =>
      putMyInfo({ userData }, axiosInstance),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['myInfo'],
      });
    },
  });

  return mutation;
};
