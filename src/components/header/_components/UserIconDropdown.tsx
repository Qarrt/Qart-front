import Link from 'next/link';
import { forwardRef } from 'react';
interface UserIconDropdownProps {
  className: string;
  onClick: () => void;
}
const UserIconDropdown = forwardRef<HTMLDivElement, UserIconDropdownProps>(
  ({ className, onClick }, ref) => {
    const combinedClassName = `absolute right-0 z-10 mt-2 w-[200px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none top-[103px]${
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
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            마이페이지
          </Link>
          <Link
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-1"
          >
            마이 컬렉션
          </Link>

          <Link
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-2"
          >
            거래내역
          </Link>
          <Link
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-3"
          >
            고객센터
          </Link>

          <Link
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
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
