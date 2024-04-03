import Image from 'next/image';
import Link from 'next/link';
import BottomNavImage from '/public/BottomNavImage.png';

export default function RecentlyHot() {
  let bottomNavImages = [
    '인기 있는 전시회',
    '최근 업로드 작품',
    '전시회 근처 맛집',
    '인기 있는 전시회',
  ];
  return (
    <div className="flex justify-center gap-[24px] mt-[58px] px-6 h-[116px]">
      {bottomNavImages.map((item, i) => (
        <Link href="/">
          <div className="flex px-7 items-center w-[327px] h-[116px] bg-[#F7F7F7] rounded-xl ">
            <div className="flex items-center justify-around gap-[19px] width-[232px] height-[94px]">
              <Image
                className="rounded-lg"
                src={BottomNavImage}
                width={95}
                height={94}
                alt=""
              />
              <div className="flex flex-col text-left gap-2">
                <span className="text-sm font-semibold">요즘 핫한</span>
                <span className="text-lg font-bold">{item}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
