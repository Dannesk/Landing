import React from "react";
import ReactDOM from "react-dom";

const DexModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
      <div className="bg-[#111] border border-gray-700 rounded-md p-8 max-w-xl w-full text-gray-300 font-mono relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">Decentralized Exchange (DEX)</h2>

        <p className="mb-4 font-sans">
          You can trustlessly swap assets like{" "}
          <span className="text-gray-200 font-medium">RLUSD</span>,{" "}
          <span className="text-gray-200 font-medium">EUROP</span>, and{" "}
          <span className="text-gray-200 font-medium">XRP</span> directly on the ledger.
        </p>

        <p className="mb-4 font-sans">
          Offers are matched by the protocol. There is no centralized matching engine, no centralized liquidity,
          no external control. Trades settle in seconds, and fees are fractions of a cent.
        </p>

        <p className="mb-4 font-sans">
          All trades execute at your price or better, with zero custody risk.
        </p>
      </div>
    </div>,
    document.body
  );
};

export default DexModal;
