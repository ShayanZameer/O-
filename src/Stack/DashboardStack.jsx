import React from 'react';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import RecentDonations from '../components/RecentDonations'
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import Dashboardd from '../Pages/Dashboardd';
import BloodTypeDetails from '../components/BloodTypeDetails';

import UrgentRequests from '../components/UrgentRequests';
import Reports from '../components/Reports';
import DonateWithUs from '../components/DonateWithUs';
import Contact from '../components/Contact';

import Donate from '../components/Donate';
import DonateMedicine from '../components/DonateMedicine';
import NeedBlood from '../components/NeedBlood';
import NeedMedicine from '../components/NeedMedicine';

import MedicineDetails from '../components/MedicineDetails';

import image1 from "../assets/Images/Medicine2.jpg";
import image2 from "../assets/Images/medicine1.jpg";

// import BloodTypeDetails from '../components/BloodTypeDetails';
const DashboardStack = () => {



    const initialMedicines = [
        { id: 1, name: 'Amoxicillin', description: 'Antibiotic used to treat various infections.', imageUrl: image2, location: 'Aga Khan University Hospital, Karachi', expiryDate: '2025-01-01' },
        { id: 2, name: 'Ibuprofen', description: 'Used to reduce fever and treat pain or inflammation.', imageUrl: image1, location: 'Shaukat Khanum Memorial Cancer Hospital, Lahore', expiryDate: '2024-12-15' },
        { id: 3, name: 'Cetirizine', description: 'Antihistamine that reduces the effects of natural chemical histamine.', imageUrl: image2, location: 'Liaquat National Hospital, Karachi', expiryDate: '2025-03-30' },
        { id: 4, name: 'Metformin', description: 'Medicine used to treat type 2 diabetes.', imageUrl: image1, location: 'Combined Military Hospital, Rawalpindi', expiryDate: '2024-11-25' },
        { id: 5, name: 'Lisinopril', description: 'Used to treat high blood pressure.', imageUrl: image2, location: 'Ziauddin Hospital, Karachi', expiryDate: '2025-10-10' },
        { id: 6, name: 'Simvastatin', description: 'Used to control elevated cholesterol.', imageUrl: image1, location: 'PIMS Hospital, Islamabad', expiryDate: '2025-07-21' },
        { id: 7, name: 'Amlodipine', description: 'Medicine used to treat high blood pressure.', imageUrl: image2, location: 'Nishtar Hospital, Multan', expiryDate: '2024-09-17' },
        { id: 8, name: 'Atorvastatin', description: 'Used to treat high cholesterol.', imageUrl: image2, location: 'Fauji Foundation Hospital, Rawalpindi', expiryDate: '2025-02-28' },
        { id: 9, name: 'Atorvastatin', description: 'Used to treat high cholesterol.', imageUrl: image2, location: 'Civil Hospital, Karachi', expiryDate: '2025-05-05' },
        { id: 10, name: 'Atorvastatin', description: 'Used to treat high cholesterol.', imageUrl: image2, location: 'Jinnah Hospital, Lahore', expiryDate: '2024-08-08' },
        { id: 11, name: 'Atorvastatin', description: 'Used to treat high cholesterol.', imageUrl: image2, location: 'Holy Family Hospital, Rawalpindi', expiryDate: '2025-12-12' },
    ];
    

    const [medicines, setMedicines] = useState(initialMedicines);

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

          <Route path = "NeedMedicine" element ={<NeedMedicine medicines={medicines}/>}/>
        <Route path = "NeedBlood" element = {<NeedBlood/>}/>
          <Route path="/blood-details/:type" element={<BloodTypeDetails />} />



        {/* <Route path='medicine-details/:medicineId' element={<MedicineDetails/>}/> */}

        {/* <Route path="medicines" element={<NeedMedicine medicines={medicines} />} /> */}
            <Route path="medicine-details/:medicineId" element={<MedicineDetails medicines={medicines} />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashboardStack;
