import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <nav className="relative top-0 max-w-6xl mx-auto flex items-center  bg-gray-500  bg-opacity-10 justify-between backdrop-blur-lg border-b border-slate-200 px-3 md:px-5">
        <div className="flex space-x-1">
          <NavLink
            to="/"
            className="text-white border-r py-5 pr-4 text-2xl font-bold"
          >
            G Cube Studios
          </NavLink>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden md:flex md:space-x-6 font-medium text-lg items-center">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="nav-link">
              Portfolio
            </NavLink>
          </li>
          <li className="hover:text-gray-700 duration-500">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile navigation button */}
        <div className="md:hidden">
          <button
            className="group cursor-pointer flex flex-col space-y-1 duration-75 ease-linear"
            onClick={toggleMobileNav}
            aria-label="Mobile Navigation"
          >
            <span className="w-8 h-1  block bg-white"></span>
            <span className="w-8 h-1 block bg-white"></span>
            <span className="w-8 h-1 block bg-white"></span>
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {isMobileNavOpen && (
        <div className="w-full bg-black h-screen  top-0 absolute left-0 z-50 flex items-center justify-center bg-opacity-90">
          {/* Add your mobile navigation links here */}
          <button
            className="absolute top-20 right-10 group cursor-pointer flex items-center justify-center duration-75 ease-linear"
            onClick={toggleMobileNav}
          >
            <span className="w-1 h-6 absolute top-0  rotate-45  bg-white"></span>
            <span className="w-1 h-6 -rotate-45  bg-white"></span>
          </button>

          <ul className="flex flex-col items-center text-white font-medium  space-y-4 text-lg z-200 justify-center py-8">
            <li>
              <NavLink to="/" className="">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
