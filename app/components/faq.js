"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const FaqModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Data structure for the table
  const comparisonData = [
    { metric: "TX_FEE_AVG", xrpl: "~0.00001 XRP", btc: "DYNAMIC_SATS" },
    { metric: "FINALITY_TIME", xrpl: "3.0 - 5.0 SECONDS", btc: "~10.0 MINUTES" },
    { metric: "NATIVE_ASSETS", xrpl: "MULTI_ASSET_L1", btc: "SINGLE_ASSET_L1" },
    { metric: "EXCHANGE_LOGIC", xrpl: "INTEGRATED_CLOB", btc: "NOT_APPLICABLE" },
  ];

  return ReactDOM.createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm"
        />

        {/* Terminal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }} animate={{ opacity: 1, scale: 1 }}
          className="relative bg-[#0a0a0a] border border-[#262626] max-w-4xl w-full font-mono z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#141414] border-b border-[#262626] px-4 py-2 flex justify-between items-center">
            <span className="text-[10px] text-white font-bold tracking-widest uppercase">NETWORK_SPECIFICATIONS</span>
            <button 
              onClick={onClose} 
              className="text-[#525252] hover:text-[#a3a3a3] text-xs transition-colors"
            >
              [ESC]
            </button>
          </div>

          <div className="p-6 overflow-y-auto max-h-[80vh]">
   
            {/* Content Sections */}
            <div className="space-y-8">
              <section>
                
                {/* Table Layout for Objective Comparison */}
                <div className="w-full text-[11px] border border-[#1a1a1a]">
                  {/* Table Header */}
                  <div className="grid grid-cols-3 bg-[#141414] border-b border-[#1a1a1a] text-[#a3a3a3] font-bold">
                    <div className="p-3 uppercase">Metric</div>
                    <div className="p-3 uppercase">XRPL</div>
                    <div className="p-3 uppercase">BTC</div>
                  </div>
                  
                  {/* Table Body */}
                  {comparisonData.map((row, i) => (
                    <div key={i} className="grid grid-cols-3 border-b border-[#1a1a1a] last:border-b-0 text-[#737373]">
                      <div className="p-3 text-white font-bold uppercase">{row.metric}</div>
                      <div className="p-3">{row.xrpl}</div>
                      <div className="p-3">{row.btc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sub-sections */}
              <section>
                <div className="text-[10px] text-[#404040] mb-3 border-b border-[#1a1a1a] pb-1 uppercase tracking-tighter">
                  [ ARCHITECTURAL_DETAILS ]
                </div>
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-1">
                      <div className="text-[10px] text-white uppercase font-bold">Consensus</div>
                      <div className="text-[10px] text-[#737373]">XRPL: Federated (RPCA)</div>
                      <div className="text-[10px] text-[#737373]">BTC: PoW (SHA-256)</div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-[10px] text-white uppercase font-bold">Utility</div>
                      <div className="text-[10px] text-[#737373]">XRPL: Micro / Tokenization</div>
                      <div className="text-[10px] text-[#737373]">BTC: Store of Value</div>
                   </div>
                </div>
              </section>
            </div>

            {/* Bottom Action */}
            <div className="mt-10 pt-6 border-t border-[#1a1a1a]">
              <button 
                onClick={onClose}
                className="w-full py-4 text-[10px] text-[#a3a3a3] bg-[#0a0a0a] border border-[#262626] hover:bg-[#141414] hover:text-white transition-all uppercase tracking-[3px]"
              >
                RETURN
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default FaqModal;