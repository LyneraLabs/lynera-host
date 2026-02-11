import { PricingPlan } from '@/config/pricing'
import { Addon } from '@/config/addons'
import { calculateTotal } from '@/lib/checkout'
import { Card } from './Card'

interface OrderSummaryProps {
  selectedPlan: PricingPlan | null
  selectedAddons: Addon[]
}

export function OrderSummary({ selectedPlan, selectedAddons }: OrderSummaryProps) {
  const total = calculateTotal(selectedPlan, selectedAddons)

  return (
    <Card>
      <h3 className="text-xl font-bold text-secondary mb-4">Order Summary</h3>
      
      {!selectedPlan ? (
        <p className="text-gray-500 text-sm">Select a plan to continue</p>
      ) : (
        <>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center pb-3 border-b">
              <div>
                <div className="font-semibold text-secondary">{selectedPlan.name} Plan</div>
                <div className="text-sm text-gray-600">{selectedPlan.description}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-secondary">${selectedPlan.priceMonthly}</div>
                <div className="text-xs text-gray-500">/month</div>
              </div>
            </div>

            {selectedAddons.length > 0 && (
              <>
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Add-ons</h4>
                  {selectedAddons.map((addon) => (
                    <div key={addon.id} className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">{addon.name}</span>
                      <span className="font-medium">${addon.priceMonthly}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-secondary">Total</span>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">${total.toFixed(2)}</div>
                <div className="text-xs text-gray-500">per month</div>
              </div>
            </div>
          </div>
        </>
      )}
    </Card>
  )
}
