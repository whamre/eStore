import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../Cart/CartIcon';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            eStore
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/cart" className="relative">
              <CartIcon />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;