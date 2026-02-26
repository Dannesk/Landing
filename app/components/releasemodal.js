"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const ReleaseModal = ({ isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
        />

        {/* Deployment Manifest Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.15, ease: "linear" }}
          className="relative bg-[#0a0a0a] border border-[#262626] max-w-4xl w-full text-[#737373] font-mono z-10 overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
        >
          {/* Header */}
          <div className="bg-[#141414] border-b border-[#262626] px-5 py-3 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#10b981]" />
              <span className="text-[10px] text-[#a3a3a3] tracking-[2px] font-bold uppercase">
                VERSION_v0.2.0_BETA
              </span>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
            <div className="mb-8 border-l-2 border-white pl-6">
              <h2 className="text-xl font-mono text-white tracking-tighter uppercase mb-1">
                BUILD <span className="bg-white text-black px-1.5 ml-1">v0.2.0</span>
              </h2>
              <p className="text-[10px] text-[#525252] uppercase tracking-[0.2em]">
                CURRENT_STATUS
              </p>
            </div>

            <div className="border border-[#1a1a1a] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#141414] border-b border-[#262626] text-[#737373] uppercase text-[10px] font-bold tracking-[0.2em]">
                    <th className="py-4 px-4">MODULE_ID</th>
                    <th className="py-4 px-4 border-l border-[#262626]">STATUS</th>
                    <th className="py-4 px-4 border-l border-[#262626]">BUILD_NOTES</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] divide-y divide-[#1a1a1a]">
                  {[
                    { 
                        feature: "BTC & XRPL WALLETS", 
                        status: "ACTIVE", 
                        notes: "Full support for importing, creating, sending, and receiving on both chains." 
                    },
                    { 
                        feature: "KEY MANAGEMENT", 
                        status: "ACTIVE", 
                        notes: "Choice between hot or cold state. Cold state achieved via client-side key deletion." 
                    },
                    { 
                        feature: "TOKENS", 
                        status: "ACTIVE", 
                        notes: "Establish Trustlines for RLUSD and EUROP Stablecoins natively." 
                    },
                    { 
                        feature: "XRPL NATIVE DEX", 
                        status: "ACTIVE", 
                        notes: "Ledger-based atomic swaps for XRP & Stablecoins. Trades cost < ~0.00001 XRP." 
                    },
                    { 
                        feature: "DESKTOP BUILDS", 
                        status: "BETA", 
                        notes: "Linux and Windows supported. MacOS builds are currently in the queue." 
                    },
                  ].map((row, i) => (
                    <tr key={i} className="bg-transparent hover:bg-white/[0.01]">
                      <td className="py-5 px-4 font-bold text-white uppercase tracking-tight">
                        {row.feature}
                      </td>
                      <td className="py-5 px-4 border-l border-[#262626]">
                        <span className="flex items-center gap-2 text-white">
                          <div className="h-1 w-1 bg-white animate-pulse" />
                          {row.status}
                        </span>
                      </td>
                      <td className="py-5 px-4 border-l border-[#262626] text-[#737373]">
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                  
                  {/* In Development */}
                  {[
                    { feature: "BTC COLLATERAL", status: "IN_WORK", notes: "Implementing logic to utilize Bitcoin as collateral for lending." },
                    { feature: "BTC RBF SUPPORT", status: "IN_WORK", notes: "Replace-By-Fee (RBF) functionality for unconfirmed transactions." },
                    { feature: "MOBILE APP", status: "PENDING", notes: "iOS and Android versions currently under construction." },
                  ].map((row, i) => (
                    <tr key={i} className="bg-[#0c0c0c]/50 text-[#404040] italic">
                      <td className="py-5 px-4 uppercase tracking-tight">{row.feature}</td>
                      <td className="py-5 px-4 border-l border-[#262626]">{row.status}</td>
                      <td className="py-5 px-4 border-l border-[#262626]">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Verification Metadata */}
            <div className="mt-8 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row justify-between gap-4 text-[9px] text-[#404040] uppercase tracking-widest">
              <div className="flex flex-col gap-1">
                <span className="text-[#525252]">RELEASE_DATE</span>
                <span>2026.02.19</span>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="border-t border-[#262626] p-4 bg-[#0a0a0a] flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="border border-[#404040] text-white px-8 py-2 text-[11px] font-bold tracking-[2px] uppercase hover:bg-white hover:text-black transition-all"
            >
              [ EXIT_MODAL ]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default ReleaseModal;