import React from 'react';

function RecentDonations() {
    const donations = [
        { id: 1, date: 'June 21, 2024', amount: '450ml', location: 'Downtown Clinic' },
        { id: 2, date: 'April 10, 2024', amount: '450ml', location: 'City Hospital' }
    ];

    const nextAppointment = { date: 'August 15, 2024', location: 'Local Blood Bank' };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">Your Donation History</h2>
            <div className="space-y-3 mt-3">
                {donations.map((donation) => (
                    <div key={donation.id} className="p-3 rounded bg-gray-100 hover:bg-gray-200 transition duration-300">
                        <h3 className="text-md font-bold">{donation.date} - {donation.amount}</h3>
                        <p className="text-sm">Location: {donation.location}</p>
                    </div>
                ))}
                <div className="mt-6">
                    <h3 className="text-md font-semibold text-gray-800">Next Scheduled Donation</h3>
                    <p className="text-md text-gray-700">{nextAppointment.date} at {nextAppointment.location}</p>
                </div>
                <div className="mt-6">
                    <h3 className="text-md font-semibold text-gray-800">Health Tips</h3>
                    <p className="text-md text-gray-700">Stay hydrated and avoid alcoholic beverages 24 hours before donating.</p>
                </div>
            </div>
        </div>
    );
}

export default RecentDonations;
