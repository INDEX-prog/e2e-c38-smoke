import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2023-10-16",
});

interface CheckoutRequest {
  priceType: "single" | "bundle";
  submissionId: number;
  email: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body: CheckoutRequest = await request.json();
    const { priceType, submissionId, email } = body;

    const priceAmount = priceType === "single" ? 9900 : 29900;
    const productName = priceType === "single" 
      ? "Single Smoke Test" 
      : "5-Test Bundle (2 weeks)";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: productName,
              description: priceType === "single"
                ? "One-time smoke test for your payment flow"
                : "5 smoke tests valid for 2 weeks - Pre-launch validation cycle",
            },
            unit_amount: priceAmount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}&submission_id=${submissionId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/pricing`,
      customer_email: email,
      metadata: {
        submissionId: submissionId.toString(),
        priceType,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
