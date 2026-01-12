"use client";

import React from "react";
import HeroSection from "./components/hero";
import Lightning from "./components/lightening";
import Rust from "./components/rust";
import Cstorage from "./components/cstorage";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-r from-[#0a0a0a] via-[#2a2a2a] to-black">
  

      {/* ✅ content sits above grid */}
      <div className="relative z-10">
        <HeroSection />
        <Lightning />
        <Rust />
        <Cstorage />
        <Footer />
      </div>
    </div>
  );
};

export default App;
