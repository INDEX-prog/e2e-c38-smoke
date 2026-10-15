import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export async function initDB(): Promise<void> {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS test_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      business_type TEXT NOT NULL,
      intake_url TEXT NOT NULL,
      pain_point TEXT NOT NULL,
      email TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      status TEXT DEFAULT 'pending',
      stripe_payment_id TEXT,
      test_result TEXT
    )
  `);
}

export interface TestSubmission {
  id: number;
  business_type: string;
  intake_url: string;
  pain_point: string;
  email: string;
  created_at: string;
  status: string;
  stripe_payment_id: string | null;
  test_result: string | null;
}
