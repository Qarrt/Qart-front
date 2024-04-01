import Image from 'next/image';

export default function ArtworkTab() {
  return (
    <>
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
      <div className="flex mt-[60px] bg-[#F7F7F7] w-[1040px] mx-auto rounded-[21.6px]">
        <div className="flex text-[#9E9E9E] mt-7 mb-7 ml-12 mr-12 tx-[15px] leading-8">
          나에게 그림을 그린다는 것은 내가 살아온 날들과 나란 사람의 형성 과정을
          끝없이 탐구하는 일이었다. 무의식 속에 눌려있던 사건까지 하나하나
          그림으로 그려 그 속의 나를 곱씹는 작업은 그것이 나를 치유하고 있는
          것인지 고통스럽게 하고 있는 것인지 헷갈릴만큼 복잡했다. 나하나
          그림으로 그려 그 속의 나를 곱씹는 작업은 그것이 나를 치유하고 있는
          것인지 고통스럽게 하고 있는 것인지 만큼 헷갈릴만큼 복잡했다.
        </div>
      </div>
    </>
  );
}
