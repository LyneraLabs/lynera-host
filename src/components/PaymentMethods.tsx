import { Card } from './Card'
import { Button } from './Button'
import type { DashboardPaymentMethod } from '@/types/dashboard'

interface PaymentMethodsProps {
  paymentMethods: DashboardPaymentMethod[]
  onManageClick: () => void
}

export function PaymentMethods({ paymentMethods, onManageClick }: PaymentMethodsProps) {
  const getCardBrandIcon = (brand?: string) => {
    // In a real app, you'd use actual card brand icons
    return brand?.charAt(0).toUpperCase() + (brand?.slice(1) || '')
  }

  if (paymentMethods.length === 0) {
    return (
      <Card>
        <h2 className="text-2xl font-bold text-secondary mb-4">Payment Methods</h2>
        <p className="text-gray-500 mb-4">No payment methods on file.</p>
        <Button onClick={onManageClick}>Add Payment Method</Button>
      </Card>
    )
  }

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-secondary">Payment Methods</h2>
        <Button onClick={onManageClick} variant="outline" size="sm">
          Manage
        </Button>
      </div>
      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="p-4 border border-gray-200 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center text-white font-bold text-xs">
                {getCardBrandIcon(method.brand)}
              </div>
              <div>
                <p className="font-semibold text-secondary">
                  {method.brand?.toUpperCase() || 'Card'} •••• {method.last4}
                </p>
                {method.expiryMonth && method.expiryYear && (
                  <p className="text-sm text-gray-600">
                    Expires {method.expiryMonth}/{method.expiryYear}
                  </p>
                )}
              </div>
            </div>
            {method.isDefault && (
              <span className="bg-primary text-white text-xs px-2 py-1 rounded">
                Default
              </span>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}
