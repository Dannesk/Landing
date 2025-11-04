import React from "react";
import ReactDOM from "react-dom";

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-cyan-50  border border-cyan-100 rounded-lg p-8 max-w-2xl w-full text-neutral-800 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-neutral-900"
        >
          ✕
        </button>

        <h2 className="text-2xl font-sans font-semibold mb-6">Privacy Policy</h2>
        <p className="mb-4">
          We do <strong>not</strong> collect or track any personal data.
        </p>
        <ul className="list-disc list-inside font-sans space-y-2 mb-6">
  <li>No IP addresses are collected.</li>
  <li>No browsing history is tracked.</li>
  <li>No personal identifiers are stored.</li>
  <li>No socket addresses are logged.</li>
  <li>No cookies or tracking technologies are used.</li>
</ul>
        <p className="font-sans">
           We only index publicly available blockchain data to provide balances and transaction information quickly. 
  Your private data never leaves your device.
        </p>
      </div>
    </div>,
    document.body
  );
}
