"use client";

import React, { useState } from "react";
import EnclaveModal from "../components/enclave";

const Cstorage = () => {
  const [showEnclave, setShowEnclave] = useState(false);

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-l from-[#0a0a0a] via-[#2a2a2a] to-black opacity-95 flex-col overflow-hidden">
      <div className="w-full px-6 sm:w-1/2 text-center relative z-10">
        <h2 className="text-5xl font-sans font-bold mb-6 leading-snug text-neutral-100 mt-20">
          Key Management
        </h2>
        <p className="text-neutral-400 mb-12 mt-4 text-lg font-sans font-light">
          For enhanced control, you can{" "}
          <span
            onClick={() => setShowEnclave(true)}
            className="underline cursor-pointer text-neutral-300 hover:text-neutral-100 font-medium font-sans"
          >
            remove your key
          </span>{" "}
          as needed.
        </p>
      </div>

      {/* Modal */}
      <EnclaveModal isOpen={showEnclave} onClose={() => setShowEnclave(false)} />
    </div>
  );
};

export default Cstorage;
