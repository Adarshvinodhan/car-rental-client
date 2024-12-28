import React from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Sidebar = () => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('token');

  // Decode token to get username
  let username = '';
  if (token) {
    try {
      const decoded = jwt_decode(token);
      username = decoded.username;
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-white shadow-md border-r border-gray-300 p-4">
      <h2 className="text-xl font-semibold mb-6">Welcome, {username}</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/profile" className="text-gray-700 hover:text-blue-500">Profile</Link>
          </li>
          <li>
            <Link to="/booking" className="text-gray-700 hover:text-blue-500">Bookings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
