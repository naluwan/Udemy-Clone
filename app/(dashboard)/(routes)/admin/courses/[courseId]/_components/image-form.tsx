'use client';

import * as z from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Course } from '@prisma/client';

import { Button } from '@/components/ui/button';
import { ImageIcon, Pencil, PlusCircle } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { FileUpload } from '@/components/file-upload';

interface ImageFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: '圖片是必填欄位',
  }),
});

export const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const router = useRouter();

  const toggleEdit = () => setIsEditing((prev) => !prev);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success('更新成功');
      toggleEdit();
      router.refresh();
    } catch {
      toast.error('有東西出錯了');
    }
  };

  return (
    <div className='mt-6 rounded-md border bg-slate-100 p-4'>
      <div className='flex items-center justify-between font-medium'>
        課程圖片
        <Button variant='ghost' onClick={toggleEdit}>
          {isEditing && <>取消</>}
          {!isEditing && !initialData.imageUrl && (
            <>
              <PlusCircle className='mr-2 h-4 w-4' />
              上傳圖片
            </>
          )}
          {!isEditing && initialData.imageUrl && (
            <>
              <Pencil className='mr-2 h-4 w-4' />
              編輯圖片
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.imageUrl ? (
          <div className='flex h-60 items-center justify-center rounded-md bg-slate-200'>
            <ImageIcon className='h-10 w-10 text-slate-500' />
          </div>
        ) : (
          <div className='relative mt-2 aspect-square'>
            <Image
              alt='Upload'
              fill
              className='rounded-md object-cover'
              src={initialData.imageUrl}
            />
          </div>
        ))}
      {isEditing && (
        <div>
          <FileUpload
            endpoint='courseImage'
            onChange={(url) => {
              if (url) {
                onSubmit({ imageUrl: url });
              }
            }}
          />
          <div className='mt-4 text-xs text-muted-foreground'>最佳圖片比例為1:1</div>
        </div>
      )}
    </div>
  );
};
