import React from 'react';
import { Chart as ChartJS, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function Reports() {
    const bloodData = {
        labels: ['A+', 'O+', 'B+', 'AB+'],
        datasets: [
            {
                label: 'Blood Type Distribution',
                data: [120, 115, 130, 125],
                backgroundColor: ['#ef4444', '#f97316', '#eab308', '#10b981'],
                hoverOffset: 4,
            },
        ],
    };

    const medicineData = {
        labels: ['Pain Relievers', 'Antibiotics', 'Cough Syrups', 'Vitamins'],
        datasets: [
            {
                label: 'Medicine Type Distribution',
                data: [150, 90, 75, 185],
                backgroundColor: ['#3b82f6', '#8b5cf6', '#ec4899', '#fcd34d'],
                hoverOffset: 4,
            },
        ],
    };

    const donationData = {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Blood Donations per Year',
                data: [10, 12, 15],
                backgroundColor: ['#ef4444'],
            },
            {
                label: 'Medicine Donations per Year',
                data: [20, 25, 30],
                backgroundColor: ['#10b981'],
            },
        ],
    };

    const barOptions = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Donations'
                }
            }
        },
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md animate-fade-in-up w-full max-w-5xl ml-8 mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Donation Reports</h2>
            <div className="flex justify-evenly ">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Blood Type Distribution</h3>
                    <Pie data={bloodData} />
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Medicine Type Distribution</h3>
                    <Pie data={medicineData} />
                </div>
                <div className="">
                    <h3 className="text-lg font-semibold mb-2">Yearly Donation Frequency</h3>
                    <Bar data={donationData} options={barOptions} />
                </div>
            </div>
        </div>
    );
}

export default Reports;

