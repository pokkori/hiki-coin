import type { Metadata } from "next";
import "./globals.css";
import OrbBackground from "@/components/OrbBackground";

export const metadata: Metadata = {
  title: "$HIKI - The Hikikomori Meme Coin | Never Outside, Always On-Chain",
  description: "The meme coin for the world's most powerful crypto traders — Hikikomori. We don't go outside. We go to the moon. Built on Solana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <OrbBackground />
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </body>
    </html>
  );
}
