"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const AES256Modal = ({ isOpen, onClose }) => {
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

  return ReactDOM.createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.99 }} animate={{ opacity: 1, scale: 1 }}
          className="relative bg-[#0a0a0a] border border-[#262626] max-w-2xl w-full font-mono z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#141414] border-b border-[#262626] px-4 py-2 flex justify-between items-center text-white">
            <span className="text-[10px] font-bold tracking-widest uppercase">AES-256</span>
            <button 
              onClick={onClose} 
              className="text-[#525252] hover:text-[#a3a3a3] text-xs transition-colors"
            >
              [ESC]
            </button>
          </div>

          <div className="p-8 overflow-y-auto max-h-[80vh]">
            <div className="space-y-10">

            {/* Section 1: Mathematical Scale */}
<section>
  
 <p className="text-[#737373] text-[16px] leading-relaxed italic">
 AES-256 is a symmetric encryption algorithm that uses a single 256-bit secret key derived from a passphrase. The encryption process runs through 14 rounds of mathematical transformations. With 2^256 possible keys (approximately 1.15 x 10^77), brute-force attacks are statistically implausible with current computing power.

Even if a trillion supercomputers were each running trillions of computations per second, finding a specific key would take longer than the heat death of the universe. To put the scale of security into perspective, 10^77 is nearly equivalent to the estimated number of atoms in the observable universe.
</p>
</section>


            </div>

            {/* Bottom Action */}
            <div className="mt-12 pt-6 border-t border-[#1a1a1a]">
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

export default AES256Modal;