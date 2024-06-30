

import React, { useState } from 'react';

import image1 from "../assets/Images/Medicine2.jpg";
import image2 from "../assets/Images/medicine1.jpg"
import { FaCartPlus } from 'react-icons/fa';


import { Link } from 'react-router-dom';

function NeedMedicine() {
    const initialMedicines = [
        { id: 1, name: 'Amoxicillin', description: 'Antibiotic used to treat various infections.', imageUrl: image2, location: 'Aga Khan University Hospital, Karachi' },
        { id: 2, name: 'Ibuprofen', description: 'Used to reduce fever and treat pain or inflammation.', imageUrl: image1, location: 'Shaukat Khanum Memorial Cancer Hospital, Lahore' },
        { id: 3, name: 'Cetirizine', description: 'Antihistamine that reduces the effects of natural chemical histamine.', imageUrl: image2, location: 'Liaquat National Hospital, Karachi' },
        { id: 4, name: 'Metformin', description: 'Medicine used to treat type 2 diabetes.', imageUrl: image1, location: 'Combined Military Hospital, Rawalpindi' },
        { id: 5, name: 'Lisinopril', description: 'Used to treat high blood pressure.', imageUrl: image2, location: 'Ziauddin Hospital, Karachi' },
        { id: 6, name: 'Simvastatin', description: 'Used to control elevated cholesterol.', imageUrl: image1, location: 'PIMS Hospital, Islamabad' },
        { id: 7, name: 'Amlodipine', description: 'Medicine used to treat high blood pressure.', imageUrl: image2, location: 'Nishtar Hospital, Multan' },
        { id: 8, name: 'Atorvastatin', description: 'Used to treat high cholesterol.', imageUrl: image2, location: 'Fauji Foundation Hospital, Rawalpindi' },
        { id: 9, name: 'Atorvastatin', description: 'Used to treat high cholesterol.', imageUrl: image2, location: 'Civil Hospital, Karachi' },
        { id: 10, name: 'Atorvastatin', description: 'Used to treat high cholesterol.', imageUrl: image2, location: 'Jinnah Hospital, Lahore' },
        { id: 11, name: 'Atorvastatin', description: 'Used to treat high cholesterol.', imageUrl: image2, location: 'Holy Family Hospital, Rawalpindi' },
        // More medicines...
    ];
    

    const [medicines, setMedicines] = useState(initialMedicines);
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

    const filteredMedicines = initialMedicines.filter(medicine =>
        medicine.name.toLowerCase().split(' ').some(word => word.startsWith(searchTerm))
        // The above line splits the medicine name into words and checks if any word starts with the search term
    );

    

   
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

            {currentItems.length>0 ?( 
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[100%] ">
                {currentItems.map((medicine) => (
                    <Link to={`/dashboard/medicine-details/${medicine.id}`}  key={medicine.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer animate-fade-in-up">
                        <img src={medicine.imageUrl} alt={medicine.name} className="w-full h-20 object-cover rounded-md mb-3"/>
                        <h3 className="text-lg font-semibold">{medicine.name}</h3>
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




