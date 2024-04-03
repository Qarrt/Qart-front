import Image from "next/image";
import qr_image from '/public/qr_image.png';

export default function MiddleAdBanner() {
  return (
    <div className="flex justify-center gap-72 items-center w-full bg-black mt-[80px] ">
      <div className="flex flex-col gap-3 text-white">
        <span className="text-3xl font-bold">
          QR코드 찍고, 작품 스토리 듣기
        </span>
        <span className="text-2xl">자세한 내용이 궁금하다면?</span>
      </div>
      <Image src={qr_image} alt="" width={180} height={190} />
    </div>
  );
}
