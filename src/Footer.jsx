// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-center py-6  border-t border-gray-700">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} San's Portfolio. All rights reserved.
      </p>
    
    </footer>
  );
};

export default Footer;
