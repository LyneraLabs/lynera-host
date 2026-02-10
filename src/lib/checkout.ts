import type { PricingPlan } from '@/config/pricing'
import type { Addon } from '@/config/addons'
import type { CheckoutPayload, StripeLineItem } from '@/types/stripe'

/**
 * Creates a Stripe checkout payload from selected plan and add-ons
 * This is a placeholder function that will be used when Stripe integration is implemented
 */
export function createCheckoutPayload(
  plan: PricingPlan,
  selectedAddons: Addon[],
  siteUrl: string
): CheckoutPayload {
  const line_items: StripeLineItem[] = [
    {
      price: plan.stripePriceId,
      quantity: 1,
    },
    ...selectedAddons.map((addon) => ({
      price: addon.stripePriceId,
      quantity: 1,
    })),
  ]

  return {
    line_items,
    mode: 'subscription',
    success_url: `${siteUrl}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/order`,
  }
}

/**
 * Calculates total monthly cost
 */
export function calculateTotal(plan: PricingPlan | null, selectedAddons: Addon[]): number {
  const planPrice = plan?.priceMonthly || 0
  const addonsPrice = selectedAddons.reduce((sum, addon) => sum + addon.priceMonthly, 0)
  return planPrice + addonsPrice
}

/**
 * Checks if an addon is compatible with the selected plan and other addons
 */
export function isAddonCompatible(
  addon: Addon,
  selectedPlan: PricingPlan | null,
  selectedAddons: Addon[]
): { compatible: boolean; reason?: string } {
  // Check plan requirements
  if (addon.requiresPlanIds && addon.requiresPlanIds.length > 0) {
    if (!selectedPlan || !addon.requiresPlanIds.includes(selectedPlan.id)) {
      return {
        compatible: false,
        reason: `Requires ${addon.requiresPlanIds.join(' or ')} plan`,
      }
    }
  }

  // Check incompatibilities
  if (addon.incompatibleWith && addon.incompatibleWith.length > 0) {
    const conflictingAddon = selectedAddons.find((selected) =>
      addon.incompatibleWith?.includes(selected.id)
    )
    if (conflictingAddon) {
      return {
        compatible: false,
        reason: `Incompatible with ${conflictingAddon.name}`,
      }
    }
  }

  return { compatible: true }
}
