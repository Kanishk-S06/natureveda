import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent p-6">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-nunito font-semibold text-black">
          Dr. NatureVeda
        </a>

        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-black hover:text-gray-300 font-lato">
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-black hover:text-gray-300 font-lato"
            >
              About
            </a>
          </li>
          <li>
            <button>
              <a
                href="#contact"
                className="text-black hover:text-gray-300 font-lato"
              >
                Contact us
              </a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
