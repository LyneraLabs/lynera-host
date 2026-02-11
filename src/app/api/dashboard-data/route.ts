import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import type { DashboardData } from '@/types/dashboard'

/**
 * Dashboard Data API Route
 * 
 * Fetches customer data from Stripe including:
 * - Customer information
 * - Active subscriptions
 * - Recent invoices
 * - Payment methods
 * 
 * Required environment variable:
 * - STRIPE_SECRET_KEY: Your Stripe secret key (server-side only)
 */

export async function GET(req: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes('placeholder')) {
      return NextResponse.json(
        {
          error: 'Stripe not configured',
          message: 'Please configure Stripe to view dashboard data.',
        },
        { status: 501 }
      )
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-01-28.clover',
    })

    // Get customer ID from query parameters
    const { searchParams } = new URL(req.url)
    const customerId = searchParams.get('customerId')

    if (!customerId) {
      return NextResponse.json(
        { error: 'Customer ID is required' },
        { status: 400 }
      )
    }

    // Fetch customer data
    const customer = await stripe.customers.retrieve(customerId)
    
    if (customer.deleted) {
      return NextResponse.json(
        { error: 'Customer not found' },
        { status: 404 }
      )
    }

    // Fetch subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      limit: 10,
    })

    // Fetch invoices
    const invoices = await stripe.invoices.list({
      customer: customerId,
      limit: 10,
    })

    // Fetch payment methods
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: 'card',
    })

    // Format the data
    const dashboardData: DashboardData = {
      customer: {
        id: customer.id,
        email: customer.email || '',
        name: customer.name || undefined,
      },
      subscriptions: subscriptions.data.map((sub: any) => ({
        id: sub.id,
        planName: sub.items.data[0]?.price.nickname || 'Subscription',
        status: sub.status,
        currentPeriodStart: new Date(sub.current_period_start * 1000),
        currentPeriodEnd: new Date(sub.current_period_end * 1000),
        amount: sub.items.data[0]?.price.unit_amount || 0,
        currency: sub.currency,
        cancelAtPeriodEnd: sub.cancel_at_period_end,
      })),
      invoices: invoices.data.map((invoice: any) => ({
        id: invoice.id,
        invoiceNumber: invoice.number || '',
        status: invoice.status || 'open',
        amount: invoice.amount_due,
        currency: invoice.currency,
        date: new Date(invoice.created * 1000),
        pdfUrl: invoice.invoice_pdf || undefined,
        hostedInvoiceUrl: invoice.hosted_invoice_url || undefined,
      })),
      paymentMethods: paymentMethods.data.map((pm: any) => ({
        id: pm.id,
        type: pm.type,
        brand: pm.card?.brand,
        last4: pm.card?.last4,
        expiryMonth: pm.card?.exp_month,
        expiryYear: pm.card?.exp_year,
        isDefault: pm.id === (customer as any).invoice_settings?.default_payment_method,
      })),
    }

    return NextResponse.json(dashboardData)
  } catch (error) {
    console.error('Dashboard data fetch error:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch dashboard data',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
