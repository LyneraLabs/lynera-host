'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSlider from '@/components/PricingSlider';
import { vpsHostingPricing } from '@/data/pricing';

export default function VPSHostingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">{vpsHostingPricing.name}</h1>
            <p className="text-xl max-w-2xl">{vpsHostingPricing.description}</p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Billing Cycle Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg shadow p-1 inline-flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md font-medium transition ${
                    billingCycle === 'monthly'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-md font-medium transition ${
                    billingCycle === 'yearly'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Yearly (Save up to 17%)
                </button>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {vpsHostingPricing.tiers.map((tier) => (
                <PricingSlider
                  key={tier.name}
                  tier={tier}
                  billingCycle={billingCycle}
                />
              ))}
            </div>

            {/* Addons Section */}
            {vpsHostingPricing.addons && vpsHostingPricing.addons.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                  Available Add-ons
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {vpsHostingPricing.addons.map((addon) => (
                    <div key={addon.name} className="bg-white rounded-lg shadow p-6 border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{addon.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                      <div className="text-2xl font-bold text-blue-600">
                        ${addon.priceMonthly}
                        {addon.unit && <span className="text-sm text-gray-600">/{addon.unit}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
