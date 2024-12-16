import React from 'react';
import { Check } from 'lucide-react';


const services = [
  {
    id: 'regular',
    name: 'Regular Cleaning',
    description: 'Standard cleaning service for maintained homes',
    duration: '2-3 hours',
    price: '$99',
  },
  {
    id: 'deep',
    name: 'Deep Cleaning',
    description: 'Thorough cleaning for homes needing extra attention',
    duration: '4-5 hours',
    price: '$199',
  },
  {
    id: 'move',
    name: 'Move In/Out Cleaning',
    description: 'Detailed cleaning for moving transitions',
    duration: '5-6 hours',
    price: '$299',
  },
];

export default function ServiceSelection({ selectedService, onServiceSelect }) {
  return (
    <div className="space-y-4">
      {services.map((service) => (
        <div
          key={service.id}
          className={`p-4 border rounded-lg cursor-pointer transition ${
            selectedService === service.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-200'
          }`}
          onClick={() => onServiceSelect(service.id)}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-gray-600 mt-1">{service.description}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <span>Duration: {service.duration}</span>
                <span className="mx-2">•</span>
                <span>Starting at {service.price}</span>
              </div>
            </div>
            {selectedService === service.id && (
              <Check className="h-6 w-6 text-blue-500" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}