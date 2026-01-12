import React from "react";
import ReactDOM from "react-dom";

const AES256Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center px-4">
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
          AES-256 Encryption
        </h2>

        <div className="space-y-6 text-lg md:text-xl font-sans text-gray-700 leading-relaxed">
          <p>
            When stored client-side, your keys are protected with{" "}
            <strong className="text-gray-900">AES-256</strong>, a symmetric cipher with an astronomical keyspace of{" "}
            <code className="bg-cyan-100 px-1 rounded text-base font-mono">
              2<sup>256</sup>
            </code>{" "}
            — roughly{" "}
            <code className="bg-cyan-100 px-1 rounded text-base font-mono">
              1.15 × 10<sup>77</sup>
            </code>{" "}
            possible combinations.
          </p>

          <p>
            To put this in perspective: there are about{" "}
            <code className="bg-cyan-100 px-1 rounded text-base font-mono">
              10<sup>80</sup>
            </code>{" "}
            atoms in the observable universe. Brute-forcing AES-256 is therefore not merely impractical —
            it is effectively impossible within the lifetime of the universe.
          </p>

          <p>
            This app also supports the optional{" "}
            <strong className="text-gray-900">BIP-39 passphrase</strong>, sometimes called a{" "}
            <em>“25th word.”</em> This passphrase is{" "}
            <strong className="text-gray-900">never stored</strong> and is not included in the standard 24-word mnemonic.
          </p>

          <p>
            Under BIP-39, your mnemonic and passphrase are combined to derive your wallet keys.
            Changing the passphrase — even slightly — produces an{" "}
            <strong className="text-gray-900">entirely different wallet</strong>, with completely unrelated addresses and balances.
          </p>

          <p>
            This means a single mnemonic can deterministically generate{" "}
            <strong className="text-gray-900">an unlimited number of independent wallets</strong>, each unlocked by a different passphrase.
          </p>

        
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AES256Modal;
