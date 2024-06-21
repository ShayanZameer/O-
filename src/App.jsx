import React from 'react'

import Home from './pages/Home';

import AboutUs from './components/AboutUs';

import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Donate from './components/Donate';

import Login from './components/Login';

import Contact from './components/Contact';

import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";



const App = () => {
  return (


    <Router>

    <div>
      <Navbar/>
    </div>


    <div>
<Routes>
<Route path = "/" element={<Home/>}/>
<Route path = "/about" element={<AboutUs/>}/>
<Route path = "/Signup" element={<Signup/>}/>

<Route path ="/donate" element={<Donate/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/contact" element={<Contact/>}/>



</Routes>
    </div>
    </Router>
  )
}

export default App
