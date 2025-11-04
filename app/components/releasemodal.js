import React from "react";
import ReactDOM from "react-dom";

const ReleaseModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
      <div className="bg-cyan-50  border border-cyan-100 rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto text-gray-900 font-sans text-sm leading-relaxed tracking-wide relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-900 hover:text-white transition"
        >
          ✕
        </button>

        <h1 className="text-2xl font-semibold mb-6 text-gray-900 font-sans">
          v0.5.0 – Release Summary
        </h1>

        <table className="w-full text-left text-sm border-collapse font-sans">
          <thead>
            <tr className="border-b border-gray-500 text-neutral-900">
              <th className="py-2 px-3">Feature</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-3">XRP & BTC Wallets</td>
              <td className="py-2 px-3">✅ Available</td>
              <td className="py-2 px-3">Import or create wallets securely</td>
            </tr>
            <tr>
              <td className="py-2 px-3">DEX (RLUSD, EURO)</td>
              <td className="py-2 px-3">✅ Available</td>
              <td className="py-2 px-3">Trade XRP ↔ stable tokens directly</td>
            </tr>
            <tr>
              <td className="py-2 px-3">Desktop App</td>
              <td className="py-2 px-3">✅ Available</td>
              <td className="py-2 px-3">Windows</td>
            </tr>
            <tr>
              <td className="py-2 px-3">Cold Storage</td>
              <td className="py-2 px-3">✅ Available</td>
              <td className="py-2 px-3">Secure enclave + full key control</td>
            </tr>
           
            <tr>
              <td className="py-2 px-3">RBF for BTC</td>
              <td className="py-2 px-3">🔧 In Dev</td>
              <td className="py-2 px-3">Replace-By-Fee support</td>
            </tr>
            <tr>
              <td className="py-2 px-3">SendMax (XRPL)</td>
              <td className="py-2 px-3">🔧 In Dev</td>
              <td className="py-2 px-3">Choose send amount vs limit price</td>
            </tr>
            <tr>
              <td className="py-2 px-3">Mobile App</td>
              <td className="py-2 px-3">🔧 In Dev</td>
              <td className="py-2 px-3">Full parity on iOS & Android</td>
            </tr>
            <tr>
              <td className="py-2 px-3">Lending & Borrowing</td>
              <td className="py-2 px-3">🔧 In Dev</td>
              <td className="py-2 px-3">Borrow RLUSD/EURO using BTC</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,
    document.body
  );
};

export default ReleaseModal;
