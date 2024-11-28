import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col  ml-4 items-center md:items-start">
            <h2 className="headings font-bold mb-4 text-white hover:text-darkYellow">
              Delkom Charity Foundation
            </h2>
            <p className="text-sm md:text-md lg:text-lg text-white hover:text-darkYellow">
              © 2024 Delkom Charity Foundation. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <h2 className="text-lg font-bold mb-4 text-white hover:text-darkYellow">
              Pages
            </h2>
            <ul className="space-y-2 ">
              <li>
                <Link to="/" className="text-white  hover:text-darkYellow">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-darkYellow">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="text-white hover:text-darkYellow"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/our-impact"
                  className="text-white hover:text-darkYellow"
                >
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white hover:text-darkYellow">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/testimony"
                  className="text-white hover:text-darkYellow"
                >
                  Testimony
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold mb-4 text-white hover:text-darkYellow">
              Connect with Us
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/DelkomCharityFoundation"
                  className="flex items-center justify-center text-white hover:text-darkYellow"
                >
                  <FaFacebook className="mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/DelkomCharity"
                  className="flex items-center justify-center text-white hover:textdarkYellow"
                >
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/DelkomCharityFoundation"
                  className="flex items-center justify-center text-white hover:text-darkYellow"
                >
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@delkomcharity.org"
                  className="flex items-center justify-center text-white  hover:text-darkYellow"
                >
                  <FaEnvelope className="mr-2" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={scrollToTop}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;