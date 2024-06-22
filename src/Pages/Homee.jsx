import React from 'react';
import logo from '../assets/Images/logo.png';
import bg1 from '../assets/Images/bg1.jpg';
import bg2 from '../assets/Images/bg2.jpg';
import bg3 from '../assets/Images/bg3.jpg';
import clientImage1 from '../assets/Images/bg4.jpg';
import clientLogo from '../assets/Images/logo2.jpg';
// import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';

function Homee() {

    const navigate = useNavigate();


    const handleRegister= ()=>{

        navigate('/Signup');

    }

    
  return (


    <div className='bg-black'>




      <section id="home" className="text-center p-10 bg-black">
        <h1 className="text-3xl font-bold text-white ">Welcome to Life-Share Network</h1>

        <div className='mt-5  flex-col justify-center items-center'>

        <p className='text-white'>LifeShare Network is a dedicated platform that connects donors with individuals in need of life-saving blood and essential medicines.</p>
        <p className='text-white'>At Blood and Medicine Donation Network, we believe that every donation, whether it be blood or medication, has the power to save lives and improve health outcomes for those in need.</p>
        </div>
        <button onClick={handleRegister} className=" mt-5 text-white p-2 rounded-3xl border-2  hover:bg-red-700">Register Now!</button>
      </section>
      <section className="p-10 bg-black">
        <div className="flex justify-evenly space-x-2">
          <div className="h-[400px] w-[400px] border-2 border-red-700 rounded-xl p-4 ">
            <img src={bg1} alt="services" className="h-40 w-full object-cover" />
            <h2 className=" mt-3 text-3xl text-white font-semibold">Can I donate?</h2>
            <p className="text-white mt-3">Absolutely! Your willingness to donate is greatly appreciated. Your contribution can make a significant impact on the lives of those in need.</p>
          </div>
          <div className="h-[400px] w-[400px] border-2 border-red-700 rounded-xl p-4">
            <img src={bg2} alt="services" className="h-40 w-full object-cover" />
            <h2 className="mt-3 text-3xl text-white  font-semibold">Donation's</h2>
            <p className="text-white mt-3">Donation of Blood and Medicine for Saving Life of others. Your generous contributions help us sustain our efforts and make a positive impact on the health.</p>
          </div>
          <div className="h-[400px] w-[400px] border-2 border-red-700 rounded-xl p-4">
            <img src={bg3} alt="services" className="h-40 w-full object-cover" />
            <h2 className="text-3xl text-white mt-3 font-semibold">Why Donate</h2>
            <p className="text-white mt-3">Your donation can help save lives and improve the health outcomes of individuals in critical need of blood transfusions and essential medications. Every contribution counts.</p>
          </div>
        </div>
      </section>




      <section className="p-10 bg-black">
        <div className="flex justify-evenly space-x-5">

          <div className="h-[400px] w-[450px] border-2 border-red-700 rounded-xl p-4 ">
            <img src={bg1} alt="services" className="h-40 w-full object-cover" />
            <h2 className=" mt-3 text-4xl text-white font-bold">Donate Blood</h2>
            <p className="text-white mt-3">Absolutely! Your willingness to donate is greatly appreciated. Your contribution can make a significant impact on the lives of those in need.</p>

            
            <div className='flex justify-center'>

            <button onClick={()=>{navigate('/login')}} className=" mt-5 text-white p-2 rounded-3xl border-2  hover:bg-red-700">Blood Donate</button>
            </div>

          </div>
          <div className="h-[400px] w-[450px] border-2 border-red-700 rounded-xl p-4">
            <img src={bg2} alt="services" className="h-40 w-full object-cover" />
            <h2 className="mt-3 text-4xl text-white  font-bold">Donate Medicine</h2>
            <p className="text-white mt-3">Donation of Blood and Medicine for Saving Life of others. Your generous contributions help us sustain our efforts and make a positive impact on the health.</p>

            <div className='flex justify-center'>

            <button onClick={()=>{navigate('/login')}} className="  mt-5 text-white p-2 rounded-3xl border-2  hover:bg-red-700">Medicine Donate</button>
            </div>

          </div>
          
        </div>
      </section>







      <section id="client-section" className="text-center p-10 bg-black">
        <h1 className="text-5xl text-white font-bold">Our Clients</h1>
        <div className="flex space-x-4 justify-center p-4 mt-3">
          <div className="client-items">
            <img src={clientImage1} alt="our clients" className="h-24 w-24 object-cover" />
          </div>
          <div className="client-items">
            <img src={clientLogo} alt="our clients" className="h-24 w-24 object-cover" />
          </div>
        </div>
      </section>
      <footer className="text-center p-4 bg-gray-900 text-white">
        Copyright &copy; www.lifesharenetwork.com. All right reserved!
      </footer>
    </div>
    
  );
}

export default Homee;
