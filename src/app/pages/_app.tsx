import Header from '@/components/header/Header';
import '../styles/globals.css';
import { ReactNode } from 'react';

export default function MyApp({
  Component,
  pageProps,
}: {
  children: ReactNode;
}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
