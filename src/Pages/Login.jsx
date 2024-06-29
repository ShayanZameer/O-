
import React from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import { useState } from 'react';
import Popup from '../components/Popup';
import axios from 'axios';




function Login() {

    const navigate = useNavigate(); 
    const [showPopup, setShowPopup] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
       
      });


      const closePopup = () => {
        setShowPopup(false); // Close popup
        navigate("/dashboard/dashboardd");

    
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };


    
const handleLogin = async (e)=>{
    e.preventDefault();

    try{
    const response = await axios.post(`${config.REACT_APP_BACKEND_URL}/api/auth/login`,{
        email:formData.email,
        password:formData.password
    })
  

    if (response.data.authToken) {
        localStorage.setItem('authToken', response.data.authToken);
        setShowPopup(true);
      }
    setFormData({
        
        email: '',
        password: '',
        })



}catch(error){
    console.log(error);
}   
}
   const handleNavigateToSignUp = () => {


        navigate('/signup'); // Navigate to the signup route when the signup button is clicked
    };

    return (
        <div className="flex h-screen items-center justify-center bg-black">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-xl">
                <h1 className="text-xl font-semibold text-white text-center mb-6">Login</h1>
                <form onSubmit={handleLogin} method="post" className="space-y-6">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white font-medium">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"
                               className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"  value={formData.email}
                               onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-white font-medium">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password"
                               className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" value={formData.password}
                               onChange={handleChange} />
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="/forgot-password" className="text-sm text-red-500 hover:text-red-700">Forgot Password?</a>
                        <button type="button" onClick={handleNavigateToSignUp} className="text-sm text-blue-500 hover:text-blue-700">
                            Need an account? Sign up
                        </button>
                    </div>
                    <button onClick={handleLogin} type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </form>
            </div>

            {showPopup&&(
                <Popup message="User Login Successfully"   onClose={closePopup} />
            )}
        </div>
    );
}

export default Login;

