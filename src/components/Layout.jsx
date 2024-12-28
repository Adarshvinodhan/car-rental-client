import React from 'react';
import Navbar from './Navbar'; 
import Sidebar from './Sidebar'; 

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col w-full">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow p-4 bg-gray-50">
          {children} 
        </main>
      </div>
    </div>
  );
};

export default Layout;
