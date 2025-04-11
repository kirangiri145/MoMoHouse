import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import momologo from "../assets/Navbar/MomoLogo.png";
import { BsCart4 } from "react-icons/bs";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  const { state } = useContext(CartContext);
  let totalItem = state.items.reduce((acc, product) => {
    return acc + product.qty;
  }, 0);
  return (
    <div className=" shadow-2xl  flex  text-[17px]  fixed  w-full  bg-white  z-10 justify-around  p-2  top-0 left-0  ">
      <div className="flex   gap-x-2  justify-center  items-center ">
        <img src={momologo} alt="" />
        <NavLink
          to="/"
          className="text-green-950 text-[22px]  font-bold  hover:text-orange-700 "
        >
          Momos
        </NavLink>
      </div>
      <div className="  space-x-3.5 flex font-semibold">
        <NavLink to="/about" className=" hover:text-orange-700 ">
          About US
        </NavLink>
        <NavLink to="/menu" className=" hover:text-orange-700">
          Our Menu
        </NavLink>
        <NavLink to="/services" className=" hover:text-orange-700 ">
          Our Services
        </NavLink>
        <NavLink to="/allergyadvice" className=" hover:text-orange-700 ">
          AllergyAdvice
        </NavLink>


        {isAuthenticated ? (
          <button
            onClick={() => {
              logout();
            }}
            className="hover:text-black pb-3"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="hover:text-black">
            Login
          </NavLink>
        )}

        <NavLink to="/cartPage" className="relative  hover:text-orange-700 ">
          <span className="absolute -top-4 mt-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {totalItem}
          </span>
          <BsCart4 size={28} />
        </NavLink>
      </div>

      <div className="flex      justify-center  items-center   gap-x-3">
        <NavLink
          className=" hover:text-orange-500 "
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FaFacebookF />
        </NavLink>
        <NavLink
          className=" hover:text-orange-500 "
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FaTiktok />
        </NavLink>
        <NavLink
          className=" hover:text-orange-500 "
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FiInstagram />
        </NavLink>
        <NavLink
          className="bg-orange-700 py-1.5 px-3 rounded-3xl  text-white  hover:text-orange-300 "
          to="/contact"
        >
          Contact US
        </NavLink>

        <NavLink className="h-7 w-7 rounded-full overflow-hidden" to="/profile">
          <img
            src={user?.picture}
            alt=""
            className="h-full w-full object-cover"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
