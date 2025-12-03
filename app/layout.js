// app/layout.js or app/layout.tsx
import "./globals.css"; // Global styles



export const metadata = {
  title: "Dannesk",
  description: "An open source DeFi app built in Rust.",
  keywords: ["DeFi", "Rust", "open source", "blockchain", "XRP", "desktop app", "BTC", "Bitcoin", "RLUSD", "EUROP"],
  applicationName: "Dannesk",
  generator: "Next.js",
  openGraph: {
    title: "Dannesk",
    description: "An open source DeFi app built in Rust.",
    url: "https://dannesk.com",
    siteName: "Dannesk",
    images: [
      {
        url: "https://dannesk.com/images/og-image.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
