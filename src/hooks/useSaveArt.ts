import { AxiosInstance } from 'axios';
import { useAxios } from '@/lib/axios';
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query';
import { ArtData } from '@/types/Art';

const uploadArt = async (
  formData: FormData,
  axiosInstance: AxiosInstance,
): Promise<ArtData> => {
  const response = await axiosInstance.post('/temp-pieces', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export function useSaveArt(): UseMutationResult<any, Error, ArtData, unknown> {
  const { axiosInstance } = useAxios();

  const options: UseMutationOptions<any, Error, ArtData, unknown> = {
    mutationFn: (artData: ArtData) => {
      const formData = new FormData();
      formData.append('title', artData.title);
      formData.append('exhibited', artData.exhibited.toString());

      if (artData.material) {
        formData.append('material', artData.material);
      }
      if (artData.year) {
        formData.append('year', artData.year.toString());
      }
      if (artData.width) {
        formData.append('width', artData.width.toString());
      }
      if (artData.height) {
        formData.append('height', artData.height.toString());
      }
      if (artData.authorComment) {
        formData.append('authorComment', artData.authorComment);
      }
      if (artData.description) {
        formData.append('description', artData.description);
      }
      if (artData.file) {
        formData.append('file', artData.file);
      }

      return uploadArt(formData, axiosInstance);
    },
  };
  return useMutation<any, Error, ArtData, unknown>(options);
}
