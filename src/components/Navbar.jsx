import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

const Navbar=()=> {
  return (
    <nav className="flex items-center justify-between p-5 bg-black">
      <div id="logo">
        <img src={logo} alt="Life-Share Network" className="h-14" />
      </div>
      <ul className="flex space-x-4">
        <li className="item">
          <Link to="/" className="text-white hover:text-red-700">Home</Link>
        </li>
        <li className="item">
          <Link to="/about" className="text-white hover:text-red-700">Donate</Link>
        </li>
        <li className="item">
          <a href="contact.html" className="text-white hover:text-red-700">Contact Us</a>
        </li>
        <li className="item">
          <Link to="/about" className="text-white hover:text-red-700">About Us</Link>
        </li>
        <li className="item">
          <Link to="/Signup" className="text-white hover:text-red-700">Signup</Link>
        </li>
        <li className="item">
          <a href="registration.html" className="text-white hover:text-red-700">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
