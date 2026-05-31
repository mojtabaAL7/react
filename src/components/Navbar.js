import React, { useState } from "react";
import { Link } from "react-router-dom";

// Navbar component - Navigation menu for all pages
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu on button click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-blue-600 shadow-md">
      <div className="flex justify-between items-center max-w-5xl mx-auto w-full px-5 py-3">
        <Link
          to="/"
          className="text-white text-2xl font-bold no-underline flex items-center gap-2 flex-shrink-0"
          onClick={closeMenu}
        >
          Lebanon Stays
        </Link>

        {/* Hamburger button for mobile */}
        <button
          className="flex flex-col bg-none border-none cursor-pointer p-2 gap-1.5 md:hidden"
          onClick={toggleMenu}
        >
          <span
            className={`w-6 h-0.5 bg-white block transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white block transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white block transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        {/* Navigation menu */}
        <ul
          className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row list-none gap-0 absolute md:static top-full left-0 right-0 md:w-auto w-full bg-blue-600 md:bg-transparent`}
        >
          <li className="m-0 w-full md:w-auto">
            <Link
              to="/"
              className="text-white no-underline p-4 block transition-colors duration-300 hover:bg-blue-800"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="m-0 w-full md:w-auto">
            <Link
              to="/about"
              className="text-white no-underline p-4 block transition-colors duration-300 hover:bg-blue-800"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="m-0 w-full md:w-auto">
            <Link
              to="/rooms"
              className="text-white no-underline p-4 block transition-colors duration-300 hover:bg-blue-800"
              onClick={closeMenu}
            >
              Rooms
            </Link>
          </li>
          <li className="m-0 w-full md:w-auto">
            <Link
              to="/hotels"
              className="text-white no-underline p-4 block transition-colors duration-300 hover:bg-blue-800"
              onClick={closeMenu}
            >
              Hotels
            </Link>
          </li>
          <li className="m-0 w-full md:w-auto">
            <Link
              to="/booking"
              className="text-white no-underline p-4 block transition-colors duration-300 hover:bg-blue-800"
              onClick={closeMenu}
            >
              Booking
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
