import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Mux from '@mux/mux-node';

// 在變數後方加上驚嘆號，等於告訴編譯器這個變數不會等於null或undefined
const { Video } = new Mux(process.env.MUX_TOKEN_ID!, process.env.MUX_TOKEN_SECRET!);

export async function DELETE(req: Request, { params }: { params: { courseId: string } }) {
  try {
    const { userId } = auth();
    const { courseId } = params;
    if (!userId) return new NextResponse('請先登入再進行操作', { status: 401 });

    const course = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
      include: {
        chapters: {
          include: {
            muxData: true,
          },
        },
      },
    });

    if (!course) return new NextResponse('查無此課程資料', { status: 404 });

    for (const chapter of course.chapters) {
      if (chapter.muxData?.assetId) {
        await Video.Assets.del(chapter.muxData.assetId);
      }
    }

    const deleteCourse = await db.course.delete({
      where: {
        id: courseId,
      },
    });

    return NextResponse.json(deleteCourse);
  } catch (error) {
    console.log('[COURSE_ID_DELETE]', error);
    return new NextResponse('伺服器發生錯誤', { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { courseId: string } }) {
  try {
    const { userId } = auth();
    const { courseId } = params;
    const values = await req.json();

    if (!userId) return new NextResponse('請先登入再進行操作', { status: 401 });

    const course = await db.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (err) {
    console.log('[COURSE_ID]', err);
    return new NextResponse('內部發生錯誤', { status: 500 });
  }
}
