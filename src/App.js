import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import LowerDiv from "./components/LowerDiv";
import Content from "./components/Content";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const App = () => {
  // const [con, setCon] = useState(true);

  // const Contactus = (e) => {
  //   e.preventDefault();
  //   setCon(false);
  // };

  // const onsubmit = (e) => {
  //   e.preventDefault();
  //   setCon(true);
  // };

  return (
    <BrowserRouter>
      <div className="bg-custom-1 h-screen w-screen overflow-x-hidden ">
        <Navbar />
        <Hero />
        <Content></Content>
        <LowerDiv></LowerDiv>
        <Link to="/contact" smooth>
          <ContactUs />
        </Link>
      </div>
    </BrowserRouter>
  );
};

export default App;
