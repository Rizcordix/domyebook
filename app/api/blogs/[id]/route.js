import db from '@/lib/db';
import { NextResponse } from 'next/server';
import { fileTypeFromBuffer } from 'file-type'; // ✅ Correct named import

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const stmt = db.prepare(`
      SELECT BlogID, MainTitle, date,
             SubHeading1, Paragraph1, Paragraph2,
             Quote, Author, Image1,
             SubHeading2, Paragraph3, Paragraph4, Image2,
             SubHeading3, Paragraph5, Paragraph6, Image3,
             SubHeading4, Paragraph7, Paragraph8
      FROM Blog3
      WHERE BlogID = ?
    `);

    const blog = stmt.get(id);

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Process each image field (Image1, Image2, Image3)
    for (const key of ['Image1', 'Image2', 'Image3']) {
      const raw = blog[key];
      if (raw) {
        const buffer = Buffer.from(raw);
        const type = await fileTypeFromBuffer(buffer); // ✅ Correct usage
        const mime = type?.mime || 'image/jpeg'; // Default fallback
        blog[key] = `data:${mime};base64,${buffer.toString('base64')}`;
      } else {
        blog[key] = null;
      }
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('🔴 ERROR in /api/blogs/[id]:', error);
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}
