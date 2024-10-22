import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  return (
    <nav className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-500 pl-4" onClick={() => navigate('/')}>
          MyLogo
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-6 items-center">
          <a href="#my-apps" className="text-white-700 hover:text-blue-500">My Apps</a>
          
          <a href="#explore" className="text-white-700 hover:text-blue-500">Explore</a>
          <a href="#notifications" className="text-white-700 hover:text-blue-500" onClick={() => navigate('/Notifications')}>Notifications</a>
          <a href="#messages" className="text-white-700 hover:text-blue-500">Messages</a>
          <a
            href="#create"
            className="text-red-700 hover:text-blue-500"
            onClick={() => navigate('/contacts')} // Navigate to contacts page
          >
            +Create
          </a>
          
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Contacts"
              className="border border-white-300 rounded-lg p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  navigate('/contacts'); 
                }
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
