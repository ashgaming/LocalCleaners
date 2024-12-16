import React from 'react';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/Landing/ServiceCard';

const services = [
  {
    title: 'Regular Cleaning',
    description: 'Perfect for maintaining a consistently clean home',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Dusting and wiping surfaces',
      'Vacuuming and mopping floors',
      'Bathroom sanitization',
      'Kitchen cleaning',
    ],
  },
  {
    title: 'Deep Cleaning',
    description: 'Thorough cleaning for those special occasions',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=1000',
    features: [
      'All regular cleaning services',
      'Inside cabinet cleaning',
      'Baseboards and door frames',
      'Window cleaning',
    ],
  },
  {
    title: 'Move In/Out Cleaning',
    description: 'Start fresh in your new home',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Deep cleaning of all rooms',
      'Appliance cleaning',
      'Wall washing',
      'Carpet deep cleaning',
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional cleaning services tailored to your needs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}