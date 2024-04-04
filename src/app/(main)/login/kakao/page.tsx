export default function KakaoLoginButton() {
  return (
    <a
      href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.BACKEND_URL}/auth/kakao`}
    >
      카카오 로그인
    </a>
  );
}
