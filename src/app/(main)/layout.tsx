'use client';

import Header from '@/components/header/Header';
import UploadHeader from '@/app/(main)/upload-art/_component/UploadHeader';
import { ReactNode, useState } from 'react';
import pagesConfig from '@/constants/pagesConfig';
import { usePathname } from 'next/navigation';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUploadArt } from '@/hooks/useUploadArt';
import { ArtData } from '@/types/Art';

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
    case 'Header':
      headerComponent = <Header />;
      break;
    case null:
      null;
      break;
    default:
      break;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {headerComponent}
      <main>{children}</main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
