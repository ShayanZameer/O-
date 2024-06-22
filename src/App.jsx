import React from 'react'


import AboutUs from './components/AboutUs';

import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Donate from './components/Donate';
import Homee from './Pages/Homee';
import Login from './components/Login';

import Contact from './components/Contact';

import Dashboardd from './Pages/Dashboardd';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";



const App = () => {
  return (


    <Router>

    <div>
      <Navbar/>
    </div>


    <div>
<Routes>
<Route path = "/" element={<Homee/>}/>
<Route path = "/about" element={<AboutUs/>}/>
<Route path = "/Signup" element={<Signup/>}/>

<Route path ="/donate" element={<Donate/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/contact" element={<Contact/>}/>


<Route path ="/dashboard" element = {<Dashboardd/>}/>


</Routes>
    </div>
    </Router>
  )
}

export default App
