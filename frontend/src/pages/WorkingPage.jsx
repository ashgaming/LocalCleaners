import React, { useState } from 'react'
import Sidebar from '../components/layout/SideBar'
import { useSelector } from 'react-redux';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import HistorySection from '../components/Dashboard/Sections/HistorySection';
import ServiceTracking from '../components/Working/ServiceTracking';

const WorkingPage = () => {
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const { user } = useSelector(state => state.userData)

    return (
        <div className="min-h-screen bg-gray-100">
            {/* <div className="md:hidden w-full  fixed top-0 bg-white z-50 px-4 py-2 shadow-sm">
                <div className="flex justify-between items-center">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
                        <Menu className="h-6 w-6" />
                    </button>

                    {
                        user?.email?.slice(0, -10)
                    }
                    <Link to={`/login`}>

                        {
                            user?.employee?.profileImage ?
                                <img
                                    src={user?.employee?.profileImage}
                                    alt="Profile"
                                    className="h-8 w-8 rounded-full"
                                />
                                :
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="Profile"
                                    className="h-8 w-8 rounded-full"
                                />
                        }
                    </Link>
                </div>
            </div> */}



            <div className="md:ml-64 p-4 md:p-8 mt-16 md:mt-0">
                <ServiceTracking />
            </div>


        </div>
    )
}

export default WorkingPage
