'use client';
import Link from 'next/link';
import position_icon from '/public/img/position_icon.png';
import Image from 'next/image';
import { useGetAllArt } from '@/hooks/useGetAllArt';
import { useEffect, useRef } from 'react';
import { ArtData } from '@/types/Art';

export default function RecentPieces() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { data: allArt } = useGetAllArt();

  useEffect(() => {
    const handleMouseOver = () => {
      const slider = sliderRef.current;
      if (slider) {
        slider.addEventListener('wheel', (e) => {
          e.preventDefault();
        });
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, []);
  const handleScroll = () => {
    const recentPiece = document.getElementById('recentPiece');
    const clientWidth = recentPiece?.clientWidth;
    const slider = document.getElementById('middleSlider');
    slider?.addEventListener('wheel', (e) => {
      if (e.deltaY < 0 && clientWidth) {
        slider.scrollLeft -= clientWidth * 2;
      } else if (e.deltaY > 0 && clientWidth) {
        slider.scrollLeft += clientWidth * 2;
      }
    });
  };

  return (
    <div
      className="w-full overflow-x-auto mt-16 h-[398.6px] flex flex-col gap-7 px-6"
      onWheel={handleScroll}
    >
      <div className="w-[1368px] flex justify-between items-center">
        <span className="text-2xl font-bold">최신 작품 리스트</span>
        <Link href="/artwork">더보기</Link>
      </div>
      <div
        id="middleSlider"
        ref={sliderRef}
        className="flex  gap-5 h-[398.6px] scroll overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {allArt?.map((art: ArtData) => (
          <div
            id="recentPiece"
            key={art.id}
            className="w-[347.2px] h-[337.6px] rounded-xl relative"
          >
            <Image
              src={art.image ?? '/svg/EmptyImage.svg'}
              alt={art.title}
              width={347.2}
              height={260.8}
              layout="responsive"
              className="rounded-t-xl"
            />
            <div className="text-white backdrop-blur-md bg-black/50 w-full h-[60px] rounded-b-xl flex justify-between items-center px-[24px] absolute bottom-[40px]">
              <span className="font-semibold">
                {art.exhibited === true ? '현재 전시중' : null}
              </span>
              <div className="flex items-center justify-between">
                <Image src={position_icon} alt="" width={32.8} height={32.8} />
                <span className="text-sm">서초 아트갤러리</span>
              </div>
            </div>
            <div className="flex flex-col w-[286.4px] h-[59.2px] gap-[8px] mt-[17.6px] ">
              <span>{art.title}</span>
              <span>{art.user?.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
