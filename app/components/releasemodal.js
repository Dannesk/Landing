"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const ReleaseModal = ({ isOpen, onClose }) => {
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

  const activeFeatures = [
    { feature: "BTC & XRPL WALLETS", notes: "Import, Create, Send, Receive" },
    { feature: "KEY MANAGEMENT", notes: "Local device encryption toggle" },
    { feature: "TOKENS", notes: "RLUSD and EUROP supported" },
    { feature: "XRPL NATIVE DEX", notes: "Ledger-based atomic swaps" },
    { feature: "DESKTOP BUILDS", notes: "Linux / Windows Support" },
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

        {/* Terminal/Readme Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }} animate={{ opacity: 1, scale: 1 }}
          className="relative bg-[#0a0a0a] border border-[#262626] max-w-2xl w-full font-mono z-10 overflow-hidden"
        >
          {/* Header - Simple & Systematic */}
          <div className="bg-[#141414] border-b border-[#262626] px-4 py-2 flex justify-between items-center">
            <span className="text-[10px] text-white font-bold tracking-widest uppercase">RELEASE_VERSION_V0.2.0</span>
            <button 
              onClick={onClose} 
              className="text-[#525252] hover:text-[#a3a3a3] text-xs transition-colors"
            >
              [ESC]
            </button>
          </div>

          <div className="p-6 overflow-y-auto max-h-[80vh]">
            {/* Version Header */}
            <div className="mb-6">
              <div className="text-[10px] text-[#404040]">TIMESTAMP: 2026.02.19_13:22_GMT</div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              <section>
                <div className="space-y-3">
                  {activeFeatures.map((f, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-white text-[11px] min-w-[140px] shrink-0">{f.feature}</span>
                      <span className="text-[#737373] text-[11px]">→ {f.notes}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="text-[10px] text-[#404040] mb-3 border-b border-[#1a1a1a] pb-1 uppercase tracking-tighter">
                  [ UPCOMING_STAGED ]
                </div>
                <div className="text-[11px] text-[#404040] grid grid-cols-2 gap-2 italic">
                  <span>- JPY & SGD Support</span>
                  <span>- BTC Collateral Logic</span>
                  <span>- BTC RBF Support</span>
                  <span>- Mobile Environment</span>
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

export default ReleaseModal;