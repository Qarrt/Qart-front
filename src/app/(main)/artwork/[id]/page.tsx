import Image from 'next/image';
import Tab from '../_component/Tab';
import ArtworkTab from '../_component/ArtworkTab';

export default function ArtworkPage() {
  return (
    <>
      <div className="flex justify-center font-bold text-[#404040] text-3xl mt-44">
        작품 감상하기
      </div>
      <div className="flex items-center justify-center mt-16">
        <Image src="/artA.png" alt="artA" width={395} height={395} />
      </div>
      <div className="flex justify-center mt-16">
        <div className="flex  flex-col">
          <div className="flex text-[#404040] font-bold text-4xl">
            촬랑촬랑, 저녁, 물성적 사태
          </div>
          <div className=" mt-12">
            <div className="flex font-semibold text-[#ACACAC]">
              작가
              <span className="text-[#404040] font-bold ml-[18px]">
                artistA
              </span>
            </div>
            <div className="flex font-semibold text-[#ACACAC]">
              정보
              <span className="font-bold ml-[18px] text-black">
                캔버스에 유채
              </span>
            </div>
            <div className="flex font-semibold text-[#ACACAC]">
              크기
              <span className="font-bold ml-[18px] text-black">38x46cm</span>
            </div>
            <div className="flex font-semibold text-[#ACACAC]">
              년도
              <span className="font-bold ml-[18px] text-black">2022</span>
            </div>
          </div>
        </div>
      </div>
      <Tab />
      <ArtworkTab />
    </>
  );
}
