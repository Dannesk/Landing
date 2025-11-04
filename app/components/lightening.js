"use client";

import React, { useState } from "react";


const Lightning = () => {
 

  return (
    <div className="relative min-h-[200vh] bg-gradient-to-l from-[#0a0a0a] via-[#2a2a2a] to-black opacity-95 ">
      {/* Lightning Section */}
      <section className="relative h-screen flex items-center justify-center flex-col px-6 sm:px-0 sm:w-1/2 mx-auto text-center z-10">
        <h2 className="text-5xl font-sans font-bold mb-6 leading-tight text-cyan-50">
          Lightning fast transfers.
        </h2>
        <p className="text-neutral-400 mb-12 mt-4 text-lg font-light font-sans">
          Seamless transactions with{" "}
          <span className="text-neutral-400 font-medium font-sans">
            near instant finality
          </span>{" "}
          <span className="text-neutral-400 font-medium font-sans">
            — transfer{" "}
            <span
        
              className="  text-neutral-300  font-medium font-sans"
            ><strong>U.S. Dollars</strong>
            </span>{" "}
            and{" "}
            <span
            
              className="text-neutral-300 font-medium font-sans"
            >
             <strong>Euro</strong>
            </span>{" "}
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
        <h2 className="text-5xl font-sans font-bold mb-6 leading-snug text-cyan-50">
          Your Keys. Your Coins. Your Rules.
        </h2>
        <p className="text-neutral-400 mt-4 text-lg font-sans font-light">
          Unlike centralized exchanges,{" "}
          <span className="text-neutral-300 font-medium font-sans">
            we do not have access
          </span>{" "}
          to your private keys.
        </p>
      </section>

   
    </div>
  );
};

export default Lightning;
