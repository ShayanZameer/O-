

import React, { useState } from 'react';


import { FaCartPlus } from 'react-icons/fa';

import { useEffect } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';

function NeedMedicine({ medicines, loading }) {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 8;

    

    // Handle changing pages
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const addToCart = (medicine) => {
        console.log('Added to cart:', medicine);
        // Implement your add to cart logic here
    };

    const handleSearchChange = (event) => {
        const newSearchTerm = event.target.value.toLowerCase();

        console.log(newSearchTerm);
        setSearchTerm(newSearchTerm);
        setCurrentPage(1); // Reset to first page on every new search
    
        
    };


   

    const filteredMedicines = medicines.filter(medicine =>
        medicine.name?.toLowerCase().split(' ').some(word => word.startsWith(searchTerm))
    );


    

    

   
    // Pagination logic
    const pageCount = Math.ceil(filteredMedicines.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;

    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

     const currentItems = filteredMedicines.slice(indexOfFirstItem, indexOfLastItem);
    const renderPageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1).map(number => (
        <button
            key={number}
            onClick={() => handlePageClick(number)}
            className={`px-3 py-1 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded-full transition duration-300`}
        >
            {number}
        </button>
    ));


     // Function to truncate text
     const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    return (
        <div className="p-6 bg-black text-white w-[100%] max-h-[605px] ml-8">
            <h2 className="text-2xl font-bold mb-4">Need Medicine?</h2>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 rounded-md mb-4 text-black"
            />

            {medicines.length>0 ?( 
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[100%] ">
                {medicines.map((medicine) => (
                    <Link to={`/dashboard/medicine-details/${medicine._id}`}  key={medicine.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer animate-fade-in-up">
                        <img src={medicine.image} alt={medicine.name} className="w-full h-20 object-cover rounded-md mb-3"/>
                       
                        {/* <img src={medicine.imageUrl || image1} alt={medicine.name} className="w-full h-20 object-cover rounded-md mb-3" /> */}

                       
                        <h3 className="text-lg font-semibold">{medicine.medicineName}</h3>
                        <p className="text-sm mb-1 h-4">Description:{truncateText(medicine.description, 4)}</p>

                        <div  className='flex justify-end mt-3'>

                        <FaCartPlus  onClick={() => addToCart(medicine)} size={24} />
                        </div>
    
                    </Link>
                ))}
            </div>

            ):(

                <div className='flex justify-center  '>
                <p className=" text-xl">No medicines found.</p> 
                </div>

            )}
            <div className="flex justify-center space-x-2 mt-4">
                {renderPageNumbers}
            </div>
        </div>
    );
}

export default NeedMedicine;




