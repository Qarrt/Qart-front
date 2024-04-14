import { AxiosInstance } from 'axios';
import { useAxios } from '@/lib/axios';
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query';
import { ArtData } from '@/types/Art';

const postUploadArt = async (
  formData: FormData,
  axiosInstance: AxiosInstance,
): Promise<ArtData> => {
  const response = await axiosInstance.post('/pieces', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export function usePostUploadArt(): UseMutationResult<
  any,
  Error,
  ArtData,
  unknown
> {
  const { axiosInstance } = useAxios();

  const options: UseMutationOptions<any, Error, ArtData, unknown> = {
    mutationFn: (artData: ArtData) => {
      const formData = new FormData();
      formData.append('title', artData.title);
      formData.append('material', artData.material);
      formData.append('year', artData.year.toString());
      formData.append('width', artData.width.toString());
      formData.append('height', artData.height.toString());
      formData.append('exhibited', artData.exhibited.toString());
      formData.append('authorComment', artData.authorComment);
      formData.append('description', artData.description);

      if (artData.file) {
        formData.append('file', artData.file);
      }

      return postUploadArt(formData, axiosInstance);
    },
  };
  return useMutation<any, Error, ArtData, unknown>(options);
}
