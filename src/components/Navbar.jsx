import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-gray-900 font-bold text-xl">Foodie</a>
          </div>
          <div className="hidden md:flex md:space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/menu" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Menu</Link>
            <Link to="/review" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Review</Link>
          </div>
          <div className="flex items-center space-x-4">
            {searchVisible && (
              <input
                type="text"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-3 py-2 bg-gray-100 text-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Search..."
              />
            )}
            <FaSearch onClick={toggleSearchBar} className="cursor-pointer text-gray-600 hover:text-gray-900 h-5 w-5" />
            <FaShoppingBag className="text-gray-600 hover:text-gray-900 h-5 w-5" />
            <Link to="/profile" className="text-gray-600 hover:text-gray-900">
              <FaUser className="h-5 w-5" />
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/menu" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Menu</Link>
          <Link to="/review" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Review</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;