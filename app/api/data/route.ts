import { NextResponse } from "next/server";
import { db, initDB } from "@/lib/db";
import type { TestSubmission } from "@/lib/db";

export async function GET(): Promise<NextResponse> {
  try {
    await initDB();
    const result = await db.execute(
      "SELECT * FROM test_submissions ORDER BY created_at DESC LIMIT 50"
    );
    
    const submissions: TestSubmission[] = result.rows.map((row) => ({
      id: row.id as number,
      business_type: row.business_type as string,
      intake_url: row.intake_url as string,
      pain_point: row.pain_point as string,
      email: row.email as string,
      created_at: row.created_at as string,
      status: row.status as string,
      stripe_payment_id: row.stripe_payment_id as string | null,
      test_result: row.test_result as string | null,
    }));

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    await initDB();
    const body = await request.json();
    const { business_type, intake_url, pain_point, email } = body;

    if (!business_type || !intake_url || !pain_point || !email) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const result = await db.execute({
      sql: `INSERT INTO test_submissions (business_type, intake_url, pain_point, email, status) 
            VALUES (?, ?, ?, ?, 'pending') RETURNING id`,
      args: [business_type, intake_url, pain_point, email],
    });

    const insertedId = result.rows[0]?.id as number;

    return NextResponse.json({ 
      success: true, 
      id: insertedId,
      message: "Submission created successfully" 
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to create submission" },
      { status: 500 }
    );
  }
}
