import Link from 'next/link';
import { forwardRef, ForwardedRef } from 'react';

const UserIconDropdown = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref: ForwardedRef<HTMLDivElement>) => {
    const combinedClassName = `absolute right-0 z-10 mt-2 w-[200px] origin-top-right rounded-[12px] bg-white shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none top-[100px]${
      className || ''
    }`;
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
            href="#"
            className="text-[#595959] block px-4 py-2 text-[16px]"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            마이페이지
          </Link>
          <Link
            href="#"
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

          <Link
            href="#"
            className="text-[#595959] block px-4 py-2 text-[16px]"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-4"
          >
            로그아웃
          </Link>
        </div>
      </div>
    );
  },
);

UserIconDropdown.displayName = 'UserIconDropdown';
export default UserIconDropdown;
