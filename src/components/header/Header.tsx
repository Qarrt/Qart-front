import Image from 'next/image';
import SearchBar from './_components/searchbar/SearchBar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white flex items-center mt-14 ">
      <div className="flex items-center ml-9 space-x-10 font-semibold">
        <Link href="/">
          <Image
            src="/큐아트 로고.png"
            alt="큐아트 로고"
            width={86}
            height={35}
          />
        </Link>
        <Link href="exhibitions">전시회</Link>
        <Link href="/artist">작가</Link>
        <Link href="/artwork">작품</Link>
      </div>

      <div className="flex items-center space-x-4 ml-auto mr-16 gap-4">
        <SearchBar />
        <Link href="/login">로그인</Link>
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
