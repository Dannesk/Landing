"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const WindowsReadmeModal = ({ isOpen, onClose }) => {
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
          className="fixed inset-0 bg-black/90 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
          className="relative bg-[#0a0a0a] border border-[#262626] max-w-md w-full font-mono z-10"
        >
          {/* Header */}
          <div className="bg-[#141414] border-b border-[#262626] px-4 py-2 flex justify-between items-center">
            <span className="text-[10px] text-white font-bold tracking-widest uppercase">SMARTSCREEN_NOTICE</span>
            <button onClick={onClose} className="text-[#737373] hover:text-white text-xs">[X]</button>
          </div>

          {/* Minimal Content */}
          <div className="p-6 space-y-4">
            <p className="text-[11px] text-[#737373] leading-relaxed">
              Dannesk uses <span className="text-white">self-signed binaries</span> to ensure zero reliance on corporate CAs. 
              Windows will flag this as <span className="text-white">"Unknown Publisher"</span>.
            </p>

            <div className="bg-[#141414] border border-[#262626] p-4">
              <div className="text-white text-[9px] font-bold mb-2 uppercase tracking-tighter">Execution Steps:</div>
              <ul className="text-[11px] text-[#737373] space-y-1">
                <li>1. Run <span className="text-[#a3a3a3]">Dannesk_0.2.0.exe</span></li>
                <li>2. Click <span className="text-white underline">"More Info"</span></li>
                <li>3. Select <span className="text-white font-bold">"Run Anyway"</span></li>
              </ul>
            </div>
            
            <button 
              onClick={onClose}
              className="w-full py-2 text-[10px] text-[#525252] hover:text-white border border-[#262626] transition-colors uppercase"
            >
              Acknowledge & Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default WindowsReadmeModal;