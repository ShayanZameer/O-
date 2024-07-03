import React from 'react';
import StatisticsPanel from '../components/StatisticsPanel';
import DonationTrends from '../components/DonationTrends';

function Dashboardd() {
    return (
        <div className="flex h-screen bg-gray-900 text-white max-h-[605px] ml-8">
            <div className="flex-1 flex flex-col">
                <div className="p-4">
                    <section className="mb-8">
                        <h1 className="text-3xl font-bold text-indigo-300 mb-2">Dashboard Overview</h1>
                        <p className="text-lg text-gray-400">Get insights into your donation activities and trends.</p>
                    </section>
                    <div className="flex space-x-2 justify-evenly">
                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-200 mb-3">Donation Statistics</h2>
                            <p className="text-sm text-gray-400 mb-4">Visualize your donation history and impact with real-time data.</p>
                            <StatisticsPanel />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-200 mb-10">Donation Trends</h2>
                            <p className="text-sm text-gray-400 mt-[-32px]">Understand donation patterns over time to optimize your future contributions.</p>
                            <DonationTrends />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );}export default Dashboardd;
