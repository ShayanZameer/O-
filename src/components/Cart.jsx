



import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Amoxicillin', quantity: 2, price: 50 },
        { id: 2, name: 'Ibuprofen', quantity: 1, price: 30 },
        { id: 3, name: 'Cetirizine', quantity: 3, price: 20 },
    ]);

    const handleIncreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleDecreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen ml-8 w-[100%] flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h2>
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                {cartItems.length === 0 ? (
                    <div className="text-center text-gray-500">Your cart is empty.</div>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between py-4 border-b hover:bg-gray-50 transition duration-300">
                            <div className="flex items-center space-x-6">
                                <div className="text-lg font-semibold text-gray-700">{item.name}</div>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => handleDecreaseQuantity(item.id)} className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition duration-300">
                                        <FiMinus />
                                    </button>
                                    <span className="text-lg text-gray-800">{item.quantity}</span>
                                    <button onClick={() => handleIncreaseQuantity(item.id)} className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition duration-300">
                                        <FiPlus />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="text-lg font-semibold text-gray-800">${item.price * item.quantity}</div>
                                <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700 transition duration-300">
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))
                )}
                {cartItems.length > 0 && (
                    <>
                        <div className="flex justify-between items-center mt-6">
                            <div className="text-2xl font-bold text-gray-800">Total</div>
                            <div className="text-2xl font-bold text-gray-800">${calculateTotalPrice()}</div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105">
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;

