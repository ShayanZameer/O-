



import React, { useState } from 'react';

function DonateMedicine() {
    const [formData, setFormData] = useState({
        medicineName: '',
        quantity: '',
        expiryDate: '',
        isExpired: false,
        medicineImage: null
    });

    const today = new Date();
    const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const handleInputChange = (e) => {
        const { name, type, checked, files } = e.target;
        if (type === 'file') {
            setFormData(prev => ({
                ...prev,
                [name]: files[0]
            }));
        } else {
            const value = type === 'checkbox' ? checked : e.target.value;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Donation information submitted!');
    };

    return (
        <div className="p-6 bg-black shadow-lg w-[100%] ml-8 mx-auto  animate-fade-in-up">
            <div className="p-4 bg-gray-800 rounded-lg shadow-md text-white">
                <h2 className="text-2xl font-bold mb-4">Donate Medicine</h2>
                <p className="mb-4">Support our cause by donating medicines. Ensure they are not expired and are needed for urgent treatments.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="medicineName" className="block text-sm font-medium">Medicine Name</label>
                        <input 
                            type="text"
                            name="medicineName"
                            id="medicineName"
                            value={formData.medicineName}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 text-black border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 text-black border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium">Expiry Date</label>
                        <input
                            type="date"
                            name="expiryDate"
                            id="expiryDate"
                            value={formData.expiryDate}
                            min={minDate}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 text-black border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="medicineImage" className="block text-sm font-medium">Medicine Image</label>
                        <input
                            type="file"
                            name="medicineImage"
                            id="medicineImage"
                            onChange={handleInputChange}
                            className="mt-1 block w-full text-sm text-slate-500
                              file:mr-4 file:py-2 file:px-4
                              file:rounded-full file:border-0
                              file:text-sm file:font-semibold
                              file:bg-orange-50 file:text-orange-700
                              hover:file:bg-orange-100"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="isExpired"
                            id="isExpired"
                            checked={formData.isExpired}
                            onChange={handleInputChange}
                            className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                        />
                        <label htmlFor="isExpired" className="ml-3 text-sm font-medium">Eligible for donation (less than 5 months to expiry)</label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit Donation
                    </button>
                </form>
            </div>
        </div>
    );
}

export default DonateMedicine;

