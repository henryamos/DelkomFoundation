import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import backgroundImage from "../assets/Delkom7.jpg";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Define navigation links - maintain existing paths
  const navigationLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/activities", label: "Activities" },
    { path: "/our-impact", label: "Our Impact" },
    { path: "/donatePage", label: "Donate" },
    { path: "/Team", label: "Our Team" },
    { path: "/contact-us", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="bg-cover bg-center h-48 flex flex-col items-center justify-center text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden absolute top-4 right-4 z-50 p-2"
      >
        {isMenuOpen ? (
          <HiX className="h-6 w-6" />
        ) : (
          <HiOutlineMenuAlt1 className="h-6 w-6" />
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-black bg-opacity-60 p-4 rounded">
        {navigationLinks.map((link, index) => (
          <React.Fragment key={link.path}>
            <Link
              to={link.path}
              className={`${
                currentPath === link.path
                  ? "text-white"
                  : "text-primary hover:text-darkYellow"
              } transition-colors duration-300`}
            >
              {link.label}
            </Link>
            {index < navigationLinks.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleLinkClick}
              className={`${
                currentPath === link.path
                  ? "text-white"
                  : "text-primary hover:text-darkYellow"
              } text-xl py-4 transition-colors duration-300`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
