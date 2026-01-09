'use client';

import { useState } from 'react';
import { PricingTier } from '@/data/pricing';

interface PricingSliderProps {
  tier: PricingTier;
  billingCycle: 'monthly' | 'yearly';
}

export default function PricingSlider({ tier, billingCycle }: PricingSliderProps) {
  const [sliderValue, setSliderValue] = useState(tier.minValue || 1);
  
  const calculatePrice = () => {
    if (!tier.minValue || !tier.maxValue) {
      return billingCycle === 'monthly' ? tier.priceMonthly : tier.priceYearly;
    }
    
    const range = tier.maxValue - tier.minValue;
    const position = (sliderValue - tier.minValue) / range;
    const basePrice = billingCycle === 'monthly' ? tier.priceMonthly : tier.priceYearly;
    
    // Calculate price based on slider position (linear scaling)
    const priceMultiplier = 1 + (position * 0.5); // 50% increase at max
    return (basePrice * priceMultiplier).toFixed(2);
  };

  const displayedPrice = calculatePrice();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{tier.name}</h3>
      
      {tier.minValue && tier.maxValue && tier.baseUnit && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {tier.baseUnit}: {sliderValue}
          </label>
          <input
            type="range"
            min={tier.minValue}
            max={tier.maxValue}
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((sliderValue - tier.minValue) / (tier.maxValue - tier.minValue)) * 100}%, #e5e7eb ${((sliderValue - tier.minValue) / (tier.maxValue - tier.minValue)) * 100}%, #e5e7eb 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{tier.minValue}</span>
            <span>{tier.maxValue}</span>
          </div>
        </div>
      )}

      <div className="mb-6">
        <div className="text-5xl font-bold text-blue-600 mb-2">
          ${displayedPrice}
          <span className="text-lg text-gray-600">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
        </div>
        {billingCycle === 'yearly' && (
          <p className="text-sm text-green-600 font-medium">
            Save {((tier.priceMonthly * 12 - tier.priceYearly) / (tier.priceMonthly * 12) * 100).toFixed(0)}% with yearly billing
          </p>
        )}
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Features:</h4>
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  );
}
