"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const TERMS_DATA = [
  { id: "01", label: "SEED_RESPONSIBILITY", text: "You retain sole ownership of your recovery phrase (seed). We maintain zero access to your private keys. Loss of keys results in the permanent loss of digital assets." },
  { id: "02", label: "NETWORK_DISCLAIMER", text: "Protocol availability, data integrity, and transaction finality are governed by decentralized consensus. We exert no control over blockchain state transitions." },
  { id: "03", label: "ASSET_GOVERNANCE", text: "Stablecoins and pegged assets are managed by independent entities. This interface facilitates interaction but provides no custody or oversight of third-party liabilities." },
  { id: "04", label: "LIQUIDITY_SETTLEMENT", text: "The DEX interface is a visual terminal for peer-to-peer liquidity. Settlement is atomic and irreversible. We provide no brokerage or market-making services." },
  { id: "05", label: "SERVICE_CONTINUITY", text: "We strive for maximum uptime but cannot guarantee uninterrupted access. In the event of interface failure, users may access their funds via any compatible provider." }
];

const TermsModal = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!isOpen) return;

    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-mono">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-[#0a0a0a] border border-[#262626] max-w-2xl w-full flex flex-col max-h-[85vh] shadow-2xl">
        
        {/* Header */}
        <div className="bg-[#141414] border-b border-[#262626] px-5 py-3 flex justify-between items-center text-[10px]">
          <div className="flex items-center gap-2 text-white font-bold tracking-widest">
            <div className="w-1.5 h-1.5 bg-white" />
            LEGAL_PROTOCOL
          </div>
          <span className="text-[#404040]">GNU_GPL_V3</span>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:20px_20px]">
          <h2 className="text-2xl text-white mb-8 tracking-tighter uppercase">
            TERMS_OF_<span className="bg-white text-black px-1 ml-1">SERVICE</span>
          </h2>

          <div className="space-y-6">
            {TERMS_DATA.map((item) => (
              <div key={item.id} className="border border-[#262626] p-4 bg-black/50">
                <div className="flex justify-between text-[10px] mb-2 font-bold uppercase tracking-widest">
                  <span className="text-white">[{item.label}]</span>
                  <span className="text-[#404040]">ID_{item.id}</span>
                </div>
                <p className="text-[#737373] text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-[9px] text-[#404040] mt-8 pt-4 border-t border-[#262626] uppercase">
            Rev: 2026.02.19 // Usage implies acceptance.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-[#262626] p-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-white text-black px-6 py-2 text-[10px] font-bold tracking-widest uppercase hover:invert transition-all"
          >
            [ CLOSE]
          </button>
        </div>
      </div>

      <style jsx global>{`
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #262626; }
      `}</style>
    </div>,
    document.body
  );
};

export default TermsModal;