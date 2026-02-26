"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import AES256Modal from "../components/aes256";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.3, ease: "linear" } 
  },
};

const Rust = () => {
  const [showAES, setShowAES] = useState(false);

  return (
    <div className="bg-[#0a0a0a] py-20 md:py-32 px-6 border-t border-[#262626]">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 auto-rows-auto md:auto-rows-[350px]"
      >
        
        {/* 1. RUST CORE */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-7 md:row-span-2 relative bg-[#141414] p-8 md:p-10 border border-[#262626] flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-white/10 select-none leading-relaxed text-right hidden sm:block">
            [0x01] ZEROIZE: MEMORY_SAFE <br />
            [0x02] KEY: CLIENT_SIDE <br />
            [0x03] ENCRYPTION: AES-256 GCM <br />
            [0x04] THREAD_SAFETY: ENFORCED <br />
            <span className="text-white/30">{"// TARGET: YOUR_DEVICE"}</span>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-8">
               <span className="w-2 h-2 bg-[#10b981] animate-pulse" />
               <span className="text-[11px] text-[#737373] tracking-[3px] uppercase font-bold">Systems_Level</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-mono text-white mb-8 tracking-tighter">
              100%_<span className="bg-white text-black px-2">RUST</span>
            </h2>
            
            <p className="text-[#737373] text-base md:text-lg font-mono leading-relaxed max-w-md">
              No runtime. No garbage collection. Just bare-metal performance validated by Rust’s strict ownership logic for immutable memory safety at scale.
            </p>
          </div>
          
          <div className="font-mono text-[10px] text-[#737373] tracking-widest border-t border-white/5 pt-4 mt-8 md:mt-0">
              SECURITY_FIRST: ARCHITECTURE
          </div>
        </motion.div>

       {/* 2. PERSISTENCE (CONTAINER) */}
<motion.div 
  variants={itemVariants}
  className="md:col-span-5 md:row-span-2 relative bg-[#000000] p-8 md:p-10 border border-[#262626] border-t-0 md:border-t md:border-l-0 flex flex-col"
>
  <div className="relative z-10 h-full flex flex-col">
    <div className="inline-flex items-center gap-2 mb-6">
       <span className="text-[11px] text-[#737373] tracking-[3px] uppercase font-bold">Persistence</span>
    </div>

    <h2 className="text-2xl md:text-3xl font-mono text-white mb-4 tracking-tighter uppercase">
      Local_Storage
    </h2>

    {/* Logic label positioned outside the option boxes */}
    <p className="text-[#737373] font-mono text-[10px] mb-6 tracking-widest">
      SELECT KEY_STORAGE_METHOD:
    </p>
    
    <div className="flex-grow space-y-4">
      {/* OPTION A: AES HOT WALLET */}
      <div className="p-6 bg-[#141414] border border-[#262626] hover:border-[#404040] transition-colors">
        <span className="text-white font-mono text-xs block mb-3 tracking-tighter">HOT_WALLET</span>
        <p className="text-[#737373] font-mono text-[11px] leading-relaxed">
          Keys are encrypted locally with
          <button 
            onClick={() => setShowAES(true)}
            className="text-white border-b border-white/40 mx-1 hover:bg-white hover:text-black transition-all"
          >
            AES-256-GCM
          </button>. 
          They remain on-device in an encrypted state. 
        </p>
      </div>

      {/* OPTION B: COLD STORAGE */}
      <div className="p-6 bg-[#141414] border border-[#262626] hover:border-[#404040] transition-colors">
        <span className="text-white font-mono text-xs block mb-3 tracking-tighter">COLD_STORAGE_PROTOCOL</span>
        <p className="text-[#737373] font-mono text-[11px] leading-relaxed">
          You can easily revert to cold storage with one click. Encrypted keys are removed from your device.
        </p>
      </div>
    </div>

    <div className="flex justify-between items-end mt-8">
       <div className="font-mono text-[10px] text-[#404040]">
         CIPHER: AES_256_BIT <br />
         ARGON2ID
       </div>
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20">
          <rect x="3" y="11" width="18" height="11" rx="0" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
       </svg>
    </div>
  </div>
</motion.div>

        {/* 3. DEX - Atomic Trading */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-12 relative bg-[#141414] p-8 md:p-10 border border-[#262626] border-t-0 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden group"
        >
          <div className="relative z-10 max-w-2xl">
            <div className="text-[11px] text-[#737373] tracking-[3px] uppercase font-bold mb-6 italic">
              {" >> "} NATIVE_DEX_INTEGRATION
            </div>
            
            <h2 className="text-3xl md:text-4xl font-mono text-white mb-4 tracking-tighter">
              ATOMIC_SWAPS
            </h2>
            
            <p className="text-[#737373] font-mono text-sm md:text-base">
              Direct access to the <span className="text-white">XRPL Central Limit Order Book</span>. Trade any supported stablecoin atomically. No bridges, no wrapped-tokens, no centralized actor.
            </p>
          </div>

          <div className="relative mt-10 md:mt-0 font-mono text-[9px] md:text-[10px] text-white/20 group-hover:text-white/40 transition-colors border-l border-white/10 pl-6 md:pl-8">
             <pre className="leading-tight overflow-x-auto">
               {` 
  [OFFER_CREATE] --> [XRPL_LEDGER]
      |                   |
      |-- ATOMIC_SETTLE --|
      |                   |
  [BTC_COLLATERAL] <--- [NON_CUSTODIAL]
               `}
             </pre>
          </div>
        </motion.div>

      </motion.div>

      <AES256Modal isOpen={showAES} onClose={() => setShowAES(false)} />
    </div>
  );
};

export default Rust;