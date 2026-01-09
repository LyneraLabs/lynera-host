import Link from 'next/link';

interface PricingCardProps {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  serviceSlug: string;
}

export default function PricingCard({ 
  name, 
  priceMonthly, 
  priceYearly, 
  features, 
  serviceSlug 
}: PricingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-blue-600">${priceMonthly}</span>
        <span className="text-gray-600">/month</span>
        <div className="text-sm text-gray-500 mt-1">
          or ${priceYearly}/year (Save ${((priceMonthly * 12) - priceYearly).toFixed(2)})
        </div>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        href={`/services/${serviceSlug}`}
        className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}
