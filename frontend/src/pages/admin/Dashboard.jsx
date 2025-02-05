import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import { Menu } from 'lucide-react';
const NewBookings = React.lazy(()=>import('../../components/Admin/NewBookings'));
const FeedBacks = React.lazy(() => import('../../components/Admin/FeedBacks'));
const Analytics = React.lazy(() => import('../../components/Admin/Analytics'));
const Services = React.lazy(() => import('../../components/Admin/Services'));
const Users = React.lazy(() => import('../../components/Admin/Users'));
const Staff = React.lazy(() => import('../../components/Admin/Staff'));
const Groups = React.lazy(() => import('../../components/Admin/Groups'));
const Wrapper = React.lazy(() => import('../../components/ui/Wrapper'));

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('analytics');

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    const renderContent = () => {
        switch (activeSection) {
            case 'analytics':
                return <Analytics />;
            case 'services':
                return <Services />;
            case 'booking-new':
                return <NewBookings />;
            case 'users':
                return <Users />;
            case 'staff':
                return <Staff />;
            case 'groups':
                return <Groups />;
            case 'feedback':
                return <FeedBacks />;
            default:
                return <Analytics />;
        }
    };



    return (
        <div className="flex h-screen min-h-screen bg-gray-100 overflow-hidden">
            {isSidebarOpen && <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} setIsSidebarOpen={setIsSidebarOpen} />}
            <main className="flex-1 overflow-y-scroll">
                {!isSidebarOpen && <div className="bg-gray-900 text-white w-full h-15 p-4 ">
                    <button onClick={() => setIsSidebarOpen(true)} className="text-xl font-bold">
                        <Menu />
                    </button>
                </div>}
                <div>
                    <Wrapper>{renderContent()}</Wrapper>
                </div>
            </main>
        </div>
    );
}

export default AdminDashboard;