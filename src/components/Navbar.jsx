import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-500 text-white p-2 fixed top-0 left-0 w-full z-[1000] flex items-center shadow-md">
      <div className="flex w-[95%] justify-between items-center">
        {/* Hamburger icon for small screens */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl">
            &#9776; {/* Hamburger icon */}
          </button>
        </div>

        {/* Logo */}
        <div className="navbar-logo hidden lg:flex">
          <h1 className="m-0 text-xl font-semibold tracking-wide">
            Stony Brook University <span className="font-light">Campus Map</span>
          </h1>
        </div>

        {/* SearchBar */}
        <div className="flex-grow max-w-[500px] mx-auto">
          <SearchBar />
        </div>

        {/* Sign In button (always visible on large screens) */}
        <div className="ml-auto hidden lg:flex">
          <button className="text-white border border-white px-2 py-1 rounded-lg transition-all duration-300 hover:bg-white hover:text-red-500">
            Sign In
          </button>
        </div>
      </div>
    
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-red-500 p-4">
          <div className="text-white text-xl font-semibold mb-4">
            Stony Brook University <span className="font-light">Campus Map</span>
          </div>
          <button className="w-full text-white border border-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-red-500 mt-2">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
