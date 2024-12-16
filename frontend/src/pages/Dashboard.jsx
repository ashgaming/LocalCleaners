import React, { useState } from 'react';
import { Bell, Menu } from 'lucide-react';
import Sidebar from '../components/layout/SideBar';
import QuickActions from '../components/Dashboard/QuickAction';
import BookingsList from '../components/Dashboard/BookingList';

const upcomingBookings = [
  { id: 1, date: '2024-03-20', time: '09:00 AM', type: 'Regular Cleaning', address: '123 Main St' },
  { id: 2, date: '2024-03-25', time: '02:00 PM', type: 'Deep Cleaning', address: '456 Oak Ave' },
];

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar - hidden on mobile, shown on medium screens and up */}
      <Sidebar className="hidden md:block fixed w-64 h-full" />
      
      {/* Mobile header */}
      <div className="md:hidden w-full fixed top-0 bg-white z-50 px-4 py-2 shadow-sm">
        <div className="flex justify-between items-center">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
            <Menu className="h-6 w-6" />
          </button>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsSidebarOpen(false)} />
          <Sidebar className="absolute left-0 w-64 h-full" />
        </div>
      )}

      {/* Main Content */}
      <div className="md:ml-64 p-4 md:p-8 mt-16 md:mt-0">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell className="h-6 w-6" />
            </button>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>

        <QuickActions />
        
        <div className="mt-8">
          <BookingsList bookings={upcomingBookings} />
        </div>
      </div>
    </div>
  );
}
