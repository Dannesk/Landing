"use client";

import React, { useState } from "react";
import EnclaveModal from "../components/enclave";

const Cstorage = () => {
  const [showEnclave, setShowEnclave] = useState(false);

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-l from-[#0a0a0a] via-[#2a2a2a] to-black opacity-95 flex-col overflow-hidden">
      {/* Adjusted width to match previous sections for consistency */}
      <div className="w-full px-6 sm:w-2/3 lg:w-1/2 text-center relative z-10">
        <h2 className="text-5xl md:text-5xl font-sans font-semibold mb-6 text-cyan-50">
 Key <span className="text-neutral-300 font-medium">Management</span>
</h2>
        
        {/* Increased to text-xl md:text-2xl and added leading-relaxed */}
        <p className="text-neutral-400 mb-12 mt-4 text-xl md:text-2xl font-sans font-light leading-relaxed">
          Choose how your  <span
            onClick={() => setShowEnclave(true)}
            className="underline cursor-pointer font-medium font-sans"
          >
            <strong>Private Key</strong>
          </span> is stored{" "}
         
          .
        </p>
      </div>

      {/* Modal */}
      <EnclaveModal isOpen={showEnclave} onClose={() => setShowEnclave(false)} />
    </div>
  );
};

export default Cstorage;