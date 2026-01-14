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

  return (
    <div className="min-h-screen w-full relative bg-gradient-to-r from-[#0a0a0a] via-[#2a2a2a] to-black opacity-95 flex items-center justify-center overflow-hidden">
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

      {/* Content Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center px-10 md:px-20 lg:px-32 xl:px-48 2xl:px-64">        
        {/* Left Column (Text) */}
        <div className="flex flex-col text-cyan-50 z-10">
          {/* Title Section with Kinetic Tracking */}
          <h1 className="text-8xl font-bold mb-4 font-sans tracking-tight hover:tracking-widest transition-all duration-1000 ease-in-out cursor-default select-none">
            Dannesk<span className="text-gray-500">.</span>
          </h1>

          {/* Tagline */}
          <p className="text-neutral-400 mb-12 mt-4 text-xl md:text-2xl font-light font-sans leading-relaxed max-w-lg">
            We're building <span className="text-neutral-300 font-medium">decentralized rails</span> for a permissionless world — no surveillance, no censorship, no middlemen. 
          </p>

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

        {/* Right Column (Kinetic SVG) */}
        <div className="hidden md:flex justify-end items-center group">
          <div className="relative transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-2">
            <svg
              width="450"
              height="450"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_30px_rgba(236,254,255,0.15)] animate-[pulse_6s_infinite_ease-in-out]"
            >
              {/* Outer Hexagon */}
              <polygon
                points="100,30 160,65 160,135 100,170 40,135 40,65"
                stroke="#ECFEFF"
                strokeWidth="2"
                fill="#222222"
                fillOpacity="0.4"
                className="transition-all duration-700 group-hover:stroke-cyan-300"
              />
              {/* Inner Diamond */}
              <polygon
                points="100,60 140,100 100,140 60,100"
                stroke="#ECFEFF"
                strokeWidth="1.5"
                fill="#111111"
                className="transition-all duration-1000 group-hover:fill-neutral-800"
              />
              {/* Connecting Lines with kinetic dash animation potential */}
              <g className="stroke-cyan-50/50" strokeWidth="1">
                <line x1="100" y1="30" x2="100" y2="60" />
                <line x1="160" y1="65" x2="140" y2="100" />
                <line x1="160" y1="135" x2="140" y2="100" />
                <line x1="100" y1="170" x2="100" y2="140" />
                <line x1="40" y1="135" x2="60" y2="100" />
                <line x1="40" y1="65" x2="60" y2="100" />
              </g>
            </svg>
            
            {/* Subtle Glow Effect behind SVG */}
            <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full -z-10 group-hover:bg-cyan-500/10 transition-colors duration-1000" />
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation (Add to your global CSS or tailwind.config.js if pulse isn't enough) */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.8; transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;