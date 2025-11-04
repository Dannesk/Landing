// app/not-found.js
export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-r from-[#0a0a0a] via-[#2a2a2a] to-black">
      {/* ✅ Subtle SVG grid background (same as HeroSection) */}
      <svg
        className="absolute inset-0 w-full h-full z-0 opacity-5"  // <<--- soften with opacity
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="pageGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="cyan"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pageGrid)" />
      </svg>

      {/* ✅ 404 content sits above grid */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-cyan-400 text-center font-mono">
        <h1 className="text-6xl mb-4">404</h1>
        <p className="text-lg mb-6 text-neutral-300">
          The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="border border-cyan-400 px-6 py-2 rounded-md hover:bg-cyan-400 hover:text-black transition-all duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
