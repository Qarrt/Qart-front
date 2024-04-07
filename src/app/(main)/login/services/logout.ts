import { useAxios } from '@/lib/axios';

interface SocialPlatform {
  kakao: 'Kakao';
  naver: 'Naver';
  google: 'Google';
}

export const logoutFromSocial = async (social: keyof SocialPlatform) => {
  const { axiosInstance } = useAxios();

  try {
    const response = await axiosInstance.post(`/api/logout/${social}`);
    console.log('로그아웃 성공:', response.data);
  } catch (error) {
    console.error('로그아웃 실패:', error);
  }
};

export function logout() {
  const loginMethod = localStorage.getItem('loginMethod');

  switch (loginMethod) {
    case 'Kakao':
      window.Kakao.Auth.logout();
      logoutFromSocial('kakao');
      break;
    case 'Naver':
      window.location.href = 'https://nid.naver.com/nidlogin.logout';
      logoutFromSocial('naver');
      break;
    case 'Google':
      window.gapi.auth2
        .getAuthInstance()
        .signOut()
        .then(() => {
          logoutFromSocial('google');
        });
      break;
  }

  localStorage.removeItem('loginMethod');
}
