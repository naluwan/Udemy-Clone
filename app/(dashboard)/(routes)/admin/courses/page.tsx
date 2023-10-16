import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CoursesPage = () => {
  return (
    <div className='p-6'>
      <Link href='/admin/create'>
        <Button>新增</Button>
      </Link>
    </div>
  );
};

export default CoursesPage;
