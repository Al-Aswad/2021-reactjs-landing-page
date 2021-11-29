import React from "react";

import {
  Blog,
  Footer,
  Header,
  Possibility,
  Features,
  WhatGPt3,
} from "./containers";
import { Article, Brand, CTA, Navbar, Feature } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPt3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
