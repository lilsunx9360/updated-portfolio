// src/components/Contact.jsx
import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <section 
      className="relative min-h-screen bg-gradient-to-tr from-black via-black to-neutral-800 text-white overflow-hidden px-4 py-10 flex flex-col md:flex-row gap-6" id="contact">
        
        {/* Unified Top-Centered CONTACT Heading for All Screens */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center z-10 ">
          <h1
            className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] font-bold uppercase opacity-25 select-none pointer-events-none"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            CONTACT
          </h1>
        </div>

        {/* Left Side - Contact Form */}
        <div className="flex-1 flex justify-center items-center">
          <form className="w-full max-w-3xl rounded-2xl shadow-lg p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-xl bg-neutral-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-xl bg-neutral-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full p-3 rounded-xl bg-neutral-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-xl font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Contact;
