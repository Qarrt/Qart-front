'use client';

import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import DOMPurify from 'dompurify';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false, //클라이언트에서만 측에서만 렌더링되게 설정
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link'],
    [{ align: [] }, { color: [] }, { background: [] }],
    ['clean'],
  ],
};
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'color',
  'background',
];
export default function ReactQuillTemplate({
  placeholder,
  height,
  onChange,
  value,
}: {
  placeholder: string;
  height: string;
  onChange: (content: string) => void;
  value: string;
}) {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleQuillChange = (
    content: string,
    delta: any,
    source: any,
    editor: any,
  ) => {
    const sanitizedContent = DOMPurify.sanitize(editor.getHTML());
    setValue(
      'contents',
      sanitizedContent === '<p><br></p>' ? '' : sanitizedContent,
    );
    trigger('contents'); // DOMPurify를 사용하여 공격에 취약한 코드를 제거
    onChange(sanitizedContent);
  };
  useEffect(() => {
    register('contents');
  }, [register]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <QuillNoSSRWrapper
          className="custom-quill mt-[18px]"
          style={{ width: '1040px', height: height }}
          theme="snow"
          modules={modules}
          formats={formats}
          value={value || ''}
          onChange={handleQuillChange}
          placeholder={placeholder}
        />
      </form>
    </>
  );
}
