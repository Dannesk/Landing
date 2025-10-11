import React from "react";
import ReactDOM from "react-dom";

const EUROPModal = ({ isOpen, onClose }) => {
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

        <h2 className="text-2xl font-semibold mb-4">EUROP</h2>
        <p className="mb-4 font-sans">
          <strong>EUROP</strong> is a euro-backed stablecoin issued by Schuman
          Financial and integrated on the XRPL. Each token is pegged 1:1 with
          the euro and designed for regulated, compliant use.
        </p>
      </div>
    </div>,
    document.body
  );
};

export default EUROPModal;
