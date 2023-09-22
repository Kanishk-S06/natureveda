// src/components/PhoneFrame.js
import React from 'react';

function PhoneFrame({ children }) {
  return (
    <div className="w-64 h-96 bg-black border-4 border-gray-700 rounded-xl shadow-lg mx-auto flex items-center justify-center">
      {children}
    </div>
  );
}

export default PhoneFrame;

