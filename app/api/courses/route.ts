import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

// 定義建立課程 post api
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    if (!userId) {
      return new NextResponse('請先登入再執行操作', { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (err) {
    console.log('[COURSES]', err);
    return new NextResponse('伺服器發生錯誤', { status: 500 });
  }
}
