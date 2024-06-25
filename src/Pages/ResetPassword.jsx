import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const navigate = useNavigate();

    const handleResetPassword = (event) => {
        event.preventDefault();
        
        setShowNotification(true); // Show notification after password is reset
    };

    const handleCloseNotification = () => {
        setShowNotification(false);
        // Redirect to login page after closing notification
        navigate('/login');
    };

    return (
        <div className="flex h-screen items-center justify-center bg-black">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-xl">
                <h1 className="text-xl font-semibold text-white text-center mb-6 animate-pulse">Reset Password</h1>
                <form onSubmit={handleResetPassword} className="space-y-6">
                    <div className="mb-4 animate-fade-in-up">
                        <label htmlFor="password" className="block text-white font-medium">New Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your new password"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 animate-fade-in-up">
                        <label htmlFor="confirmPassword" className="block text-white font-medium">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your new password"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Reset Password
                    </button>
                </form>
                {showNotification && (
                    <Notification message="Password reset successful. Please login with your new password." onClose={handleCloseNotification} />
                )}
            </div>
        </div>
    );
}

export default ResetPassword;