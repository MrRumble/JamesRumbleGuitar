import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/rumble_mug.png'; // Adjust the path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navySlate text-white shadow-md relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={logo}
                alt="Rumble Logo"
                className="h-16 md:h-24 w-auto object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold">Rumble Guitar Lessons</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-skyTint transition">Home</Link>
            <Link to="/about" className="hover:text-skyTint transition">About</Link>
            <Link to="/lessons" className="hover:text-skyTint transition">Lessons</Link>
            <Link to="/contact" className="hover:text-skyTint transition">Contact</Link>
          </div>

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
