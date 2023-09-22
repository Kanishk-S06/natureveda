import React from "react";

const ContactUs = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-custom-1"
      id="contact"
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-nunito-sans mb-4">Contact Us</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-nunito-sans"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-nunito-sans"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="query"
            className="block text-gray-700 font-nunito-sans"
          >
            Query
          </label>
          <textarea
            id="query"
            name="query"
            rows="4"
            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Query"
            required
          ></textarea>
        </div>
        <button
          onClick={onsubmit}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
