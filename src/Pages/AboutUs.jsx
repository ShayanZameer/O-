import React from 'react';
import bgImage from '../assets/Images/bg3.jpg';  // Adjust the path as necessary


function AboutUs() {
  return (
    <div className="relative">
      

      
      <section className="flex items-center justify-center h-screen bg-black text-white px-8">
        <div className="max-w-4xl mx-auto flex items-center">
          <img src={bgImage} alt="About Us" className="w-full max-w-xs mr-8" />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">About Us</h1>
            <h5 className="text-xl"><span className="text-red-500">Blood &</span> Medicine Donation</h5>
            <p>Our mission is to connect donors with recipients in order to ensure that no one goes without the essential medical supplies they require. We work tirelessly to raise awareness about the importance of blood and medicine donation, as well as to facilitate the donation process for those who wish to contribute. Our network is made up of dedicated volunteers, healthcare professionals, and supporters who are committed to making a positive impact in the lives of others. Thank you for your interest in our organization, and we welcome your support in helping us continue our vital work.</p>
          </div>
        </div>
      </section>
      <footer className="text-center py-4 bg-black text-white">
        Copyright &copy; www.lifesharenetwork.com. All right reserved!
      </footer>
    </div>
  );
}

export default AboutUs;
