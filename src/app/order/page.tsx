'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { AddonCard } from '@/components/AddonCard'
import { OrderSummary } from '@/components/OrderSummary'
import { pricingPlans } from '@/config/pricing'
import { addons, addonCategories } from '@/config/addons'
import { createCheckoutPayload, isAddonCompatible } from '@/lib/checkout'
import { siteConfig } from '@/config/site'

function OrderPageContent() {
  const searchParams = useSearchParams()
  const planIdFromUrl = searchParams.get('plan')

  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(planIdFromUrl)
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([])

  useEffect(() => {
    if (planIdFromUrl && !selectedPlanId) {
      setSelectedPlanId(planIdFromUrl)
    }
  }, [planIdFromUrl, selectedPlanId])

  const selectedPlan = selectedPlanId
    ? pricingPlans.find((p) => p.id === selectedPlanId) || null
    : null

  const selectedAddons = addons.filter((addon) =>
    selectedAddonIds.includes(addon.id)
  )

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    )
  }

  const handleCheckout = () => {
    if (!selectedPlan) {
      alert('Please select a plan first')
      return
    }

    // Create checkout payload (placeholder for Stripe integration)
    const payload = createCheckoutPayload(
      selectedPlan,
      selectedAddons,
      siteConfig.url
    )

    console.log('Checkout Payload (ready for Stripe):', payload)
    alert(
      'Stripe integration coming soon!\n\n' +
        'This would redirect to Stripe Checkout with:\n' +
        `Plan: ${selectedPlan.name} ($${selectedPlan.priceMonthly}/mo)\n` +
        `Add-ons: ${selectedAddons.length}\n\n` +
        'Check console for full payload details.'
    )
  }

  return (
    <Section title="Configure Your Server" subtitle="Choose your plan and add-ons">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Plan Selection */}
          <Card>
            <h3 className="text-2xl font-bold text-secondary mb-4">
              1. Select Your Plan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pricingPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`text-left p-4 rounded-lg border-2 transition-all ${
                    selectedPlanId === plan.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-secondary">{plan.name}</h4>
                    <span className="text-primary font-bold">
                      ${plan.priceMonthly}/mo
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                  {plan.isPopular && (
                    <span className="inline-block mt-2 bg-primary text-white text-xs px-2 py-1 rounded">
                      Popular
                    </span>
                  )}
                </button>
              ))}
            </div>
          </Card>

          {/* Add-ons Selection */}
          <Card>
            <h3 className="text-2xl font-bold text-secondary mb-4">
              2. Add Optional Enhancements
            </h3>
            {!selectedPlan ? (
              <p className="text-gray-500">Select a plan first to view add-ons</p>
            ) : (
              <div className="space-y-6">
                {addonCategories.map((category) => {
                  const categoryAddons = addons.filter(
                    (addon) => addon.category === category.id
                  )

                  return (
                    <div key={category.id}>
                      <h4 className="font-semibold text-secondary mb-3">
                        {category.name}
                      </h4>
                      <div className="space-y-3">
                        {categoryAddons.map((addon) => {
                          const compatibility = isAddonCompatible(
                            addon,
                            selectedPlan,
                            selectedAddons
                          )

                          return (
                            <AddonCard
                              key={addon.id}
                              addon={addon}
                              selected={selectedAddonIds.includes(addon.id)}
                              disabled={!compatibility.compatible}
                              disabledReason={compatibility.reason}
                              onToggle={handleAddonToggle}
                            />
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </Card>
        </div>

        {/* Order Summary Sidebar */}
        <div>
          <OrderSummary selectedPlan={selectedPlan} selectedAddons={selectedAddons} />
          {selectedPlan && (
            <Button
              onClick={handleCheckout}
              size="lg"
              className="w-full mt-4"
            >
              Continue to Checkout
            </Button>
          )}
          {!selectedPlan && (
            <p className="text-center text-gray-500 text-sm mt-4">
              Select a plan to continue
            </p>
          )}
        </div>
      </div>
    </Section>
  )
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-16">Loading...</div>}>
      <OrderPageContent />
    </Suspense>
  )
}
