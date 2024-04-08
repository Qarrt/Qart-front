import LocalExhibition from '../localExhibition/LocalExhibition';
import MainImage from '../mainImage/MainImage';
import MiddleAdBanner from '../middleAdBanner/middleAdBanner';
import NewArtist from '../newArtist/NewArtist';
import RecentPieces from '../recentPieces/RecentPieces';
import RecentlyHot from '../recentlyHot/RecentlyHot';

export default function Main() {
  return (
    <div className="w-full overflow-hidden">
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
