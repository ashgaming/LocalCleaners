import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
const FeedBacks = React.lazy(() => import( '../../components/Admin/FeedBacks'));
const Analytics = React.lazy(() => import('../../components/Admin/Analytics'));
const Services = React.lazy(() => import('../../components/Admin/Services'));
const Users = React.lazy(() => import('../../components/Admin/Users'));
const Staff = React.lazy(() => import('../../components/Admin/Staff'));
const Groups = React.lazy(() => import('../../components/Admin/Groups'));
const Wrapper = React.lazy(() => import('../../components/ui/Wrapper'));

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('analytics');

    const renderContent = () => {
        switch (activeSection) {
            case 'analytics':
                return <Analytics />;
            case 'services':
                return <Services />;
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
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
            <main className="flex-1 overflow-auto">
            <Wrapper>
                {renderContent()}
               </Wrapper>
            </main>
        </div>
    );
}

export default AdminDashboard;