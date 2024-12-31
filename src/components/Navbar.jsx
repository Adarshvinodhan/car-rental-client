import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="fixed top-0 left-64 w-[calc(100%-16rem)] bg-white shadow-md px-4 py-2 h-16 z-50">
        <div className="flex items-center justify-between">
          {/* Logo or Brand Name */}
          <div className="text-2xl font-bold text-black">
            <Link to="/" className="hover:text-gray-700 transition duration-200">CarRent</Link>
          </div>
          
          {/* Logout Button */}
          <button 
            onClick={handleLogout} 
            className="text-black hover:text-gray-700 transition duration-200 text-lg font-semibold md:block hidden">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
