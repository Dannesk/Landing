import React from "react";
import ReactDOM from "react-dom";

const EnclaveModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="
          bg-cyan-50 border border-cyan-100 rounded-lg
          p-8 md:p-10 max-w-2xl w-full text-gray-800
          relative shadow-2xl
          max-h-[90vh] overflow-y-auto
        "
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors text-xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6 text-gray-900">
          Key Management
        </h2>

        <div className="space-y-6 text-lg md:text-xl font-sans text-gray-700 leading-relaxed">
          <p>
            When you first create or import a wallet, your private key is encrypted using {" "}
            <strong className="text-gray-900">your chosen encryption passphrase</strong>{" "}
            known only to you. This passphrase is never stored, logged, or recoverable.
          </p>

          <p>
            On supported systems the encrypted key is stored inside a{" "}
            <strong className="text-gray-900">hardware-backed secure enclave</strong>, isolated from the
            operating system and application memory.
          </p>

          <p>
            Regardless of platform, the key remains protected by{" "}
            <strong className="text-gray-900">AES-256 encryption</strong>. 
          </p>

          <p>
            For users who prefer maximum isolation, you can{" "}
            <strong className="text-gray-900">remove the encrypted key from the device entirely</strong>.
            This effectively converts the wallet into cold storage.
          </p>

          <p>
            In this mode, transactions can still be signed — but only by rentering your{" "}
            <strong className="text-gray-900">mnemonic</strong>.
          </p>

          <p>
            This allows maximum control: hot wallet when you want it. Cold when you don’t.
          </p>

        
        </div>
      </div>
    </div>,
    document.body
  );
};

export default EnclaveModal;
