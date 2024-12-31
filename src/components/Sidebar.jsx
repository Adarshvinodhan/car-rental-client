import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { user } = useAuth();
  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-white shadow-md border-r border-gray-300 p-4">
      <h2 className="text-xl font-semibold mb-6">Welcome, {user.username}</h2>
      <nav>
        <ul className="space-y-4">
          {/* User-only links */}
          {user.role === "user" && (
            <>
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Cars
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-gray-700 hover:text-blue-500">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/booking" className="text-gray-700 hover:text-blue-500">
              Bookings
            </Link>
          </li>
            </>
          )}
          {/* Admin-only links */}
          {user.role === "admin" && (
            <>
              <li>
                <Link
                  to="/admin/users"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/addcar"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Add Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/bookings"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Bookings
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
