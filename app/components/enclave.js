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
      <div className="bg-cyan-50 border border-cyan-100 rounded-lg p-8 max-w-xl w-full text-gray-800 font-mono relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-900 hover:text-white transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">Managing Keys</h2>

        <p className="mb-4 font-sans">
          On supported devices, your encrypted key is stored inside a tamper-resistant hardware enclave —
          isolated from both the operating system and system memory.
          These secure enclaves are designed to resist physical extraction, including sophisticated side-channel attacks.  
          For users who prefer cold storage, you can remove your key from the device with a single click.
          This design choice gives the user the most flexibility. 
        </p>

        <p className="mb-4 font-sans">
          Never store your passphrase on the same device as your encrypted key.
          Without your passphrase, an attacker faces a{" "}
          <code>2<sup>256</sup></code>-sized keyspace — roughly{" "}
          <code>10<sup>77</sup></code> possible combinations. 
        </p>
      </div>
    </div>,
    document.body
  );
};

export default EnclaveModal;

