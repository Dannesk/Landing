"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function PrivacyModal({ isOpen, onClose }) {
  // Key listener for terminal exit
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

        {/* Industrial Privacy Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.15, ease: "linear" }}
          className="relative bg-[#0a0a0a] border border-[#262626] max-w-2xl w-full text-[#737373] font-mono z-10 overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
        >
          {/* Header */}
          <div className="bg-[#141414] border-b border-[#262626] px-5 py-3 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white" />
              <span className="text-[10px] text-white tracking-[2px] font-bold uppercase">
                PRIVACY_POLICY
              </span>
            </div>
            <span className="text-[9px] text-[#404040] hidden sm:block italic">{"// NO_DATA_COLLECTED"}</span>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
            

            <div className="space-y-8">
             
              {/* Status Checklist - Industrial Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "ZERO_IP_LOGGING",
                  "NO_HISTORY_TRACKING",
                  "NO_IDENTIFIERS",
                  "ZERO_SOCKET_LOGS",
                  "NO_TRACKING_COOKIES",
                  "NO_TELEMETRY"
                ].map((item, index) => (
                  <div key={index} className="bg-[#141414] border border-[#262626] p-3 flex items-center gap-3">
                    <div className="w-1 h-1 bg-white" />
                    <span className="text-[10px] text-white/70 tracking-widest uppercase font-bold">{item}</span>
                  </div>
                ))}
              </div>

              {/* Explainer Block */}
              <div className="space-y-4 pt-4">
                <p className="text-[11px] leading-relaxed text-[#525252] border-t border-white/5 pt-6 uppercase tracking-wider">
We do not collect or store any data.                </p>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="border-t border-[#262626] p-4 bg-[#0a0a0a] flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="bg-white text-black px-6 py-2 text-[11px] font-bold tracking-[2px] uppercase hover:bg-gray-200 transition-colors"
            >
              [ CLOSE ]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}