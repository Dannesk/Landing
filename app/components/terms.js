import React from "react";
import ReactDOM from "react-dom";

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
      <div className="bg-[#111] border border-gray-700 rounded-md p-8 max-w-xl w-full text-gray-300 font-mono relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-sans font-semibold mb-4">Terms of Use</h2>
        <p className="mb-4 font-sans">
          By using this app, you agree to the following:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 font-sans text-gray-300">
          <li>You are solely responsible for the security and confidentiality of your cryptographic seeds. The App does not have access to, nor the ability to derive your private keys or wallet credentials due to the mathematical properties of cryptographic key generation.</li>
          <li>The App does not control, manage, or influence any blockchain networks, including the XRP Ledger (XRPL), and we disclaim any responsibility related to the operation, availability, or integrity of such blockchains.</li>
          <li>Stablecoins accessed or managed through the App are issued and controlled solely by their respective issuers. We do not hold or manage any stablecoins on your behalf.</li>
          <li>The App provides access to the XRP Ledger’s built-in decentralized exchange (DEX) as a tool for interaction only. We do not provide liquidity or market-making services. Liquidity is supplied by other participants on the ledger, including order books and liquidity pools managed by Ripple or authorized entities.</li>
          <li>The software and all original code, logic, and user interface design are the intellectual property of Dannesk. Unauthorized reproduction, reverse engineering, or redistribution of the software without explicit written permission is prohibited.</li>
          <li>While best efforts will be made to ensure functionality and uptime, no guarantees are possible. Outages may occur due to time constraints, maintenance, or external dependencies. In such cases where there is prolonged downtime, due to DDOS attacks, or other events outside our control, simply import your wallet with another DeFi provider.</li>

        </ul>
        <p className="text-sm text-gray-400 font-sans">
          If the terms change, you will be notified in the app. Continued use means acceptance.
        </p>
      </div>
    </div>,
    document.body
  );
};

export default TermsModal;
