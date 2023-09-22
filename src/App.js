import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";

const App = () => {
  const [con, setCon] = useState(true);

  const Contactus = (e) => {
    e.preventDefault();
    setCon(false);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setCon(true);
  };

  return (
    <div className="bg-custom-1 h-screen w-screen">
      {con ? (
        <>
          <Navbar Contactus={Contactus} />
          <Hero />
        </>
      ) : (
        <ContactUs onsubmit={onsubmit} />
      )}
    </div>
  );
};

export default App;
