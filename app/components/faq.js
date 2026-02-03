import React from "react";
import ReactDOM from "react-dom";

const FaqModal = ({ isOpen, onClose }) => {
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
        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-zinc-100 uppercase">
              <span className="text-cyan-500">Network</span> Protocols
            </h2>
            <p className="text-xs text-zinc-500 mt-2 uppercase">
              Comparative Metrics
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
                <tr className="border-b border-zinc-800 text-cyan-600 uppercase text-xs font-bold">
                  <th className="py-4 px-3 w-1/4">Metric</th>
                  <th className="py-4 px-3">XRPL</th>
                  <th className="py-4 px-3">Bitcoin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                <tr className="hover:bg-cyan-950/10 transition-colors">
                  <td className="py-6 px-3 font-bold text-zinc-300 uppercase">
                    Average Fees
                  </td>
                  <td className="py-6 px-3 text-zinc-200">
                    ~0.00001 XRP <br/>
                    <span className="text-xs text-zinc-500 font-normal">(Under $0.001 USD)</span>
                  </td>
                  <td className="py-6 px-3 text-zinc-400">
                    Variable <br/>
                    <span className="text-xs text-zinc-500 font-normal">(300+ sats recommended)</span>
                  </td>
                </tr>
                <tr className="hover:bg-cyan-950/10 transition-colors">
                  <td className="py-6 px-3 font-bold text-zinc-300 uppercase">
                    Settlement
                  </td>
                  <td className="py-6 px-3 text-cyan-500">3–5 Seconds</td>
                  <td className="py-6 px-3 text-zinc-500">~10 Minutes (Avg)</td>
                </tr>
                <tr className="hover:bg-cyan-950/10 transition-colors">
                  <td className="py-6 px-3 font-bold text-zinc-300 uppercase">
                    Stable Coins
                  </td>
                  <td className="py-6 px-3 text-zinc-200">
                    Multi-Token <br/>
                    <span className="text-xs text-zinc-500 font-normal">(XRP, RLUSD, EURO)</span>
                  </td>
                  <td className="py-6 px-3 text-zinc-400">
                    Native <br/>
                    <span className="text-xs text-zinc-500 font-normal">(BTC Only)</span>
                  </td>
                </tr>
                <tr className="hover:bg-cyan-950/10 transition-colors">
                  <td className="py-6 px-3 font-bold text-zinc-300 uppercase">
                    Liquidity
                  </td>
                  <td className="py-6 px-3 text-zinc-200">Native DEX</td>
                  <td className="py-6 px-3 text-zinc-600">N/A</td>
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

export default FaqModal;