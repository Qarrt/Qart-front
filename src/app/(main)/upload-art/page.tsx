'use client';

import '../../styles/globals.css';
import Image from 'next/image';
import ReactQuillTemplate from './_component/ReactQuillTemplate';
import { useRef } from 'react';
import { useUploadArt } from '@/hooks/useUploadArt';
import UploadHeader from './_component/UploadHeader';
import { useRouter } from 'next/navigation';
import useArtStore from '@/stores/useArtStore';
import Client from '@/components/_components/Client';
import { useCheckMyArtList } from '@/hooks/useMyArtList';
import { ArtData } from '@/types/Art';

export default function UploadArtPage() {
  const { artData, setArtData } = useArtStore();
  const router = useRouter();
  const uploadMutation = useUploadArt();
  const { data: myArtList } = useCheckMyArtList();
  const handleSubmit = async () => {
    uploadMutation.mutate(artData, {
      onSuccess: () => {
        router.push('/');
        alert('작품등록에 성공하였습니다.');
      },
      onError: () => {
        alert('작품등록에 실패하였습니다.');
      },
    });
  };

  // 내가 등록한 작품 확인 훅 테스트용 함수
  const handleMyArtList = () => {
    myArtList.map((art: ArtData) => {
      console.log(art);
    });
  };
  const handleArtistCommentChange = (content: string) => {
    setArtData({ authorComment: content });
  };
  const handleDescriptionChange = (content: string) => {
    setArtData({ description: content });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setArtData({
      [name]: type === 'radio' ? value === 'true' : value,
    });
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setArtData({ file: e.target.files[0] });
    }
  };
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <UploadHeader onSubmit={() => handleSubmit()} />
      {/* 내 등록한 작품조회 훅 테스트용 버튼 */}
      {myArtList && (
        <button onClick={handleMyArtList}>
          내가 등록한 작품 확인{myArtList.length}개
        </button>
      )}
      <h2 className="flex justify-center mt-[89px] text-3xl font-bold">
        작품 등록
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex mt-[82px]">
          <div className="flex flex-row">
            <div className="flex flex-col ml-[200px]">
              <span className="text-[20px] text-[#595959] leading-[30px] font-semibold">
                작품이미지
              </span>
              <div
                className={`flex w-[424px] h-[424px] items-center justify-center rounded-[40px] mt-[12px] ${
                  artData.file ? '' : 'bg-[#C7C7C7]'
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <div onClick={triggerFileInput} style={{ cursor: 'pointer' }}>
                  {artData.file ? (
                    <Image
                      src={URL.createObjectURL(artData.file)}
                      alt="ArtImage"
                      width={424}
                      height={424}
                    ></Image>
                  ) : (
                    <Image
                      src="/svg/EmptyImage.svg"
                      alt="EmptyImage"
                      width={75}
                      height={56}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-[135px]">
              <span className="text-[20px] text-[#595959] leading-[30px] font-semibold">
                작품명
              </span>
              <input
                name="title"
                type="text"
                placeholder="작품명"
                className="w-[424px] h-[64px] border-[1px] border-[#C7C7C7] mt-[12px] rounded-[10px] placeholder-[#C7C7C7] pl-[31px] font-medium"
                onChange={handleChange}
              />
              <span className="text-[20px] text-[#595959] leading-[30px] font-semibold mt-[20px]">
                재료
              </span>
              <input
                name="material"
                type="text"
                placeholder="캔버스에 유채"
                className="w-[424px] h-[64px] border-[1px] border-[#C7C7C7] mt-[12px] rounded-[10px] placeholder-[#C7C7C7] pl-[31px] font-medium"
                onChange={handleChange}
              />
              <span className="text-[20px] text-[#595959] leading-[30px] font-semibold mt-[20px]">
                제작년도
              </span>
              <input
                name="year"
                type="text"
                placeholder="2024"
                className="w-[424px] h-[64px] border-[1px] border-[#C7C7C7] mt-[12px] rounded-[10px] placeholder-[#C7C7C7] pl-[31px] font-medium"
                onChange={handleChange}
              />
              <span className="text-[20px] text-[#595959] leading-[30px] font-semibold mt-[30px]">
                작품사이즈
              </span>
              <div className="size-input-container mt-[26px]">
                <label
                  htmlFor="width"
                  className="text-[18px] leading-[27px] text-[#595959] font-medium"
                >
                  가로
                </label>
                <input
                  type="number"
                  id="width"
                  name="width"
                  className=" w-[134px] h-[64px] rounded-[10px] border-[1px] border-[#C7C7C7] ml-[11px] text-center number-input-hide-buttons"
                  placeholder="148"
                  onChange={handleChange}
                />
                <label
                  htmlFor="height"
                  className="text-[18px] leading-[27px] text-[#595959] font-medium ml-[18px]"
                >
                  세로
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  className=" w-[134px] h-[64px] rounded-[10px] border-[1px] border-[#C7C7C7] ml-[11px] text-center number-input-hide-buttons"
                  placeholder="428"
                  onChange={handleChange}
                />
                <label
                  htmlFor="cm"
                  className="text-[18px] leading-[27px] text-[#595959] font-medium ml-[18px]"
                >
                  cm
                </label>
              </div>
              <div className="flex mt-[50px] flex-col">
                <span className="text-[20px] leading-[30px] text-[#595959] font-semibold">
                  전시 여부
                </span>
                <div className="flex items-center mt-[31px]">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="exhibited"
                      value="true"
                      className="sr-only radio peer"
                      onChange={handleChange}
                    />
                    <div className="w-[18px] h-[18px] bg-white border rounded-full peer-checked:border-[3px] peer-checked:bg-black"></div>
                    <span className="ml-[12px] text-[#595959]">전시중</span>
                  </label>
                  <label className="flex items-center ml-[19px]">
                    <input
                      type="radio"
                      name="exhibited"
                      value="false"
                      className="sr-only radio peer"
                      onChange={handleChange}
                      defaultChecked
                    />
                    <div className="w-[18px] h-[18px] bg-white border rounded-full peer-checked:border-[3px] peer-checked:bg-black"></div>
                    <span className="ml-[12px] text-[#595959]">해당 없음</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[200px] mt-[46px]">
          <p className="text-[30px] leading-[45px] font-bold">작가 한마디</p>
          <Client>
            <ReactQuillTemplate
              value={artData.authorComment}
              height="400px"
              placeholder="작품의 작가로서 관람객에게 전하고 싶은 한마디"
              onChange={handleArtistCommentChange}
            />
          </Client>
        </div>

        <div className="ml-[200px] mt-[150px]">
          {/* margin-top 150px 임의로 해놓음 위에 박스를 침범해서 px값을 수정해야함 */}
          <p className="text-[30px] leading-[45px] font-bold">작품 설명</p>
          <Client>
            <ReactQuillTemplate
              value={artData.description}
              height="600px"
              placeholder="관람객들이 작품을 감상할 때 참고할 수 있도록 작품의 상세 정보를 작성해주세요!"
              onChange={handleDescriptionChange}
            />
          </Client>
        </div>
      </form>
    </>
  );
}
