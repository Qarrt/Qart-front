import { AxiosInstance } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useAxios } from '@/lib/axios';

const deleteArt = async (pieceId: string, axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.delete(
    `/temp-pieces/76449b7f-21ac-47cc-b4ff-0b03a718c9b2`,
  );
  return response.data;
};

export function useDeleteArt() {
  const { axiosInstance } = useAxios();
  const mutation = useMutation({
    mutationKey: ['deleteArt'],
    mutationFn: (pieceId: string) => deleteArt(pieceId, axiosInstance),
  });
  return mutation;
}
