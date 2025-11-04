import React from "react";
import ReactDOM from "react-dom";

const AES256Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
      <div className="bg-cyan-50  border border-cyan-100 rounded-lg p-8 max-w-xl w-full text-gray-800 font-mono relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-900 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">AES-256</h2>
       <p className="mb-4 font-sans">
  When stored client-side, your keys are protected with <strong>AES-256</strong>, a symmetric cipher boasting an astronomical keyspace of <code>2<sup>256</sup></code> — that’s about <code>1.15 × 10<sup>77</sup></code> possible combinations.
</p>
<p className="mb-4 font-sans">
  To put this in perspective: there are roughly <code>10<sup>80</sup></code> atoms in the observable universe, which means cracking AES-256 by brute force would take longer than the heat death of the universe — even with the most powerful, hypothetical future technology.
</p>


      </div>
    </div>,
    document.body
  );
};

export default AES256Modal;
