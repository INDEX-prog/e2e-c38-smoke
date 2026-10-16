import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { tier } = body;
    
    const priceData = {
      single: {
        amount: 9900,
        name: 'Single Smoke Test',
        description: 'One-time smoke test for your launch'
      },
      bundle: {
        amount: 29900,
        name: '5-Test Bundle',
        description: '5 smoke tests over 2 weeks for pre-launch validation'
      }
    };
    
    const selectedTier = priceData[tier as keyof typeof priceData];
    
    if (!selectedTier) {
      return NextResponse.json(
        { success: false, error: 'Invalid tier selected' },
        { status: 400 }
      );
    }
    
    // In production, this would create a Stripe checkout session
    // For now, return a mock session for testing
    const mockSession = {
      id: `cs_test_${Date.now()}`,
      url: `/checkout/success?session_id=cs_test_${Date.now()}&tier=${tier}`,
      tier,
      amount: selectedTier.amount
    };
    
    return NextResponse.json({ 
      success: true, 
      sessionId: mockSession.id,
      url: mockSession.url
    });
  } catch (error) {
    console.error('Checkout creation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
