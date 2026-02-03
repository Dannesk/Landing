import React from "react";
import ReactDOM from "react-dom";

const EnclaveModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center px-4">
      <div
        className="
          bg-zinc-900 border border-red-900/30 rounded-none
          p-8 md:p-12 max-w-4xl w-full text-zinc-400
          relative shadow-[0_0_80px_rgba(239,68,68,0.05)]
          max-h-[90vh] overflow-y-auto font-mono
        "
      >
        {/* Animated Status Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900">
          <div className="h-full bg-red-600 w-full animate-[shimmer_2s_infinite] opacity-50" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-600 hover:text-red-500 transition-colors"
        >
          Close
        </button>

        <div className="space-y-10">
          
          

          {/* Technical Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-900 pt-8">
            <div className="space-y-3">
              <h3 className="text-red-600 font-bold uppercase tracking-tighter text-xs">Persistence Mode</h3>
              <p className="text-sm leading-snug">
                Keys remains in an AES-256 encrypted vault on your device. When singing a transaction, you only need your decryption passphrase and bip39 25th word.     
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-cyan-600 font-bold uppercase tracking-tighter text-xs">Ghost Protocol (Cold Storage)</h3>
              <p className="text-sm leading-snug">
                If you choose to remove the private key, the application becomes stateless. You can still see your balances, but signing will require the 24 word mnemonic, plus 25th word if you have one.
              </p>
            </div>
          </div>

          <section className="bg-zinc-900/30 p-6 border-zinc-800 border">
            <h4 className="text-xs font-bold text-zinc-500 mb-4 uppercase tracking-[0.2em]">Deep-Wipe Procedure:</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▶</span> 
                Key material is overwritten with bit-level randomness before deallocation.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▶</span> 
                Encryption headers are scorched.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▶</span> 
                Your wallet reverts to <span className="text-zinc-100">Watch-Only</span> mode.
              </li>
            </ul>
          </section>

          <div className="pt-4 flex items-center justify-between text-[12px] text-zinc-500 uppercase tracking-widest">
            <span>Entropy Level: Maximum</span>
            <span>Zero-Knowledge: Verified</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default EnclaveModal;