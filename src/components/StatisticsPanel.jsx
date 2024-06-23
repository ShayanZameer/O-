




// import React from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie, Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   Tooltip,
//   Legend
// );

// function StatisticsPanel() {
//     // Example data specific to one user
//     const pieData = {
//         labels: ['A+', 'O-', 'B+', 'AB+'],
//         datasets: [{
//             data: [10, 15, 5, 20],  // User-specific data
//             backgroundColor: ['#f56565', '#ed8936', '#ecc94b', '#48bb78'],
//             hoverBackgroundColor: ['#c53030', '#dd6b20', '#d69e2e', '#38a169']
//         }]
//     };

//     const barData = {
//         labels: ['January', 'February', 'March'],
//         datasets: [{
//             label: 'Your Donations',
//             data: [3, 2, 6],  // User-specific donation counts
//             backgroundColor: ['#3182ce', '#63b3ed', '#4299e1']
//         }]
//     };

//     const options = {
//         maintainAspectRatio: false,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top'
//             },
//         },
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 title: {
//                     display: true,
//                     text: 'Number of Donations'
//                 }
//             }
//         }
//     };

//     return (
//         <div className="p-4 bg-white rounded-lg shadow-md w-[420px] ">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Donation Statistics</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="h-64">
//                     <Pie data={pieData} />
//                 </div>
//                 <div className="h-64">
//                     <Bar data={barData} options={options} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default StatisticsPanel;



import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function StatisticsPanel() {
    // Example data specific to one user
    const bloodDonationData = {
        labels: ['A+', 'O-', 'B+', 'AB+'],
        datasets: [{
            data: [10, 15, 5, 20],  // Blood donation data by type
            backgroundColor: ['#f56565', '#ed8936', '#ecc94b', '#48bb78'],
            hoverBackgroundColor: ['#c53030', '#dd6b20', '#d69e2e', '#38a169']
        }]
    };

    const medicineDonationData = {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'Units of Medicine Donated',
            data: [120, 150, 100],  // Medicine donation amounts
            backgroundColor: ['#68d391', '#81e6d9', '#4fd1c5']
        }]
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Donations'
                }
            }
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Donation Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-64">
                    <h3 className="text-md font-semibold mb-2">Blood Donation Types</h3>
                    <Pie data={bloodDonationData} />
                </div>
                <div className="h-64">
                    <h3 className="text-md font-semibold mb-2">Medicine Donations Over Time</h3>
                    <Bar data={medicineDonationData} options={options} />
                </div>
            </div>
            <div className="mt-6 text-center h-[30px]">
                {/* <p className="text-gray-600">
                    Keep track of your contributions and help us understand how best to distribute resources.
                </p> */}
            </div>
        </div>
    );
}

export default StatisticsPanel;


