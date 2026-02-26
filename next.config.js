/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Next.js 16 uses the 'turbopack' key for customization
  turbopack: {
    // Turbopack handles Wasm differently; 
    // Usually, you don't even need the 'experiments' flags anymore!
  },
};

module.exports = nextConfig;