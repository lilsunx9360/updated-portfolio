// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
     <footer className="bg-black text-gray-400 border-t border-gray-700 py-6">
      <div className="container mx-auto flex flex-col items-center gap-4">
        {/* Footer text */}
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} San's Portfolio. All rights reserved.
        </p>

        {/* Social Icons (only show on small & medium, hidden on lg and above) */}
        <div className="flex gap-4 lg:hidden">
          <a
            href="https://www.linkedin.com/in/shanmugam-devaraj-9a14b2255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-3xl hover:text-cyan-400 transition duration-300" />
          </a>
          <a
            href="https://github.com/lilsunx9360"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-3xl hover:text-gray-400 transition duration-300" />
          </a>
          <a
            href="https://www.instagram.com/sanzzzsandy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-3xl hover:text-pink-400 transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
