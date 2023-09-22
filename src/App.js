import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
const App = () => {
  return (
    <div className="bg-custom-1 h-screen w-screen ">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default App;
