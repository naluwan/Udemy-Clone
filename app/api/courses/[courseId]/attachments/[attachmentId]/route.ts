import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string; attachmentId: string } },
) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse('請先登入再進行操作', { status: 401 });

    const courseOwner = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!courseOwner) return new NextResponse('權限不足', { status: 401 });

    const attachment = await db.attachment.delete({
      where: {
        courseId: params.courseId,
        id: params.attachmentId,
      },
    });

    return NextResponse.json(attachment);
  } catch (err) {
    console.log('[ATTACHMENTS_ID]', err);
    return new NextResponse('伺服器發生錯誤', { status: 500 });
  }
}
