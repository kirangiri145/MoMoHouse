import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import momologo from "../assets/Navbar/MomoLogo.png";
import { BsCart4 } from "react-icons/bs";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navigation() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const { state } = useContext(CartContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  let totalItem = state.items.reduce((acc, product) => acc + product.qty, 0);

  return (
    <div className="shadow-2xl text-[17px] fixed w-full bg-white z-10 top-0 p left-0 p-2">
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-x-2 items-center">
          <img src={momologo} alt="" className="h-10" />
          <NavLink to="/" className="text-green-950 text-[22px] font-bold hover:text-orange-700">
            Momos
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-4 font-semibold items-center">
          <NavLink to="/about" className="hover:text-orange-700">About US</NavLink>
          <NavLink to="/menu" className="hover:text-orange-700">Our Menu</NavLink>
          <NavLink to="/services" className="hover:text-orange-700">Our Services</NavLink>
          <NavLink to="/allergyadvice" className="hover:text-orange-700">AllergyAdvice</NavLink>

          {isAuthenticated ? (
            <button onClick={() => logout()} className="hover:text-black pb-3">Logout</button>
          ) : (
            <NavLink to="/login" className="hover:text-black">Login</NavLink>
          )}

          <NavLink to="/cartPage" className="relative hover:text-orange-700">
            <span className="absolute -top-4 mt-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalItem}
            </span>
            <BsCart4 size={28} />
          </NavLink>
        </div>
        <div className="hidden md:flex items-center gap-x-3">
          <NavLink to="https://facebook.com" target="_blank" className="hover:text-orange-500"><FaFacebookF /></NavLink>
          <NavLink to="https://tiktok.com" target="_blank" className="hover:text-orange-500"><FaTiktok /></NavLink>
          <NavLink to="https://instagram.com" target="_blank" className="hover:text-orange-500"><FiInstagram /></NavLink>
          <NavLink to="/contact" className="bg-orange-700 py-1.5 px-3 rounded-3xl text-white hover:text-orange-300">Contact US</NavLink>
          <NavLink to="/profile" className="h-7 w-7 rounded-full overflow-hidden">
            <img src={user?.picture} alt="" className="h-full w-full object-cover" />
          </NavLink>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 space-y-3 font-semibold">
          <NavLink to="/about" className="block hover:text-orange-700">About US</NavLink>
          <NavLink to="/menu" className="block hover:text-orange-700">Our Menu</NavLink>
          <NavLink to="/services" className="block hover:text-orange-700">Our Services</NavLink>
          <NavLink to="/allergyadvice" className="block hover:text-orange-700">AllergyAdvice</NavLink>
          {isAuthenticated ? (
            <button onClick={() => logout()} className="block hover:text-black">Logout</button>
          ) : (
            <NavLink to="/login" className="block hover:text-black">Login</NavLink>
          )}
          <NavLink to="/cartPage" className="flex items-center gap-2 hover:text-orange-700">
            <BsCart4 size={24} />
            <span>Cart ({totalItem})</span>
          </NavLink>
          <div className="flex gap-4 mt-2">
            <NavLink to="https://facebook.com" target="_blank" className="hover:text-orange-500"><FaFacebookF /></NavLink>
            <NavLink to="https://tiktok.com" target="_blank" className="hover:text-orange-500"><FaTiktok /></NavLink>
            <NavLink to="https://instagram.com" target="_blank" className="hover:text-orange-500"><FiInstagram /></NavLink>
          </div>
          <NavLink to="/contact" className="block mt-2 bg-orange-700 text-center py-1.5 rounded-3xl text-white hover:text-orange-300">Contact US</NavLink>
          <NavLink to="/profile" className="h-10 w-10 rounded-full overflow-hidden mt-2">
            <img src={user?.picture} alt="" className="h-full w-full object-cover" />
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navigation;
