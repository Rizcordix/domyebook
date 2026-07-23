import { NextResponse } from 'next/server';
import db from '@/lib/db'; // better-sqlite3 instance (lib/db.js has only a default export)

// Ensure the table exists (no-op after first run)
db.prepare(`
  CREATE TABLE IF NOT EXISTS NewsletterSubscribers (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    EmailAddress TEXT NOT NULL UNIQUE,
    SubscribedAt TEXT DEFAULT CURRENT_TIMESTAMP
  )
`).run();

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    db.prepare('INSERT INTO NewsletterSubscribers (EmailAddress) VALUES (?)').run(email);

    return NextResponse.json({ message: 'Subscription successful' });
  } catch (error) {
    if (error.message.includes('UNIQUE')) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
