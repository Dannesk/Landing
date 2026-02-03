import React from "react";
import ReactDOM from "react-dom";

const ReleaseModal = ({ isOpen, onClose }) => {
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
        <div className="flex justify-between items-start mb-10 ">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-zinc-100 uppercase tracking-[0.2em]">
              <span className="text-cyan-500">v0.5.0</span>
            </h2>
            <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest">
              Deployment Log
            </p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-zinc-600 hover:text-red-500 transition-colors"
          >
            Close
          </button>
        </div>

        <div className="space-y-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-cyan-600 uppercase text-xs font-bold tracking-[0.2em]">
                  <th className="py-4 px-3">Feature</th>
                  <th className="py-4 px-3">Status</th>
                  <th className="py-4 px-3">Technical Notes</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base divide-y divide-zinc-800/50 leading-relaxed">
                <tr className="hover:bg-cyan-950/10 transition-colors">
                  <td className="py-6 px-3 font-bold text-zinc-300 uppercase text-md ">
  XRP & BTC Wallets
</td>
                  
                  <td className="py-6 px-3 text-cyan-500 font-medium">LIVE</td>
                  <td className="py-6 px-3 text-zinc-400">Create/Import Wallets</td>
                </tr>
                <tr className="hover:bg-cyan-950/10 transition-colors">
                  <td className="py-6 px-3 font-bold text-zinc-300 uppercase text-md ">
                    DEX (RLUSD, EURO)
                  </td>
                  <td className="py-6 px-3 text-cyan-500 font-medium">LIVE</td>
                  <td className="py-6 px-3 text-zinc-400">Atomic swaps ↔ stable coins</td>
                </tr>
                <tr className="hover:bg-cyan-950/10 transition-colors">
                  <td className="py-6 px-3 font-bold text-zinc-300 uppercase text-md ">
                    Desktop App
                  </td>
                  <td className="py-6 px-3 text-cyan-500 font-medium">LIVE</td>
                  <td className="py-6 px-3 text-zinc-400">Windows & Linux</td>
                </tr>
                <tr className="hover:bg-cyan-950/10 transition-colors">
                  <td className="py-6 px-3 font-bold text-zinc-300 uppercase text-md ">
                    Cold Storage
                  </td>
                  <td className="py-6 px-3 text-cyan-500 font-medium">LIVE</td>
                  <td className="py-6 px-3 text-zinc-400">Hardware-level isolation logic</td>
                </tr>
                <tr className="hover:bg-cyan-950/10 transition-colors">
                  <td className="py-6 px-3 font-bold text-zinc-300 uppercase text-md">
                    Mobile App
                  </td>
                  <td className="py-6 px-3 text-zinc-600">Pending</td>
                  <td className="py-6 px-3 text-zinc-600 italic">iOS/Android parity testing</td>
                </tr>
                <tr className="hover:bg-cyan-950/10 transition-colors">
                  <td className="py-6 px-3 font-bold text-zinc-300 uppercase text-md ">
                    Lending
                  </td>
                  <td className="py-6 px-3 text-zinc-600">Pending</td>
                  <td className="py-6 px-3 text-zinc-600 italic">Collateralized debt positions</td>
                </tr>
              </tbody>
            </table>
          </div>

        
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ReleaseModal;