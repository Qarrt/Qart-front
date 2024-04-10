'use client';
import Image from 'next/image';
import SearchBar from './_components/SearchBar';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import UserIconDropdown from './_components/UserIconDropdown';

export default function AfterLoginHeader() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target as Node)
      ) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, toggleButtonRef]);
  return (
    <header className=" relative bg-white flex items-center align-center h-[147px]">
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
        <button
          ref={toggleButtonRef}
          onClick={toggleDropdown}
          className="relative z-10"
        >
          <Image
            src="/svg/userIcon.svg"
            alt="userIcon"
            width={46}
            height={46}
          />
        </button>
        {dropdownVisible && (
          <UserIconDropdown
            ref={dropdownRef}
            className="absolute mt-2 top-[110px] right-[60px]"
          />
        )}
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
