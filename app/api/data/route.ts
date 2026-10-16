import { NextRequest, NextResponse } from 'next/server';
import { db, initDb } from '@/lib/db';

export async function GET(): Promise<NextResponse> {
  try {
    await initDb();
    
    const result = await db.execute('SELECT * FROM smoke_tests ORDER BY created_at DESC LIMIT 50');
    
    return NextResponse.json({ 
      success: true, 
      tests: result.rows 
    });
  } catch (error) {
    console.error('Database GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tests' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    await initDb();
    
    const body = await request.json();
    const { business_type, intake_url, pain_point } = body;
    
    if (!business_type || !intake_url) {
      return NextResponse.json(
        { success: false, error: 'Business type and intake URL are required' },
        { status: 400 }
      );
    }
    
    const result = await db.execute({
      sql: 'INSERT INTO smoke_tests (business_type, intake_url, pain_point) VALUES (?, ?, ?)',
      args: [business_type, intake_url, pain_point || null]
    });
    
    return NextResponse.json({ 
      success: true, 
      id: result.lastInsertRowid?.toString() 
    });
  } catch (error) {
    console.error('Database POST error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create test' },
      { status: 500 }
    );
  }
}
