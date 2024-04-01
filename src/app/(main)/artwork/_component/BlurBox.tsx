import Link from 'next/link';
export default function BlurBoxWithContent() {
  return (
    <div className="relative w-full h-[500px] -mt-[140px]">
      <div
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%)',
          backdropFilter: 'blur(5px)',
        }}
        className="absolute inset-0"
      />
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="text-center">
          <h2>작가가 직접 설명해주는 작품 정보가 궁금하다면?</h2>
          <div className=" mt-14 text-black text-3xl">
            <span>자세한 내용은</span>
            <br />
            <span>전시장에서 QR코드로 확인하세요!</span>
          </div>
          <div>
            <Link
              href="/login"
              className="flex bg-black text-white w-[317px] text-[35px] font-semibold rounded-[10px] items-center justify-center mx-auto mt-[58px]"
            >
              전시회 정보보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
