"use client";

import React, { useState } from "react";
import { FaWindows, FaGithub, FaLinux } from "react-icons/fa";
import FaqModal from "../components/faq"; 
import ReleaseModal from "../components/releasemodal";

const TerminalBracket = ({ label, active = false, className = "" }) => {
  const symbol = active ? ":" : ".";
  return (
    <div className={`inline-flex items-center font-mono text-sm tracking-[1.5px] uppercase font-bold ${className}`}>
      <span className="text-neutral-700 opacity-40">[</span>
      <span className={active ? "text-white" : "text-neutral-500"}>{symbol}</span>
      <span className="text-white px-2">{label}</span>
      <span className={active ? "text-white" : "text-neutral-500"}>{symbol}</span>
      <span className="text-neutral-700 opacity-40">]</span>
    </div>
  );
};

const HeroSection = () => {
  const [isReleaseOpen, setIsReleaseOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const platforms = [
    { name: "Windows", icon: <FaWindows size={24} />, url: "https://download.dannesk.com/Dannesk_0.2.0.exe" },
    { name: "Linux (.deb)", icon: <FaLinux size={24} />, url: "https://download.dannesk.com/dannesk_0.2.0_amd64.deb" },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col text-[#e5e5e5] font-mono selection:bg-white/10">
      
      {/* 1. TOP NAV */}
      <nav className="w-full border-b border-[#262626] bg-[#000000] px-6 py-4 flex justify-between items-center z-50">
        <div className="flex items-center gap-6">
          {/* Logo hidden on mobile, visible on medium screens and up */}
          <span className="hidden md:block text-gray-300 font-bold tracking-wider text-lg">DANNESK</span>
          
          {/* Nav links always visible on mobile/desktop */}
          <div className="flex gap-4">
            <button 
              onClick={() => setIsReleaseOpen(true)} 
              className="text-[11px] text-[#737373] hover:text-white transition-colors uppercase tracking-widest"
            >
              V0.2.0_BETA
            </button>
            <button 
              onClick={() => setIsFaqOpen(true)} 
              className="text-[11px] text-[#737373] hover:text-white transition-colors uppercase tracking-widest"
            >
              FAQ
            </button>
          </div>
        </div>

        <a href="https://github.com/Dannesk/Dannesk" target="_blank" rel="noreferrer" className="text-[#737373] hover:text-white transition-colors">
          <FaGithub size={20} />
        </a>
      </nav>

      {/* 2. MAIN CONTENT */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 items-center px-6 md:px-20 max-w-7xl mx-auto w-full gap-12">
        
        {/* Left: Content */}
        <div className="lg:col-span-7 flex flex-col space-y-10 py-12 lg:py-0">
          <div className="space-y-2">
             <div className="text-[11px] text-[#737373] tracking-[4px]">BE_YOUR_OWN_BANK</div>
             <h1 className="text-3xl md:text-4xl leading-tight font-medium max-w-xl">
               DECENTRALIZED RAILS FOR A <span className="text-white border-b border-white/20">PERMISSIONLESS</span> WORLD.
             </h1>
          </div>

          <p className="text-[#737373] text-sm md:text-base max-w-md leading-relaxed">
            No surveillance. No censorship. No middlemen. Just protocol.
          </p>

          <div className="flex flex-wrap gap-4">
            {platforms.map((p, i) => (
              <a 
                key={i} 
                href={p.url}
                className="group border border-[#262626] p-4 flex items-center gap-4 hover:border-white transition-all bg-[#141414]/50"
              >
                <div className="text-[#737373] group-hover:text-white transition-colors">
                  {p.icon}
                </div>
                <TerminalBracket label={p.name} active={true} />
              </a>
            ))}
          </div>

          <div className="border-l border-[#262626] pl-6 space-y-3">
            <div className="text-[10px] flex gap-4">
              <span className="text-[#737373]">WINDOWS:</span>
              <a href="https://github.com/Dannesk/Dannesk/blob/main/dannesk.cert.pem" className="text-white hover:underline transition-colors uppercase tracking-tighter">Certificate</a>
              <a href="https://github.com/Dannesk/Dannesk/blob/main/dannesk.pub" className="text-white hover:underline transition-colors uppercase tracking-tighter">Public_Key</a>
            </div>
            <div className="text-[10px] flex gap-4">
              <span className="text-[#737373]">LINUX:</span>
              <a href="https://github.com/Dannesk/Dannesk/blob/main/SHASUMS256.txt" className="text-white hover:underline transition-colors uppercase tracking-tighter">Checksums</a>
              <a href="https://github.com/Dannesk/Dannesk/blob/main/SHASUMS256.txt.asc" className="text-white hover:underline transition-colors uppercase tracking-tighter">Signature</a>
            </div>
          </div>
        </div>

        {/* Right: Kinetic SVG - HIDDEN ON MOBILE/TABLET */}
        <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
          <div className="relative group">
            <svg width="400" height="400" viewBox="0 0 200 200" className="opacity-80 group-hover:opacity-100 transition-opacity duration-700">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="200" height="200" fill="url(#grid)" />
              
              <polygon
    points="100,32 160,65 160,135 100,168 40,135 40,65"
    stroke="#cdcdcd"
    strokeWidth="2"
    fill="#222222"
  />
  <polygon
    points="100,60 140,100 100,140 60,100"
    stroke="#cdcdcd"
    strokeWidth="1.5"
    fill="#111111"
    className="animate-pulse"
  />
  <g stroke="#cdcdcd" strokeWidth="1">
    <line x1="100" y1="32" x2="100" y2="60" />
    <line x1="160" y1="65" x2="140" y2="100" />
    <line x1="160" y1="135" x2="140" y2="100" />
    <line x1="100" y1="168" x2="100" y2="140" />
    <line x1="40" y1="135" x2="60" y2="100" />
    <line x1="40" y1="65" x2="60" y2="100" />
  </g>
</svg>
            <div className="absolute inset-0 bg-white/[0.02] blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* 3. FOOTER STATUS BAR */}
      <div className="border-t border-[#262626] bg-[#000000] px-6 py-2 flex justify-between items-center text-[10px] text-[#737373]">
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full" /> SERVER_ONLINE
          </span>
          <span>LATENCY: 24MS</span>
        </div>
        <div className="uppercase tracking-widest">Non_Custodial_Wallet</div>
      </div>

      <FaqModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
      <ReleaseModal isOpen={isReleaseOpen} onClose={() => setIsReleaseOpen(false)} />
    </div>
  );
};

export default HeroSection;