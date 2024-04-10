import { useAxios } from '@/lib/axios';
import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query';
import { SaveArtData } from '@/types/Art';

const saveArt = async (artData: SaveArtData): Promise<SaveArtData> => {
  const formData = new FormData();
  const { axiosInstance } = useAxios();
  formData.append('title', artData.title);
  formData.append('exhibited', artData.exhibited.toString());
  if (artData.title === '') {
    throw new Error('작품 제목을 입력해주세요.');
  }
  if (artData.material) formData.append('material', artData.material);
  if (artData.year) formData.append('year', artData.year.toString());
  if (artData.width) formData.append('width', artData.width.toString());
  if (artData.height) formData.append('height', artData.height.toString());
  if (artData.authorComment)
    formData.append('authorComment', artData.authorComment);
  if (artData.description) formData.append('description', artData.description);
  if (artData.file) formData.append('file', artData.file);

  const response = await axiosInstance.post('/temp-pieces', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
export function useSaveArt(): UseMutationResult<
  SaveArtData,
  Error,
  SaveArtData,
  unknown
> {
  const options: UseMutationOptions<SaveArtData, Error, SaveArtData, unknown> =
    {
      mutationFn: (artData: SaveArtData) => saveArt(artData),
      onError: (error: Error) => {
        console.error('작품 저장 중 오류 발생:', error);
      },
      onSuccess: (data: SaveArtData) => {
        console.log('작품이 성공적으로 저장되었습니다:', data);
      },
    };

  return useMutation<SaveArtData, Error, SaveArtData, unknown>(options);
}
