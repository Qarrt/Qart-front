import Image from 'next/image';
export default function KakaoLoginButton() {
  return (
    <a
      href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.BACKEND_URL}/auth/kakao`}
    >
      <Image src="/svg/kakao.svg" alt="kakao login" width={30} height={30} />
    </a>
  );
}
