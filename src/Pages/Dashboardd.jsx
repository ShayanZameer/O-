import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import BloodStockLevels from '../components/BloodStockLevels';
import RecentDonations from '../components/RecentDonations';
import UrgentRequests from '../components/UrgentRequests';
import StatisticsPanel from '../components/StatisticsPanel';

import DonationTrends from '../components/DonationTrends';

function Dashboardd() {
    return (
        <div className="flex h-screen bg-gray-900 text-white ">
            {/* <DashboardSidebar /> */}
            <div className="flex-1 flex flex-col">
                {/* <DashboardHeader /> */}
                <div className="flex-grow p-4 overflow-auto ">
                    <div className="flex space-x-2 justify-evenly ">
                        <StatisticsPanel />
                        <DonationTrends/>
                        {/* <RecentDonations /> */}
                        {/* <UrgentRequests /> */}
                    </div>

                    <div className='w-[500px] mt-4'>
                        <BloodStockLevels />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboardd;
