import React from 'react';
import { Link } from 'react-router-dom';

const actions = [
  {
    title: 'Book New Cleaning',
    description: 'Schedule your next cleaning service',
    primary: true,
    link: '/Booking'
  },
  {
    title: 'View Schedule',
    description: 'Check your upcoming appointments',
    link: '/'
  },
  {
    title: 'Support',
    description: 'Get help with your bookings',
    link: '/'
  },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {actions.map((action) => (
        <button
          key={action.title}
          className={`p-4 md:p-6 rounded-lg ${action.primary
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-white text-gray-800 shadow hover:shadow-md'
            }`}
        >
          <Link to={action.link} className='w-full h-full'>
            <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
            <p className={action.primary ? 'text-blue-100' : 'text-gray-600'}>
              {action.description}
            </p>
          </Link>
        </button>
      ))}
    </div>
  );
}