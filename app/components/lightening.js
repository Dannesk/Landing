"use client";

import React from "react";
import { motion } from "framer-motion";

// Terminal Reveal: No "zoom", just a sudden data-entry feel
const terminalReveal = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.3, 
      ease: "linear", 
    } 
  },
};

const assets = [
  { name: "BTC", label: "BITCOIN", src: "/images/btc.svg" },
  { name: "XRP", label: "XRPL", src: "/images/xrp.svg" },
  { name: "RLUSD", label: "RLUSD", src: "/images/rlusd.svg" },
  { name: "EUROP", label: "EUROP", src: "/images/europ.svg" },
];

// Dioxus-style Indicator for Features
const TerminalIndicator = ({ label, value, active = true }) => (
  <div className="flex items-center font-mono text-[11px] tracking-widest uppercase">
    <span className="text-neutral-700 opacity-40">[</span>
    <span className={active ? "text-white" : "text-neutral-500"}>{active ? ":" : "."}</span>
    <span className="text-[#737373] px-2">{label}</span>
    <span className="text-white font-bold">{value}</span>
    <span className={active ? "text-white" : "text-neutral-500"}>{active ? ":" : "."}</span>
    <span className="text-neutral-700 opacity-40">]</span>
  </div>
);

const Lightning = () => {
  return (
    <div className="relative bg-[#0a0a0a] text-[#e5e5e5] font-mono selection:bg-white/10 border-t border-[#262626]">
      {/* Subtle Scanline Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-50 bg-[length:100%_2px,3px_100%]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 space-y-64">
        
        {/* Section 1: Wallet - The "Multi-Currency" Manifest */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={terminalReveal}
          className="flex flex-col items-start"
        >
          {/* Section 1 fix */}
          <div className="text-[12px] text-[#737373] mb-4 tracking-[0.3em] font-bold">
            {" >> "} MODULE: VAULT_SYSTEM
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8 leading-none">
            NON-CUSTODIAL<br/>
            <span className="text-white border-b-2 border-white/10">MULTI-CURRENCY</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end w-full">
            <p className="text-[#737373] text-lg max-w-md leading-relaxed">
              Hold native assets, execute swaps for a fraction of a cent, and leverage Bitcoin as collateral.
            </p>
            <div className="flex flex-wrap gap-2 border border-[#262626] p-4 bg-[#141414]/30">
              {assets.map((asset) => (
                <div key={asset.name} className="flex items-center gap-2 px-3 py-1 border border-[#262626] text-[10px] text-white bg-[#0a0a0a]">
                  <img src={asset.src} alt="" className="w-3.5 h-3.5" />
                  {asset.label}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 2: Speed - The "Lightning" Logic */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={terminalReveal}
  className="flex flex-col items-end text-right"
>
  <div className="text-[12px] text-[#737373] mb-4 tracking-[0.3em] font-bold">
    {" >> "} BLOCKCHAIN: XRPL_MAINNET
  </div>
  <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8 leading-none italic">
    LIGHTNING_FAST<br/>
    <span className="text-white">FINALITY</span>
  </h2>
  
  <div className="max-w-md space-y-6">
    <p className="text-[#737373] text-lg leading-relaxed">
      Engineered for global liquidity. Experience near-instant settlement 
      via <span className="text-white border-b border-white/20">Federated Consensus</span>. 
      Transfer any issued currency in 
      <span className="text-white font-bold px-2 underline decoration-white/20 underline-offset-4">3-5 SECONDS</span>.
    </p>
    
    <div className="flex flex-col gap-3 items-end">
      <TerminalIndicator label="PROTOCOL" value="XRPL_L1" />
      <TerminalIndicator label="TPS_CAPACITY" value="1500+" />
      <TerminalIndicator label="AVG_COST" value="<0.00001_XRP" />
      <TerminalIndicator label="CONSENSUS" value="UNL_VALIDATION" />
    </div>

    {/* New "System Log" style detail */}
    <div className="text-[10px] text-[#404040] font-mono mt-8 border-r-2 border-[#262626] pr-4">
      [LOG]: NATIVE_DEX_INTEGRATION_ACTIVE <br/>
      [LOG]: CLOB_DETERMINISTIC_SETTLEMENT_ENABLED <br/>
    </div>
  </div>
</motion.section>

{/* Section 3: Bitcoin - The "Collateral" Layer */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={terminalReveal}
  className="flex flex-col items-start text-left"
>
  <div className="text-[12px] text-[#737373] mb-4 tracking-[0.3em] font-bold">
    {" >> "} BLOCKCHAIN: BITCOIN_MAINNET
  </div>
  <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8 leading-none">
    HARD_MONEY<br/>
    <span className="text-white">COLLATERAL</span>
  </h2>
  
  <div className="max-w-md space-y-6">
    <p className="text-[#737373] text-lg leading-relaxed">
      The ultimate store of value. Secure your wealth on the most 
      battle-tested network. Use your BTC as <span className="text-white border-b border-white/20">Prime Collateral</span>
      —coming soon.
    </p>
    
    <div className="flex flex-col gap-3 items-start">
      <TerminalIndicator label="ADDRESS_TYPE" value="NATIVE_SEGWIT_BC1" />
      <TerminalIndicator label="ENTROPY" value="24_WORDS" />
      <TerminalIndicator label="PASSPHRASE" value="BIP39_OPTIONAL" />
    </div>

    {/* Updated System Log for BTC specs */}
    <div className="text-[10px] text-[#404040] font-mono mt-8 border-l-2 border-[#262626] pl-4">
      [LOG]: BIP39_25TH_WORD_PROTECTION_READY <br/>
      [LOG]: BECH32_ENCODING_VALIDATED <br/>
      [LOG]: COLLATERAL_MODULE_INITIALIZING...
    </div>
  </div>
</motion.section>
        {/* Section 3: Security - The "Private" Clause */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={terminalReveal}
          className="flex flex-col items-center text-center py-20 border-y border-dashed border-[#262626]"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
            Your Keys.<br />
            Your Coins.<br />
            <span className="opacity-40">Your Rules.</span>
          </h2>
          <div className="flex gap-8 mt-4">
             <div className="h-px w-12 bg-[#737373] self-center" />
             <p className="font-mono text-[11px] text-[#737373] uppercase tracking-[0.2em]">
               DECENTRALIZED ZERO_KNOWLEDGE
             </p>
             <div className="h-px w-12 bg-[#737373] self-center" />
          </div>
        </motion.section>

      </div>

      {/* Background Decor: The "Grid" Lines */}
      <div className="absolute inset-0 flex justify-between px-20 pointer-events-none opacity-20">
        <div className="w-px h-full bg-[#262626]" />
        <div className="w-px h-full bg-[#262626]" />
        <div className="hidden md:block w-px h-full bg-[#262626]" />
      </div>
    </div>
  );
};

export default Lightning;