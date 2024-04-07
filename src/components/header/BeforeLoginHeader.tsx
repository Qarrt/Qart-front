'use client';
import Image from 'next/image';
import SearchBar from './_components/SearchBar';
import Link from 'next/link';

export default function BeforeLoginHeader() {
  return (
    <header className="bg-white flex items-center align-center h-[147px]">
      <div className="flex items-center space-x-10 font-semibold ml-9">
        <Link href="/">
          <Image
            src="/큐아트 로고.png"
            alt="큐아트 로고"
            width={86}
            height={35}
          />
        </Link>
        <Link href="exhibition">전시회</Link>
        <Link href="/artist">작가</Link>
        <Link href="/artwork">작품</Link>
      </div>

      <div className="flex items-center gap-4 ml-auto mr-16 space-x-4">
        <SearchBar />
        <Link href="/login">로그인</Link>
        <Link
          href="/upload-art"
          className="flex px-4 py-2 text-white bg-black rounded-full"
        >
          <Image
            src="/svg/qrcode.svg"
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
