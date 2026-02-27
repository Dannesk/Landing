"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const FaqModal = ({ isOpen, onClose }) => {
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
          className="fixed inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
        />

        {/* Industrial Data Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative bg-[#0a0a0a] border border-[#262626] max-w-4xl w-full text-[#737373] font-mono z-10 overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
        >
          {/* Header */}
          <div className="bg-[#141414] border-b border-[#262626] px-5 py-3 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#404040]" />
              <span className="text-[10px] text-[#a3a3a3] tracking-[2px] font-bold uppercase">
                TECHNICAL_SPECIFICATIONS_V1
              </span>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
            <div className="mb-8">
                <h2 className="text-xl font-mono text-white tracking-tighter uppercase border-l-2 border-white pl-4">
                    NETWORK_PROPERTIES
                </h2>
                <p className="text-[10px] mt-2 text-[#525252] uppercase tracking-widest">Comparative data for architectural reference only.</p>
            </div>

            <div className="overflow-x-auto border border-[#1a1a1a]">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#141414] border-b border-[#262626] text-[#a3a3a3] uppercase text-[10px] font-bold tracking-[0.2em]">
                    <th className="py-4 px-6">PROPERTY_ID</th>
                    <th className="py-4 px-6 border-l border-[#262626]">XRPL_DATA</th>
                    <th className="py-4 px-6 border-l border-[#262626]">BITCOIN_DATA</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] divide-y divide-[#1a1a1a] leading-relaxed">
                  <tr>
                    <td className="py-5 px-6 font-bold text-[#a3a3a3] uppercase bg-[#0d0d0d]">TX_FEE_AVG</td>
                    <td className="py-5 px-6 border-l border-[#262626]">
                      <span className="text-[#d4d4d4]">~0.00001 XRP</span>
                      <div className="text-[9px] text-[#404040] mt-1">{"(0.00001 XRP BASE)"}</div>
                    </td>
                    <td className="py-5 px-6 border-l border-[#262626]">
                      <span className="text-[#d4d4d4]">DYNAMIC_SATS</span>
                      <div className="text-[9px] text-[#404040] mt-1">(MIN_200_SATS)</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 px-6 font-bold text-[#a3a3a3] uppercase bg-[#0d0d0d]">FINALITY_TIME</td>
                    <td className="py-5 px-6 border-l border-[#262626]">
                      <span className="text-[#d4d4d4]">3.0 - 5.0 SECONDS</span>
                    </td>
                    <td className="py-5 px-6 border-l border-[#262626]">
                       <span className="text-[#d4d4d4]">~10.0 MINUTES</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 px-6 font-bold text-[#a3a3a3] uppercase bg-[#0d0d0d]">NATIVE_ASSETS</td>
                    <td className="py-5 px-6 border-l border-[#262626]">
                      <span className="text-[#d4d4d4]">MULTI_ASSET_L1</span>
                      <div className="text-[9px] text-[#404040] mt-1">(RLUSD, EUROP, XRP)</div>
                    </td>
                    <td className="py-5 px-6 border-l border-[#262626]">
                        <span className="text-[#d4d4d4]">SINGLE_ASSET_L1</span>
                        <div className="text-[9px] text-[#404040] mt-1">(BTC_ONLY)</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 px-6 font-bold text-[#a3a3a3] uppercase bg-[#0d0d0d]">EXCHANGE_LOGIC</td>
                    <td className="py-5 px-6 border-l border-[#262626]">
                      <span className="text-[#d4d4d4]">INTEGRATED_CLOB | NATIVE DEX</span>
                    </td>
                    <td className="py-5 px-6 border-l border-[#262626]">
                        <span className="text-[#d4d4d4]">NOT_APPLICABLE</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Technical Metadata */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#0d0d0d] border border-[#1a1a1a]">
                    <p className="text-[9px] text-[#404040] uppercase mb-1">Consensus_Mechanism</p>
                    <p className="text-[10px] text-[#737373]">XRPL: Federated Consensus (RPCA)</p>
                    <p className="text-[10px] text-[#737373]">BTC: Proof-of-Work (SHA-256)</p>
                </div>
                <div className="p-4 bg-[#0d0d0d] border border-[#1a1a1a]">
                    <p className="text-[9px] text-[#404040] uppercase mb-1">Network_Utility</p>
                    <p className="text-[10px] text-[#737373]">XRPL: Micro_Payments / Tokenization</p>
                    <p className="text-[10px] text-[#737373]">BTC: Store of Value / Settlement</p>
                </div>
            </div>
          </div>

          {/* Sticky Footer */}
          <div className="border-t border-[#262626] p-4 bg-[#0a0a0a] flex justify-between items-center shrink-0">
            <span className="text-[9px] text-[#262626] ml-2">BLOCK_CHAIN_DATA</span>
            <button
              onClick={onClose}
              className="border border-[#404040] text-white px-8 py-2 text-[11px] font-bold tracking-[2px] uppercase hover:bg-white hover:text-black transition-all"
            >
              EXIT
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default FaqModal;