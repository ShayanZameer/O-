


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
// import AboutUs from '../components/AboutUs';
import Signup from '../Pages/Signup';
import Donate from '../components/Donate';
import Homee from '../Pages/Homee'; 
import Login from '../Pages/Login';
import Contact from '../Pages/Contact';
import Dashboardd from '../Pages/Dashboardd';

import AboutUs from '../Pages/AboutUs';
import ForgotPassword from '../Pages/ForgotPassword';


const MainContent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />

        <Route path = "/forgot-password" element={<ForgotPassword/>}/>

        
        <Route path="/login" element={<Login />} />
        
                  {/* <Route path='/dashboard' element ={<Dashboardd/>}/> */}

        {/* Assuming other routes that are not part of the dashboard go here */}
      </Routes>
    </>
  );
}

export default MainContent;
