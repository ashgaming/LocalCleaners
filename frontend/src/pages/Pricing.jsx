import React from 'react';
import Navbar from '../components/Navbar';
import PricingCard from '../components/Landing/PricingCard'; 

const plans = [
  {
    title: 'Basic',
    price: '$99',
    frequency: 'month',
    features: [
      'Bi-weekly cleaning',
      '2 hours per session',
      'Basic cleaning supplies included',
      'Cancel anytime',
    ],
  },
  {
    title: 'Standard',
    price: '$149',
    frequency: 'month',
    features: [
      'Weekly cleaning',
      '3 hours per session',
      'Premium cleaning supplies',
      'Priority scheduling',
    ],
    popular: true,
  },
  {
    title: 'Premium',
    price: '$249',
    frequency: 'month',
    features: [
      '2x weekly cleaning',
      '4 hours per session',
      'Deep cleaning included',
      '24/7 customer support',
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your cleaning needs. All plans include our satisfaction guarantee.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard key={plan.title} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}