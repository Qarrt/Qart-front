'use client';
import Header from '@/components/header/Header';
import Image from 'next/image';

import MainImage from '@/components/mainImage/MainImage';
import RecentlyHot from '@/components/recentlyHot/RecentlyHot';
import RecentPieces from '@/components/recentPieces/recentPieces';
import MiddleAdBanner from '@/components/middleAdBanner/middleAdBanner';
import Link from 'next/link';
import NewArtist from '@/components/newArtist/NewArtist';
import LocalExhibition from '@/components/localExhibition/LocalExhibition';

export default function Home() {

  return (
    <div className="w-full overflow-hidden">
      {/*  상단 Nav */}
      <Header />
      {/* 메인 이미지 */}
      <MainImage />
      {/* 하단 nav */}
      <RecentlyHot />
      {/* 최신 작품 리스트 */}
      <RecentPieces />
      {/* 중간 광고 배너 */}
      <MiddleAdBanner />
      {/* 신인작가 리스트 */}
      <NewArtist />
      {/* 중간 사각형(?) */}
      <div className="w-full py-10 flex justify-center items-center">
        <div className="w-[1321px] h-[508px] bg-slate-200"></div>
      </div>
      {/* 지역별 전시회 */}
      <LocalExhibition />
    </div>
  );
}
