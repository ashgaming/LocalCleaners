import { Bell } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const DashBoardHeader = ({ title }) => {
    return (
        <div className="flex justify-between items-center mb-6 md:mb-8">
            <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
            <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                    <Bell className="h-6 w-6" />
                </button>

                <div className="hidden md:block">
                    <Link to={'/login'}>
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Profile"
                            className="h-8 w-8 rounded-full"
                        />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default DashBoardHeader
