"use client";

import React, { useState } from "react";
import AES256Modal from "../components/aes256";

const Rust = () => {
  const [showAES, setShowAES] = useState(false);

  return (
    <div className="relative min-h-[300vh] bg-gradient-to-r from-[#0a0a0a] via-[#2a2a2a] to-black opacity-95 text-neutral-700 overflow-hidden">
      
      {/* Rust Section */}
      <section className="relative h-screen flex items-center justify-center flex-col px-6 sm:px-0 sm:w-2/3 lg:w-1/2 mx-auto text-center z-10">
      <h2 className="text-5xl md:text-5xl font-sans font-semibold mb-6 text-cyan-50">
  Built with <span className="text-neutral-300 font-medium">Rust</span>.
</h2>
        {/* Increased font size and line height */}
        <p className="text-neutral-400 text-xl md:text-2xl font-light font-sans leading-relaxed">
          Designed from the ground up for{" "}
          <span className="font-bold text-gray-300">memory safety</span>, 
          concurrency, and <span className="font-bold text-gray-300">zero-cost abstractions</span>. 
          Our entire stack is built with Rust.
        </p>
      </section>

      {/* Middle Encryption SVG */}
      <div className="relative z-20 w-full flex justify-center -mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 24 24"
          fill="#ffffff"
          className="pointer-events-none select-none opacity-40"
        >
          <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-7h-1V7a5 5 0 0 0-10 0v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2ZM8 7a4 4 0 1 1 8 0v3H8V7Zm10 13H6v-8h12v8Z" />
        </svg>
      </div>

      {/* AES Section */}
      <section className="relative h-screen flex items-center justify-center flex-col px-6 sm:px-0 sm:w-2/3 lg:w-1/2 mx-auto text-center -mt-20 z-10">
       <h2 className="text-5xl md:text-5xl font-sans font-semibold mb-6 text-cyan-50">
  State-of-the-Art <span className="text-neutral-300 font-medium">Security</span>
</h2>

        <p className="text-neutral-400 mb-12 mt-4 text-xl md:text-2xl font-light font-sans leading-relaxed">
          Zero Knowledge.{" "}
          <span
            onClick={() => setShowAES(true)}
            className="underline cursor-pointer text-cyan-200 font-medium font-sans"
          >
            AES-256 Encryption.
          </span>{" "}
           BIP-39 “25th word” — an optional passphrase that adds an extra layer of security.
        </p>
      </section>

      {/* Swap Icon SVG */}
      <div className="relative z-20 w-full flex justify-center -mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 24 24"
          fill="#ffffff"
          className="pointer-events-none select-none opacity-40"
        >
          <path d="M16.01 12l-1.41-1.41L17.17 8H4v-2h13.17l-2.58-2.59L16.01 2 22 8l-5.99 6zM8 22l-5.99-6L8 10l1.41 1.41L6.83 14H20v2H6.83l2.58 2.59z" />
        </svg>
      </div>

      {/* DEX Section */}
      <section className="relative h-screen flex items-center justify-center flex-col px-6 sm:px-0 sm:w-2/3 lg:w-1/2 mx-auto text-center -mt-20 z-10">
        <h2 className="text-5xl md:text-5xl font-sans font-semibold mb-6 text-cyan-50">
  Trustless <span className="text-neutral-300 font-medium">Swaps</span>
</h2>
        <p className="text-neutral-400 mb-12 mt-4 text-xl md:text-2xl font-light font-sans leading-relaxed">
          Swap stabelcoins for a fraction of a cent{" "}
         
          — no centralized intermediary required.
        </p>
      </section>

      {/* Modals */}
      <AES256Modal isOpen={showAES} onClose={() => setShowAES(false)} />
    </div>
  );
};

export default Rust;