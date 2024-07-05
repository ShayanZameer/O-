import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPinIcon } from '@heroicons/react/24/outline'; // Importing a map pin icon for location

import Map from './Map';



function BloodTypeDetails() {



    const { type } = useParams();



    const bloodTypes = [
        {
            type: 'A+',
            availability: 12,
            urgent: true,
            lastDonation: 'June 15, 2024',
            locations: [
                { place: 'PIMS Hospital', units: 5 },
                { place: 'Shifa International Hospital', units: 5 },
                { place: 'Holy Family Hospital', units: 2 }
            ]
        },
        {
            type: 'O+',
            availability: 15,
            urgent: false,
            lastDonation: 'May 20, 2024',
            locations: [
                { place: 'Aga Khan University Hospital', units: 7 },
                { place: 'Liaquat National Hospital', units: 8 }
            ]
        },
        {
            type: 'B+',
            availability: 10,
            urgent: false,
            lastDonation: 'July 01, 2024',
            locations: [
                { place: 'Jinnah Postgraduate Medical Centre', units: 10 }
            ]
        },
        {
            type: 'AB+',
            availability: 8,
            urgent: true,
            lastDonation: 'June 10, 2024',
            locations: [
                { place: 'Civil Hospital Karachi', units: 4 },
                { place: 'Indus Hospital', units: 4 }
            ]
        },
        {
            type: 'A-',
            availability: 7,
            urgent: true,
            lastDonation: 'April 25, 2024',
            locations: [
                { place: 'Combined Military Hospital', units: 3 },
                { place: 'Lady Reading Hospital', units: 4 }
            ]
        },
        {
            type: 'O-',
            availability: 6,
            urgent: true,
            lastDonation: 'March 30, 2024',
            locations: [
                { place: 'Fatima Jinnah Medical University', units: 6 }
            ]
        },
        {
            type: 'B-',
            availability: 9,
            urgent: false,
            lastDonation: 'July 15, 2024',
            locations: [
                { place: 'Nishtar Hospital', units: 5 },
                { place: 'Bahawal Victoria Hospital', units: 4 }
            ]
        },
        {
            type: 'AB-',
            availability: 4,
            urgent: true,
            lastDonation: 'August 05, 2024',
            locations: [
                { place: 'Mayo Hospital', units: 2 },
                { place: 'Punjab Institute of Cardiology', units: 2 }
            ]
        }
    ];


    const blood = bloodTypes.find(b => b.type === type);


    return (



        <div className="p-6 bg-black max-h-[605px] ml-8 text-white flex flex-col items-center w-[100%]">
            <h2 className="text-4xl font-bold mb-8 text-center animate-pulse">Blood Type: {blood.type}</h2>
            <div className="bg-gray-800 p-8 rounded-lg max-h-[85%] shadow-lg max-w-4xl w-full">
                <div className="flex justify-between mb-6 animate-fade-in-up">
                    <div>
                        <p className="text-xl font-semibold">Units Available:</p>
                        <p className="text-3xl">{blood.availability}</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold">Last Donation:</p>
                        <p className="text-3xl">{blood.lastDonation}</p>
                    </div>
                </div>
                <h4 className="text-2xl font-medium mt-4 mb-4">Locations:</h4>

                <div className=' flex justify-between'>



                    <ul className="list-none mb-6 animate-fade-in-up">
                        {blood.locations.map((location, idx) => (
                            <li key={idx} className="mb-4">
                                <div className="p-4 bg-gray-700 w-[400px] rounded-lg transition-transform transform hover:scale-105">
                                    <div className="flex items-center ">
                                        <MapPinIcon className="h-6 w-6 text-yellow-400 mr-3" />
                                        <div>
                                            <p className="text-lg font-semibold">{location.place}</p>
                                            <p>Units: {location.units}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Placeholder for the map */}
                    <div className="flex items-center justify-center h-full w-[200px] mr-5">

                        <Map />
                    </div>
                </div>
                {/* <div className="flex justify-center">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">Contact</button>
            </div> */}
            </div>




        </div>
    );
}

export default BloodTypeDetails;
