import React from 'react';

function Navbar() {
  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center ">
        <a href="/" className="text-2xl font-nunito font-semibold text-black">Dr. NatureVeda</a>
        
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-gray-300 font-lato"></a>Home</li>
          <li><a href="/about" className="text-white hover:text-gray-300 font-lato"></a>About</li>
          <li><a href="/services" className="text-white hover:text-gray-300 font-lato"></a>Contact</li>
          <li><a href="/contact" className="text-white hover:text-gray-300 font-lato"></a>Help</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
