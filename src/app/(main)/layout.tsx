'use client';

import BeforeLoginHeader from '@/components/header/BeforeLoginHeader';
import { ReactNode } from 'react';
import pagesConfig from '@/constants/pagesConfig';
import { usePathname } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RemoteButton from '@/components/_components/RemoteButton';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AfterLoginHeader from '@/components/header/AfterLoginHeader';
import Cookies from 'js-cookie';
import Client from '@/components/_components/Client';
interface LayoutProps {
  children?: ReactNode;
  modal?: ReactNode;
}

function matchesDynamicPath(pathname: string, pattern: string): boolean {
  const regex = new RegExp('^' + pattern.replace(/\[.*?\]/g, '.*') + '$');
  return regex.test(pathname);
}
export default function Layout({ children, modal }: LayoutProps) {
  const pathname = usePathname();
  const queryClient = new QueryClient();
  const isLoggedIn = Cookies.get('isLoggedIn') === 'true';
  let currentPageConfig = pagesConfig[pathname] || {};

  // artwork 페이지 동적 경로 처리
  if (!currentPageConfig.headerComponent) {
    Object.keys(pagesConfig).forEach((key) => {
      if (matchesDynamicPath(pathname, key)) {
        currentPageConfig = pagesConfig[key];
      }
    });
  }

  // 헤더 컴포넌트 선택 및 렌더링
  let headerComponent = null;
  if (currentPageConfig.headerComponent !== null) {
    if (isLoggedIn) {
      headerComponent = <AfterLoginHeader />;
    } else if (!isLoggedIn) {
      headerComponent = <BeforeLoginHeader />;
    } else null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Client>{headerComponent}</Client>
      <main>{children}</main>
      {modal}
      <RemoteButton />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
