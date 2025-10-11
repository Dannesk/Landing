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
      {/* ✅ SVG grid background */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="pageGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="lime"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pageGrid)" />
      </svg>

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
