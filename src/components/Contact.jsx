import React from 'react';

function Contact() {
    return (
        <div className="flex flex-col h-screen bg-black text-white">
            

            <section className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-md">
                    <h1 className="text-3xl text-center mb-6">Contact Us</h1>
                    <form className="space-y-4">
                        <div className="form-group">
                            <label htmlFor="name" className="block text-lg">Name:</label>
                            <input type="text" name="name" id="name" placeholder="Enter your Name"
                                   className="w-full p-2 rounded bg-gray-700 border border-gray-600"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="block text-lg">Email:</label>
                            <input type="email" name="email" id="email" placeholder="Enter your Email"
                                   className="w-full p-2 rounded bg-gray-700 border border-gray-600"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="block text-lg">Phone Number:</label>
                            <input type="tel" name="phone" id="phone" placeholder="Enter your Phone Number"
                                   className="w-full p-2 rounded bg-gray-700 border border-gray-600"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="block text-lg">Message:</label>
                            <textarea name="message" id="message" rows="4"
                                      className="w-full p-2 rounded bg-gray-700 border border-gray-600"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded text-white">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <footer className="text-center py-4 bg-black">
                Copyright &copy; www.lifesharenetwork.com. All right reserved!
            </footer>
        </div>
    );
}

export default Contact;
