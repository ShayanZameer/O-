



import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  InboxIcon,
  BellIcon,
  ChartBarIcon,
  CogIcon,
  ArrowDownCircleIcon,
} from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';  // This is hypothetical; replace with an actual droplet icon if available

function DashboardSidebar() {
    return (
        <aside className="w-64 bg-gray-800 shadow-xl h-full flex flex-col text-white">
            <div className="px-5 py-4 flex items-center my-1">
                <HeartIcon className="h-12 w-12 text-red-500 mr-2"/>  {/* New droplet icon */}
                <h2 className="text-xl font-semibold flex items-center">
                    <span className="text-red-500 font-bold text-5xl ml-3" style={{ fontFamily: "'poppins', sans-serif" }}>O-</span>  {/* Stylish O- label with Google Font */}
                </h2>
            </div>
            <ul className="flex-grow my-3">
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