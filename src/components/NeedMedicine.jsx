

import React, { useState } from 'react';

import image1 from "../assets/Images/Medicine2.jpg";
import image2 from "../assets/Images/medicine1.jpg"

function NeedMedicine() {
    const initialMedicines = [
        { id: 1, name: 'Amoxicillin', description: 'Antibiotic used to treat various infections.', imageUrl: image2 },
        { id: 2, name: 'Ibuprofen', description: 'Used to reduce fever and treat pain or inflammation.',  imageUrl: image1 },
        { id: 3, name: 'Cetirizine', description: 'Antihistamine that reduces the effects of natural chemical histamine.', imageUrl: image2 },
        { id: 4, name: 'Metformin', description: 'Medicine used to treat type 2 diabetes.',  imageUrl: image1 },
        { id: 5, name: 'Lisinopril', description: 'Used to treat high blood pressure.',  imageUrl: image2 },
        { id: 6, name: 'Simvastatin', description: 'Used to control elevated cholesterol.',  imageUrl: image1 },
        { id: 7, name: 'Amlodipine', description: 'Medicine used to treat high blood pressure.',  imageUrl: image2 },
        { id: 8, name: 'Atorvastatin', description: 'Used to treat high cholesterol.', imageUrl: image2 },
        { id: 9, name: 'Atorvastatin', description: 'Used to treat high cholesterol.', imageUrl: image2 },
        { id: 10, name: 'Atorvastatin', description: 'Used to treat high cholesterol.', imageUrl: image2 },
        { id: 11, name: 'Atorvastatin', description: 'Used to treat high cholesterol.', imageUrl: image2 },



        
    ];

    const [medicines, setMedicines] = useState(initialMedicines);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Handle changing pages
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = (event) => {
        const newSearchTerm = event.target.value.toLowerCase();

        console.log(newSearchTerm);
        setSearchTerm(newSearchTerm);
        setCurrentPage(1); // Reset to first page on every new search
    
        
    };

    const filteredMedicines = initialMedicines.filter(medicine =>
        medicine.name.toLowerCase().split(' ').some(word => word.startsWith(searchTerm))
        // The above line splits the medicine name into words and checks if any word starts with the search term
    );

    

    // const filteredMedicines = searchTerm.length === 0 
    //   ? initialMedicines 
    //   : initialMedicines.filter(medicine => medicine.name.toLowerCase().includes(searchTerm));

    // Pagination logic
    const pageCount = Math.ceil(filteredMedicines.length / itemsPerPage);

    console.log("page count is ", pageCount);
    const indexOfLastItem = currentPage * itemsPerPage;
    console.log("last Term index is ", indexOfLastItem);

    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    console.log("First term index is ", indexOfFirstItem)
    const currentItems = filteredMedicines.slice(indexOfFirstItem, indexOfLastItem);

    console.log("current Items are", currentItems);

    const renderPageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1).map(number => (
        <button
            key={number}
            onClick={() => handlePageClick(number)}
            className={`px-3 py-1 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded-full transition duration-300`}
        >
            {number}
        </button>
    ));

    return (
        <div className="p-6 bg-black text-white max-h-[605px]">
            <h2 className="text-2xl font-bold mb-4">Need Medicine?</h2>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 rounded-md mb-4 text-black"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                {currentItems.map((medicine) => (
                    <div key={medicine.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer animate-fade-in-up">
                        <img src={medicine.imageUrl} alt={medicine.name} className="w-full h-20 object-cover rounded-md mb-3"/>
                        <h3 className="text-lg font-semibold">{medicine.name}</h3>
                        <p className="text-sm mb-1">Description: {medicine.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center space-x-2 mt-4">
                {renderPageNumbers}
            </div>
        </div>
    );
}

export default NeedMedicine;




