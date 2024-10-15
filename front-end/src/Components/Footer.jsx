import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-around">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-600 hover:text-green-500">Home</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-green-500">About Us</a></li>
            <li><a href="/groceries" className="text-gray-600 hover:text-green-500">Products</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-green-500">Contact</a></li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/kartik.thakur50" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/kartik-thakur-/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Organic Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
