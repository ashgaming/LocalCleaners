import React, { useState } from 'react';
import {  Menu } from 'lucide-react';
import Sidebar from '../components/layout/Sidebar';
import BookingSection from '../components/Dashboard/Sections/BookingSection';
import HistorySection from '../components/Dashboard/Sections/HistorySection';
import SettingSection from '../components/Dashboard/Sections/SettingSection';
import EmployeeSection from '../components/Dashboard/Sections/EmployeeSection';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState('Booking');

  

  const selectSection = (section) => {
    if(!section || section === null || section === '') { return  } ;
    setOpenSection(section)
  }


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar - hidden on mobile, shown on medium screens and up */}
      <Sidebar className="hidden md:block fixed w-64 h-full" selectSection={selectSection} />

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
          <Sidebar
            selectSection={selectSection}
            className="absolute left-0 w-64 h-full" />
        </div>
      )}

      {/* Main Content */}

      <div className="md:ml-64 p-4 md:p-8 mt-16 md:mt-0">
        {
          openSection === 'Bookings' && <BookingSection /> &&
          openSection === 'History' && <HistorySection /> &&
          openSection === 'Settings' && <SettingSection /> &&
          openSection === 'Employees' && <EmployeeSection /> &&
          openSection === 'Logout' && <BookingSection /> 
        }
      
      </div>


    </div>
  );
}

export default Dashboard;
