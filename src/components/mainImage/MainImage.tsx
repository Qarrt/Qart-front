import { throttle } from 'lodash';
import Image from 'next/image';
import mainPicture from '/public/mainPicture.png';

export default function MainImage() {
  let mainImages = [1, 2, 3, 4];

  const nextButton = throttle(function () {
    const mainImage = document.getElementById('mainImage');
    const slider = document.getElementById('slider');
    const mainImageWidth = mainImage!.clientWidth;
    slider!.scrollLeft += Math.floor(mainImageWidth * mainImages.length) / 4;
  }, 1000);

  const prevButton = throttle(function () {
    const mainImage = document.getElementById('mainImage');
    const slider = document.getElementById('slider');
    const mainImageWidth = mainImage!.clientWidth;
    slider!.scrollLeft -= Math.floor(mainImageWidth * mainImages.length) / 4;
  }, 1000);

  return (
    <>
      <div className="relative flex items-center justify-center pl-16 mt-20">
        <button
          className="size-[41px] flex justify-center items-center rounded-full bg-[#222222] opacity-30 cursor-pointer absolute left-[99px]"
          onClick={prevButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[19.73px] h-[11.98px] text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div
          id="slider"
          className="flex w-full h-full scroll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {mainImages.map((_, i) => (
            <Image
              id="mainImage"
              src={mainPicture}
              alt=""
              width={1440}
              height={404}
              className="pr-10 "
            />
          ))}
        </div>
        <button
          className="size-[41px] flex justify-center items-center rounded-full bg-[#222222] opacity-30 cursor-pointer absolute right-[99px]"
          onClick={nextButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[19.73px] h-[11.98px] text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
