// MainContent.js
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './Navbar'; 
import AboutUs from './AboutUs';
import Signup from './Signup';
import Donate from './Donate';
import Homee from '../Pages/Homee'; 
import Login from './Login';
import Contact from './Contact';
// import Dashboardd from './Dashboardd';

import Dashboardd from '../Pages/Dashboardd';

const MainContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/dashboard";

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboardd />} />
      </Routes>
    </div>
  );
}

export default MainContent;