export interface PricingPlan {
  id: string
  name: string
  description: string
  priceMonthly: number
  features: string[]
  isPopular?: boolean
  stripeProductId: string
  stripePriceId: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small communities and private servers',
    priceMonthly: 9.99,
    features: [
      '2GB RAM',
      '2 CPU Cores',
      '20GB NVMe Storage',
      'Up to 20 players',
      'Automatic backups',
      'DDoS protection',
      '24/7 support',
    ],
    stripeProductId: 'prod_starter_placeholder',
    stripePriceId: 'price_starter_placeholder',
  },
  {
    id: 'gamer',
    name: 'Gamer',
    description: 'Great for medium-sized communities',
    priceMonthly: 19.99,
    features: [
      '4GB RAM',
      '4 CPU Cores',
      '40GB NVMe Storage',
      'Up to 50 players',
      'Automatic backups',
      'DDoS protection',
      'Priority support',
      'Free domain',
    ],
    isPopular: true,
    stripeProductId: 'prod_gamer_placeholder',
    stripePriceId: 'price_gamer_placeholder',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For large communities and networks',
    priceMonthly: 39.99,
    features: [
      '8GB RAM',
      '6 CPU Cores',
      '80GB NVMe Storage',
      'Up to 100 players',
      'Automatic backups',
      'DDoS protection',
      'Premium support',
      'Free domain',
      'Dedicated IP',
    ],
    stripeProductId: 'prod_pro_placeholder',
    stripePriceId: 'price_pro_placeholder',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Maximum performance for professional networks',
    priceMonthly: 79.99,
    features: [
      '16GB RAM',
      '8 CPU Cores',
      '160GB NVMe Storage',
      'Unlimited players',
      'Automatic backups',
      'DDoS protection',
      'Premium support',
      'Free domain',
      'Dedicated IP',
      'Custom setup',
    ],
    stripeProductId: 'prod_enterprise_placeholder',
    stripePriceId: 'price_enterprise_placeholder',
  },
]
