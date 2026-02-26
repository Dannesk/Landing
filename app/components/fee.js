"use client";

import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.3, ease: "linear" } 
  },
};

const Fee = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={itemVariants}
          className="relative group bg-[#141414] border border-[#262626] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden font-mono text-[10px] leading-none text-white p-2">
            {Array(20).fill("ZERO_FEE_PROTOCOL_MANIFEST_").map((t, i) => (
              <div key={i}>{t.repeat(10)}</div>
            ))}
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-8 uppercase font-bold tracking-[3px] text-[11px] text-[#737373]">
               <span className="text-white">[</span>
               <span className="text-white">:</span>
               <span>PROTOCOL_PHILOSOPHY</span>
               <span className="text-white">:</span>
               <span className="text-white">]</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-mono text-white mb-8 tracking-tighter uppercase leading-none">
              Zero <span className="bg-white text-black px-2">Platform</span> Fees.
            </h2>
            
            <div className="space-y-8 text-[#737373] font-mono text-lg leading-relaxed">
              <p>
                This app is a raw interface to the blockchain — you settle directly with 
    the network, exactly as each protocol intended.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 border-t border-white/5 pt-12">
                <div className="space-y-4">
                  <h4 className="text-white text-xs uppercase tracking-widest font-bold">
                    {" >> "} NETWORK_COSTS
                  </h4>
                  <p className="text-sm leading-relaxed">
                    <span className="text-white">XRPL:</span> ~0.00001 XRP (AVG)
                    <br/><span className="text-white">BTC:</span> Usually 200-300 SATS Minimum.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white text-xs uppercase tracking-widest font-bold">
                    {" >> "} OUR_FEE
                  </h4>
                  <p className="text-sm leading-relaxed italic">
                    Exactly <span className="text-white underline decoration-white/20 underline-offset-4 font-bold">$0.00</span>. No spreads, no hidden service charges, no transaction taxes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Large Hardware-style Counter */}
          <div className="relative mt-16 md:mt-0 flex flex-col items-center md:items-end">
            <div className="relative border-2 border-[#262626] p-4 bg-black/40">
              {/* Scanline effect on the number box */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />
              
              <span className="relative text-[6rem] md:text-[9rem] font-mono font-bold leading-none tracking-tighter text-white/10 group-hover:text-white transition-colors duration-1000 select-none">
                0.00
              </span>
              
              {/* Decorative corner accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white/20" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white/20" />
            </div>
            
            <div className="text-white font-mono text-[10px] mt-6 tracking-[4px] uppercase opacity-40">
              NO_FEE_COLLECTED
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Fee;