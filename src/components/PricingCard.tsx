import Link from 'next/link'
import { PricingPlan } from '@/config/pricing'
import { Card } from './Card'
import { Button } from './Button'

interface PricingCardProps {
  plan: PricingPlan
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card className={plan.isPopular ? 'border-primary border-2 relative' : ''}>
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-secondary mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-4">{plan.description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-secondary">${plan.priceMonthly}</span>
          <span className="text-gray-600">/month</span>
        </div>
        <Link href={`/order?plan=${plan.id}`}>
          <Button 
            variant={plan.isPopular ? 'primary' : 'secondary'} 
            className="w-full"
          >
            Order Now
          </Button>
        </Link>
      </div>
      <div className="mt-6 pt-6 border-t">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
