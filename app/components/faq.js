import React from "react";
import ReactDOM from "react-dom";

const FaqModal = ({ isOpen, onClose }) => {
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
          <div className="h-full bg-cyan-500 w-1/5" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-500 hover:text-cyan-500 transition-colors"
        >
          [Close]
        </button>

        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-100 uppercase tracking-tighter">
          Network Protocols
        </h2>

        <div className="space-y-10">
          {/* --- Blockchain Comparison Table --- */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-cyan-700 uppercase text-sm tracking-[0.2em]">
                  <th className="py-4 px-3 w-1/4">Metric</th>
                  <th className="py-4 px-3">XRPL</th>
                  <th className="py-4 px-3">Bitcoin</th>
                </tr>
              </thead>
              <tbody className="text-base md:text-lg divide-y divide-zinc-800/50">
                <tr className="hover:bg-cyan-950/5 transition-colors">
                  <td className="py-6 px-3 font-bold text-gray-100">Average Fees</td>
                  <td className="py-6 px-3">
                    ~0.00001 XRP <br/>
                    <span className="text-sm text-zinc-500 tracking-tight">(Under $0.001 USD)</span>
                  </td>
                  <td className="py-6 px-3">
                    Variable <br/>
                    <span className="text-sm text-zinc-500 tracking-tight">(300+ sats recommended)</span>
                  </td>
                </tr>
                <tr className="hover:bg-cyan-950/5 transition-colors">
                  <td className="py-6 px-3 font-bold text-gray-100">Settlement</td>
                  <td className="py-6 px-3 text-cyan-500">3–5 Seconds</td>
                  <td className="py-6 px-3 text-zinc-400">~10 Minutes (Avg)</td>
                </tr>
                <tr className="hover:bg-cyan-950/5 transition-colors">
                  <td className="py-6 px-3 font-bold text-gray-100">Asset Support</td>
                  <td className="py-6 px-3">
                    Multi-Token <br/>
                    <span className="text-sm text-zinc-500">(XRP, RLUSD, EURO)</span>
                  </td>
                  <td className="py-6 px-3">
                    Native <br/>
                    <span className="text-sm text-zinc-500">(BTC Only)</span>
                  </td>
                </tr>
                <tr className="hover:bg-cyan-950/5 transition-colors">
                  <td className="py-6 px-3 font-bold text-gray-100">Liquidity</td>
                  <td className="py-6 px-3">Native DEX</td>
                  <td className="py-6 px-3">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* --- Footer / Open Source --- */}
          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-500 text-sm italic">
              "Cypherpunks write code"
            </p>
            <div className="flex items-center gap-8">
              
            
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default FaqModal;