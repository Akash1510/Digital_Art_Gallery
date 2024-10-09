// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-purple-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl">SocialApp</div>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          className="text-white focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src="/path/to/profile-pic.png" // Placeholder profile picture
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
            <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">View Profile</a>
            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
