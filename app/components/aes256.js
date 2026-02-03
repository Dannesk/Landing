import React from "react";
import ReactDOM from "react-dom";

const AES256Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center px-4">
      <div
        className="
          bg-zinc-900 border border-cyan-900/30 rounded-none
          p-8 md:p-12 max-w-4xl w-full text-zinc-400
          relative shadow-[0_0_80px_rgba(6,182,212,0.05)]
          max-h-[90vh] overflow-y-auto font-mono
        "
      >
        {/* Terminal Header */}
        <div className="flex justify-between items-start mb-10 border-b border-zinc-800 pb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-zinc-100 uppercase tracking-[0.2em]">
              <span className="text-cyan-500">AES-256-GCM</span>
            </h2>
            <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest">Locally Hardened // Zero-Knowledge-Architecture</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-zinc-600 hover:text-red-500 transition-colors"
          >
            Close
          </button>
        </div>

        <div className="space-y-10 text-base leading-relaxed">
          
          <section className="space-y-4">
            <p>
              Your key is protected by a <span className="text-zinc-100">256-bit symmetric keyspace</span>. 
            </p>
            
            <div className="bg-zinc-900/50 p-6 border-l-2 border-cyan-500 text-zinc-400">
              To brute-force a 256-bit key, one would need to harness the total energy output of the Sun for 100 trillion years. Even then, you would only have a 0.000001% chance of finding the correct combination.
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-2">
              <h3 className="text-cyan-600 font-bold uppercase tracking-tighter text-xs">Combinatorial Entropy</h3>
              <p>
                256 bits means 2^{256} possible keys. This is approximately 1.1 times 10^{77}, a number 
                nearly equal to the total atoms in the observable universe. Searching for your key is 
                equivalent to searching for a specific atom in the cosmos.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-cyan-600 font-bold uppercase tracking-tighter text-xs">Local Execution</h3>
              <p>
                Decryption occurs strictly client-side. 
                Plaintext keys never touch the disk, never traverse the wire, and never exist in a 
                persistent state outside your control.
              </p>
            </div>
          </section>

          <div className="border-t border-zinc-900 pt-6 flex items-center gap-4">
            <div className="h-2 w-2 bg-cyan-300 animate-pulse"></div>
            <p className="text-zinc-500 text-[12px] uppercase tracking-[0.3em]">
              Encryption Standard: FIPS 197 Certified // Post-Quantum Resilient
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AES256Modal;