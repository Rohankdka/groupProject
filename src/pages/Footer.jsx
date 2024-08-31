import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h5 className="uppercase text-lg font-bold mb-2">About Us</h5>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h5 className="uppercase text-lg font-bold mb-2">Quick Links</h5>
            <ul>
              <li className="text-gray-600 text-sm mb-2">
                <Link to="/" className="hover:text-gray-900">Home</Link>
              </li>
              <li className="text-gray-600 text-sm mb-2">
                <Link to="/menu" className="hover:text-gray-900">Menu</Link>
              </li>
              <li className="text-gray-600 text-sm mb-2">
                <Link to="/review" className="hover:text-gray-900">Review</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h5 className="uppercase text-lg font-bold mb-2">Get in Touch</h5>
            <p className="text-gray-600 text-sm">
              Address: 123 Main St, Anytown, USA 12345
            </p>
            <p className="text-gray-600 text-sm">
              Phone: 555-555-5555
            </p>
            <p className="text-gray-600 text-sm">
              Email: <a href="mailto:info@example.com" className="hover:text-gray-900">info@example.com</a>
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-gray-600 text-sm text-center">
          &copy; 2023 Foodie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;