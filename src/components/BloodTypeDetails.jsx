import React from 'react';
import { useParams } from 'react-router-dom';


function BloodTypeDetails() {


    
    const { type } = useParams();



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

    const blood = bloodTypes.find(b => b.type === type);


    return (
        <div className="p-6 bg-white max-h-[605px] text-black shadow-lg animate-fade-in-up mx-auto ml-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Blood Type: {blood.type}</h2>
            <div className="flex justify-between mb-4">
                <div>
                    <p className="text-xl font-semibold">Units Available:</p>
                    <p className="text-2xl">{blood.availability}</p>
                </div>
                <div>
                    <p className="text-xl font-semibold">Last Donation:</p>
                    <p className="text-2xl">{blood.lastDonation}</p>
                </div>
            </div>
            <h4 className="text-2xl font-medium mt-4 mb-2">Locations:</h4>
            <ul className="list-disc list-inside mb-4">
                {blood.locations.map((location, idx) => (
                    <li key={idx} className="mb-2">
                        <div className="p-4 bg-gray-100 rounded-lg transition-transform transform hover:scale-105">
                            <p className="text-lg font-semibold">{location.place}</p>
                            <p>Units: {location.units}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">Contact</button>
            </div>
        </div>
    );
}

export default BloodTypeDetails;
