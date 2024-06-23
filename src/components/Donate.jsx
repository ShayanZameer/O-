import React from 'react';

function Donate() {
    return (
        <div className="flex max-h-[605px] py-4 items-center justify-center bg-black w-[100%] ml-8">
          

            <div className="w-full max-h-[605px] max-w-xl bg-gray-800 p-6 rounded-lg shadow-xl">
                <h1 className="text-xl font-semibold text-white text-center mb-6">Blood Donation</h1>
                <form action="login.php" method="post" className="space-y-6">
                    <div className="flex flex-wrap justify-evenly ">
                        <div className="w-full md:w-1/2 mb-4">
                            <label htmlFor="name" className="block text-white font-medium">First Name</label>
                            <input type="text" id="name" name="firstname" placeholder="Enter Your Name" className="w-[250px] p-2 rounded bg-gray-700 text-white border border-gray-600"/>
                        </div>
                        <div className="w-full md:w-1/2 mb-4">
                            <label htmlFor="lastname" className="block text-white font-medium">Last Name</label>
                            <input type="text" id="lastname" name="lastname" placeholder="Enter Your Last Name" className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"/>
                        </div>
                        <div className="w-full md:w-1/2 mb-4">
                            <label htmlFor="email" className="block text-white font-medium">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter email" className="w-[250px] p-2 rounded bg-gray-700 text-white border border-gray-600"/>
                        </div>
                        <div className="w-full md:w-1/2 mb-4">
                            <label htmlFor="phonenumber" className="block text-white font-medium">Phone Number</label>
                            <input type="number" id="phonenumber" name="phonenumber" placeholder="Enter Phone Number" className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"/>
                        </div>
                        <div className="w-full mb-4">
                            <label htmlFor="bloodgroup" className="block text-white font-medium">Blood Group</label>
                            <select id="bloodgroup" name="bloodgroup" className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600">
                                <option value="">---Select Your Blood Group---</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 mb-4">
                            <label htmlFor="weight" className="block text-white font-medium">Weight</label>
                            <input type="text" id="weight" name="weight" placeholder="Enter your weight" className="w-[250px] p-2 rounded bg-gray-700 text-white border border-gray-600"/>
                        </div>
                        <div className="w-full md:w-1/2 mb-4">
                            <label htmlFor="date" className="block text-white font-medium">Date</label>
                            <input type="date" id="date" name="date" className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" required/>
                        </div>
                        <div className="w-full md:w-1/2 mb-4">
                            <label htmlFor="birthdate" className="block text-white font-medium">Date of Birth</label>
                            <input type="date" id="birthdate" name="birthdate" className="w-[250px] p-2 rounded bg-gray-700 text-white border border-gray-600"/>
                        </div>
                        <div className="w-full md:w-1/2 mb-4">
                            <label htmlFor="city" className="block text-white font-medium">City</label>
                            <select id="city" name="city" className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600">
                                {/* Insert cities */}
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">Gender</span>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="radio" name="gender" value="m" className="text-red-500" />
                                <span className="ml-2 text-white">Male</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" name="gender" value="f" className="text-red-500" />
                                <span className="ml-2 text-white">Female</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" name="gender" value="o" className="text-red-500" />
                                <span className="ml-2 text-white">Other</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Donate;
