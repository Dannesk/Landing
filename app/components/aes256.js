"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const AES256Modal = ({ isOpen, onClose }) => {
  // Handle ESC key and Body Scroll Lock
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    // Lock body scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEsc);
    
    return () => {
      window.removeEventListener("keydown", handleEsc);
      // Restore body scroll
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence mode="wait">
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative bg-[#0a0a0a] border border-[#262626] max-w-2xl w-full text-[#737373] font-mono z-10 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-[#141414] border-b border-[#262626] px-5 py-3 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white animate-pulse" />
              <span className="text-[10px] text-white tracking-[2px] font-bold uppercase">AES_256</span>
            </div>
            <span className="text-[9px] text-[#737373]">256_BITS</span>
          </div>

          {/* Content Area - Only this part scrolls */}
          <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-grow">
            <h2 className="text-3xl font-mono text-white mb-6 tracking-tighter uppercase">
              <span className="bg-white text-black px-1.5 mr-2">ENCRYPTION</span> 
            </h2>

            <div className="space-y-10">
              {/* Scale Section */}
              <section className="border-l-2 border-white/20 pl-6 py-2">
                <p className="text-white text-lg leading-snug mb-4">
                  The AES-256 keyspace consists of 2^{256} possible combinations. 
                </p>
                <p className="text-[#737373] text-sm leading-relaxed italic">
                  That is approximately 10^{77}—a number nearly equivalent to the total number of atoms in the known universe. Therefore breaking the encryption is mathematically comparable to finding a single, specific atom in the vastness of space.
                </p>
              </section>

              {/* Logic Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
                <div className="p-6 bg-[#0a0a0a]">
                  <div className="text-white text-[10px] font-bold mb-3 tracking-widest uppercase">Brute_Force_Resistant</div>
                  <p className="text-[11px] leading-relaxed">
                    Even with a supercomputer capable of checking trillions of keys per second, it would take longer than the current age of the universe to exhaust the search space.
                  </p>
                </div>
                <div className="p-6 bg-[#0a0a0a]">
                  <div className="text-white text-[10px] font-bold mb-3 tracking-widest uppercase">Key_Management</div>
                  <p className="text-[11px] leading-relaxed">
                    Your keys never leave your device. They are never stored unencrypted.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Border removed as requested */}
          <div className="p-6 bg-[#0a0a0a] flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="group relative bg-white text-black px-8 py-3 text-[11px] font-bold tracking-[2px] uppercase"
            >
              [ Exit ]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default AES256Modal;