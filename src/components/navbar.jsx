import React, { useState } from "react";

const Navbar = ({toggleHer}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const storedName = localStorage.getItem("storedName");

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameSubmit = () => {
    localStorage.setItem("storedName", name);
    closePopup();
  };

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
              href="#contact"
              className="text-black hover:text-gray-300 font-lato"
            >
              Contact us
            </a>
          </li>
          {storedName ? (
            <li>
              <button className="text-black hover:text-gray-300 font-lato" onClick={toggleHer}>
                {storedName}
              </button>
            </li>
          ) : (
            <li>
              <button onClick={openPopup} className="text-black hover:text-gray-300 font-lato">
                SignUp
              </button>
            </li>
          )}
        </ul>
      </div>
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-70">
          <div className="bg-white p-4 rounded-lg">
            <label htmlFor="name" className="block font-lato font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="border border-gray-400 p-2 rounded-md w-full mb-4"
            />
            <button
              onClick={handleNameSubmit}
              className="bg-blue-500 text-white font-lato font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              onClick={closePopup}
              className="bg-red-500 text-white font-lato font-semibold py-2 px-4 rounded hover:bg-red-600 ml-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
