import React from "react";
import ReactDOM from "react-dom";

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center px-4">
      <div
        className="
          bg-zinc-900 border border-cyan-900/30
          p-8 md:p-10 max-w-5xl w-full
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

        <h2 className="text-xl md:text-2xl font-semibold text-zinc-100 mb-4">
          Terms of Use
        </h2>

        <p className="mb-4 text-md leading-relaxed">
          By using this application, <span className="font-bold">you agree to the following terms:</span>
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-md leading-relaxed">
          <li>
            You are solely responsible for the security and confidentiality of
            your cryptographic seeds. The App does not have access to, nor the
            ability to derive, your private keys or wallet credentials due to the
            mathematical properties of cryptographic key generation.
          </li>

          <li>
            The App does not control, manage, or influence any blockchain
            networks, including the XRP Ledger (XRPL). We disclaim all
            responsibility for the operation, availability, or integrity of any
            blockchain network.
          </li>

          <li>
            Stablecoins accessed through the App are issued and governed solely
            by their respective issuers. We do not custody, control, or manage
            stablecoins on your behalf.
          </li>

          <li>
            The App provides access to the XRP Ledger’s built-in decentralized
            exchange (DEX) strictly as an interface. We do not provide liquidity,
            market-making, or brokerage services. Liquidity is supplied by other
            participants on the ledger.
          </li>

          <li>
            This software is open source under the GNU GPL v3 license. You are
            free to inspect, modify, and redistribute the software in accordance
            with the license terms.
          </li>

          <li>
            While best efforts are made to maintain availability and
            functionality, no guarantees are provided. Service interruptions
            may occur due to maintenance, external dependencies, network
            attacks, or events beyond our control. In such cases, you may import
            your wallet into another compatible DeFi provider.
          </li>
        </ul>

        <p className="text-md text-zinc-400 leading-relaxed">
          If these terms are updated, notice will be provided within the App.
          Continued use constitutes acceptance of the revised terms.
        </p>
      </div>
    </div>,
    document.body
  );
};

export default TermsModal;
