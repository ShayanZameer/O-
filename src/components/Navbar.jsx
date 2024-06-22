import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

import { useNavigate } from 'react-router-dom';

const Navbar=()=> {

    const navigate= useNavigate();



    const [isLoggedIn, setIsLoggedIn] = useState("false");


    const checkState=()=>{


        if(isLoggedIn===true){
            navigate("/donate");
        }else{
            navigate("/login");
        }
    }
  return (
    <nav className="flex items-center justify-between p-5 bg-black">
      <div id="logo">
        <img src={logo} alt="Life-Share Network" className="h-14" />
      </div>
      <ul className="flex space-x-4">
        <li className="item">
          <Link to="/" className="text-white hover:text-red-700">Home</Link>
        </li>
        <li className="item"> <button className='text-white hover:text-red-700' onClick={checkState}>Donate</button>
        
        </li>
        <li className="item">
          <Link to="/contact" className="text-white hover:text-red-700">Contact Us</Link>
        </li>
        <li className="item">
          <Link to="/about" className="text-white hover:text-red-700">About Us</Link>
        </li>
        <li className="item">
          <Link to="/Signup" className="text-white hover:text-red-700">Signup</Link>
        </li>
        <li className="item">
          <Link to="/login" className="text-white hover:text-red-700">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
