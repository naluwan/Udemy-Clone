import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request, { params }: { params: { courseId: string } }) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    if (!userId) return new NextResponse('請先登入再進行操作', { status: 401 });

    const courseOwner = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!courseOwner) return new NextResponse('權限不足', { status: 401 });

    const lastChapter = await db.chapter.findFirst({
      where: {
        courseId: params.courseId,
      },
      orderBy: {
        position: 'asc',
      },
    });

    const newPosition = lastChapter ? lastChapter.position + 1 : 1;

    const chapter = await db.chapter.create({
      data: {
        title,
        courseId: params.courseId,
        position: newPosition,
      },
    });

    return NextResponse.json(chapter);
  } catch (err) {
    console.log('[CHAPTER]', err);
    return new NextResponse('伺服器發生錯誤', { status: 500 });
  }
}
