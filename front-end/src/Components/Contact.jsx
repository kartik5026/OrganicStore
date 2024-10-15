import React from 'react';
import NavBar from './NavBar';

const ContactForm = () => {
    return (
        <>
        <NavBar/>
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-3xl font-bold text-center text-[#347758] mb-6">Contact Us</h2>
            <form action='https://formspree.io/f/mnnqaeez' method='post'>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#347758]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#347758]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                        id="message"
                        rows="4"
                        name='message'
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#347758]"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#347758] text-white font-semibold py-2 rounded hover:bg-[#2e5b46] transition duration-200"
                >
                    Send Message
                </button>
            </form>
        </div>
        </>
    );
};

export default ContactForm;
