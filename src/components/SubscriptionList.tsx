import { Card } from './Card'
import type { DashboardSubscription } from '@/types/dashboard'

interface SubscriptionListProps {
  subscriptions: DashboardSubscription[]
}

export function SubscriptionList({ subscriptions }: SubscriptionListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'trialing':
        return 'bg-blue-100 text-blue-800'
      case 'past_due':
        return 'bg-yellow-100 text-yellow-800'
      case 'canceled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  if (subscriptions.length === 0) {
    return (
      <Card>
        <h2 className="text-2xl font-bold text-secondary mb-4">Active Subscriptions</h2>
        <p className="text-gray-500">No active subscriptions found.</p>
      </Card>
    )
  }

  return (
    <Card>
      <h2 className="text-2xl font-bold text-secondary mb-6">Active Subscriptions</h2>
      <div className="space-y-4">
        {subscriptions.map((subscription) => (
          <div
            key={subscription.id}
            className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-secondary text-lg">
                  {subscription.planName}
                </h3>
                <span
                  className={`inline-block mt-1 px-2 py-1 text-xs rounded ${getStatusColor(
                    subscription.status
                  )}`}
                >
                  {subscription.status.charAt(0).toUpperCase() +
                    subscription.status.slice(1)}
                </span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">
                  ${(subscription.amount / 100).toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">
                  per {subscription.currency === 'usd' ? 'month' : 'billing period'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Current Period</p>
                <p className="font-semibold">
                  {formatDate(subscription.currentPeriodStart)} -{' '}
                  {formatDate(subscription.currentPeriodEnd)}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Renewal</p>
                <p className="font-semibold">
                  {subscription.cancelAtPeriodEnd
                    ? 'Cancels at period end'
                    : `Renews on ${formatDate(subscription.currentPeriodEnd)}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
