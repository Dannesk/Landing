"use client";

import React, { useState } from "react";
import EnclaveModal from "../components/enclave";

const Cstorage = () => {
  const [showEnclave, setShowEnclave] = useState(false);

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-l from-[#0a0a0a] via-[#2a2a2a] to-black opacity-95 flex-col overflow-hidden">
      <div className="w-full px-6 sm:w-1/2 text-center relative z-10">
        <h2 className="text-5xl font-sans font-bold mb-6 leading-snug text-cyan-50 mt-20">
          Key Management
        </h2>
        <p className="text-neutral-400 mb-12 mt-4 text-lg font-sans font-light">
          Complete Control over your{" "}     
          <span
            onClick={() => setShowEnclave(true)}
            className="underline cursor-pointer text-cyan-100 hover:text-cyan-200  font-medium font-sans"
          >
        <strong>Private Key</strong>
          </span>
        </p>
      </div>

      {/* Modal */}
      <EnclaveModal isOpen={showEnclave} onClose={() => setShowEnclave(false)} />
    </div>
  );
};

export default Cstorage;
