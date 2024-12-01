import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/LogoDel.png";
import { NavLink } from "react-router-dom";
import { LinkData } from "./data/data";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Increase speed by setting duration to 0.3 seconds
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } }, // Increase speed by setting duration to 0.3 seconds
  };

  return (
    <header className="sticky z-50 w-full p-4 text-white bg-dark shadow-md h-[80px]">
      <div className="flex items-center justify-between w-[90%] md:w-[80%] ">
        {/* Logo */}
        <div className="flex items-center logo ">
          <img className="h-12" src={Logo} alt="Delkom's Logo" />
        </div>
        {/* Nav Links */}
        <nav className="desktop-view">
          {" "}
          {/* Render desktop view without animation */}
          <ul className="flex items-center gap-6">
            {LinkData.map((link) => (
              <li className="font-nunito" key={link.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary   text-sm  md:primary"
                      : "text-darkYellow hover:text-darkYellow md:text-primary"
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
          <button>
            {open ? (
              <HiX
                className="close-menu"
                onClick={() => setOpen(false)}
                size={25}
              />
            ) : (
              <HiOutlineMenuAlt1
                className="open-menu"
                onClick={() => setOpen(true)}
                size={25}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile View with Framer Motion animation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="hidden mobile-view lg:block"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            <ul className="flex items-center gap-6 text-xl">
              {LinkData.map((link) => (
                <li
                  className="font-nunito"
                  onClick={() => setOpen(false)}
                  key={link.id}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-darkYellow  md:text-primary"
                        : "text-darkYellow hover:text-darkYellow  md:text-dark"
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
