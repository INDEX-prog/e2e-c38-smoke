import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2023-10-16',
});

interface CheckoutRequestBody {
  businessType: string;
  intakeUrl: string;
  painPoint: string;
  tier: 'single' | 'bundle';
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequestBody = await request.json();
    const { businessType, intakeUrl, painPoint, tier } = body;

    // Validate required fields
    if (!businessType || !intakeUrl || !painPoint) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const priceData = tier === 'bundle' 
      ? { amount: 29900, name: '5-Test Bundle', description: 'Pre-launch validation cycle - 5 smoke tests' }
      : { amount: 9900, name: 'Single Smoke Test', description: 'One-time smoke test for urgent launch validation' };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: priceData.name,
              description: priceData.description,
            },
            unit_amount: priceData.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://e2e-c38-smoke.vercel.app'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://e2e-c38-smoke.vercel.app'}/#get-started`,
      metadata: {
        businessType,
        intakeUrl,
        painPoint,
        tier,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
