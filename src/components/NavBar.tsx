import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-4 px-6 md:px-0">
      {/* --- START OF CHANGES --- */}
      <div className="bg-white/80 backdrop-blur-sm text-gray-800 rounded-full p-1 flex items-center space-x-1 shadow-md border border-gray-200">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full transition-colors duration-200 text-sm font-medium ${isActive ? 'bg-gray-200 text-black' : 'hover:bg-gray-100'}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full transition-colors duration-200 text-sm font-medium ${isActive ? 'bg-gray-200 text-black' : 'hover:bg-gray-100'}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full transition-colors duration-200 text-sm font-medium ${isActive ? 'bg-gray-200 text-black' : 'hover:bg-gray-100'}`
          }
        >
          Contact
        </NavLink>
      </div>
      {/* --- END OF CHANGES --- */}
    </nav>
  );
};

export default NavBar;