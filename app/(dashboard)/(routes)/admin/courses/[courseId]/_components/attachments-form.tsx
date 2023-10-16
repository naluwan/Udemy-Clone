'use client';

import * as z from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Attachment, Course } from '@prisma/client';

import { Button } from '@/components/ui/button';
import { File, Loader2, PlusCircle, X } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import { FileUpload } from '@/components/file-upload';

interface AttachmentFormProps {
  initialData: Course & { attachments: Attachment[] };
  courseId: string;
}

const formSchema = z.object({
  url: z.string().min(1),
});

export const AttachmentForm = ({ initialData, courseId }: AttachmentFormProps) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [deletingId, setDeletingId] = React.useState<string | null>(null);
  const router = useRouter();

  const toggleEdit = () => setIsEditing((prev) => !prev);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/courses/${courseId}/attachments`, values);
      toast.success('更新成功');
      toggleEdit();
      router.refresh();
    } catch {
      toast.error('有東西出錯了');
    }
  };

  const onDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
      toast.success('刪除附件成功');
      router.refresh();
    } catch {
      toast.error('有東西出錯了');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className='mt-6 rounded-md border bg-slate-100 p-4'>
      <div className='flex items-center justify-between font-medium'>
        課程附件
        <Button variant='ghost' onClick={toggleEdit}>
          {isEditing && <>取消</>}
          {!isEditing && (
            <>
              <PlusCircle className='mr-2 h-4 w-4' />
              上傳附件
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
          {initialData.attachments.length === 0 && (
            <p className='text-sm italic text-slate-500'>尚未上傳附件</p>
          )}
          {initialData.attachments.length > 0 && (
            <div className='space-y-2'>
              {initialData.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className='flex w-full items-start rounded-md border border-sky-200 bg-sky-100 p-3 text-sky-700'
                >
                  <File className='mr-2 h-4 w-4 flex-shrink-0' />
                  <p className='line-clamp-1 text-xs'>{attachment.name}</p>
                  {deletingId === attachment.id && (
                    <div className='ml-auto'>
                      <Loader2 className='h-4 w-4 animate-spin' />
                    </div>
                  )}
                  {deletingId !== attachment.id && (
                    <button
                      className='ml-auto transition hover:opacity-75'
                      onClick={() => onDelete(attachment.id)}
                    >
                      <X className='h-4 w-4' />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {isEditing && (
        <div>
          <FileUpload
            endpoint='courseAttachment'
            onChange={(url) => {
              if (url) {
                onSubmit({ url: url });
              }
            }}
          />
          <div className='mt-4 text-xs text-muted-foreground'>
            上傳學生在課程中會用到的資料
          </div>
        </div>
      )}
    </div>
  );
};
