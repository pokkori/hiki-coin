import type { Metadata } from "next";
import "./globals.css";
import OrbBackground from "@/components/OrbBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://hiki-coin.vercel.app"),
  title: "$HIKI - The Hikikomori Meme Coin | Never Outside, Always On-Chain",
  description: "The meme coin for the world's most powerful crypto traders — Hikikomori. We don't go outside. We go to the moon. Built on Solana.",
};

const _faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "このゲームは無料で遊べますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、基本プレイは完全無料でお楽しみいただけます。ブラウザから即座にプレイ開始できます。"
      }
    },
    {
      "@type": "Question",
      "name": "スマートフォンでも遊べますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、スマートフォン・タブレット・PCすべてに対応しています。ブラウザからそのままプレイできます。"
      }
    },
    {
      "@type": "Question",
      "name": "アプリのダウンロードは必要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ダウンロード不要です。ブラウザを開いてアクセスするだけですぐに遊べます。"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqLd) }}
        />
      </head>
      <body className="antialiased">
        <OrbBackground theme="game" />
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </body>
    </html>
  );
}
