import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecentDonations from '../components/RecentDonations'
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import Dashboardd from '../Pages/Dashboardd';

import UrgentRequests from '../components/UrgentRequests';
import Reports from '../components/Reports';
import DonateWithUs from '../components/DonateWithUs';
import Contact from '../components/Contact';

import Donate from '../components/Donate';
import DonateMedicine from '../components/DonateMedicine';
import NeedBlood from '../components/NeedBlood';
import NeedMedicine from '../components/NeedMedicine';

const DashboardStack = () => {
  return (
    <div >
      <DashboardHeader />
      <div className='flex  '>
        
        <div className='w-56 h-[605px]'>

        <DashboardSidebar />
        </div>
        <Routes>
            <Route path ="dashboardd" element={<Dashboardd/>}/> 
          <Route path="recentDonations" element={<RecentDonations />} />
          <Route path = "UrgentRequests" element= {<UrgentRequests/>}/>
          <Route path="donate" element={<Donate />} />

          <Route path='DonateWithUs' element ={ <DonateWithUs/>}/>
          <Route path="contact" element={<Contact />} />
          <Route path='DonateMedicine' element ={<DonateMedicine/>}/>
          <Route path = "Reports" element = {<Reports/>}/>

          <Route path = "NeedMedicine" element ={<NeedMedicine/>}/>

        <Route path = "NeedBlood" element = {<NeedBlood/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default DashboardStack;
