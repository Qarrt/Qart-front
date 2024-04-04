import Link from "next/link";
import newDisplayed1 from '/public/nowDisplayed1.png';
import newDisplayed2 from '/public/nowDisplayed2.png';
import newDisplayed3 from '/public/nowDisplayed3.png';
import newDisplayed4 from '/public/nowDisplayed4.png';
import position_icon from '/public/position_icon.png';
import Image from "next/image";

export default function RecentPieces (){
    let newDisplayedArr = [
        newDisplayed1,
        newDisplayed2,
        newDisplayed3,
        newDisplayed4,
        newDisplayed4,
        newDisplayed4,
        newDisplayed4,
      ];
    return(
        <div className="mt-16 w-max h-[398.6px] flex flex-col gap-7 px-6">
        <div className="w-[1368px] flex justify-between items-center">
          <span className="text-2xl font-bold">최신 작품 리스트</span>
          <Link href="/">더보기</Link>
        </div>
        <div
          id="slider"
          className="flex justify-start gap-5 h-[398.6px] scroll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {newDisplayedArr.map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="w-[347.2px] h-[337.6px] rounded-xl relative"
            >
              <Image src={newDisplayed2} alt="" width={347.2} height={260.8} />
              <div className="text-white backdrop-blur-md bg-black/50 w-full h-[60px] rounded-b-xl flex justify-between items-center px-[24px] absolute bottom-[78px]">
                <span className="font-semibold">현재 전시중</span>
                <div className="flex items-center justify-between">
                  <Image
                    src={position_icon}
                    alt=""
                    width={32.8}
                    height={32.8}
                  />
                  <span className="text-sm">서초 아트갤러리</span>
                </div>
              </div>
              <div className="flex flex-col w-[286.4px] h-[59.2px] gap-[8px] mt-[17.6px] ">
                <span>flow</span>
                <span>Artist A</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}