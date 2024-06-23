// // import React from 'react';
// // import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
// // import { Line } from 'react-chartjs-2';

// // ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

// // function DonationTrends() {
// //     const data = {
// //         labels: ["January", "February", "March", "April", "May", "June"],
// //         datasets: [
// //             {
// //                 label: "Total Donations",
// //                 data: [65, 59, 80, 81, 56, 55],
// //                 fill: false,
// //                 backgroundColor: 'rgb(75, 192, 192)',
// //                 borderColor: 'rgba(75, 192, 192, 0.2)',
// //             },
// //         ],
// //     };

// //     const options = {
// //         responsive: true,
// //         plugins: {
// //             legend: {
// //                 position: 'top',
// //             },
// //             tooltip: {
// //                 mode: 'index',
// //                 intersect: false,
// //             },
// //         },
// //         hover: {
// //             mode: 'nearest',
// //             intersect: true
// //         },
// //         scales: {
// //             x: {
// //                 display: true,
// //                 scaleLabel: {
// //                     display: true,
// //                     labelString: 'Month'
// //                 }
// //             },
// //             y: {
// //                 display: true,
// //                 scaleLabel: {
// //                     display: true,
// //                     labelString: 'Value'
// //                 }
// //             }
// //         }
// //     };

// //     return (
// //         <div className="p-4 bg-white rounded-lg shadow-md">
// //             <h2 className="text-lg font-semibold text-gray-800 mb-4">Donation Trends</h2>
// //             <div className="h-64">
// //                 <Line data={data} options={options} />
// //             </div>
// //         </div>
// //     );
// // }

// // export default DonationTrends;




// import React from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

// function DonationTrends() {
//     const dummyData = {
//         labels: ["January", "February", "March", "April", "May", "June"],
//         datasets: [
//             {
//                 label: "Total Donations",
//                 data: [12, 19, 3, 5, 2, 3],
//                 fill: false,
//                 borderColor: '#4B77BE',
//                 tension: 0.4
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//             tooltip: {
//                 mode: 'index',
//                 intersect: false,
//             },
//         },
//         scales: {
//             x: {
//                 display: true,
//                 title: {
//                     display: true,
//                     text: 'Month'
//                 }
//             },
//             y: {
//                 display: true,
//                 title: {
//                     display: true,
//                     text: 'Donations'
//                 },
//                 beginAtZero: true
//             }
//         }
//     };

//     return (
//         <div className="p-4 bg-white rounded-lg shadow-md w-[500px]">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Donation Trends</h2>
//             <div className="h-64">
//                 <Line data={dummyData} options={options} />
//             </div>
//         </div>
//     );
// }

// export default DonationTrends;



import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function DonationTrends() {
    const trendsData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Blood Donations (units)",
                data: [12, 19, 3, 17, 6, 10],
                borderColor: '#FF6384',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0.4
            },
            {
                label: "Medicine Donations (units)",
                data: [18, 12, 6, 9, 15, 4],
                borderColor: '#36A2EB',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                tension: 0.4
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Units Donated'
                },
                beginAtZero: true
            }
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Donation Trends</h2>
            <div className="h-64">
                <Line data={trendsData} options={options} />
            </div>
        </div>
    );
}

export default DonationTrends;


