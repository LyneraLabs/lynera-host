'use client'

import { useState, useEffect } from 'react'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { AccountOverview } from '@/components/AccountOverview'
import { SubscriptionList } from '@/components/SubscriptionList'
import { InvoiceHistory } from '@/components/InvoiceHistory'
import { PaymentMethods } from '@/components/PaymentMethods'
import { dashboardConfig } from '@/config/dashboard'
import type { DashboardData } from '@/types/dashboard'

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [customerId, setCustomerId] = useState<string>('')

  // In a real implementation, you would:
  // 1. Get the customer ID from authentication/session
  // 2. Automatically fetch data on mount
  // For now, we'll use a demo mode and allow manual customer ID input

  const fetchDashboardData = async (custId: string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/dashboard-data?customerId=${custId}`)
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch dashboard data')
      }

      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleManageBilling = async () => {
    if (!customerId) {
      alert('Please enter a customer ID first')
      return
    }

    try {
      const response = await fetch('/api/create-billing-portal-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerId,
          returnUrl: `${window.location.origin}/dashboard`,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to create billing portal session')
      }

      // Redirect to Stripe Customer Portal
      window.location.href = result.url
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to open billing portal')
    }
  }

  return (
    <Section title={dashboardConfig.title} subtitle={dashboardConfig.description}>
      <div className="max-w-6xl mx-auto">
        {/* Demo Mode Notice */}
        {!data && (
          <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-bold text-secondary mb-2">Demo Mode</h3>
            <p className="text-sm text-gray-600 mb-4">
              Enter a Stripe Customer ID to view dashboard data. In production, this would be
              automatically retrieved from your authentication system.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Enter Stripe Customer ID (e.g., cus_...)"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                onClick={() => fetchDashboardData(customerId)}
                disabled={!customerId || loading}
              >
                {loading ? 'Loading...' : 'Load Dashboard'}
              </Button>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="font-bold text-red-800 mb-2">Error</h3>
            <p className="text-sm text-red-600">{error}</p>
            {error.includes('not configured') && (
              <p className="text-sm text-red-600 mt-2">
                Please configure your Stripe API keys in the environment variables to use this
                feature.
              </p>
            )}
          </div>
        )}

        {/* Dashboard Content */}
        {data && (
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="flex justify-end gap-4">
              <Button onClick={handleManageBilling} variant="primary">
                Manage Billing & Subscriptions
              </Button>
            </div>

            {/* Account Overview */}
            <AccountOverview data={data} />

            {/* Subscriptions */}
            <SubscriptionList subscriptions={data.subscriptions} />

            {/* Payment Methods */}
            <PaymentMethods
              paymentMethods={data.paymentMethods}
              onManageClick={handleManageBilling}
            />

            {/* Invoice History */}
            <InvoiceHistory invoices={data.invoices} />

            {/* Help Section */}
            <div className="p-6 bg-primary/5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                If you have questions about your subscription or billing, our support team is
                here to help.
              </p>
              <Button variant="outline" onClick={() => (window.location.href = '/about#contact')}>
                Contact Support
              </Button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && data === null && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading dashboard data...</p>
          </div>
        )}
      </div>
    </Section>
  )
}
