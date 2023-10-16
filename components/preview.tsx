'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import 'react-quill/dist/quill.bubble.css';

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  const ReactQuill = React.useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    [],
  );

  return <ReactQuill theme='bubble' value={value} readOnly />;
};
