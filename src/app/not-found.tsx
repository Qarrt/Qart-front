'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-gray-800 animate-pulse">404</h1>
      <p className="text-lg text-gray-600 mt-4">페이지가 존재 하지 않습니다!</p>
      <button
        color="blue"
        className="mt-6 animate-bounce"
        onClick={() => router.push('/')}
      >
        홈으로
      </button>
    </div>
  );
}
