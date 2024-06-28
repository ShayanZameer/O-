import React from 'react';



import { useState } from 'react';

import axios from 'axios';

import config from '../../config';
import Popup from '../components/Popup';

import { useNavigate } from 'react-router-dom';


function Signup() {

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();



  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const closePopup = () => {
    setShowPopup(false); // Close popup
    // Optionally, reset any state related to the popup
    navigate('/login'); // Navigate to Login screen after closing popup

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      
      const response = await axios.post(`${config.REACT_APP_BACKEND_URL}/api/auth/signup`, {
        
        firstName: formData.firstname,
        lastName: formData.lastname,
        email: formData.email,
        phoneNumber: formData.phonenumber,
        password: formData.password,
        gender: formData.gender
      });
      
  
      // Reset form data if signup was successful
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        password: '',
        confirmPassword: '',
        gender: ''})

        setShowPopup(true); // Show popup on successful signup

    } catch (error) {
      console.error("There was an error!", error);
    }
  };








  return (
    <div className="flex h-[600px] justify-center items-center bg-black">
      <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-inner">
        <h1 className="text-center text-2xl font-semibold text-white mb-6">Registration</h1>
        <form onSubmit={handleSubmit} method="post" className="space-y-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="name" className="block text-white text-lg"> First Name</label>
              <input type="text" id="name" name="firstname" placeholder="Enter Your Name"
                     className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" value={formData.firstname}
                     onChange={handleChange} />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="lastname" className="block text-white text-lg">Last Name</label>
              <input type="text" id="lastname" name="lastname" placeholder="Enter Your Last Name"
                     className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" value={formData.lastname}
                     onChange={handleChange} />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="email" className="block text-white text-lg">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter email"
                     className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" value={formData.email}
                     onChange={handleChange} />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="phonenumber" className="block text-white text-lg">Phone Number</label>
              <input type="number" id="phonenumber" name="phonenumber" placeholder="Enter Phone Number"
                     className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"  value={formData.phonenumber}
                     onChange={handleChange} />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="Password" className="block text-white text-lg">Password</label>
              {/* <input type="password" id="Password" name="Password" placeholder="Enter password"
                     className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"  value={formData.password}
                     onChange={handleChange} /> */}

<input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="confirmPassword" className="block text-white text-lg">Confirm password</label>
              {/* <input type="password" id="confirmPassword" name="password" placeholder="Enter password"
                     className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" value={formData.confirmPassword}
                     onChange={handleChange} /> */}


<input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Enter password"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <span className="text-white font-semibold">Gender</span>
            <div className="flex items-center">
              <input type="radio" name="gender" id="male" value="male" className="text-red-500" checked={formData.gender === 'male'}
                onChange={handleChange} />
              <label htmlFor="male" className="ml-2 text-white">Male</label>
              <input type="radio" name="gender" id="Female" value="female" className="ml-4 text-red-500" checked={formData.gender === 'female'}
                onChange={handleChange} />
              <label htmlFor="Female" className="ml-2 text-white">Female</label>
              <input type="radio" name="gender" id="other" value="other" className="ml-4 text-red-500"  checked={formData.gender === 'other'}
                onChange={handleChange} />
              <label htmlFor="other" className="ml-2 text-white">Other</label>
            </div>
          </div>
          <div className="mt-6">
            <input type="submit" value="Submit"
                   className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 cursor-pointer" />
          </div>
        </form>
      </div>

      {showPopup && (
        <Popup
          message="Account created successfully"
          onClose={closePopup}
        />
      )}
    </div>
  );
}

export default Signup;


