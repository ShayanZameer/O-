import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Notification from "../components/Notification"

// import Notifica

function ForgotPassword() {
    const [emailSent, setEmailSent] = useState(false);

    const [showNotification , setShowNotification] = useState(false)
    const navigate = useNavigate();

    const handleCloseNotification = () => {
        setShowNotification(false);
    };

    const handlePasswordReset = (event) => {
        event.preventDefault();
        setEmailSent(true);
        setShowNotification(true); // Show notification after email is sent

    };

    const handleNavigateToLogin = () => {
        navigate('/login'); // Navigate to the login route
    };

    return (
        <div className="flex h-screen items-center justify-center bg-black">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-xl">
                <h1 className="text-xl font-semibold text-white text-center mb-6 animate-pulse">Forgot Password</h1>
                {emailSent ? (
                    <div className="text-center text-white">
                        <p className="mb-4">An email has been sent to your address with instructions to reset your password.</p>
                        
                    </div>
                ) : (
                    <form onSubmit={handlePasswordReset} className="space-y-6">
                        <div className="mb-4 animate-fade-in-up">
                            <label htmlFor="email" className="block text-white font-medium">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email"
                                   className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"/>
                        </div>
                        <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Send Reset Link
                        </button>
                    </form>
                )}
                <div className="flex justify-center mt-4">
                    <button onClick={handleNavigateToLogin} className="text-sm text-blue-500 hover:text-blue-700">
                        Back to Login
                    </button>
                </div>
                {showNotification && (
                    <Notification message="Check your email for the reset link." onClose={handleCloseNotification} />
                )}
            </div>
        </div>
    );
}

export default ForgotPassword;
