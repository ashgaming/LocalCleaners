import React, { useState } from 'react';
import { Calendar, Clock, Settings, LogOut, Menu, User } from 'lucide-react';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/UserActions';

const navItems = [
  { icon: Calendar, label: 'Bookings', active: true },
  { icon: Clock, label: 'History' },
  { icon: Settings, label: 'Settings' },
  { icon: User, label: 'Employees' },
  { icon: LogOut, label: 'Logout' },
];

const Sidebar = (props) => {
  const className = props.className
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch()

  const handleSectionClick = (section) => {

    if (section === 'Logout') {
      console.log(section)
      dispatch(logoutUser())
    } else {
      props.selectSection(section)
    }
  }



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
        <div className="mt-8">
          {navItems.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              onClick={() =>
                handleSectionClick(label)
              }
              className={`flex items-center px-4 py-3 w-full ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;