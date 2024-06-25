import React from 'react';

function Signup() {
  return (
    <div className="flex h-[600px] justify-center items-center bg-black">
      <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-inner">
        <h1 className="text-center text-2xl font-semibold text-white mb-6">Registration</h1>
        <form action="login.php" method="post" className="space-y-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="name" className="block text-white text-lg">Name</label>
              <input type="text" id="name" name="firstname" placeholder="Enter Your Name"
                     className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="lastname" className="block text-white text-lg">Last Name</label>
              <input type="text" id="lastname" name="lastname" placeholder="Enter Your Last Name"
                     className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="email" className="block text-white text-lg">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter email"
                     className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="phonenumber" className="block text-white text-lg">Phone Number</label>
              <input type="number" id="phonenumber" name="phonenumber" placeholder="Enter Phone Number"
                     className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="Password" className="block text-white text-lg">Password</label>
              <input type="password" id="Password" name="Password" placeholder="Enter password"
                     className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="password" className="block text-white text-lg">Confirm password</label>
              <input type="password" id="password" name="password" placeholder="Enter password"
                     className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <span className="text-white font-semibold">Gender</span>
            <div className="flex items-center">
              <input type="radio" name="gender" id="male" value="m" className="text-red-500" />
              <label htmlFor="male" className="ml-2 text-white">Male</label>
              <input type="radio" name="gender" id="Female" value="f" className="ml-4 text-red-500" />
              <label htmlFor="Female" className="ml-2 text-white">Female</label>
              <input type="radio" name="gender" id="other" value="o" className="ml-4 text-red-500" />
              <label htmlFor="other" className="ml-2 text-white">Other</label>
            </div>
          </div>
          <div className="mt-6">
            <input type="submit" value="Submit"
                   className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
