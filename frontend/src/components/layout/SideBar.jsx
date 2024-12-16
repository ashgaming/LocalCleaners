import React, { useState } from 'react';
import { Calendar, Clock, Settings, LogOut, Menu } from 'lucide-react';
import Header from './Header';

const navItems = [
  { icon: Calendar, label: 'Bookings', active: true },
  { icon: Clock, label: 'History' },
  { icon: Settings, label: 'Settings' },
  { icon: LogOut, label: 'Logout' },
];

export default function Sidebar({ className = '' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`bg-white shadow-lg ${className}`}>
      <div className="md:hidden flex items-center justify-between p-4">
        <Header />
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="hidden md:block">
          <Header />
        </div>
        <nav className="mt-8">
          {navItems.map(({ icon: Icon, label, active }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center px-4 py-3 ${
                active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}