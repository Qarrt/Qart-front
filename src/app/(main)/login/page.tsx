import GoogleLoginButton from './google/page';
import KakaoLoginButton from './kakao/page';
import NaverLoginButton from './naver/page';

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <div className="mt-[40px]">
          <KakaoLoginButton />
        </div>
        <div className="mt-[40px]">
          <GoogleLoginButton />
        </div>
        <div className="mt-[40px]">
          <NaverLoginButton />
        </div>
      </div>
    </>
  );
}
