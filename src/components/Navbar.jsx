import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/rumble_mug.png'; // Adjust the path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-navySlate text-white shadow-md relative overflow-visible">
      <div className="max-w-10xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative h-16">
              <img
                src={logo}
                alt="Rumble Logo"
                className="md:h-28 md:w-28 absolute -top-0 -bottom-4 z-10"
              />
              {/* Spacer to maintain layout despite absolute positioning */}
              <div className="md:w-28 invisible">Spacer</div>
            </div>
            <span className="text-xl font-bold">Rumble Guitar Lessons</span>
          </Link>
          
          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-skyTint transition">Home</Link>
            <Link to="/about" className="hover:text-skyTint transition">About</Link>
            <Link to="/lessons" className="hover:text-skyTint transition">Lessons</Link>
            <Link to="/contact" className="hover:text-skyTint transition">Contact</Link>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2 bg-customBlue rounded-md p-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-skyTint transition">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-skyTint transition">About</Link>
            <Link to="/lessons" onClick={() => setIsOpen(false)} className="hover:text-skyTint transition">Lessons</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-skyTint transition">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
