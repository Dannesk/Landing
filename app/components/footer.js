"use client";

import React, { useState } from "react";
import PrivacyModal from "../components/privacy";
import TermsModal from "../components/terms";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="relative w-full flex flex-col items-center justify-center bg-gradient-to-l from-[#0a0a0a] via-[#2a2a2a] to-black opacity-95 text-neutral-400 py-8 overflow-hidden">
      <h1 className="text-sm font-mono mb-2">
        Dannesk &copy; {new Date().getFullYear()} All rights reserved.
      </h1>

      <div className="flex space-x-6 text-sm font-sans">
        <button
          onClick={() => setShowPrivacy(true)}
          className="underline cursor-pointer text-neutral-300 hover:text-neutral-100"
        >
          Privacy
        </button>
        <button
          onClick={() => setShowTerms(true)}
          className="underline cursor-pointer text-neutral-300 hover:text-neutral-100"
        >
          Terms
        </button>
      </div>

      {/* Modals */}
      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </footer>
  );
};

export default Footer;
