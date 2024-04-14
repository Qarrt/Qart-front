'use client';
import { useGetMyInfo } from '@/hooks/useGetMyInfo';
import { useEffect, useState } from 'react';
import { usePutMyInfo } from '@/hooks/usePutMyInfo';
import { useRouter } from 'next/navigation';
export default function MyPage() {
  const { data: myInfo } = useGetMyInfo();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const updateMyInfo = usePutMyInfo();

  useEffect(() => {
    if (myInfo) {
      setName(myInfo.name || '');
      setEmail(myInfo.email || '');
    }
  }, [myInfo]);
  const handleEdit = () => {
    updateMyInfo.mutate(
      {
        userData: { name, email },
      },
      {
        onSuccess: () => {
          alert('프로필이  수정되었습니다.');
        },
        onError: () => {
          alert('프로필 수정에 실패했습니다.');
        },
      },
    );
  };
  return (
    <div
      className="flex flex-col items-center mt-[50px] border-2 border-black ml-auto mr-auto"
      style={{ maxWidth: '500px' }}
    >
      <div> {myInfo ? `${myInfo.name}님 안녕하세요.` : '로딩중...'}</div>

      <form className="mt-[50px]">
        <div>
          <label htmlFor="name" className="mr-[40px]">
            닉네임
          </label>
          <input
            type="text"
            id="name"
            value={name}
            className="border-2 border-gray-300 rounded-md p-2"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="mr-[40px]">
            이메일
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className="border-2 border-gray-300 rounded-md p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="flex ml-auto mr-auto mt-[40px] mb-2 p-[2px] border-2 border-black"
          onClick={handleEdit}
        >
          프로필 저장
        </button>
      </form>
    </div>
  );
}
