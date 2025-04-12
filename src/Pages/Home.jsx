import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import momologo from "../assets/Navbar/MomoLogo.png";

function Footer() {
  return (
    <footer className="pb-10 pt-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src={momologo} alt="Momo Logo" className="w-8 h-8" />
            <h1 className="text-teal-700 text-xl font-bold">momos</h1>
          </div>
          <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
            Where we serve the juiciest, most flavorful momos in town! From
            classic steamed momos to crispy fried delights, our menu is packed
            with mouthwatering options. Come enjoy authentic flavors with the
            perfect blend of spices and love.
          </p>
        </div>

        <div>
          <h2 className="text-lg text-teal-700 font-semibold mb-3">momos</h2>
          <div className="flex flex-col space-y-2 text-gray-600 text-sm sm:text-base">
            <NavLink to="/about" className="hover:text-teal-700">
              About Us
            </NavLink>
            <NavLink to="/menu" className="hover:text-teal-700">
              Our Menu
            </NavLink>
            <NavLink to="/services" className="hover:text-teal-700">
              Our Services
            </NavLink>
            <NavLink to="/contact" className="hover:text-teal-700">
              Contact Us
            </NavLink>
          </div>
        </div>

        <div>
          <h2 className="text-lg text-teal-700 font-semibold mb-3">Legals</h2>
          <div className="flex flex-col space-y-2 text-gray-600 text-sm sm:text-base">
            <NavLink to="/contact" className="hover:text-teal-700">
              Terms & Conditions
            </NavLink>
            <NavLink to="/menu" className="hover:text-teal-700">
              Privacy Policy
            </NavLink>
            <NavLink to="/about" className="hover:text-teal-700">
              Support
            </NavLink>
          </div>
        </div>

        <div>
          <h2 className="text-lg text-teal-700 font-semibold mb-3">Follow Us</h2>
          <div className="flex flex-wrap justify-start gap-3 sm:gap-4 max-w-xs">
            <NavLink
              to="https://www.facebook.com/giri.kiran.2056 "
              target="_blank"
              className="text-gray-400 text-xl sm:text-2xl hover:text-orange-500 w-8 h-8 flex items-center justify-center"
            >
              <FaFacebookF />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/kiran-giri-68349a328/"
              target="_blank"
              className="text-gray-400 text-xl sm:text-2xl hover:text-orange-500 w-8 h-8 flex items-center justify-center"
            >
              <FaLinkedinIn />
            </NavLink>
            <NavLink
              to="https://github.com/kirangiri145"
              target="_blank"
              className="text-gray-400 text-xl sm:text-2xl hover:text-orange-500 w-8 h-8 flex items-center justify-center"
            >
              <FaGithub />
            </NavLink>
            <NavLink
              to="https://www.youtube.com/"
              target="_blank"
              className="text-gray-400 text-xl sm:text-2xl hover:text-orange-500 w-8 h-8 flex items-center justify-center"
            >
              <FaYoutube />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/"
              target="_blank"
              className="text-gray-400 text-xl sm:text-2xl hover:text-orange-500 w-8 h-8 flex items-center justify-center"
            >
              <FaInstagram />
            </NavLink>
            <NavLink
              to="https://www.tiktok.com/en/"
              target="_blank"
              className="text-gray-400 text-xl sm:text-2xl hover:text-orange-500 w-8 h-8 flex items-center justify-center"
            >
              <FaTiktok />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 pt-4 text-sm sm:text-base">
        Copyright &copy; 2023 Everest Momo Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
