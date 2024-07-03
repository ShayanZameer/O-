import React, { useState } from 'react';
import axios from 'axios';

import config from '../../config';
import Popup from './Popup';

function Donate() {


    const [showPopup, setShowPopup]= useState(false);
    
  const [formData, setFormData] = useState({
      blood_group: '',
      date_of_birth: '',
      gender: '',
      last_donation_date: '',
      donorName: '',
      phoneNumber: '',
    status: 'pending'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const closePopup = () => {
    setShowPopup(false); // Close popup

  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('authToken');

    // console.log("token is ", token );
   

    try {
      
      const response = await axios.post(`${config.REACT_APP_BACKEND_URL}/api/blood/donate-blood`, {
        
        blood_group: formData.blood_group,
        date_of_birth: formData.date_of_birth,
        gender: formData.gender,
        last_donation_date: formData.last_donation_date,
        donorName: formData.donorName,
        phoneNumber: formData.phoneNumber,
        status:"pending"
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    }
    );

  
      // Reset form data if signup was successful
      setFormData({
        blood_group: '',
        date_of_birth: '',
        gender: '',
        last_donation_date: '',
        donorName: '',
        phoneNumber: '',
        status: 'pending'})

        setShowPopup(true); 

    } catch (error) {
      console.error("There was an error!", error);
    }
  };

    //   const response = await axios.post(`${config.REACT_APP_BACKEND_URL}/api/blood/donate-blood`, {
        
    

  return (
    <div className="flex max-h-[605px] py-4 items-center justify-center bg-black w-[100%] ml-8">
      <div className="w-full max-h-[605px] max-w-xl bg-gray-800 p-6 rounded-lg shadow-xl">
        <h1 className="text-xl font-semibold text-white text-center mb-6">Blood Donation</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-wrap justify-evenly">
            <div className="w-full md:w-1/2 mb-4">
              <label htmlFor="donorName" className="block text-white font-medium">Donor Name</label>
              <input
                type="text"
                id="donorName"
                name="donorName"
                placeholder="Enter Your Name"
                className="w-[250px] p-2 rounded bg-gray-700 text-white border border-gray-600"
                value={formData.donorName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 mb-4">
              <label htmlFor="phoneNumber" className="block text-white font-medium">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="blood_group" className="block text-white font-medium">Blood Group</label>
              <select
                id="blood_group"
                name="blood_group"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                value={formData.blood_group}
                onChange={handleChange}
              >
                <option value="">---Select Your Blood Group---</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 mb-4">
              <label htmlFor="date_of_birth" className="block text-white font-medium">Date of Birth</label>
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                className="w-[250px] p-2 rounded bg-gray-700 text-white border border-gray-600"
                value={formData.date_of_birth}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 mb-4">
              <label htmlFor="last_donation_date" className="block text-white font-medium">Last Donation Date</label>
              <input
                type="date"
                id="last_donation_date"
                name="last_donation_date"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                value={formData.last_donation_date}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 mb-4">
              <label htmlFor="gender" className="block text-white font-medium">Gender</label>
              <select
                id="gender"
                name="gender"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">---Select Your Gender---</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>

      {showPopup &&(
        <Popup message="Status Pending Our team will contact soon" onClose={closePopup}/>
      )}
    </div>
  );
}

export default Donate;

