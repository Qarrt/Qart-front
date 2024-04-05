'use client';

import { useUploadArt } from '@/hooks/useUploadArt';
import { ArtData } from '@/types/Art';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function UploadHeader({ onSubmit }: { onSubmit: () => void }) {
  const [artData, setArtData] = useState<ArtData>({
    title: '',
    material: '',
    year: 0,
    width: 0,
    height: 0,
    exhibited: false,
    authorComment: '',
    description: '',
    file: null,
  });
  const uploadMutation = useUploadArt();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    uploadMutation.mutate(artData, {
      onSuccess: () => {
        alert('작품등록에 성공하였습니다.');
      },
      onError: () => {
        alert('작품등록에 실패하였습니다.');
      },
    });
  };
  return (
    <>
      <header className="bg-white flex items-center h-[147px]">
        <div className="flex items-center space-x-10 font-semibold ml-9">
          <Link href="/">
            <Image
              src="/큐아트 로고.png"
              alt="큐아트 로고"
              width={86}
              height={35}
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-4 ml-auto mr-16 space-x-4">
          <Link
            href="/"
            className="flex bg-white text-black rounded-full border-[1px] border-black py-2 px-4"
          >
            임시저장
          </Link>
          <button
            onClick={handleSubmit}
            className="flex px-4 py-2 text-white bg-black rounded-full"
          >
            <Image
              src="/qrcode.svg"
              alt="작품 등록"
              width={20}
              height={20}
              className="flex mr-2"
              priority
            />
            작품 등록
          </button>
        </div>
      </header>
    </>
  );
}
