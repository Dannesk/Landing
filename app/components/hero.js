"use client";

import React, { useState } from "react";
import { FaWindows, FaGithub } from "react-icons/fa";
import ReleaseModal from "./releasemodal";
import InstallModal from "./install";
import FaqModal from "./faq";

const HeroSection = () => {
  const [isReleaseOpen, setIsReleaseOpen] = useState(false);
  const [isWindowsOpen, setIsWindowsOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const platforms = [
    {
      name: "Windows",
      icon: <FaWindows size={36} />,
      url: "https://download.dannesk.com/Dannesk-Install.exe",
    },
  ];

  const assets = [
  { name: "Bitcoin", src: "/images/btc.svg" },
  { name: "XRP", src: "/images/xrp.svg" },
  { name: "RLUSD", src: "/images/rlusd.svg" },
  { name: "EUROP", src: "/images/europ.svg" },
];

  return (
    <div className="min-h-screen w-full relative bg-gradient-to-r from-[#0a0a0a] via-[#2a2a2a] to-black opacity-95 flex items-center justify-center">
      {/* Modals */}
      <ReleaseModal isOpen={isReleaseOpen} onClose={() => setIsReleaseOpen(false)} />
      <InstallModal isOpen={isWindowsOpen} onClose={() => setIsWindowsOpen(false)} />
      <FaqModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />

      {/* Nav */}
      <nav className="fixed top-6 right-8 z-50 flex space-x-6 text-neutral-400 text-md">
        <button onClick={() => setIsReleaseOpen(true)} className="font-extralight hover:text-gray-200 transition-colors font-mono duration-200">
          v0.5.0
        </button>
        <button onClick={() => setIsWindowsOpen(true)} className="font-extralight hover:text-gray-200 transition-colors font-mono duration-200">
          Installation Notes
        </button>
        <button onClick={() => setIsFaqOpen(true)} className="font-extralight hover:text-gray-200 transition-colors font-mono duration-200">
          FAQ
        </button>
        <a href="https://github.com/niminypiminy/Dannesk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors duration-200" title="View source on GitHub">
          <FaGithub size={20} />
        </a>
      </nav>

      {/* Content Wrapper - Centered and Max Width */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl px-8 md:px-16 items-center">
        
        {/* Left Column (Text) */}
        <div className="flex flex-col text-cyan-50 z-10">
         <h1 className="text-7xl md:text-7xl font-bold mb-4 font-sans">
  Dannesk
</h1>

{/* Tagline */}
<p className="text-neutral-400 mb-12 mt-4 text-xl md:text-2xl font-light font-sans leading-relaxed">
  Building decentralized rails for a permissionless world — no surveillance, no censorship, no middlemen. 
</p>

          {/* Supported Assets */}
<div className="flex items-center gap-6 mb-10">
  {assets.map((asset) => (
    <div
      key={asset.name}
      className="flex items-center justify-center w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
      title={asset.name}
    >
      <img
        src={asset.src}
        alt={asset.name}
        className="w-full h-full object-contain"
      />
    </div>
  ))}
</div>

          <div className="flex flex-wrap gap-6">
            {platforms.map(({ name, icon, url }, i) => (
              <div key={i} className="flex flex-col items-center">
                <a
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
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (SVG) */}
        <div className="hidden md:flex justify-end items-center">
          <svg
            width="450"
            height="450"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            <polygon
              points="100,30 160,65 160,135 100,170 40,135 40,65"
              stroke="#ECFEFF"
              strokeWidth="6"
              fill="#222222"
            />
            <polygon
              points="100,60 140,100 100,140 60,100"
              stroke="#ECFEFF"
              strokeWidth="4"
              fill="#222222"
            />
            <line x1="100" y1="30" x2="100" y2="60" stroke="#ECFEFF" strokeWidth="2" />
            <line x1="160" y1="65" x2="140" y2="100" stroke="#ECFEFF" strokeWidth="2" />
            <line x1="160" y1="135" x2="140" y2="100" stroke="#ECFEFF" strokeWidth="2" />
            <line x1="100" y1="170" x2="100" y2="140" stroke="#ECFEFF" strokeWidth="2" />
            <line x1="40" y1="135" x2="60" y2="100" stroke="#ECFEFF" strokeWidth="2" />
            <line x1="40" y1="65" x2="60" y2="100" stroke="#ECFEFF" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;