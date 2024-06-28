import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-800">{message}</p>
          
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
