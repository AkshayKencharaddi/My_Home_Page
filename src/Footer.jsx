import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <ul className="space-y-2 pl-3">
            <li>
              <Link to="/about" className="hover:text-gray-400">About Us</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-400">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-gray-400">Cookies</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="flex space-x-4 mt-2 pr-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">YouTube</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
