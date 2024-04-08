import Image from 'next/image';

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <Image src="/큐아트 로고.png" alt="logo" width={200} height={200} />
        <div className="flex justify-center mt-[83px]">
          SNS로 간편하게 시작하기
        </div>

        <div className="mt-[49px] flex flex-row w-[377px] h-[62px] bg-[#FAE64D] rounded-lg">
          <a
            className="flex"
            href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.BACKEND_URL}/auth/kakao`}
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

        <div className="mt-[24px] flex flex-row w-[377px] h-[62px] bg-[#5AC451] rounded-lg">
          <a
            className="flex"
            href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=${process.env.BACKEND_URL}/auth/naver`}
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

        <div className="mt-[24px] flex flex-row w-[377px] h-[62px] border-[#9E9E9E] rounded-lg border-2">
          <a
            className="flex"
            href={`https://accounts.google.com/o/oauth2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.BACKEND_URL}/auth/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`}
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
    </>
  );
}
