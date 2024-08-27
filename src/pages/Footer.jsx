import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          {/* Useful Links Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-3">Useful Links</h2>
            <ul className="text-sm">
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Review</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">About Us</a></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-sm text-gray-400">1234 Street Name, City, Country</p>
            <p className="text-sm text-gray-400">Email: info@yourcompany.com</p>
            <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-3">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-700 text-gray-400 text-center py-3 mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
