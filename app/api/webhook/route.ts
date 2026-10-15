import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db, initDB } from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2023-10-16",
});

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || "whsec_placeholder"
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const submissionId = session.metadata?.submissionId;

    if (submissionId) {
      try {
        await initDB();
        await db.execute({
          sql: `UPDATE test_submissions 
                SET status = 'paid', stripe_payment_id = ? 
                WHERE id = ?`,
          args: [session.payment_intent as string, parseInt(submissionId)],
        });
      } catch (error) {
        console.error("Database update error:", error);
      }
    }
  }

  return NextResponse.json({ received: true });
}
