import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/Section'
import { PricingCard } from '@/components/PricingCard'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { pricingPlans } from '@/config/pricing'
import { hardwareSpecs } from '@/config/hardware'
import { addonCategories } from '@/config/addons'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Choose the perfect Minecraft server hosting plan for your community',
}

export default function PricingPage() {
  return (
    <>
      {/* Pricing Plans */}
      <Section
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your needs. Upgrade or downgrade anytime."
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* Hardware Overview */}
      <Section
        title="Enterprise Hardware"
        subtitle="Built on the latest technology for maximum performance"
        centered
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hardwareSpecs.map((spec) => (
            <Card key={spec.id}>
              <h3 className="text-lg font-bold text-secondary mb-2">
                {spec.title}
              </h3>
              <p className="text-gray-600 text-sm">{spec.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Add-ons Teaser */}
      <Section
        title="Powerful Add-ons"
        subtitle="Enhance your server with premium features"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {addonCategories.map((category) => (
            <Card key={category.id}>
              <h3 className="text-lg font-bold text-secondary mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link href="/order">
            <Button size="lg" variant="primary">
              View All Add-ons
            </Button>
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Frequently Asked Questions"
        centered
        className="bg-white"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-secondary mb-2">
              Can I upgrade my plan later?
            </h3>
            <p className="text-gray-600">
              Yes! You can upgrade or downgrade your plan at any time. Changes are prorated and applied immediately.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-secondary mb-2">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600">
              We accept all major credit cards, PayPal, and cryptocurrency through our secure Stripe integration.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-secondary mb-2">
              Is there a setup fee?
            </h3>
            <p className="text-gray-600">
              No setup fees! You only pay for your monthly subscription and any add-ons you choose.
            </p>
          </Card>
        </div>
      </Section>
    </>
  )
}
