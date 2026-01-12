import React from "react";
import ReactDOM from "react-dom";

const DexModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-[#111] border border-gray-700 rounded-lg p-8 md:p-10 max-w-2xl w-full text-gray-300 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors text-xl"
        >
          ✕
        </button>

        <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6 text-cyan-50">
          Decentralized Exchange (DEX)
        </h2>

        <div className="space-y-6 text-lg md:text-xl font-sans leading-relaxed">
          <p>
            You can trustlessly swap assets like{" "}
            <span className="text-cyan-400 font-semibold">RLUSD</span>,{" "}
            <span className="text-cyan-400 font-semibold">EUROP</span>, and{" "}
            <span className="text-cyan-400 font-semibold">XRP</span> directly on the ledger.
          </p>

          <p>
            Offers are matched by the protocol itself. There is <span className="text-neutral-100">no centralized matching engine</span>, no centralized liquidity, and no external control.
          </p>

          <p className="bg-neutral-800/50 p-4 rounded-md border-l-4 border-cyan-500 text-neutral-200">
            All trades execute at your price or better, settling in seconds with zero custody risk.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DexModal;