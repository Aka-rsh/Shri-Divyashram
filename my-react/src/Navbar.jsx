import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUsers,
  FaHandHoldingHeart,
  FaPhoneAlt,
  FaLock,
  FaFileSignature,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openServiceDropdown, setOpenServiceDropdown] = useState(false);
  const location = useLocation();

  // For better desktop dropdown control - delay hiding dropdown
  const dropdownTimeoutRef = useRef(null);

const navLinks = [
  { text: "Home", path: "/Homee" },
  { text: "About Us", path: "/aboutus" },
  { text: "Bhog/Prasad", path: "/Prasad" },
  { text: "Tours", path: "/tours" },
  {
    text: "Our Services",
    path: "/OurServices",
    children: [
      { text: "Hotel Booking", path: "/HotelBooking" },
      { text: "Cab Booking", path: "/CabBooking" },
      { text: "VIP Darshan Ticket", path: "/VipTicket" },
      { text: "Flight Ticket", path: "/Fticket" },
      { text: "Train Ticket", path: "/Fticket" },
    ],
  },
  { text: "Mandir", path: "/Mandir" },
  { text: "Contact Us", path: "/ContactUs" },
];


  // Handlers to show dropdown on desktop, with delay hiding to fix flickering
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setOpenServiceDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenServiceDropdown(false);
    }, 200); // 200ms delay to allow smooth mouse transition
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="bg-gradient-to-r from-black to-orange-600 flex items-center justify-between px-8 py-2 relative z-50">
        <Link to="/">
          <img src="./logo.png" alt="Divyaashram Logo" className="h-24" />
        </Link>

        {/* Mobile hamburger / close icon */}
        <button
          className="text-white text-2xl lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            {navLinks.map(({ text, path, icon, children }, i) => {
              const isActive =
                location.pathname === path ||
                children?.some((c) => c.path === location.pathname);

              if (children) {
                return (
                  <li
                    key={i}
                    className="relative cursor-pointer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center gap-1 select-none">
                      <Link
                        to={path}
                        className={`flex items-center gap-2 font-medium ${
                          isActive ? "text-yellow-300" : "text-white"
                        }`}
                      >
                        {icon && <span>{icon}</span>}
                        {text}
                        <FaChevronDown className="text-sm mt-1 text-white" />
                      </Link>
                    </div>

                    {/* Dropdown */}
                    {openServiceDropdown && (
                      <ul
                        className="absolute top-full left-0 bg-white text-black min-w-[200px] shadow-lg rounded-md z-50 mt-2"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {children.map(({ text, path }, j) => (
                          <li key={j}>
                            <Link
                              to={path}
                              className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 whitespace-nowrap"
                            >
                              {text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              // No children normal menu items
              return (
                <li key={i}>
                  <Link
                    to={path}
                    className={`flex items-center gap-2 font-medium ${
                      isActive ? "text-yellow-300" : "text-white"
                    }`}
                  >
                    {icon}
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-900 text-white z-50 overflow-auto pt-32">
          <ul className="flex flex-col items-center px-4 pb-10">
            {navLinks.map(({ text, path, icon, children }, i) => {
              const isActive =
                location.pathname === path ||
                children?.some((c) => c.path === location.pathname);

              return (
                <li
                  key={i}
                  className="w-full border-b border-gray-700 px-4 py-2"
                >
                  {!children ? (
                    <Link
                      to={path}
                      className={`block py-2 w-full ${
                        isActive ? "text-yellow-300" : "text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        {icon}
                        {text}
                      </span>
                    </Link>
                  ) : (
                    <>
                      <div className="flex items-center justify-between w-full">
                        <Link
                          to={path}
                          className={`flex items-center gap-2 py-2 ${
                            isActive ? "text-yellow-300" : "text-white"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {icon}
                          {text}
                        </Link>

                        <button
                          className="text-white ml-4"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenServiceDropdown(!openServiceDropdown);
                          }}
                          aria-label={
                            openServiceDropdown
                              ? "Collapse submenu"
                              : "Expand submenu"
                          }
                        >
                          <FaChevronDown
                            className={`transition-transform duration-200 ${
                              openServiceDropdown ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {openServiceDropdown && (
                        <div className="text-sm text-yellow-200 mt-1">
                          {children.map(({ text, path }, j) => (
                            <Link
                              key={j}
                              to={path}
                              className="block py-2 px-2 hover:text-yellow-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
