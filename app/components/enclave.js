import React from "react";
import ReactDOM from "react-dom";

const EnclaveModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#111] border border-gray-700 rounded-md p-8 max-w-xl w-full text-gray-300 font-mono relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">Managing Keys</h2>

        <p className="mb-4 font-sans">
          On supported devices, your encrypted key is stored in a tamper-resistant hardware enclave —
          isolated from the operating system, and system memory.
          These enclaves are engineered to withstand physical extraction, including advanced side-channel attacks.
        </p>

        <p className="mb-4 font-sans">
          Never store your passphrase on the same device.
          Without your passphrase , an attacker is left with a{" "}
          <code>2<sup>256</sup></code>-sized keyspace — about{" "}
          <code>10<sup>77</sup></code> possibilities.
        </p>

        <p className="mb-4 font-sans">
          If you're a high-value target, consider deleting your key when not actively using the app.
          You can easily re-import it the next time you launch.
        </p>
      </div>
    </div>,
    document.body
  );
};

export default EnclaveModal;

