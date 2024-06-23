import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecentDonations from '../components/RecentDonations'
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import Dashboardd from '../Pages/Dashboardd';

import UrgentRequests from '../components/UrgentRequests';
import Reports from '../components/Reports';
import DonateWithUs from '../components/DonateWithUs';

const DashboardStack = () => {
  return (
    <div >
      <DashboardHeader />
      <div className='flex  '>
        
        <div className='w-56 h-[590px]'>

        <DashboardSidebar />
        </div>
        <Routes>
            <Route path ="dashboardd" element={<Dashboardd/>}/> 
          <Route path="recentDonations" element={<RecentDonations />} />
          <Route path = "UrgentRequests" element= {<UrgentRequests/>}/>

          <Route path='DonateWithUs' element ={ <DonateWithUs/>}/>

          <Route path = "Reports" element = {<Reports/>}/>
          {/* Add more dashboard-specific routes here */}
        </Routes>
      </div>
    </div>
  );
}

export default DashboardStack;
