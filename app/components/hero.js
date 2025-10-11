"use client";

import React, { useState } from "react";
import { FaWindows, FaLinux } from "react-icons/fa";
import AboutModal from "./about";
import ReleaseModal from "./releasemodal";

const HeroSection = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isReleaseOpen, setIsReleaseOpen] = useState(false);

  const platforms = [
    {
      name: "Windows",
      icon: <FaWindows size={36} />,
      url: "https://download.dannesk.com/Dannesk-Setup.exe",
    },
    {
      name: "Linux",
      icon: <FaLinux size={36} />,
      url: "#", // not available yet
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen w-full relative bg-gradient-to-r from-[#0a0a0a] via-[#2a2a2a] to-black opacity-95">
      {/* Modals */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <ReleaseModal isOpen={isReleaseOpen} onClose={() => setIsReleaseOpen(false)} />

      {/* Nav */}
      <nav className="fixed top-4 right-4 z-50 flex space-x-6 text-neutral-400 text-md">
        <button
          onClick={() => setIsAboutOpen(true)}
          className="font-extralight hover:text-gray-200 transition-colors font-mono duration-200"
        >
          About
        </button>
        <button
          onClick={() => setIsReleaseOpen(true)}
          className="font-extralight hover:text-gray-200 transition-colors font-mono duration-200"
        >
          v0.5.0
        </button>
      
      </nav>

      {/* Left Column */}
      <div className="w-full md:w-7/12 flex flex-col justify-center px-6 md:pl-20 text-neutral-100 mt-32 md:mt-0">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 font-sans md:pl-20">
          Dannesk
        </h1>

        <p className="text-md md:pl-20 max-w-lg mb-12 leading-relaxed font-sans text-neutral-300">
          Hold multi-currency tokens,
          trade on XRPL's decentralized dex, transfer money for a fraction of a cent, or borrow using bitcoin as collateral.
          Currently supporting XRP, RLUSD, EUROP and BTC.
        </p>

        <div className="flex flex-wrap gap-6 mb-10 md:pl-20">
          {platforms.map(({ name, icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center rounded-md border border-neutral-300 text-neutral-300 hover:shadow-md hover:border-[#222222] transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <div>{icon}</div>
              <span className="text-xs font-mono text-neutral-300 mt-1">
                {name.toLowerCase()}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="hidden md:flex w-5/12 items-center justify-center text-white">
        <svg
          width="400"
          height="400"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="100,30 160,65 160,135 100,170 40,135 40,65"
            stroke="#FFFFFF"
            strokeWidth="6"
            fill="#222222"
          />
          <polygon
            points="100,60 140,100 100,140 60,100"
            stroke="#FFFFFF"
            strokeWidth="4"
            fill="#222222"
          />
          <line x1="100" y1="30" x2="100" y2="60" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="160" y1="65" x2="140" y2="100" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="160" y1="135" x2="140" y2="100" stroke="#ffffff" strokeWidth="2" />
          <line x1="100" y1="170" x2="100" y2="140" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="40" y1="135" x2="60" y2="100" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="40" y1="65" x2="60" y2="100" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;