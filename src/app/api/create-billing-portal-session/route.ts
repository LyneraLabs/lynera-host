import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

/**
 * Stripe Billing Portal Session API Route
 * 
 * Creates a Stripe Customer Portal session for managing subscriptions and payment methods.
 * This allows customers to:
 * - View and manage subscriptions
 * - Update payment methods
 * - View invoices
 * - Update billing information
 * 
 * Required environment variable:
 * - STRIPE_SECRET_KEY: Your Stripe secret key (server-side only)
 */

export async function POST(req: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes('placeholder')) {
      return NextResponse.json(
        {
          error: 'Stripe not configured',
          message: 'Please configure Stripe to use the billing portal.',
        },
        { status: 501 }
      )
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-01-28.clover',
    })

    const body = await req.json()
    const { customerId, returnUrl } = body

    // Validate required fields
    if (!customerId) {
      return NextResponse.json(
        { error: 'Customer ID is required' },
        { status: 400 }
      )
    }

    // Create a billing portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Billing portal session creation error:', error)
    return NextResponse.json(
      {
        error: 'Failed to create billing portal session',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
