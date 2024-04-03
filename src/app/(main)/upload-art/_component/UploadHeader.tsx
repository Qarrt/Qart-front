'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function UploadHeader() {
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
          <Link
            href="/upload-art"
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
          </Link>
        </div>
      </header>
    </>
  );
}
