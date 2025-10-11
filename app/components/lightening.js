"use client";

import React, { useState } from "react";
import RLUSDModal from "../components/rlusd";
import EUROPModal from "../components/europ";

const Lightning = () => {
  const [showRLUSD, setShowRLUSD] = useState(false);
  const [showEUROP, setShowEUROP] = useState(false);

  return (
    <div className="relative min-h-[200vh] bg-gradient-to-l from-[#0a0a0a] via-[#2a2a2a] to-black opacity-95 ">
      {/* Lightning Section */}
      <section className="relative h-screen flex items-center justify-center flex-col px-6 sm:px-0 sm:w-1/2 mx-auto text-center z-10">
        <h2 className="text-5xl font-sans font-bold mb-6 leading-tight text-neutral-100">
          Lightning fast transfers.
        </h2>
        <p className="text-neutral-400 mb-12 mt-4 text-lg font-light font-sans">
          Seamless transactions with{" "}
          <span className="text-neutral-400 font-medium font-sans">
            near instant finality
          </span>{" "}
          <span className="text-neutral-400 font-medium font-sans">
            — transfer{" "}
            <button
              onClick={() => setShowRLUSD(true)}
              className="underline cursor-pointer text-neutral-300 hover:text-neutral-100 font-medium font-sans"
            >
              U.S. Dollars
            </button>{" "}
            and{" "}
            <button
              onClick={() => setShowEUROP(true)}
              className="underline cursor-pointer text-neutral-300 hover:text-neutral-100 font-medium font-sans"
            >
              Euro
            </button>{" "}
            for a fraction of a cent
          </span>
          , worldwide, in{" "}
          <span className="text-neutral-400 font-medium font-mono">
            3–5 seconds
          </span>
          .
        </p>
      </section>

      {/* Lightning Bolt SVG bridging the sections */}
      <div className="relative z-20 w-full flex justify-center -mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 64 64"
          fill="#d4d4d4"
          className="pointer-events-none select-none"
        >
          <path d="M32 2L12 36h16l-4 26L52 28H36l4-26H32z" />
        </svg>
      </div>

      {/* Security Section */}
      <section className="relative h-screen flex items-center justify-center flex-col px-6 sm:px-0 sm:w-1/2 mx-auto text-center -mt-20 z-10">
        <h2 className="text-5xl font-sans font-bold mb-6 leading-snug text-neutral-100">
          Your Keys. Your Coins. Your Rules.
        </h2>
        <p className="text-neutral-400 mt-4 text-lg font-sans font-light">
          Unlike centralized exchanges,{" "}
          <span className="text-neutral-400 font-medium font-sans">
            we do not have access
          </span>{" "}
          to your private keys.
        </p>
      </section>

      {/* Modals */}
      <RLUSDModal isOpen={showRLUSD} onClose={() => setShowRLUSD(false)} />
      <EUROPModal isOpen={showEUROP} onClose={() => setShowEUROP(false)} />
    </div>
  );
};

export default Lightning;
