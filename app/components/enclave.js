import React from "react";
import ReactDOM from "react-dom";

const EnclaveModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4">
      <div
        className="
            bg-zinc-900 border border-zinc-800 rounded-none
          p-8 md:p-12 max-w-6xl w-full text-zinc-300
          relative shadow-[0_0_50px_rgba(6,182,212,0.1)]
          max-h-[90vh] overflow-y-auto font-mono
        "
      >
        {/* Terminal Style Header */}
        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/20">
          <div className="h-full bg-cyan-500 w-1/3 animate-pulse" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-500 hover:text-cyan-500 transition-colors"
        >
          [Esc]
        </button>

        {/* Softened Header from pure white/cyan to Gray-100 */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-100 uppercase tracking-tighter">
          MANAGEMENT PROTOCOL
        </h2>

        <div className="space-y-10 text-lg leading-relaxed">
          
          {/* Section 1: Hot Wallet Mode */}
          <section className="space-y-4">
            <h3 className="text-gray-100 font-bold uppercase text-sm tracking-[0.2em] text-cyan-700">
              Hot Wallet Mode
            </h3>
            <p>
              Your 24-word seed is protected by AES-256 encryption and never leaves your device.
            </p>
            <p className="text-sm text-zinc-500 italic">
              Note: This mode enables secure "Hot" signing for active sessions without exposing your master mnemonic.
            </p>
          </section>

          {/* Section 2: The Mental Key */}
          <section className="space-y-4 border-l-2 border-cyan-900/50 pl-6 py-2 bg-cyan-950/10">
            <h3 className="text-gray-100 font-bold uppercase text-sm tracking-[0.2em] text-cyan-700">
              Important!
            </h3>
            <p>
              Your <span className="text-cyan-500">BIP-39 Passphrase (25th word)</span> and <span className="text-cyan-500">Decryption Passphrase</span> should never be written to disk. Keep those secrets in your head.
            </p>
          </section>

          {/* Section 3: Stateless / Cold Mode */}
          <section className="space-y-4">
            <h3 className="text-gray-100 font-bold uppercase text-sm tracking-[0.2em] text-cyan-700">
              Stateless "Cold Storage" Mode
            </h3>
            <p>
              For maximum isolation: <span className="text-gray-100 font-bold">you may purge encrypted key at any time.</span>
            </p>
            <div className="bg-cyan-950/20 border border-cyan-900/50 p-6 font-mono text-base text-cyan-500/80">
              <p className="text-zinc-400">
                Once purged, the application retains no data other than your public wallet. Future signatures will require full manual entry of your 24-word seed + optional 25th word.
              </p>
            </div>
          </section>

          {/* Crucial Distinction Warning */}
          <div className="border-t border-zinc-800 pt-8">
            <div className="flex gap-6">
              <div className="text-cyan-500 font-bold font-serif text-4xl">!</div>
              <div>
                <p className="text-xl text-gray-100 leading-tight uppercase font-bold tracking-widest mb-2">
                  Responsibility Matrix:
                </p>
                <p className="text-zinc-400">
                  The <span className="text-gray-100">Decryption Passphrase</span> can be reset by re-importing your seed. Your <span className="text-gray-100">Seed Phrase</span> is unrecoverable. Loss of seed equals total loss of assets.
                </p>
              </div>
            </div>
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

export default EnclaveModal;