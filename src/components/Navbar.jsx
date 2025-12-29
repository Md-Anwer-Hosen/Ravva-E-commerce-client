import React, { useState } from "react";
import { Search, ShoppingCart, UserCircle, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 font-sans fixed top-0 left-0 right-0 z-50 max-w-11/12 mx-auto ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 gap-4">
          {/* Mobile Menu Button & Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-black hidden sm:flex">
              <img src={logo} alt="" className="w-30" />
            </h1>
          </div>

          {/* Desktop Navigation Links */}

          <div className="hidden md:flex items-center space-x-8 text-lg font-medium text-gray-700">
            <Link
              className="flex items-center gap-1 hover:text-[#f68c1e] transition-colors"
              to={"/"}
            >
              Home
            </Link>
            <Link
              href="#"
              className="hover:text-[#f68c1e] transition-colors"
              to={"/addproduct"}
            >
              Add Product
            </Link>
            <a href="#" className="hover:text-[#f68c1e] transition-colors">
              New Arrivals
            </a>
            <Link
              className="hover:text-[#f68c1e] transition-colors"
              to={"mycart"}
            >
              My Cart
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-md items-center bg-gray-100 rounded-full px-4 py-2 gap-3">
            <Search className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent border-none outline-none w-full text-sm text-gray-600 placeholder-gray-400"
            />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Mobile Search Icon (only visible on small screens) */}
            <button className="sm:hidden p-1 text-gray-700">
              <Search size={26} />
            </button>
            <Link
              className="p-1 text-[#f68c1e] hover:text-black"
              to={"/mycart"}
            >
              <ShoppingCart size={26} />
            </Link>
            <Link to={"login"} className="p-1 text-gray-700 hover:text-black">
              <UserCircle size={26} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4">
          <a
            href="#"
            className="block text-lg font-medium py-2 border-b border-gray-50"
          >
            Shop
          </a>
          <a
            href="#"
            className="block text-lg font-medium py-2 border-b border-gray-50"
          >
            On Sale
          </a>
          <a
            href="#"
            className="block text-lg font-medium py-2 border-b border-gray-50"
          >
            New Arrivals
          </a>
          <a href="#" className="block text-lg font-medium py-2">
            Brands
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
