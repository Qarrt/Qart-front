export default function GoogleLoginButton() {
  return (
    <>
      <a
        href={`https://accounts.google.com/o/oauth2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.BACKEND_URL}/auth/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`}
      >
        구글 로그인
      </a>
    </>
  );
}
