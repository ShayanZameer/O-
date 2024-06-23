import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { RiMedicineBottleLine } from "react-icons/ri";

function DonateWithUs() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col  items-center justify-center p-6 bg-white rounded-lg shadow-lg animate-fade-in ml-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Help Save Lives</h1>
            <p className="text-center text-gray-600 mb-6">
                Your contribution makes a big difference. Whether it's donating blood or providing essential medicines,
                you can help us support those in urgent need. Choose how you'd like to contribute today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <div
                    className="flex flex-col items-center justify-center space-y-3 p-4 bg-red-100 rounded-lg hover:bg-red-200 transition-colors duration-300 cursor-pointer"
                    onClick={() => handleNavigate('/dashboard/donate')}>
                    <HeartIcon className="h-12 w-12 text-red-500"/>
                    <span className="text-xl font-semibold">Donate Blood</span>
                    <p className="text-sm text-gray-700 text-center">
                        Join our mission by donating blood. It’s a simple act with a powerful impact.
                    </p>
                </div>
                <div
                    className="flex flex-col items-center justify-center space-y-3 p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-300 cursor-pointer"
                    onClick={() => handleNavigate('/dashboard/donateMedicine')}>
                    <RiMedicineBottleLine className="h-12 w-12 text-blue-500"/>
                    <span className="text-xl font-semibold">Donate Medicine</span>
                    <p className="text-sm text-gray-700 text-center">
                        Donate surplus medications to help those who can't afford essential health care.
                    </p>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-gray-600">
                    Every donation counts. Learn more about how your contributions help <a href="/about" className="text-blue-500 hover:underline">here</a>.
                </p>
            </div>
        </div>
    );
}

export default DonateWithUs;
