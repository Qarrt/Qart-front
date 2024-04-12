'use client';
import newDisplayed2 from '/public/nowDisplayed2.png';
import position_icon from '/public/position_icon.png';
import Image from 'next/image';
import { useCheckMyArtList } from '@/hooks/useGetMyArtList';
import { ArtData } from '@/types/Art';

export default function MyPage() {
  const { data: myArtList } = useCheckMyArtList();
  return (
    <>
      <div className="flex justify-center mt-[50px]">
        <span className="flex ">내가 등록한 작품</span>
      </div>

      <div className="flex flex-wrap justify-start mt-[20px]">
        {myArtList?.map((art: ArtData, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center m-[10px] border-[2px]"
          >
            <div
              id={`recentPiece-${index}`}
              className="w-[150px] h-[150px] rounded-xl overflow-hidden"
            >
              <Image
                src={art.image!}
                alt={art.title}
                width={150}
                height={150}
              />
            </div>
            <span className="mt-[10px]">{art.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}
