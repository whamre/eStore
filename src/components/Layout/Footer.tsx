import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">eStore</h3>
            <p className="text-sm text-gray-400">Your one-stop shop for everything</p>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} eStore. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;