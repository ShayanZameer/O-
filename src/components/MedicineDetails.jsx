

import React from 'react';
import { useParams } from 'react-router-dom';
import { MapIcon } from '@heroicons/react/24/outline'; 

function MedicineDetails({ medicines }) {
    const { medicineId } = useParams();
    const medicine = medicines.find(med => med.id === parseInt(medicineId));

    if (!medicine) {
        return <div className="flex items-center justify-center h-screen">
            <div className="text-center text-white bg-gray-900 p-5 rounded-lg">
                <h2 className="font-bold text-2xl">Medicine not found.</h2>
            </div>
        </div>;
    }

    return (
        <div className="bg-black w-[100%] text-white min-h-screen flex  justify-center">
            <div className="max-w-4xl mx-auto p-5 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 p-8 rounded-lg shadow-lg">
                    <div>
                        <img src={medicine.imageUrl} alt={medicine.name} className="rounded-lg shadow-md"/>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{medicine.name}</h1>
                        <p className="text-lg mb-3"><strong>Description:</strong> {medicine.description}</p>
                        <p className="text-lg mb-3"><strong>Expiry Date:</strong> {medicine.expiryDate}</p>
                        <p className="text-lg mb-3"><strong>Location:</strong> {medicine.location}</p>
                        <div className="mt-4 bg-gray-700 p-6 rounded-lg shadow-inner flex items-center justify-center">
                            <MapIcon className="h-6 w-6 text-green-500 mr-2"/>
                            <p className="text-sm">Interactive map will be here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MedicineDetails;

