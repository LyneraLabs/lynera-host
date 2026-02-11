import { Card } from './Card'
import type { DashboardData } from '@/types/dashboard'

interface AccountOverviewProps {
  data: DashboardData
}

export function AccountOverview({ data }: AccountOverviewProps) {
  const activeSubscriptions = data.subscriptions.filter(
    (sub) => sub.status === 'active' || sub.status === 'trialing'
  )
  const totalMonthly = activeSubscriptions.reduce(
    (sum, sub) => sum + (sub.amount / 100),
    0
  )

  return (
    <Card>
      <h2 className="text-2xl font-bold text-secondary mb-6">Account Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-primary/5 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Email</p>
          <p className="font-semibold text-secondary">{data.customer.email}</p>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Active Subscriptions</p>
          <p className="text-2xl font-bold text-primary">{activeSubscriptions.length}</p>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Total Monthly</p>
          <p className="text-2xl font-bold text-primary">
            ${totalMonthly.toFixed(2)}
          </p>
        </div>
      </div>
      {data.customer.name && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">Account Name</p>
          <p className="font-semibold text-secondary">{data.customer.name}</p>
        </div>
      )}
    </Card>
  )
}
