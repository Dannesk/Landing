// app/layout.js or app/layout.tsx
import "./globals.css"; // Global styles



export const metadata = {
  metadataBase: new URL("https://dannesk.com"), // This stops the warning
  title: "Dannesk",
  description: "Non-custodial DeFi vault built in 100% Rust. Ultra-fast settlement on XRPL with bare-metal performance. Supports Bitcoin, XRPL, RLUSD, and EUROP.",
  keywords: ["DeFi", "Rust", "open source", "blockchain", "XRP", "desktop app", "BTC", "Bitcoin", "RLUSD", "EUROP"],
  applicationName: "Dannesk",
  generator: "Next.js",
  openGraph: {
    title: "Dannesk",
    description: "Non-custodial DeFi vault built in 100% Rust. Ultra-fast settlement on XRPL with bare-metal performance.",
    url: "https://dannesk.com",
    siteName: "Dannesk",
    images: [
      {
        url: "/images/og-image.png", // Next.js will now prefix this with your metadataBase
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dannesk | 100% Rust DeFi",
    description: "Non-custodial DeFi vault with bare-metal performance.",
    images: ["/images/og-image.png"], // Twitter uses 'images', not 'url'
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
