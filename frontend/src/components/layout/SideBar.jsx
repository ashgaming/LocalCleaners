import React, { useState } from 'react';
import { Calendar, Clock, Settings, LogOut, Menu, User, BookIcon, Album, User2  } from 'lucide-react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/UserActions';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
  const [active, setActive] = useState('Bookings')
  const className = props.className
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user , success } = useSelector(state => state.userData)


  const ManagerItems = [
    { icon: BookIcon, label: 'Manage' },
    { icon: User, label: 'Employees' },
  ];

  const navItems = [
    { icon: Calendar, label: 'Bookings' },
    { icon: Clock, label: 'History' },
    { icon: Settings, label: 'Settings' },
    { icon: Album, label: 'Subscription' },
    ...(user?.employee?.role === 'Manager' ? ManagerItems : []),
    ...(user?.employee?.role === 'admin' ? [ { icon: User2, label: 'Admin' }] : []),
    ...(user?.token ?[ { icon: LogOut, label: 'Logout' }] :[ { icon: LogOut, label: 'Login' }]),
  ];

  const handleSectionClick = (section) => {

    if (section === 'Logout') {
      dispatch(logoutUser())
    } else if (section === 'Login') {
      navigate('/login')
    }  else if (section === 'Admin') {
      navigate('/admin')
    }else {
      setActive(section)
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

      <div className={`${!isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="mt-8">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() =>
                handleSectionClick(label)
              }
              className={`flex items-center px-4 py-3 w-full ${label === active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
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