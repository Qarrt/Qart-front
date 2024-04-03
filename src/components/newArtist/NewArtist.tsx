import Image from 'next/image';
import newArtist1 from '/public/newArtist1.png';
import newArtist2 from '/public/newArtist2.png';
import newArtist3 from '/public/newArtist3.png';

export default function NewArtist() {
  let newPainterArr = [
    {
      src: newArtist1,
      name: '김현',
      genre: '미술작가',
      pieces: 4,
    },
    {
      src: newArtist2,
      name: 'Artist1',
      genre: '패션 디자이너',
      pieces: 2,
    },
    {
      src: newArtist3,
      name: 'Artist2',
      genre: '공예가',
      pieces: 8,
    },
    {
      src: newArtist1,
      name: 'Artist3',
      genre: '미술작가',
      pieces: 2,
    },
    {
      src: newArtist1,
      name: 'Artist3',
      genre: '미술작가',
      pieces: 2,
    },
  ];
  return (
    <div className="mt-16 w-[1441px] h-[442px] flex flex-col gap-7">
      <div className="w-[1368px] h-[33px] flex justify-between pl-16">
        <span className="text-2xl font-bold">거침 없는 신진 아티스트 5인</span>
        <button>더보기</button>
      </div>
      <div className="flex justify-center items-center gap-[40px] w-screen h-[388px] bg-[#F7F7F7]">
        {newPainterArr.map((item) => (
          <div className="flex flex-col">
            <Image src={item.src} alt="" width={186.5} height={186.5} />
            <div className="mt-[19px] flex flex-col gap-[8px]">
              <span className="text-[24px] font-semibold ">{item.name}</span>
              <span className="text-[16px]">{item.genre}</span>
              <span className="text-[14px]">큐알 작품 수 {item.pieces}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
