import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login');
  };

  return (
<div className="fixed top-0 left-0 w-[100vw] sm:left-64 sm:w-[calc(100%-16rem)] bg-white shadow-md px-4 py-2 h-16 z-30">
  <div className="flex items-center justify-between">
    {/* Logo Section - Centered on Smaller Screens */}
    <div className="flex-1 text-center text-2xl font-bold text-black sm:text-left">
      <Link to="/" className="hover:text-gray-700 transition duration-200">
        CarRent
      </Link>
    </div>

    {/* Logout Button for Larger Screens */}
    <div className="hidden sm:block">
      <button
        onClick={handleLogout}
        className="text-black hover:text-gray-700 transition duration-200 sm:text-lg font-semibold"
      >
        Logout
      </button>
    </div>

    {/* Logout Button for Smaller Screens - Aligned to Right */}
    <div className="block sm:hidden">
      <button
        onClick={handleLogout}
        className="text-black hover:text-gray-700 transition duration-200 text-sm font-semibold"
      >
        Logout
      </button>
    </div>
  </div>
</div>


  );
};

export default Navbar;
