'use client';

import { useState } from 'react';

export default function Tab() {
  const [tab, setTab] = useState('artwork');

  return (
    <>
      <div className="flex justify-center items-center mt-[94px] font-bold relative text-[28px]/[42px]">
        {/* 작품 상세 탭 */}
        <div
          onClick={() => setTab('artwork')}
          className={`mx-64 cursor-pointer relative ${
            tab === 'artwork' ? 'text-[#595959]' : 'text-[#9E9E9E]'
          }`}
        >
          작품 상세
          {tab === 'artwork' && (
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 block bg-black h-[3.2px]"
              style={{ width: '330px' }}
            ></span>
          )}
        </div>
        {/* 작가 상세 탭 */}
        <div
          onClick={() => setTab('artist')}
          className={`mx-64 cursor-pointer relative ${
            tab === 'artist' ? 'text-[#595959]' : 'text-[#9E9E9E]'
          }`}
        >
          작가 상세
          {tab === 'artist' && (
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 block bg-black h-[3.2px]"
              style={{ width: '330px' }}
            ></span>
          )}
        </div>
      </div>
      <hr className="border-solid border-1 border-[#C7C7C7]" />
    </>
  );
}
