import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import img from './assets/img-1.jpg';

import './App.css';
import { motion } from "framer-motion";

const Home = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <section className="relative min-h-screen bg-black text-white px-5 flex items-center justify-center overflow-hidden">

      {/* Background Image in Top-Right */}
     

      {/* Main Container */}
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-10 items-center md:items-stretch justify-center text-center md:text-left mb-24 relative z-10">
        
        {/* Profile Image */}
        <div className="relative flex items-center justify-center order-2 md:order-2">
          <motion.img
            src={img}
            alt="Illustration"
            className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover mb-6 md:mb-0 morphing-20"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 4 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center md:items-start order-1 md:order-2 space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[2rem] sm:text-[3rem] md:text-[5rem] font-bold uppercase select-none pointer-events-none relative"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>I’m </span>
            <span
              className="p-3"
              style={{
                backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              SHANMUGAM
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2"
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mb-4"
          >
            A MERN Stack Developer creates full-stack web applications using MongoDB, Express.js, React, and Node.js.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex gap-4 flex-wrap mt-4"
          >
            <a href="#Contact">
              <button
                className="text-white text-sm sm:text-base px-6 py-2.5 rounded-md transition-all duration-300 cursor-pointer"
                style={{ backgroundImage: 'linear-gradient(to right, #00FFFB, #C800FF)' }}
              >
                Hire Me
              </button>
            </a>
            <button
              onClick={() => {
                setShowIcons(true);
                setTimeout(() => setShowIcons(false), 4000);
              }}
              className="text-white text-sm sm:text-base px-6 py-2.5 rounded-md transition-all duration-300 cursor-pointer"
              style={{ backgroundImage: 'linear-gradient(to right, #00FFFB, #C800FF)' }}
            >
              Let's Talk
            </button>
          </motion.div>
        </div>
      </div>

      {/* Social Icons Animation */}
      {showIcons && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="fixed bottom-10 right-10 flex gap-4 z-50"
        >
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-3xl hover:text-cyan-400 transition duration-300" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-3xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-3xl hover:text-pink-400 transition duration-300" />
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default Home;
