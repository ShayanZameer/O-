import React from 'react';

function BloodStockLevels() {
    const bloodStocks = [
        { type: 'A+', stock: 25 },
        { type: 'A-', stock: 15 },
        { type: 'B+', stock: 30 },
        { type: 'B-', stock: 10 },
        { type: 'AB+', stock: 5 },
        { type: 'AB-', stock: 8 },
        { type: 'O+', stock: 20 },
        { type: 'O-', stock: 12 }
    ];

    // Function to determine stock level color
    const getStockLevelColor = (stock) => {
        if (stock < 10) return 'bg-red-500';
        if (stock < 20) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Blood Stock Levels</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {bloodStocks.map((blood) => (
                    <div key={blood.type} className={`p-3 rounded-lg text-white ${getStockLevelColor(blood.stock)}`}>
                        <h3 className="text-xl font-bold">{blood.type}</h3>
                        <p className="text-sm">Units: {blood.stock}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BloodStockLevels;
