// import React from 'react';
// import { Link } from 'react-router-dom';  // Assuming you're using react-router for navigation

// function DashboardSidebar() {
//     return (
//         <aside className="w-64 bg-gray-800 shadow-md h-full flex flex-col">
//             <div className="px-5 py-4">
//                 <h2 className="text-white text-xl font-semibold">Blood Bank Dashboard</h2>
//             </div>
//             <ul className="flex-grow">
//                 <li>
//                     <Link to="/dashboard/overview" className="block px-4 py-2 text-white hover:bg-gray-700">
//                         Dashboard Overview
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/dashboard/donations" className="block px-4 py-2 text-white hover:bg-gray-700">
//                         Recent Donations
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/dashboard/requests" className="block px-4 py-2 text-white hover:bg-gray-700">
//                         Urgent Requests
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/dashboard/inventory" className="block px-4 py-2 text-white hover:bg-gray-700">
//                         Inventory Levels
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/dashboard/reports" className="block px-4 py-2 text-white hover:bg-gray-700">
//                         Reports
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/dashboard/settings" className="block px-4 py-2 text-white hover:bg-gray-700">
//                         Settings
//                     </Link>
//                 </li>
//             </ul>
//             <div className="px-5 py-4">
//                 <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//                     Log Out
//                 </button>
//             </div>
//         </aside>
//     );
// }

// export default DashboardSidebar;




import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  InboxIcon,
  BellIcon,
  ChartBarIcon,
  CogIcon,
  ArrowDownCircleIcon,
  
} from '@heroicons/react/24/solid'; // Updated import path for Heroicons v2

import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';


function DashboardSidebar() {
    return (
        <aside className="w-64 bg-gray-800 shadow-xl h-full flex flex-col text-white">
            <div className="px-5 py-4">
                <h2 className="text-xl font-semibold">Blood Bank Dashboard</h2>
            </div>
            <ul className="flex-grow">
                <SidebarLink icon={HomeIcon} to="/dashboard/overview" label="Dashboard Overview" />
                <SidebarLink icon={InboxIcon} to="/dashboard/donations" label="Recent Donations" />
                <SidebarLink icon={BellIcon} to="/dashboard/requests" label="Urgent Requests" />
                <SidebarLink icon={ChartBarIcon} to="/dashboard/inventory" label="Inventory Levels" />
                <SidebarLink icon={CogIcon} to="/dashboard/reports" label="Reports" />
                <SidebarLink icon={CogIcon} to="/dashboard/settings" label="Settings" />
            </ul>
            <div className="px-5 py-4">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                    <ArrowDownCircleIcon className="h-6 w-6 mr-2" />
                    Log Out
                </button>
            </div>
        </aside>
    );
}

function SidebarLink({ icon: Icon, to, label }) {
    return (
        <li>
            <Link to={to} className="flex items-center px-4 py-2 hover:bg-gray-700 transition duration-150">
                <Icon className="h-5 w-5 mr-3" />
                {label}
            </Link>
        </li>
    );
}

export default DashboardSidebar;
