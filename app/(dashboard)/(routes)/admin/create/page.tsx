'use client';

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import toast from 'react-hot-toast';

const formSchema = z.object({
  title: z.string().min(1, { message: '欄位不可為空' }),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post('/api/courses', values);
      router.push(`/admin/courses/${res.data.id}`);
      toast.success('課程建立成功');
    } catch {
      toast.error('有東西出錯了！！');
    }
  };

  return (
    <div className='mx-auto flex h-full max-w-5xl p-6 md:items-center md:justify-center'>
      <div>
        <h1 className='text-2xl'>建立課程</h1>
        <p className='text-sm text-slate-600'>您的課程命名為？(可再次更改)</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='mt-8 space-y-8'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>課程名稱</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder='e.g. "網頁開發指南"'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>課程內容</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex items-center gap-x-2'>
              <Link href='/'>
                <Button type='button' variant='ghost'>
                  取消
                </Button>
              </Link>
              <Button type='submit' disabled={!isValid || isSubmitting}>
                下一步
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
