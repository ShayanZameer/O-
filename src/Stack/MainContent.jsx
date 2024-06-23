// // MainContent.js
// import React from 'react';
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from '../components/Navbar'; 
// import AboutUs from '../components/AboutUs';
// import Signup from '../components/Signup';
// import Donate from '../components/Donate';
// import Homee from '../Pages/Homee'; 
// import Login from '../components/Login';
// import Contact from '../components/Contact';
// // import Dashboardd from './Dashboardd';

// import Dashboardd from '../Pages/Dashboardd';

// const MainContent = () => {
//   const location = useLocation();
//   const showNavbar = location.pathname !== "/dashboard";

//   return (
//     <div>
//       {showNavbar && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Homee />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/donate" element={<Donate />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* <Route path="/dashboard" element={<Dashboardd />} /> */}
//       </Routes>
//     </div>
//   );
// }

// export default MainContent;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import AboutUs from '../components/AboutUs';
import Signup from '../components/Signup';
import Donate from '../components/Donate';
import Homee from '../Pages/Homee'; 
import Login from '../components/Login';
import Contact from '../components/Contact';
import Dashboardd from '../Pages/Dashboardd';

const MainContent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/login" element={<Login />} />
        
                  {/* <Route path='/dashboard' element ={<Dashboardd/>}/> */}

        {/* Assuming other routes that are not part of the dashboard go here */}
      </Routes>
    </>
  );
}

export default MainContent;
