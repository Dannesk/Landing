"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Lightning = () => {
  return (
    <div className="relative min-h-[200vh] bg-gradient-to-l from-[#0a0a0a] via-[#2a2a2a] to-black opacity-95">
+<motion.section
  variants={fadeIn}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.4 }}
  className="h-screen flex items-center justify-center px-6"
>
  <div className="w-full sm:w-2/3 lg:w-1/2 text-center">
    <h2 className="text-5xl md:text-5xl font-sans font-semibold mb-6 text-cyan-50">
      A <span className="text-neutral-300 font-medium">non-custodial</span>,{" "}
      <span className="text-neutral-300 font-medium">multi-currency</span> wallet.
    </h2>

    <p className="text-neutral-400 text-xl md:text-2xl font-light font-sans leading-relaxed">
      Hold{" "}
      <span className="text-neutral-400 font-medium">
        multi-currency tokens
      </span>
      , make payments and swaps for{" "}
      <span className="text-neutral-300 font-medium">
        a fraction of a cent
      </span>
      , and borrow using{" "}
      <span className="text-neutral-400 font-medium">
        Bitcoin as collateral
      </span>
      .
    </p>
  </div>
</motion.section>

{/* Key Icon */}
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="128"
  height="128"
  viewBox="0 0 64 64"
  fill="#d4d4d4"
  className="mx-auto mb-8 opacity-50 pointer-events-none select-none"
  aria-hidden="true"
>
  <circle cx="32" cy="24" r="14" />
  <rect x="30" y="36" width="4" height="16" rx="1" />
  <rect x="26" y="44" width="8" height="4" rx="1" />
</svg>

      {/* Lightning Section */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative h-screen flex items-center justify-center flex-col px-6 sm:px-0 sm:w-2/3 lg:w-1/2 mx-auto text-center z-10"
      >
        <h2 className="text-5xl md:text-5xl font-sans font-semibold mb-6 text-cyan-50">
          Lightning fast transfers.
        </h2>
        {/* Increased to text-xl and adjusted leading */}
        <p className="text-neutral-400 mb-12 mt-4 text-xl md:text-2xl font-light font-sans leading-relaxed">
          Seamless transactions with{" "}
          <span className="text-neutral-400 font-medium font-sans">
            near instant finality
          </span>{" "}
          — transfer{" "}
          <span className="text-neutral-300 font-medium font-sans">
            <strong>U.S. Dollars</strong>
          </span>{" "}
          and{" "}
          <span className="text-neutral-300 font-medium font-sans">
            <strong>Euro</strong>
          </span>{" "}
          for a fraction of a cent, worldwide, in{" "}
          <span className="text-neutral-400 font-medium font-mono">
            3–5 seconds
          </span>
          .
        </p>
      </motion.section>

      {/* SVG bridge */}
      <div className="relative z-20 w-full flex justify-center -mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 64 64"
          fill="#d4d4d4"
          className="pointer-events-none select-none opacity-50"
          aria-hidden="true"
        >
          <path d="M32 2L12 36h16l-4 26L52 28H36l4-26H32z" />
        </svg>
      </div>

   
      {/* Security Section */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative h-screen flex items-center justify-center flex-col px-6 sm:px-0 sm:w-2/3 lg:w-1/2 mx-auto text-center -mt-20 z-10"
      >
        <h2 className="text-5xl md:text-5xl font-sans font-semibold mb-6 text-cyan-50">
          Your Keys. Your Coins. Your Rules.
        </h2>
        {/* Increased to text-xl */}
        <p className="text-neutral-400 mt-4 text-xl md:text-2xl font-sans font-light leading-relaxed">
          Unlike centralized exchanges,{" "}
          <span className="text-neutral-300 font-medium font-sans">
            we do not have access
          </span>{" "}
          to your private keys.
        </p>
      </motion.section>

   

     
    </div>
  );
};

export default Lightning;