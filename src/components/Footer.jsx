import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Foundation Info */}
        <div className="text-left mb-8">
          <Link to="/" className="group">
            <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-darkYellow transition-colors">
              Delkom Charity Foundation
            </h2>
          </Link>
          <p className="text-white text-base sm:text-lg max-w-md mt-4">
            Making a difference in the lives of those in need.
          </p>
        </div>

        {/* Navigation and Social Links Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-6 text-white hover:text-darkYellow">
              Pages
            </h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white hover:text-darkYellow">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-darkYellow">
                  About
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-white hover:text-darkYellow">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/our-impact" className="text-white hover:text-darkYellow">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/donatePage" className="text-white hover:text-darkYellow">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white hover:text-darkYellow">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-white hover:text-darkYellow">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-6 text-white hover:text-darkYellow">
              Connect with Us
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.facebook.com/share/15gHpu24ev/?mibextid=LQQJ4d"
                  className="flex items-center text-white hover:text-darkYellow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="mr-3 text-xl" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/delkomcharity?s=21"
                  className="flex items-center text-white hover:text-darkYellow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="mr-3 text-xl" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/delkom_charity_foundation/?utm_source=ig_contact_invite#"
                  className="flex items-center text-white hover:text-darkYellow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="mr-3 text-xl" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@delkomcharity.com"
                  className="flex items-center text-white hover:text-darkYellow"
                >
                  <FaEnvelope className="mr-3 text-xl" /> Email
                </a>
              </li>
              <li>
                <a
                  href="https://m.youtube.com/channel/UCSf6ppdBRwrNYbbhkLREwuA"
                  className="flex items-center text-white hover:text-darkYellow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="mr-3 text-xl" /> Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Scroll to Top */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-white mb-4">
            © 2024 Delkom Charity Foundation. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;