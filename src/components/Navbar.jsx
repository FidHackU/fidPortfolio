import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger and close icons
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between text-md font-poppins font-bold p-6 sticky top-0 bg-white backdrop-blur-md z-50">
      <span>Fidel.dev</span>

      {/* Desktop Nav */}
      <div className="hidden sm:flex space-x-6">
        <a href="#home" className="hover:scale-105 transition-transform">Home</a>
        <a href="#about" className="hover:scale-105 transition-transform">About</a>
        <a href="#projects" className="hover:scale-105 transition-transform">Projects</a>
        <a href="#contacts" className="hover:scale-105 transition-transform">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="grid grid-cols-1 absolute top-14 left-0 w-screen h-screen bg-white/90 sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <a href="#home" className="hover:scale-105 transition-transform">Home</a>
          <a href="#about" className="hover:scale-105 transition-transform">About</a>
          <a href="#projects" className="hover:scale-105 transition-transform">Projects</a>
          <a href="#contacts" className="hover:scale-105 transition-transform">Contact</a>
          <div></div>
          <div></div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
