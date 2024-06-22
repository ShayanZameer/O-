// import React, { useState, useEffect } from 'react';

// import AboutUs from './components/AboutUs';

// import Navbar from './components/Navbar';
// import Signup from './components/Signup';
// import Donate from './components/Donate';
// import Homee from './Pages/Homee';
// import Login from './components/Login';

// import Contact from './components/Contact';

// import Dashboardd from './Pages/Dashboardd';
// import { BrowserRouter as Router,Routes,Route,useLocation} from "react-router-dom";



// const App = () => {
//   const location = useLocation();
//   const [showNavbar, setShowNavbar] = useState(true);

//   useEffect(()=>{
//     const path =  location.pathname;
//     setShowNavbar(path !== "/dashboard" );
//   }, [location]);


//   return (


//     <Router>

//     <div>
//   {showNavbar && <Navbar/>}
//     </div>


//     <div>
// <Routes>
// <Route path = "/" element={<Homee/>}/>
// <Route path = "/about" element={<AboutUs/>}/>
// <Route path = "/Signup" element={<Signup/>}/>

// <Route path ="/donate" element={<Donate/>}/>

// <Route path="/login" element={<Login/>}/>

// <Route path="/contact" element={<Contact/>}/>


// <Route path ="/dashboard" element = {<Dashboardd/>}/>


// </Routes>
//     </div>
//     </Router>
//   )
// }

// export default App



import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from './components/MainContent';
const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
