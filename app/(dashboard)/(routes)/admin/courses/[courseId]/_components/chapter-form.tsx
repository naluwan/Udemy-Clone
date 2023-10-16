'use client';

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Chapter, Course } from '@prisma/client';

import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Loader2, PlusCircle } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import ChaptersList from './chapters-list';

interface ChapterFormProps {
  initialData: Course & { chapters: Chapter[] };
  courseId: string;
}

const formSchema = z.object({
  title: z.string().min(1),
});

export const ChapterForm = ({ initialData, courseId }: ChapterFormProps) => {
  const [isCreating, setIsCreating] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const router = useRouter();

  const toggleCreating = () => setIsCreating((prev) => !prev);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '' },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/courses/${courseId}/chapters`, values);
      toast.success('課程章節建立完成');
      toggleCreating();
      router.refresh();
    } catch {
      toast.error('有東西出錯了');
    }
  };

  const onReorder = async (updateData: { id: string; position: number }[]) => {
    try {
      setIsUpdating(true);

      await axios.put(`/api/courses/${courseId}/chapters/reorder`, { list: updateData });
      toast.success('課程章節順序更新完成');
      router.refresh();
    } catch {
      toast.error('有東西出錯了');
    } finally {
      setIsUpdating(false);
    }
  };

  const onEdit = (id: string) => {
    router.push(`/admin/courses/${courseId}/chapters/${id}`);
  };

  return (
    <div className='relative mt-6 rounded-md border bg-slate-100 p-4'>
      {isUpdating && (
        <div className='absolute right-0 top-0 flex h-full w-full items-center justify-center rounded-md bg-slate-500/20'>
          <Loader2 className='h-6 w-6 animate-spin text-sky-700' />
        </div>
      )}
      <div className='flex items-center justify-between font-medium'>
        課程章節
        <Button variant='ghost' onClick={toggleCreating}>
          {isCreating ? (
            <>取消</>
          ) : (
            <>
              <PlusCircle className='mr-2 h-4 w-4' />
              建立章節
            </>
          )}
        </Button>
      </div>
      {isCreating && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='mt-4 space-y-4'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input disabled={isSubmitting} placeholder='介紹課程...' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={!isValid || isSubmitting} type='submit'>
              建立
            </Button>
          </form>
        </Form>
      )}
      {!isCreating && (
        <div
          className={cn(
            'mt-2 text-sm',
            !initialData.chapters.length && 'italic text-slate-500',
          )}
        >
          {!initialData.chapters.length && '尚未建立章節'}
          <ChaptersList
            onEdit={onEdit}
            onReorder={onReorder}
            items={initialData.chapters || []}
          />
        </div>
      )}
      {!isCreating && (
        <p className='mt-4 text-xs text-muted-foreground'>拖拉前方圖示即可改變章節順序</p>
      )}
    </div>
  );
};
