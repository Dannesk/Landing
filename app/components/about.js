import React from "react";
import ReactDOM from "react-dom";

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
      <div className="bg-cyan-50  border border-gray-700 rounded-md p-8 max-w-xl w-full text-gray-900 font-mono relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>
        <p className="mb-4 font-sans">
Our goal is build decentralized rails for a permissionless world — no surveillance, no censorship, no middlemen.         </p>
      
      </div>
    </div>,
    document.body
  );
};

export default AboutModal;


