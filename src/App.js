import './App.css';
import React from 'react';
import PhoneFrame from './components/phoneframe';
import Navbar from './components/navbar';
function App() {
  return (
    // <div className="App h-screen flex justify-center items-center bg-gray-200">
    //   <PhoneFrame>
    //     {/* Add the content you want inside the phone frame */}
    //     <div className="p-4">
    //       {/* Your app's content goes here */}
    //       <h1 className="text-white text-2xl">Hello, Phone Frame!</h1>
    //     </div>
    //   </PhoneFrame>
    // </div>
    <div>
      <Navbar></Navbar>
    </div>
  );
}

export default App;


