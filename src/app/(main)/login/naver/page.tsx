import Image from 'next/image';
export default function NaverLoginButton() {
  return (
    <>
      <a
        href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=${process.env.BACKEND_URL}/auth/naver`}
      >
        <Image
          src="/네이버로그인.svg"
          alt="naver login"
          width={200}
          height={50}
        />
      </a>
    </>
  );
}
