import Image from 'next/image';

export default function ArtworkTab() {
  return (
    <div className="flex ml-[199px] mt-[115px]">
      <Image src="/artistA.png" alt="artistA" width={129.6} height={129.6} />
      <div className="ml-[18px]">
        <span className="flex flex-col font-bold text-3xl">작가 한마디</span>
        <span className="flex flex-col font-bold text-2xl mt-7">김 현</span>
        <span className="flex flex-col text-xl text-[#595959] mt-1">
          미술작가
        </span>
      </div>
    </div>
  );
}
