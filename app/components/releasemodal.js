import React from "react";
import ReactDOM from "react-dom";

const ReleaseModal = ({ isOpen, onClose }) => {
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
        {/* Terminal Header Decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/20">
          <div className="h-full bg-cyan-500 w-1/4" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-500 hover:text-cyan-500 transition-colors"
        >
          [Close]
        </button>

        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-100 uppercase tracking-tighter">
          v0.5.0 – Build
        </h2>

        <div className="space-y-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-cyan-700 uppercase text-sm tracking-[0.2em]">
                  <th className="py-4 px-3 font-bold">Feature</th>
                  <th className="py-4 px-3 font-bold">Status</th>
                  <th className="py-4 px-3 font-bold">Technical Notes</th>
                </tr>
              </thead>
              <tbody className="text-base md:text-lg divide-y divide-zinc-800/50">
                <tr className="hover:bg-cyan-950/5 transition-colors">
                  <td className="py-4 px-3 text-gray-100">XRP & BTC Wallets</td>
                  <td className="py-4 px-3 text-cyan-500">LIVE</td>
                  <td className="py-4 px-3 text-zinc-400">Multi-chain mnemonic integration</td>
                </tr>
                <tr className="hover:bg-cyan-950/5 transition-colors">
                  <td className="py-4 px-3 text-gray-100">DEX (RLUSD, EURO)</td>
                  <td className="py-4 px-3 text-cyan-500">LIVE</td>
                  <td className="py-4 px-3 text-zinc-400">Atomic swaps ↔ stable assets</td>
                </tr>
                <tr className="hover:bg-cyan-950/5 transition-colors">
                  <td className="py-4 px-3 text-gray-100">Desktop App</td>
                  <td className="py-4 px-3 text-cyan-500">LIVE</td>
                  <td className="py-4 px-3 text-zinc-400">Native Windows build</td>
                </tr>
                <tr className="hover:bg-cyan-950/5 transition-colors">
                  <td className="py-4 px-3 text-gray-100">Cold Storage</td>
                  <td className="py-4 px-3 text-cyan-500">LIVE</td>
                  <td className="py-4 px-3 text-zinc-400">Hardware-level isolation logic</td>
                </tr>
                <tr className="hover:bg-cyan-950/5 transition-colors">
                  <td className="py-4 px-3 text-gray-100">RBF for BTC</td>
                  <td className="py-4 px-3 text-zinc-500">PENDING</td>
                  <td className="py-4 px-3 text-zinc-500 italic">Replace-By-Fee dev cycle</td>
                </tr>
                <tr className="hover:bg-cyan-950/5 transition-colors">
                  <td className="py-4 px-3 text-gray-100">Mobile App</td>
                  <td className="py-4 px-3 text-zinc-500">PENDING</td>
                  <td className="py-4 px-3 text-zinc-500 italic">iOS/Android parity testing</td>
                </tr>
                <tr className="hover:bg-cyan-950/5 transition-colors">
                  <td className="py-4 px-3 text-gray-100">Lending</td>
                  <td className="py-4 px-3 text-zinc-500">PENDING</td>
                  <td className="py-4 px-3 text-zinc-500 italic">Collateralized debt positions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-6 border-t border-zinc-800 flex justify-end">
          
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ReleaseModal;