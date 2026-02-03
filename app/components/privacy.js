import React from "react";
import ReactDOM from "react-dom";

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center px-4">
      <div
        className="
          bg-zinc-900 border border-cyan-900/30
          p-8 md:p-10 max-w-2xl w-full
          text-zinc-300 relative
          shadow-[0_0_80px_rgba(6,182,212,0.05)]
          max-h-[90vh] overflow-y-auto
          font-sans
        "
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-500 hover:text-red-500 transition-colors"
        >
          ✕
        </button>

        <h2 className="text-xl md:text-2xl font-semibold text-zinc-100 mb-6">
          Privacy Policy
        </h2>

        <p className="mb-4 text-md leading-relaxed">
          We do <strong className="text-zinc-100">not</strong> collect, track, or store personal data.
        </p>

        <ul className="list-disc list-inside space-y-2 text-md mb-6">
          <li>No IP addresses are collected.</li>
          <li>No browsing history is tracked.</li>
          <li>No personal identifiers are stored.</li>
          <li>No socket addresses are logged.</li>
          <li>No cookies or tracking technologies are used.</li>
        </ul>

        <p className="text-md leading-relaxed text-zinc-400">
          We only index publicly available blockchain data to provide balances and
          transaction information efficiently. Your private data never leaves
          your device.
        </p>
      </div>
    </div>,
    document.body
  );
}
