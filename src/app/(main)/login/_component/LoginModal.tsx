'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';

export default function LoginModal() {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClickClose();
    }
  };
  return (
    <>
      {/* 디자인 수정 필요 */}
      <div
        className="flex fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onBackdropClick}
      />
      <div className="flex w-[626px] h-[620px] absolute justify-center itmes-center top-0 left-0 right-0 bottom-0 bg-white justify-self-center mt-[100px] z-50 rounded-[20px]">
        <div className="flex mt-[20px] top-0 right-0 w-[24px] h-[24px] ml-4px cursor-pointer ml-[8px]">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            onClick={onClickClose}
          >
            <g>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center mt-[10px] ml-auto mr-auto">
          <Image
            src="/큐아트 로고.png"
            alt="logo"
            width={200}
            height={200}
            className="-ml-[20px]"
          />
          <div className="flex justify-center mt-[83px] -ml-[20px]">
            SNS로 간편하게 시작하기
          </div>

          <div className="mt-[49px] flex flex-row w-[377px] h-[62px] bg-[#FAE64D] rounded-lg -ml-[20px]">
            <a
              className="flex"
              href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/kakao`}
            >
              <div className="flex items-center ml-[11px]">
                <Image
                  src="/svg/kakao.svg"
                  alt="kakao-login"
                  width={48}
                  height={48}
                />
              </div>
              <span className="flex items-center text-base text-black ml-[86px] ">
                카카오 로그인
              </span>
            </a>
          </div>

          <div className="mt-[24px] flex flex-row w-[377px] h-[62px] bg-[#5AC451] rounded-lg -ml-[20px]">
            <a
              className="flex"
              href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/naver`}
            >
              <div className="flex items-center ml-[16px]">
                <Image
                  src="/svg/naver.svg"
                  alt="naver login"
                  width={35}
                  height={35}
                />
              </div>
              <span className="flex items-center ml-[94px] text-base text-white">
                네이버 로그인
              </span>
            </a>
          </div>

          <div className="mt-[24px] flex flex-row w-[377px] h-[62px] border-[#9E9E9E] rounded-lg -ml-[20px] border-2">
            <a
              className="flex"
              href={`https://accounts.google.com/o/oauth2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`}
            >
              <div className="flex items-center ml-[16px]">
                <Image
                  src="/svg/google.svg"
                  alt="google login"
                  width={35}
                  height={35}
                />
              </div>
              <span className="flex items-center ml-[94px] text-base text-black">
                구글 로그인
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
