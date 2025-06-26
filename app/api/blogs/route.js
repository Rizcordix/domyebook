import db from '@/lib/db';
import { NextResponse } from 'next/server';
import { fileTypeFromBuffer } from 'file-type'; // ✅ Named import

export async function GET() {
  try {
    const stmt = db.prepare(`
      SELECT BlogID, MainTitle, date,
             SubHeading1, Paragraph1, Paragraph2, Quote, Author,
             Image1
      FROM Blog3
    `);

    const blogs = stmt.all();

    const blogsWithImages = await Promise.all(
      blogs.map(async (blog) => {
        if (blog.Image1) {
          const buffer = Buffer.from(blog.Image1);

          const type = await fileTypeFromBuffer(buffer);

          const mime = type?.mime || 'image/jpeg'; // fallback
          blog.Image1 = `data:${mime};base64,${buffer.toString('base64')}`;
        } else {
          blog.Image1 = null;
        }

        return blog;
      })
    );

    return NextResponse.json(blogsWithImages);
  } catch (error) {
    console.error('🔴 ERROR in /api/blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
