import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/LogoDel.png";
import { NavLink } from "react-router-dom";
import { LinkData } from "./data/data";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <header className="sticky z-50 w-full p-4 text-white bg-dark shadow-md h-[80px]">
      <div className="flex items-center justify-between w-[90%] md:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center logo">
          <img className="h-12" src={Logo} alt="Delkom's Logo" />
        </div>
        {/* Nav Links */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {LinkData.map((link) => (
              <li className="font-nunito" key={link.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-sm md:text-white"
                      : "text-primary hover:text-darkYellow md:text-primary"
                  }
                  to={link.url}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {/* Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={handleToggle}
            className="p-2 transition-colors duration-200"
          >
            {open ? (
              <HiX className="w-6 h-6 text-white" />
            ) : (
              <HiOutlineMenuAlt1 className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed inset-0 bg-black bg-opacity-95 z-40 lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            {/* Close Button for Mobile Menu */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 text-white"
            >
              <HiX className="w-6 h-6" />
            </button>

            <ul className="flex flex-col items-center justify-center h-full gap-6">
              {LinkData.map((link) => (
                <li
                  className="font-nunito"
                  onClick={() => setOpen(false)}
                  key={link.id}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-white text-xl"
                        : "text-primary hover:text-darkYellow text-xl"
                    }
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Hero;
