import Image from 'next/image';
import BlurBox from './BlurBox';

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
      <div className="flex mt-[60px] bg-white w-[1040px] mx-auto text-black text-[22px] leading-10">
        작가의 회화에는 작품 &lt;날아가는 새우깡과 한 마리의 갈매기가 새우깡을
        먹을 확률&gt;과같이 동일한 공간에서 일어날 수 있는 두 가지의 상황이
        겹쳐져 있다. 작가의 작품은 지속되거나, 변주되는 움직임 등 순간을 담은
        다양한 움직임에 주목한다. 작가는 자신의 화면에서 사건을 일으키는
        움직임을 '일시적 발작', '순간적 일탈' 등의 언어로 묘사하며, 거대한
        흐름으로서의 움직임을 거스르는, 발작적이고 일시적인, 예기치 않은
        움직임들에 주목하며 이를 작품으로 표현하고자 한다. 이는 바다의 물결
        &lt;촬랑촬랑&gt; 위로 겹쳐지는 사건을 표현한 연작에서 잘 드러난다.
        작가에게 캔버스는 정지한 화면으로 보이는 2차원의 평면적 회화 속에서
        '지금'이라는 순간 안 시간의 본질을 구체적으로 파헤쳐 보여주는 매개체이자
        작가에게 본인의 체험을 담은 '지금'의 표현이다.
      </div>
      <BlurBox />
      {/* 블러로 가리는 방식에 대해 조금 더 고민해봐야할 듯 관리자도구에서 풀리는 문제 등*/}
    </>
  );
}
