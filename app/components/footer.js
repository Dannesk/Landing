"use client";

import React, { useState } from "react";
import PrivacyModal from "../components/privacy";
import TermsModal from "../components/terms";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#262626] py-12 px-8 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left: Metadata / Identity */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h2 className="text-white text-sm font-bold uppercase">
              DANNESK
            </h2>
            <span className="text-[10px] bg-[#141414] border border-[#262626] px-1.5 py-0.5 text-[#737373]">
              v0.2.0-stable
            </span>
          </div>
          <p className="text-[10px] text-[#404040] leading-tight uppercase tracking-widest">
            Non-Custodial Cryptographic Wallet <br />
          </p>
        </div>

        {/* Right: Actions and Legal */}
        <div className="flex flex-col md:items-end gap-4">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-[#737373] hover:text-white transition-colors border-b border-transparent hover:border-white"
            >
              PRIVACY_POLICY
            </button>
            <span className="text-[#262626]">|</span>
            <button
              onClick={() => setShowTerms(true)}
              className="text-[#737373] hover:text-white transition-colors border-b border-transparent hover:border-white"
            >
              TERMS_OF_SERVICE
            </button>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 text-[9px] text-[#404040] uppercase">
                <div className="w-1.5 h-1.5 bg-[#10b981]" /> 
                SERVER_Online
             </div>
             <div className="text-[10px] text-[#737373]">
               &copy; {new Date().getFullYear()} DANNESK
             </div>
          </div>
        </div>

      </div>



      {/* Modals */}
      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </footer>
  );
};

export default Footer;