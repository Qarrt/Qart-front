'use client';

import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
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
}: {
  placeholder: string;
  height: string;
}) {
  const [quillValue, setQuillValue] = useState('');

  const handleQuillChange = (
    content: string,
    delta: any,
    source: any,
    editor: any,
  ) => {
    setQuillValue(editor.getContents());
  };

  return (
    <>
      <QuillNoSSRWrapper
        className="custom-quill mt-[18px]"
        style={{ width: '1040px', height: height }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={quillValue || ''}
        onChange={handleQuillChange}
        placeholder={placeholder}
      />
    </>
  );
}
