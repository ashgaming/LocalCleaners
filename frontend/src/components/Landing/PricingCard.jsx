import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingCard({ title, price, frequency, features, popular }) {
  return (
    <div className={`relative bg-white rounded-lg shadow-md p-6 ${popular ? 'border-2 border-blue-500' : ''}`}>
      {popular && (
        <span className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
          Popular
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-600">/{frequency}</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to="/dashboard"
        className={`block w-full text-center py-2 rounded-md ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        } transition`}
      >
        Get Started
      </Link>
    </div>
  );
}