import KakaoLoginButton from './kakao/page';
import AfterLoginHeader from '@/components/header/AfterLoginHeader';

export default function LoginPage() {
  return (
    <>
      <AfterLoginHeader />
      <KakaoLoginButton />
    </>
  );
}
