import React from "react";

function Notification({ message, onClose }) {
    return (
        <div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-50">
            <div className="max-w-sm w-full bg-gray-800 shadow-lg rounded-lg pointer-events-auto">
                <div className="rounded-lg shadow-xs overflow-hidden">
                    <div className="p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="ml-3 w-0 flex-1 pt-0.5">
                                <p className="text-sm font-medium text-white">{message}</p>
                            </div>
                            <div className="ml-4 flex-shrink-0 flex">
                                <button
                                    onClick={onClose}
                                    className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                                >
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 0a10 10 0 0 0-7.07 2.93C1.51 4.2 0 7.11 0 10s1.51 5.8 2.93 7.07A10 10 0 0 0 10 20a10 10 0 0 0 7.07-2.93C18.49 15.8 20 12.89 20 10s-1.51-5.8-2.93-7.07A10 10 0 0 0 10 0zM6.22 6.22a.75.75 0 0 1 1.06 1.06L10 11.06l2.72-2.72a.75.75 0 0 1 1.06 1.06L11.06 12l2.72 2.72a.75.75 0 0 1-1.06 1.06L10 12.94 7.28 15.66a.75.75 0 0 1-1.06-1.06L8.94 11 6.22 8.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;