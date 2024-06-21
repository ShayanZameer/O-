import React from 'react';

function Login() {
    return (
        <div className="flex h-screen items-center justify-center bg-black">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-xl">
                <h1 className="text-xl font-semibold text-white text-center mb-6">Login</h1>
                <form action="/login" method="post" className="space-y-6">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white font-medium">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"
                               className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-white font-medium">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password"
                               className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"/>
                    </div>
                    <div className="mb-6 flex justify-end">
                        <a href="/forgot-password" className="text-sm text-red-500 hover:text-red-700">Forgot Password?</a>
                    </div>
                    <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
