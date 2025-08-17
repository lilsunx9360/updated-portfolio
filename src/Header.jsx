import { useState } from "react";
import './App.css';
import logo from './assets/logo.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-black text-white p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Left Logo */}
          <div className="flex items-center ">
         <a href="/" className="flex items-center cursor-pointer hover:opacity-90">
  <img 
    src={logo} 
    alt="Logo" 
    className="w-10 h-10 rounded-full object-cover md:ml-10  " 
  />
  <h1 
    className="text-xl font-bold ml-3 text-transparent bg-clip-text"
    style={{ backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)" }}
  >
    Sanzz
  </h1>
</a>
    </div>

          {/* Desktop Menu - Right */}
          <nav className="hidden md:flex space-x-16 mr-4">
            <a href="#about" 
            className="hover:text-transparent bg-clip-text transition"
            style={{ backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)" }}
            >
            About</a>
            <a href="#project" className="hover:text-transparent bg-clip-text transition"
            style={{ backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)" }}>
            Projects</a>
            <a href="#contact" className="hover:text-transparent bg-clip-text transition"
            style={{ backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)" }}>
            Contact</a>
          </nav>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Slide Menu */}
      <div className={`fixed inset-0 z-40 transition-transform duration-500 ease-in-out bg-black bg-opacity-90
        transform ${isMenuOpen ? 'translate-x-0 translate-y-0' : 'translate-x-full -translate-y-full'}
        flex items-center justify-center`}>
        <ul className="space-y-6 text-white text-xl text-center">
          <li><a href="#about" onClick={toggleMenu} 
            className="hover:text-transparent bg-clip-text transition"
            style={{ backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)" }}
            >About</a></li>
          <li><a href="#project" onClick={toggleMenu}
          className="hover:text-transparent bg-clip-text transition"
            style={{ backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)" }}
            >Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}
           className="hover:text-transparent bg-clip-text transition"
            style={{ backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)" }}
            >Contact</a></li>
        </ul>
      </div>

      
    </>
  );
}

export default App;
