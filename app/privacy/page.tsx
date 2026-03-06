import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | $HIKI Coin",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="px-6 py-4 max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-white/50 hover:text-white">← Back to Home</Link>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-sm text-white/40 mb-8">Last updated: March 2026</p>

        <section className="space-y-8 text-sm text-white/70 leading-relaxed">
          <div>
            <h2 className="font-bold text-white mb-2">1. Overview</h2>
            <p>This website (&quot;$HIKI Coin&quot;) is an informational landing page operated by an individual. It does not collect personal information beyond standard web analytics.</p>
          </div>

          <div>
            <h2 className="font-bold text-white mb-2">2. Information Collected</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Access logs (IP address, browser information)</li>
              <li>Analytics data via Vercel Analytics (aggregated, non-personal)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-white mb-2">3. Third-Party Services</h2>
            <p>This site links to third-party services including Solana-based DEX platforms. Please review the privacy policies of those services independently.</p>
          </div>

          <div>
            <h2 className="font-bold text-white mb-2">4. Disclaimer</h2>
            <p>$HIKI is a meme coin created for entertainment purposes. Cryptocurrency investments involve significant risk. Nothing on this site constitutes financial advice. Never invest more than you can afford to lose.</p>
          </div>

          <div>
            <h2 className="font-bold text-white mb-2">5. Changes to This Policy</h2>
            <p>This policy may be updated at any time. Changes take effect upon posting to this page.</p>
          </div>

          <div>
            <h2 className="font-bold text-white mb-2">6. Contact</h2>
            <p>For questions regarding this policy, please reach out via the contact method listed on the main page.</p>
          </div>
        </section>
      </article>
    </main>
  );
}
