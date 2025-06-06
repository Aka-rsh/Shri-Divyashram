import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
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

  const navLinks = [
    { icon: <FaHome />, text: "Home", path: "/Homee" },
    { text: "Tours", path: "/tours" },
    {
      icon: <FaHandHoldingHeart />,
      text: "OurServices",
      path: "/OurServices",
      children: [
        { text: "🏨 Hotel Booking", path: "/HotelBooking" },
        { text: "🚖 Cab Booking", path: "/cab-booking" },
        { text: "🛕 VIP Darshan Ticket", path: "/vip-darshan" },
        { text: "✈ Flight Ticket", path: "/flight-ticket" },
        { text: "🚉 Train Ticket", path: "/train-ticket" },
      ],
    },
    { icon: <FaLock />, text: "Mandir", path: "/Mandir" },
    { icon: <FaFileSignature />, text: "Blogs", path: "/blog" },
    { icon: <FaUsers />, text: "About Us", path: "/aboutus" },
    { icon: <FaPhoneAlt />, text: "Contact Us", path: "/ContactUs" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <div className="bg-gradient-to-r from-black to-orange-600 flex items-center justify-between px-8 py-2">
        <Link to="/">
          <img src="./logo.png" alt="Divyaashram Logo" className="h-24" />
        </Link>

        <button
          className="text-white text-2xl lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            {navLinks.map(({ text, path, children }, i) => (
              <li key={i} className="relative group cursor-pointer">
                <div className="flex items-center gap-1">
                  <Link
                    to={path}
                    className={`link-underline ${
                      location.pathname === path
                        ? "active text-yellow-300"
                        : "text-white"
                    }`}
                  >
                    {text}
                  </Link>
                  {children && <FaChevronDown className="text-sm mt-1" />}
                </div>
                {children && (
                  <ul className="absolute hidden group-hover:block top-full left-0 bg-white text-black min-w-[200px] shadow-lg rounded-md z-50 mt-2">
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
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-900 text-white z-50 overflow-auto pt-32">
          <ul className="flex flex-col items-center px-4 pb-10">
{navLinks.map(({ text, path, children }, i) => (
  <li key={i} className="w-full border-b border-gray-700 px-4 py-2">
    {!children ? (
      <Link
        to={path}
        className={`block py-2 w-full ${
          location.pathname === path
            ? "text-yellow-300"
            : "text-white"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {text}
      </Link>
    ) : (
      <>
        <div className="flex items-center justify-between w-full">
          {/* Link to main "OurServices" page */}
          <Link
            to={path}
            className={`text-white py-2 ${
              location.pathname === path ? "text-yellow-300" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {text}
          </Link>

          {/* Dropdown toggle button */}
          <button
            className="text-white ml-4"
            onClick={(e) => {
              e.preventDefault(); // stop Link triggering
              setOpenServiceDropdown(!openServiceDropdown);
            }}
          >
            <FaChevronDown
              className={`transition-transform duration-00 ${
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
))}

          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
