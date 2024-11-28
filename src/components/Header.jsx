import React from "react";
import { Link, useLocation } from "react-router-dom";
import backgroundImage from '../../public/assets/delkom2.jpg';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header
      className="bg-cover bg-center h-48 flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <nav className="bg-black bg-opacity-60 p-4 rounded">
        <Link to="/" className="text-darkYellow underline mx-2">
          Home
        </Link>{" "}
        /{" "}
        <span className="text-white">
          {currentPath.replace("/", "") || "Home"}
        </span>
      </nav>
    </header>
  );
}

export default Header;
