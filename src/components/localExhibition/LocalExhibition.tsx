import local_exhibition2 from '/public/local_exhibition2.png';
import local_exhibition3 from '/public/local_exhibition3.png';
import local_exhibition4 from '/public/local_exhibition4.png';
import Image from 'next/image';
import Link from 'next/link';

export default function LocalExhibition() {
  let localExhibition = [
    {
      src: local_exhibition2,
      exhibitionName: 'Just the Two of Us',
      period: '2023.12.14 ~ 2024.2.12',
      position: '신사동',
    },
    {
      src: local_exhibition2,
      exhibitionName: '용과 함께',
      period: '2023.12.14 ~ 2024.2.12',
      position: '종로구 평창',
    },
    {
      src: local_exhibition3,
      exhibitionName: '뉴 헤리티지',
      period: '2023.12.14 ~ 2024.2.12',
      position: '중구 을지로',
    },
    {
      src: local_exhibition4,
      exhibitionName: '하이얀/L Etranger::탁하린',
      period: '2023.12.14 ~ 2024.2.12',
      position: '중구 덕수궁길',
    },
  ];
  let localName = ['서울', '경기도', '인천', '광주', '부산', '대전', '울산'];

  return (
    <div className="mt-16 flex flex-col items-center gap-6 h-[544.8px] px-12">
      <div className="w-full h-[33px] flex justify-between pl-16">
        <span className="text-2xl font-bold">지역별 전시회 둘러보기</span>
        <button>더보기</button>
      </div>
      <div className="w-full flex gap-5 justify-start">
        {localName.map((local) => (
          <Link href={`/${local}`}>
            <div className="w-16 h-7 font-semibold rounded-3xl flex justify-center items-center bg-slate-300">
              <span>{local}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-start w-full h-full gap-12 relative scroll overflow-x-scroll whitespace-nowrap scroll-smooth">
        {localExhibition.map((item) => (
          <div className="flex flex-col gap-[22px]">
            <Image src={item.src} alt="" width={347.2} height={260.8} />
            <div className="flex flex-col gap-[16.5px]">
              <span className="text-[24px] font-semibold">
                {item.exhibitionName}
              </span>
              <span className="text-[18px] text-[#9E9E9E]">{item.period}</span>
              <span className="text-[24px] font-semibold">
                <div className="flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <span>{item.position}</span>
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
