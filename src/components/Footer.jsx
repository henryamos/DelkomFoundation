import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 lg:px-2">
        <div className="flex flex-col lg:space-x-16 md:flex-row justify-between items-start">
          <div className="flex flex-col  lg:ml-4  items-start mb-4 md:mb-0 md:w-1/3">
            <h2 className="headings font-bold mb-2 text-white hover:text-darkYellow">
              Delkom Charity Foundation
            </h2>
            <p className="text-sm md:text-md lg:text-lg text-white">
              Making a difference in the lives of those in need.
            </p>
          </div>
<<<<<<< HEAD
          <div className="flex flex-col md:flex-row md:space-x-16 items-start md:w-2/3 mt-4 md:mt-0">
            <div className="grid grid-cols-2 gap-8 w-full">
              <div className="flex flex-col items-start">
                <h2 className="text-lg font-bold mb-4 text-white hover:text-darkYellow">
                  Pages
                </h2>
                <ul className="space-y-2">
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
              <div className="flex flex-col items-start">
                <h2 className="text-lg font-bold mb-4 text-white hover:text-darkYellow">
                  Connect with Us
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.facebook.com/DelkomCharityFoundation"
                      className="flex items-center text-white hover:text-darkYellow"
                    >
                      <FaFacebook className="mr-2" /> Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/DelkomCharity"
                      className="flex items-center text-white hover:text-darkYellow"
                    >
                      <FaTwitter className="mr-2" /> Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/DelkomCharityFoundation"
                      className="flex items-center text-white hover:text-darkYellow"
                    >
                      <FaInstagram className="mr-2" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@delkomcharity.com"
                      className="flex items-center text-white hover:text-darkYellow"
                    >
                      <FaEnvelope className="mr-2" /> Email
                    </a>
                  </li>
                </ul>
              </div>
=======
          <div className="flex flex-row justify-between space-x-8 md:flex-row md:space-x-16 items-start md:w-2/3 mt-4 md:mt-0">
            <div className="flex flex-col items-start mb-4 md:mb-0">
              <h2 className="text-lg font-bold mb-4 text-white hover:text-darkYellow">
                Pages
              </h2>
              <ul className="space-y-2">
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
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-bold mb-4 text-white hover:text-darkYellow">
                Connect with Us
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.facebook.com/DelkomCharityFoundation"
                    className="flex items-center text-white hover:text-darkYellow"
                  >
                    <FaFacebook className="mr-2" /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/DelkomCharity"
                    className="flex items-center text-white hover:text-darkYellow"
                  >
                    <FaTwitter className="mr-2" /> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/DelkomCharityFoundation"
                    className="flex items-center text-white hover:text-darkYellow"
                  >
                    <FaInstagram className="mr-2" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@delkomcharity.com"
                    className="flex items-center text-white hover:text-darkYellow"
                  >
                    <FaEnvelope className="mr-2" /> Email
                  </a>
                </li>
              </ul>
>>>>>>> 8438e6dbfc0afcffc0451fc8612054b2dabe7a7b
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm md:text-md lg:text-lg text-white">
            © 2024 Delkom Charity Foundation. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;