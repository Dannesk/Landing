import React from "react";
import ReactDOM from "react-dom";

const AES256Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4">
      <div
        className="
          bg-zinc-900 border border-zinc-800 rounded-none
          p-8 md:p-12 max-w-5xl w-full text-zinc-300
          relative shadow-[0_0_50px_rgba(6,182,212,0.1)]
          max-h-[90vh] overflow-y-auto font-mono
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-500 hover:text-cyan-500 transition-colors"
          aria-label="Close"
        >
          [ESC]
        </button>

        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-100 uppercase tracking-tighter">
          Cryptographic Sovereignty
        </h2>

        {/* Increased base text size to text-lg and adjusted spacing */}
        <div className="space-y-10 text-lg leading-relaxed">
          
          <section className="space-y-4">
            <h3 className="text-gray-100 font-bold uppercase text-sm tracking-widest text-cyan-700">
              Protocol: AES-256-GCM
            </h3>
            <p>
              Local state is encrypted via AES-256. With <span className="text-cyan-500 font-bold">2^256</span> possible keys, the energy required to brute-force your wallet would exceed the thermal output of the sun.
            </p>
          </section>

          <section className="border-l-2 border-cyan-900/50 pl-6 py-2 bg-cyan-950/10 space-y-4">
            <h3 className="text-gray-100 font-bold uppercase text-sm tracking-widest text-cyan-700">
              Feature: BIP-39 Passphrase
            </h3>
            <p>
              We support the <span className="text-cyan-500">"25th Word."</span> This is never cached, never stored, and only exists in your head. 
            </p>
          </section>

          <div className="border-t border-zinc-800 pt-8">
            <p className="italic text-zinc-500 text-base">
              "Privacy is necessary for an open society in the electronic age... We the Cypherpunks are dedicated to building anonymous systems." — Eric Hughes
            </p>
          </div>

          <div className="flex justify-end pt-4">
            <button 
              onClick={onClose}
              className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-3 px-12 transition-all uppercase text-sm tracking-widest"
            >
              Acknowledge
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AES256Modal;