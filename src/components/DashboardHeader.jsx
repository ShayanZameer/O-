// import React from 'react';

// function DashboardHeader() {
//     // Placeholder function for handling logout
//     const handleLogout = () => {
//         console.log('Logging out...');
//         // Implement logout logic here, e.g., clearing authentication tokens and redirecting to login page
//     };

//     return (
//         <header className="bg-gray-800 p-4 flex justify-between items-center">
//             <div className="text-lg font-semibold">
//                 <h1>Blood Bank Management System</h1>
//             </div>
//             <div className="flex items-center space-x-4">
//                 <div className="relative">
//                     <button className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//                         <span className="sr-only">View notifications</span>
//                         <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.172V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.64 5.36 6 7.929 6 11v3.172a2.032 2.032 0 01-.595 1.423L4 17h5m2 0v2a2 2 0 11-4 0v-2m4 0H9" />
//                         </svg>
//                     </button>
//                     {/* Notification badge */}
//                     <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-red-400"></span>
//                 </div>
//                 <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//                     Logout
//                 </button>
//             </div>
//         </header>
//     );
// }

// export default DashboardHeader;



import React, { useState } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';  // Importing BellIcon for notifications

function DashboardHeader() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
    };

    return (
        <header className="bg-gray-800 px-4 py-3 flex justify-between items-center">
            <div className="text-white text-lg font-semibold">
                <h1>Blood Bank Management System</h1>
            </div>
            <div className="flex items-center space-x-4">
                {/* Notification Icon */}
                <div className="relative">
                    <button
                        className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        onClick={toggleNotifications}
                    >
                        <BellIcon className="h-6 w-6 text-white" />
                    </button>
                    {isNotificationsOpen && (
                        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                            <div className="px-4 py-2 text-sm text-gray-700">No new notifications</div>
                        </div>
                    )}
                </div>

                {/* Profile Section */}
                <div className="relative">
                    <button
                        className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        onClick={toggleDropdown}
                    >
                        <span className="sr-only">User profile and settings</span>
                        <img
                            src="https://via.placeholder.com/150"  // Example user profile image
                            alt="User"
                            className="h-10 w-10 rounded-full"
                        />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;
