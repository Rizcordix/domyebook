import { NextResponse } from 'next/server';
import { poolPromise, sql } from '@/lib/db';

export async function GET() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Blog');
    return NextResponse.json(result.recordset);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
