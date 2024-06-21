


import React from 'react';
import logo from '../assets/Images/logo.png'; // Adjust the path as necessary
import bg1 from '../assets/Images/bg1.jpg';
import bg2 from '../assets/Images/bg2.jpg';
import bg3 from '../assets/Images/bg3.jpg';
import clientImage1 from '../assets/Images/bg4.jpg';
import clientLogo from '../assets/Images/logo2.jpg';

function Home() {
  return (
    <div>
      <nav className="flex items-center justify-between p-5 bg-gray-200">
        <div id="logo">
          <img src={logo} alt="Life-Share Network" className="h-10" />
        </div>
        <ul className="flex space-x-4">
          <li className="item"><a href="index.html" className="text-blue-500 hover:text-blue-700">Home</a></li>
          <li className="item"><a href="donate.html" className="text-blue-500 hover:text-blue-700">Donate</a></li>
          <li className="item"><a href="contact.html" className="text-blue-500 hover:text-blue-700">Contact Us</a></li>
          <li className="item"><a href="aboutus.html" className="text-blue-500 hover:text-blue-700">About Us</a></li>
          <li className="item"><a href="registration.html" className="text-blue-500 hover:text-blue-700">Registration</a></li>
        </ul>
      </nav>
      <section id="home" className="text-center p-10 bg-gray-100">
        <h1 className="text-3xl font-bold ">Welcome to Life-Share Network</h1>
        <p>LifeShare Network is a dedicated platform that connects donors with individuals in need of life-saving blood and essential medicines.</p>
        <p>At Blood and Medicine Donation Network, we believe that every donation, whether it be blood or medication, has the power to save lives and improve health outcomes for those in need.</p>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Registration Now!</button>
      </section>
      <section className="p-10 bg-white">
        <div className="flex space-x-4">
          <div className="box p-4">
            <img src={bg1} alt="services" className="h-40 w-full object-cover" />
            <h2 className="text-xl font-semibold">Can I donate?</h2>
            <p className="text-gray-600">Absolutely! Your willingness to donate is greatly appreciated. Your contribution can make a significant impact on the lives of those in need.</p>
          </div>
          <div className="box p-4">
            <img src={bg2} alt="services" className="h-40 w-full object-cover" />
            <h2 className="text-xl font-semibold">Donation's</h2>
            <p className="text-gray-600">Donation of Blood and Medicine for Saving Life of others. Your generous contributions help us sustain our efforts and make a positive impact on the health.</p>
          </div>
          <div className="box p-4">
            <img src={bg3} alt="services" className="h-40 w-full object-cover" />
            <h2 className="text-xl font-semibold">Why Donate</h2>
            <p className="text-gray-600">Your donation can help save lives and improve the health outcomes of individuals in critical need of blood transfusions and essential medications. Every contribution counts.</p>
          </div>
        </div>
      </section>
      <section id="client-section" className="text-center p-10 bg-gray-200">
        <h1 className="text-3xl font-bold">Our Clients</h1>
        <div className="flex space-x-4 justify-center p-4">
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

export default Home;
