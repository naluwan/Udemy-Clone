'use client';

import * as z from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Chapter, MuxData } from '@prisma/client';
import MuxPlayer from '@mux/mux-player-react';

import { Button } from '@/components/ui/button';
import { Pencil, PlusCircle, Video } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import { FileUpload } from '@/components/file-upload';

interface ChapterVideoFormProps {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
}

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

export const ChapterVideoForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterVideoFormProps) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const router = useRouter();

  const toggleEdit = () => setIsEditing((prev) => !prev);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values);
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
        章節影片
        <Button variant='ghost' onClick={toggleEdit}>
          {isEditing && <>取消</>}
          {!isEditing && !initialData.videoUrl && (
            <>
              <PlusCircle className='mr-2 h-4 w-4' />
              上傳影片
            </>
          )}
          {!isEditing && initialData.videoUrl && (
            <>
              <Pencil className='mr-2 h-4 w-4' />
              編輯影片
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.videoUrl ? (
          <div className='flex h-60 items-center justify-center rounded-md bg-slate-200'>
            <Video className='h-10 w-10 text-slate-500' />
          </div>
        ) : (
          <div className='relative mt-2 aspect-square'>
            <MuxPlayer playbackId={initialData.muxData?.playbackId || ''} />
          </div>
        ))}
      {isEditing && (
        <div>
          <FileUpload
            endpoint='chapterVideo'
            onChange={(url) => {
              if (url) {
                onSubmit({ videoUrl: url });
              }
            }}
          />
          <div className='mt-4 text-xs text-muted-foreground'>上傳本章節的教學影片</div>
        </div>
      )}
      {initialData.videoUrl && !isEditing && (
        <div className='mt-2 text-xs text-muted-foreground'>
          影片加載可能需要等待幾分鐘，如果看不到影片，請重新整理頁面
        </div>
      )}
    </div>
  );
};
