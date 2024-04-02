'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UploadHeader() {
  const router = useRouter();
  return (
    <header className="bg-white flex items-center h-[147px]">
      <div className="flex items-center ml-9 space-x-10 font-semibold">
        <Link href="/">
          <Image
            src="/큐아트 로고.png"
            alt="큐아트 로고"
            width={86}
            height={35}
          />
        </Link>
      </div>

      <div className="flex items-center space-x-4 ml-auto mr-16 gap-4">
        <Link
          href="/"
          className="flex bg-white text-black rounded-full border-[1px] border-black py-2 px-4"
        >
          임시저장
        </Link>
        <Link
          href="/upload-art"
          className="flex bg-black text-white rounded-full py-2 px-4"
        >
          <Image
            src="/qrcode.svg"
            alt="작품 등록"
            width={20}
            height={20}
            className="flex mr-2"
          />
          작품 등록
        </Link>
      </div>
    </header>
  );
}
