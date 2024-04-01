import Image from 'next/image';

export default function ArtworkTab() {
  return (
    <div className="flex ml-[199px] mt-[155px]">
      <Image src="/artistA.png" alt="artistA" width={129.6} height={129.6} />
      <div className="ml-[18px]">
        <span className="flex flex-col font-bold">작가 한마디</span>
        <span className="flex flex-col font-bold">김 현</span>
        <span className="flex flex-col text-[#595959]">미술작가</span>
      </div>
    </div>
  );
}
