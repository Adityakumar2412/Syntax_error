
import React from 'react';
import { Bell, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-erp-blue text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl">StudentERP</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-1 rounded-full hover:bg-blue-700 transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-erp-danger rounded-full text-xs flex items-center justify-center">3</span>
            </button>
            <button className="p-1 rounded-full hover:bg-blue-700 transition-colors">
              <User size={20} />
            </button>
            <button className="p-1 rounded-full hover:bg-blue-700 transition-colors">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
