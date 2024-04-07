'use client';

import BeforeLoginHeader from '@/components/header/BeforeLoginHeader';
import { ReactNode, useState } from 'react';
import pagesConfig from '@/constants/pagesConfig';
import { usePathname } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RemoteButton from '@/components/_components/RemoteButton';

interface LayoutProps {
  children?: ReactNode;
}

function matchesDynamicPath(pathname: string, pattern: string): boolean {
  const regex = new RegExp('^' + pattern.replace(/\[.*?\]/g, '.*') + '$');
  return regex.test(pathname);
}
export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const queryClient = new QueryClient();
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
    case 'BeforeLoginHeader':
      headerComponent = <BeforeLoginHeader />;
      break;
    case null:
      headerComponent = null;
      break;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {headerComponent}
      <main>{children}</main>
      <RemoteButton />
    </QueryClientProvider>
  );
}
