import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import LowerDiv from "./components/LowerDiv";
import Content from "./components/Content";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import HeroList from "./components/HeroList";

const App = () => {
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
        <HeroList></HeroList>
      </div>
    </BrowserRouter>
  );
};

export default App;
