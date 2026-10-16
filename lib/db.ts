import { createClient } from '@libsql/client';

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL || 'file:local.db',
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function initDb(): Promise<void> {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS smoke_tests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      business_type TEXT NOT NULL,
      intake_url TEXT NOT NULL,
      pain_point TEXT,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      completed_at DATETIME,
      result TEXT
    )
  `);
  
  await db.execute(`
    CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      stripe_session_id TEXT UNIQUE,
      tier TEXT NOT NULL,
      amount INTEGER NOT NULL,
      status TEXT DEFAULT 'pending',
      email TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

export interface SmokeTest {
  id: number;
  business_type: string;
  intake_url: string;
  pain_point: string | null;
  status: string;
  created_at: string;
  completed_at: string | null;
  result: string | null;
}

export interface Payment {
  id: number;
  stripe_session_id: string | null;
  tier: string;
  amount: number;
  status: string;
  email: string | null;
  created_at: string;
}
