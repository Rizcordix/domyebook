import { NextResponse } from 'next/server';
import { poolPromise } from '@/lib/db'; // Adjust path if needed

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const pool = await poolPromise;

    await pool.request()
      .input('EmailAddress', email)
      .query(`
        INSERT INTO NewsletterSubscribers (EmailAddress)
        VALUES (@EmailAddress)
      `);

    return NextResponse.json({ message: 'Subscription successful' });
  } catch (error) {
    if (error.message.includes('UNIQUE')) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
