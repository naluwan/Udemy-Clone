'use client';

import { ConfirmModel } from '@/components/models/confirm-model';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
}

const Actions = ({ disabled, courseId, isPublished }: ActionsProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast.success('已取消發布此課程');
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);
        toast.success('已發布此課程');
      }

      router.refresh();
    } catch (error) {
      toast.error('有東西出錯了');
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/courses/${courseId}`);
      toast.success('課程刪除成功');
      router.refresh();
      router.push(`/admin/courses/${courseId}`);
    } catch (error) {
      toast.error('有東西出錯了');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex items-center gap-x-2'>
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant='outline'
        size='sm'
      >
        {isPublished ? '取消發布' : '發布'}
      </Button>
      <ConfirmModel onConfirm={onDelete}>
        <Button size='sm' disabled={isLoading}>
          <Trash className='h-4 w-4' />
        </Button>
      </ConfirmModel>
    </div>
  );
};

export default Actions;
