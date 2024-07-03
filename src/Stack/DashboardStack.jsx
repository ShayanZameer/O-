import React from 'react';
import axios from 'axios';

import { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import RecentDonations from '../components/RecentDonations'
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import Dashboardd from '../Pages/Dashboardd';
import BloodTypeDetails from '../components/BloodTypeDetails';

import UrgentRequests from '../components/UrgentRequests';
import DonateWithUs from '../components/DonateWithUs';
import Contact from '../Pages/Contact';
import Cart from '../components/Cart';

import Donate from '../components/Donate';
import DonateMedicine from '../components/DonateMedicine';
import NeedBlood from '../components/NeedBlood';
import NeedMedicine from '../components/NeedMedicine';

import MedicineDetails from '../components/MedicineDetails';



// import BloodTypeDetails from '../components/BloodTypeDetails';
const DashboardStack = () => {


  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedicines = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/medicine/donated-medicines');
            setMedicines(response.data);
            setLoading(false); // Stop loading on error

        } catch (error) {
            console.error('Error fetching medicines:', error);
            setLoading(false); // Stop loading on error

        }
    };

    fetchMedicines();
}, []);
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

          <Route path = "NeedMedicine"  element={<NeedMedicine medicines={medicines} loading={loading}/>}/>
          
        <Route path = "NeedBlood" element = {<NeedBlood/>}/>
        <Route path = "cart" element = {<Cart/>}/>

          <Route path="blood-details/:type" element={<BloodTypeDetails />} />
          <Route path="medicine-details/:medicineId" element={<MedicineDetails medicines={medicines} />} />

        </Routes>
      </div>
    </div>
  );
}

export default DashboardStack;
