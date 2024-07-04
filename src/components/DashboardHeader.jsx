


import React, { useState } from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { FaCartPlus } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

import Cart from './Cart';
function DashboardHeader() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);


    const onCLick = () => {
        navigate(Cart);
    }







    return (
        <header className="bg-gray-900 px-5 py-4 flex justify-between items-center shadow-md">
            <div className="text-white text-xl font-semibold">
                <h1 style={{ fontFamily: "'poppins', sans-serif", color: 'white', fontSize: '1.25rem', fontWeight: 'bold' }}>
                    Dashboard
                </h1>
            </div>
            <div className="flex items-center space-x-6">
                {/* Add to Cart Icon */}
                <div className="relative">
                    <button
                        className="p-3 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"

                    >
                        <FaCartPlus onClick={() => navigate('/dashboard/cart')} className="h-6 w-6" />
                    </button>
                </div>

                {/* Notification Icon with tooltip and enhanced design */}
                <div className="relative">
                    <button
                        className="p-3 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={toggleNotifications}
                    >
                        <BellIcon className="h-6 w-6" />
                    </button>
                    {isNotificationsOpen && (
                        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 z-50">
                            <div className="px-4 py-2 text-sm text-gray-700">You have no new notifications.</div>
                        </div>
                    )}
                </div>

                {/* Profile Section with enhanced dropdown */}
                <div className="relative">
                    <button
                        className="flex items-center space-x-3 p-2 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={toggleDropdown}
                    >
                        <UserCircleIcon className="h-8 w-8" />
                        <span className="hidden md:block text-sm">John Doe</span> {/* Show name on medium and larger screens */}
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
                        </div>
                    )}
                </div>
            </div>


        </header>
    );
}

export default DashboardHeader;
