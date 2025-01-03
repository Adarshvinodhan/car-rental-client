import React from 'react';
import Navbar from './Navbar'; 
import Sidebar from './Sidebar'; 

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="flex-grow p-4 bg-gray-50 sm:mt-0 mt-16">
          {children} 
        </main>
      </div>
    </div>
  );
};

export default Layout;