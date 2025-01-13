import React from 'react';
import { LayoutDashboard, Users, Briefcase, UsersRound, FolderKanban, Home, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';


const Sidebar = ({ activeSection, onSectionChange }) => {
    const menuItems = [
        { id: 'analytics', icon: LayoutDashboard, label: 'Analytics' },
        { id: 'services', icon: Briefcase, label: 'Services' },
        { id: 'users', icon: Users, label: 'Users' },
        { id: 'staff', icon: UsersRound, label: 'Staff' },
        { id: 'groups', icon: FolderKanban, label: 'Groups' },
        { id: 'feedback', icon: MessageSquare, label: 'FeedBack' },
    ];

    return (
        <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
            <div className="flex items-center gap-2 mb-8 px-2">
                <LayoutDashboard className="w-8 h-8" />
                <span className="text-xl font-bold">Admin Panel</span>
            </div>
            <nav>
                <Link to={`/`}>
                <button
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${'text-gray-300 hover:bg-gray-800'
                    }`}
                    >
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                </button>
                    </Link>
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onSectionChange(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${activeSection === item.id
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-300 hover:bg-gray-800'
                            }`}
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;