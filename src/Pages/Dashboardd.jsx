import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import BloodStockLevels from '../components/BloodStockLevels';
import RecentDonations from '../components/RecentDonations';
import UrgentRequests from '../components/UrgentRequests';
// import StatisticsPanel from './StatisticsPanel';

function Dashboardd() {
    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <DashboardSidebar />
            <div className="flex-1 flex flex-col">
                <DashboardHeader />
                <div className="flex-grow p-4 overflow-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <BloodStockLevels />
                        <RecentDonations />
                        <UrgentRequests />
                        {/* <StatisticsPanel /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboardd;
