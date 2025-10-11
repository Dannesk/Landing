import React from "react";
import ReactDOM from "react-dom";

const AES256Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
      <div className="bg-[#111] border border-gray-700 rounded-md p-8 max-w-xl w-full text-gray-300 font-mono relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">AES-256</h2>
        <p className="mb-4 font-sans">
          We use <strong>AES-256</strong>, a symmetric cipher with a keyspace of{" "}
          <code>2<sup>256</sup></code> — that's roughly{" "}
          <code>1.15 × 10<sup>77</sup></code> possible keys.
        </p>
       <p className="mb-4 font-sans">
          To put that in perspective, the number of atoms in the observable universe is estimated to be around <code>10<sup>80</sup></code>.
          That means brute-forcing AES-256 would take longer than the lifespan of the universe — even with hypothetical future technology.
        </p>
      </div>
    </div>,
    document.body
  );
};

export default AES256Modal;
