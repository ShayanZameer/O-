import React from 'react';
import { FireIcon, PhoneIcon } from '@heroicons/react/24/outline';  

import { useNavigate } from 'react-router-dom';

function UrgentRequests() {

    const navigate = useNavigate();
    const requests = [
        { id: 1, bloodType: 'O-', urgency: 'High', location: 'City Hospital', neededBy: 'June 25, 2024' },
        { id: 2, bloodType: 'A+', urgency: 'Medium', location: 'Downtown Clinic', neededBy: 'June 30, 2024' }
    ];

    // Function to determine urgency color
    const urgencyColor = (urgency) => {
        if (urgency === 'High') return 'bg-red-500 hover:bg-red-600';
        if (urgency === 'Medium') return 'bg-yellow-500 hover:bg-yellow-600';
        return 'bg-green-500 hover:bg-green-600';
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md w-[1000px] ml-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Urgent Donation Requests</h2>
            <div className="space-y-4">
                {requests.map((request) => (
                    <div key={request.id} className={`flex justify-between items-center p-3 rounded-lg ${urgencyColor(request.urgency)} transition duration-300 ease-in-out`}>
                        <div className="flex items-center space-x-3">
                            <FireIcon className="h-6 w-6 text-white"/>
                            <div>
                                <h3 className="text-white text-md font-bold">Blood Type: {request.bloodType}</h3>
                                <p className="text-sm">Location: {request.location}</p>
                                <p className="text-sm">Needed by: {request.neededBy}</p>
                            </div>
                        </div>
                        <button onClick={()=>{navigate("/dashboard/contact")}} className="flex items-center bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded shadow">
                            <PhoneIcon className="h-5 w-5 mr-2 text-green-500"/>
                            Contact Us
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UrgentRequests;

