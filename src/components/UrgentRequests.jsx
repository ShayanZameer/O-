import React from 'react';
import { FireIcon } from '@heroicons/react/24/outline';  
function UrgentRequests() {
    const requests = [
        { id: 1, bloodType: 'O-', urgency: 'High', location: 'City Hospital', neededBy: 'June 25, 2024' },
        { id: 2, bloodType: 'A+', urgency: 'Medium', location: 'Downtown Clinic', neededBy: 'June 30, 2024' }
    ];

    // Function to determine urgency color
    const urgencyColor = (urgency) => {
        if (urgency === 'High') return 'bg-red-500';
        if (urgency === 'Medium') return 'bg-yellow-500';
        return 'bg-green-500';
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Urgent Donation Requests</h2>
            <div className="space-y-3">
                {requests.map((request) => (
                    <div key={request.id} className={`flex items-center p-3 rounded-lg ${urgencyColor(request.urgency)} hover:bg-opacity-80 transition duration-300 ease-in-out`}>
                        <FireIcon className="h-6 w-6 text-white mr-2"/>
                        <div>
                            <h3 className="text-white text-md font-bold">Blood Type: {request.bloodType}</h3>
                            <p className="text-sm">Location: {request.location}</p>
                            <p className="text-sm">Needed by: {request.neededBy}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UrgentRequests;
