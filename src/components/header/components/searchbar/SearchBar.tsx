'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (searchValue) {
      router.push(`/search?q=${searchValue}`);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="max-w-lg mx-auto">
      <form
        className="flex items-center w-[326px] rounded-full bg-[#F7F7F7] shadow "
        onSubmit={handleSubmit}
      >
        <button type="submit" className="flex items-center">
          <img
            src="/search.svg"
            alt="검색"
            className="w-6 h-6 text-gray-600 ml-3 -mr-3 z-50"
          />
        </button>
        <div className="w-inherit h-inherit">
          <input
            className="w-full rounded-full py-3 px-6 text-black placeholder-mid-gray  bg-[#F7F7F7] leading-tight focus:outline-none "
            id="search"
            type="text"
            placeholder="찾으시는 작품이 있으신가요?"
            value={searchValue}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}
