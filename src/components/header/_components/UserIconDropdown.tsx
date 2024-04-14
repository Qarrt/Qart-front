import Link from 'next/link';
import { forwardRef, ForwardedRef, useCallback } from 'react';
import { useAxios } from '@/lib/axios';

const UserIconDropdown = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref: ForwardedRef<HTMLDivElement>) => {
    const combinedClassName = `absolute right-0 z-10 mt-2 w-[200px] origin-top-right rounded-[12px] bg-white shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none top-[100px]${
      className || ''
    }`;
    const { axiosInstance } = useAxios();

    const handleLogout = useCallback(async () => {
      try {
        const serverLogoutResponse = await axiosInstance.get('/auth/logout', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('로그아웃 성공:', serverLogoutResponse.data);
        if (
          window.Kakao &&
          window.Kakao.isInitialized() &&
          window.Kakao.Auth.getAccessToken()
        ) {
          window.Kakao.Auth.logout(() => {
            console.log('카카오 SDK 로그아웃 성공');
          });
        }
        window.location.href = '/';
      } catch (error) {
        console.error('로그아웃 실패:', error);
      }
    }, [axiosInstance]);

    return (
      <div
        ref={ref}
        className={combinedClassName}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <Link
            href="/my-page"
            className="text-[#595959] block px-4 py-2 text-[16px]"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            마이페이지
          </Link>
          <Link
            href="my-collection"
            className="text-[#595959] block px-4 py-2 text-[16px]"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-1"
          >
            마이 컬렉션
          </Link>

          <Link
            href="#"
            className="text-[#595959] block px-4 py-2 text-[16px]"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-2"
          >
            거래내역
          </Link>
          <Link
            href="#"
            className="text-[#595959] block px-4 py-2 text-[16px]"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-3"
          >
            고객센터
          </Link>

          <button
            className="text-[#595959] block px-4 py-2 text-[16px]"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-4"
            onClick={handleLogout}
          >
            로그아웃
          </button>
        </div>
      </div>
    );
  },
);

UserIconDropdown.displayName = 'UserIconDropdown';
export default UserIconDropdown;
