import React from 'react';
import { Clock, Shield, Star } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Book cleanings at your convenience, any day of the week',
  },
  {
    icon: Shield,
    title: 'Trusted Professionals',
    description: 'All our cleaners are background checked and highly trained',
  },
  {
    icon: Star,
    title: 'Satisfaction Guaranteed',
    description: "Not happy? We'll re-clean for free",
  },
];

export default function Features() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white p-6 rounded-lg shadow-md">
              <Icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}