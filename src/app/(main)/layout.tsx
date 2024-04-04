'use client';

import Header from '@/components/header/Header';
import UploadHeader from '@/app/(main)/upload-art/_component/UploadHeader';
import { ReactNode } from 'react';
import pagesConfig from '@/constants/pagesConfig';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children?: ReactNode;
}

function matchesDynamicPath(pathname: string, pattern: string): boolean {
  const regex = new RegExp('^' + pattern.replace(/\[.*?\]/g, '.*') + '$');
  return regex.test(pathname);
}
export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  let currentPageConfig = pagesConfig[pathname] || {};

  // 동적 경로 처리
  if (!currentPageConfig.headerComponent) {
    Object.keys(pagesConfig).forEach((key) => {
      if (matchesDynamicPath(pathname, key)) {
        currentPageConfig = pagesConfig[key];
      }
    });
  }

  // 헤더 컴포넌트 선택 및 렌더링
  let headerComponent = null;
  switch (currentPageConfig.headerComponent) {
    case 'Header':
      headerComponent = <Header />;
      break;
    case 'UploadHeader':
      headerComponent = <UploadHeader />;
      break;
    default:
      break; // 기본값이나 오류 처리
  }

  return (
    <div>
      {headerComponent}
      <main>{children}</main>
    </div>
  );
}
