'use client';
import { throttle } from 'lodash';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function MainImage() {
  let mainImages = [
    '/img/main-banner1.png',
    '/img/main-banner1.png',
    '/img/main-banner1.png',
  ];
  const sliderRef = useRef(null);

  const nextButton = throttle(function () {
    const slider = document.getElementById('slider');
    const slideWidth = slider!.scrollWidth / mainImages.length;
    slider!.scrollLeft += slideWidth;
    if (slider!.scrollLeft === slider!.scrollWidth - slideWidth) {
      slider!.scrollLeft = 0;
    }
  }, 1000);

  const prevButton = throttle(function () {
    const slider = document.getElementById('slider');
    const slideWidth = slider!.scrollWidth / mainImages.length;
    slider!.scrollLeft -= slideWidth;
  }, 1000);
  useEffect(() => {
    const interval = setInterval(nextButton, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative flex items-center justify-center pl-16 mt-20">
        <button
          className="size-[41px] flex justify-center items-center rounded-full bg-[#222222] opacity-30 cursor-pointer absolute left-[115px]"
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
          {mainImages.map((imgSrc, i) => (
            <Image
              key={`${i}`}
              src={imgSrc}
              alt="banner"
              width={1440}
              height={404}
              ref={sliderRef}
              className="inline-block pr-10 "
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
