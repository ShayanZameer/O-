
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Popup from './Popup'; // Import your Popup component

function MedicineDetails({ medicines }) {
    const { medicineId } = useParams();
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const medicine = medicines.find(med => med._id === medicineId);
    
    if (!medicine) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center text-white bg-gray-900 p-5 rounded-lg">
                    <h2 className="font-bold text-2xl">Medicine not found.</h2>
                </div>
            </div>
        )
    }
    
    const addToCart = async () => {
        try {

             const token = localStorage.getItem('authToken');
            //  const token = tokenn.split(' ')[1];
            // Send request to add medicine to cart
            await axios.post('http://localhost:5000/api/cart/add-to-cart', { 
                medicine_id: medicine._id, 
                quantity: 1 
            },  {
                //  headers: { "Authorization": `Bearer ${token}` } ,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'                  }

            },);
            // Update popup message and show the popup
            setPopupMessage('Medicine added to cart successfully!');
            setShowPopup(true);
        } catch (error) {
            console.error('Error adding medicine to cart:', error); // Log error to debug
            setPopupMessage('Failed to add medicine to cart.');
            setShowPopup(true);
        }
    };
    

    return (
        <div className="bg-gray-900 text-white min-h-screen ml-8 w-[100%] flex justify-center">
            <div className="max-w-4xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 p-8 rounded-lg shadow-lg">
                    <div className="flex justify-center">
                        <img 
                            src={medicine.image} 
                            alt={medicine.name} 
                            className="w-full md:w-3/4 h-auto object-cover rounded-lg shadow-md" 
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl font-extrabold mb-4">{medicine.medicineName}</h1>
                        <p className="text-lg mb-4"><strong>Description:</strong> {medicine.description}</p>
                        <p className="text-lg mb-4"><strong>Expiry Date:</strong> {medicine.expiryDate}</p>
                        <p className="text-lg mb-6"><strong>Location:</strong> {medicine.location}</p>
                        <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-inner">
                            <button 
                                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                                onClick={addToCart}
                            >
                                Add to Cart
                            </button>
                            <p className="text-lg font-medium text-gray-300">
                                {medicine.price ? `$${medicine.price}` : 'Price Not Available'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <Popup 
                    message="Medicine added to cart Successdully"
                    onClose={() => setShowPopup(false)} 
                />
            )}
        </div>
    );
}

export default MedicineDetails;







