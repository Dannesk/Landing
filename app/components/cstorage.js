"use client";

import React from "react";
import { motion } from "framer-motion";

const Cstorage = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden py-32 border-t border-[#262626]">
      
      {/* Background: Digital "Grid" using dots instead of lines */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`, 
             backgroundSize: '32px 32px' 
           }} 
      />
      
      {/* Horizontal Scanline across the entire section */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 z-0" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "linear" }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-5xl mx-6"
      >
        {/* The "Vault" Card - Industrial Hardened Shell */}
        <div className="bg-[#141414] p-12 md:p-24 border border-[#262626] text-center relative overflow-hidden">
          
          {/* Diagnostic Sidebars (Vertical Text) */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 hidden md:block">
            <span className="text-[10px] font-mono text-[#737373] tracking-[0.5em] uppercase">
              BIP39_PASSPHRASE_ENABLED
            </span>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 hidden md:block">
            <span className="text-[10px] font-mono text-[#737373] tracking-[0.5em] uppercase">
              NON_CUSTODIAL_KEYS
            </span>
          </div>

          <div className="relative z-10">
            {/* The "Terminal Indicator" Pattern */}
            <div className="inline-flex items-center gap-2 mb-12 uppercase font-bold tracking-[4px] text-[11px] text-[#737373]">
               <span className="text-white">[</span>
               <span className="w-1.5 h-1.5 bg-white animate-pulse" />
               <span>BIP39_SECURITY</span>
               <span className="text-white">]</span>
            </div>

            <h2 className="text-5xl md:text-8xl font-mono mb-12 text-white tracking-tighter uppercase leading-none">
25th Word. 
            </h2>
            
            <div className="max-w-2xl mx-auto mb-16 space-y-6 flex flex-col items-center">
              <p className="text-[#737373] text-xl font-mono leading-relaxed">
  Add a secret passphrase to your 24-word recovery phrase.
 
              </p>
              
              {/* Tightened Black Box - Concise Version */}
              <div className="w-full max-w-sm bg-[#0a0a0a] border border-[#262626] py-6 px-6 font-mono">
                <p className="text-[#737373] text-xs md:text-sm uppercase tracking-wider leading-relaxed">
               Even if someone finds your 24 words,
they still can’t access your funds
without your secret passphrase, which should exist only in your head.
                </p>
              </div>
            </div>

            {/* Hardware Status Display */}
            <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto border-t border-white/5 pt-8">
               <div className="flex flex-col gap-1">
                 <div className="h-1 bg-white w-full" />
                 <span className="text-[8px] text-[#737373] font-mono uppercase">24_Words</span>
               </div>
               <div className="flex flex-col gap-1">
                 <div className="h-1 bg-[#10b981] w-full" />
                 <span className="text-[8px] text-[#737373] font-mono uppercase">Passphrase</span>
               </div>
               <div className="flex flex-col gap-1">
                 <div className="h-1 bg-white w-full" />
                 <span className="text-[8px] text-[#737373] font-mono uppercase">Master_Seed</span>
               </div>
            </div>
          </div>

          {/* Industrial Corner Brackets */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#262626]" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#262626]" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#262626]" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#262626]" />
        </div>
        
        {/* Sub-card footer log */}
        <div className="mt-4 flex justify-between items-center px-2">
           <div className="text-[9px] font-mono text-[#737373] uppercase tracking-[0.2em]">
             Status: <span className="text-white">Hardened</span>
           </div>
           <div className="text-[9px] font-mono text-[#737373] uppercase tracking-[0.2em]">
             Derivation: <span className="text-white">m/84'/0'/0'</span>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cstorage;