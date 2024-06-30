



// import React, { useState } from 'react';
// import { BellIcon, UserCircleIcon, CogIcon } from '@heroicons/react/24/outline';  // Additional icons
// import { FaCartPlus } from 'react-icons/fa'; // Importing Add to Cart icon


// function DashboardHeader() {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const [cartItems, setCartItems] = useState([]);

//     const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
//     const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

//     const addToCart = () => {
//         const newItem = {
//             name: 'Sample Product',
//             quantity: 1,
//             price: 100
//         };
//         setCartItems([newItem]);
//         setIsCartOpen(true);
//     };

//     const calculateTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     };

//     return (
//         <header className="bg-gray-900 px-5 py-4 flex justify-between items-center shadow-md">
//             <div className="text-white text-xl font-semibold ">
//             <h1 style={{ fontFamily: "'poppins', sans-serif", color: 'white', fontSize: '1.25rem', fontWeight: 'bold' }}>
//                 Dashboard
//             </h1>            </div>
//             <div className="flex items-center space-x-6">
//                 {/* Notification Icon with tooltip and enhanced design */}


//                 <div className="relative">
//                     <button
//                         className="p-3 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         onClick={() => console.log('Add to Cart clicked')}
//                     >
//                         <FaCartPlus className="h-6 w-6" />
//                     </button>
//                 </div>  
//                 <div className="relative">
//                     <button
//                         className="p-3 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         onClick={toggleNotifications}
//                     >
//                         <BellIcon className="h-6 w-6" />
//                     </button>
//                     {isNotificationsOpen && (
//                         <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 z-50">
//                             <div className="px-4 py-2 text-sm text-gray-700">You have no new notifications.</div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Profile Section with enhanced dropdown */}
//                 <div className="relative">
//                     <button
//                         className="flex items-center space-x-3 p-2 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         onClick={toggleDropdown}
//                     >
//                         <UserCircleIcon className="h-8 w-8" />
//                         <span className="hidden md:block text-sm">John Doe</span> {/* Show name on medium and larger screens */}
//                     </button>
//                     {isDropdownOpen && (
//                         <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
//                             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</a>
//                             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
//                             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default DashboardHeader;


import React, { useState } from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { FaCartPlus } from 'react-icons/fa';

function DashboardHeader() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

    const addToCart = () => {
        const newItem = {
            name: 'Sample Product',
            quantity: 1,
            price: 100
        };
        setCartItems([newItem]);
        setIsCartOpen(true);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <header className="bg-gray-900 px-5 py-4 flex justify-between items-center shadow-md">
            <div className="text-white text-xl font-semibold">
                <h1 style={{ fontFamily: "'poppins', sans-serif", color: 'white', fontSize: '1.25rem', fontWeight: 'bold' }}>
                    Dashboard
                </h1>
            </div>
            <div className="flex items-center space-x-6">
                {/* Add to Cart Icon */}
                <div className="relative">
                    <button
                        className="p-3 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={addToCart}
                    >
                        <FaCartPlus className="h-6 w-6" />
                    </button>
                </div>

                {/* Notification Icon with tooltip and enhanced design */}
                <div className="relative">
                    <button
                        className="p-3 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={toggleNotifications}
                    >
                        <BellIcon className="h-6 w-6" />
                    </button>
                    {isNotificationsOpen && (
                        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 z-50">
                            <div className="px-4 py-2 text-sm text-gray-700">You have no new notifications.</div>
                        </div>
                    )}
                </div>

                {/* Profile Section with enhanced dropdown */}
                <div className="relative">
                    <button
                        className="flex items-center space-x-3 p-2 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={toggleDropdown}
                    >
                        <UserCircleIcon className="h-8 w-8" />
                        <span className="hidden md:block text-sm">John Doe</span> {/* Show name on medium and larger screens */}
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
                        </div>
                    )}
                </div>
            </div>

            {/* Cart Popup */}
            {isCartOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-xl font-bold mb-4">Cart</h2>
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.price}</p>
                                </div>
                                <p className="font-semibold">${item.price * item.quantity}</p>
                            </div>
                        ))}
                        <div className="flex justify-between items-center mb-4">
                            <p className="font-semibold">Total:</p>
                            <p className="font-semibold">${calculateTotalPrice()}</p>
                        </div>
                        <button
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                            onClick={() => alert('Proceeding to checkout...')}
                        >
                            Checkout
                        </button>
                        <button
                            className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition duration-300"
                            onClick={() => setIsCartOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default DashboardHeader;
