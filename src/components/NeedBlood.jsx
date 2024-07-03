import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon } from '@heroicons/react/24/outline';  // Importing a phone icon for contact

function NeedBlood() {
    const bloodTypes = [
        {
            type: 'A+',
            availability: 12,
            urgent: true,
            lastDonation: 'June 15, 2024',
            locations: [
                { place: 'Location A', units: 5 },
                { place: 'Location B', units: 5 },
                { place: 'Location C', units: 2 }
            ]
        },
        {
            type: 'O+',
            availability: 15,
            urgent: false,
            lastDonation: 'May 20, 2024',
            locations: [
                { place: 'Location D', units: 7 },
                { place: 'Location E', units: 8 }
            ]
        },
        {
            type: 'B+',
            availability: 10,
            urgent: false,
            lastDonation: 'July 01, 2024',
            locations: [
                { place: 'Location F', units: 10 }
            ]
        },
        {
            type: 'AB+',
            availability: 8,
            urgent: true,
            lastDonation: 'June 10, 2024',
            locations: [
                { place: 'Location G', units: 4 },
                { place: 'Location H', units: 4 }
            ]
        },
        {
            type: 'A-',
            availability: 7,
            urgent: true,
            lastDonation: 'April 25, 2024',
            locations: [
                { place: 'Location I', units: 3 },
                { place: 'Location J', units: 4 }
            ]
        },
        {
            type: 'O-',
            availability: 6,
            urgent: true,
            lastDonation: 'March 30, 2024',
            locations: [
                { place: 'Location K', units: 6 }
            ]
        },
        {
            type: 'B-',
            availability: 9,
            urgent: false,
            lastDonation: 'July 15, 2024',
            locations: [
                { place: 'Location L', units: 5 },
                { place: 'Location M', units: 4 }
            ]
        },
        {
            type: 'AB-',
            availability: 4,
            urgent: true,
            lastDonation: 'August 05, 2024',
            locations: [
                { place: 'Location N', units: 2 },
                { place: 'Location O', units: 2 }
            ]
        }
    ];

    return (
        <div className="p-6 bg-black max-h-[605px] text-white  shadow-lg animate-fade-in-up mx-auto ml-8">
            <h2 className="text-2xl font-bold mb-4">Need Blood?</h2>
            <p className="mb-6">Explore the available blood types below. Click on each type for details and to reach out if you need a specific type.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {bloodTypes.map((blood, index) => (

                    
                    <Link to={`/dashboard/blood-details/${blood.type}`} key={index} className={`p-4 rounded-lg transition duration-300 ease-in-out ${blood.urgent ? 'bg-red-500 hover:bg-red-800' : 'bg-yellow-400 hover:bg-yellow-700'}`}>

                        <div>

                        <h3 className="text-xl font-semibold">{blood.type}</h3>
                        <p>Units Available: {blood.availability}</p>
                        <p>Last Donation: {blood.lastDonation}</p>
                        </div>
                        <div to="/contact" className="flex items-center justify-end mt-2 text-sm text-yellow-200 hover:text-yellow-100">
                            <PhoneIcon color='green' className="h-6 w-6 mr-2"/>
                            
                            <span>

                            <Link to="/contact">Contact</Link>
                            </span>

                        
                        </div>
                    </Link>
                    
                ))}
            </div>
        </div>
    );
}

export default NeedBlood;

