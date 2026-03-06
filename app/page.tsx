"use client";

import { useState, useEffect } from "react";

const CA_ADDRESS = "REPLACE_AFTER_PUMP_FUN_LAUNCH";

export default function HikiPage() {
  const [copied, setCopied] = useState(false);
  const [price, setPrice] = useState("???");

  const handleCopy = () => {
    navigator.clipboard.writeText(CA_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ノイズ背景 */}
      <div className="fixed inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      {/* ナビ */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-black text-xl tracking-tighter">$HIKI</span>
          <div className="flex gap-4 text-sm">
            <a href="#about" className="text-white/60 hover:text-white transition-colors">About</a>
            <a href="#tokenomics" className="text-white/60 hover:text-white transition-colors">Tokenomics</a>
            <a href="#how-to-buy" className="text-white/60 hover:text-white transition-colors">Buy</a>
            <a href="https://twitter.com/intent/tweet?text=%24HIKI+to+the+moon+%F0%9F%8C%99+Never+leave+your+room%2C+always+go+to+the+moon+%23HIKI+%23Solana+%23memecoins"
              target="_blank" rel="noopener noreferrer"
              className="bg-white text-black font-bold px-3 py-1 rounded-full hover:bg-white/90 transition-colors">
              𝕏 Share
            </a>
          </div>
        </div>
      </nav>

      {/* ヒーロー */}
      <section className="pt-32 pb-20 text-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        <div className="text-8xl mb-6 animate-bounce">🛏️</div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
          $HIKI
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-purple-400 mb-4">
          Never leave your room.<br />Always go to the moon.
        </p>
        <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
          The meme coin for the world's most powerful crypto traders —<br />
          <span className="text-white">Hikikomori</span>. We don't go outside. We go to the moon. 🌕
        </p>

        {/* CA表示 */}
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 mb-8">
          <span className="text-white/40 text-xs">CA:</span>
          <span className="text-sm font-mono text-white/80">{CA_ADDRESS}</span>
          <button onClick={handleCopy}
            className="text-xs bg-purple-500 hover:bg-purple-400 text-white px-3 py-1 rounded-lg transition-colors">
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#how-to-buy"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-lg px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            Buy $HIKI 🚀
          </a>
          <a href="https://pump.fun" target="_blank" rel="noopener noreferrer"
            className="border border-white/20 text-white font-bold text-lg px-8 py-4 rounded-full hover:border-white/50 transition-colors">
            View on Pump.fun
          </a>
        </div>
      </section>

      {/* ミーム説明 */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { emoji: "🛏️", title: "Never Goes Outside", desc: "True hikikomori don't leave their room. But they DO leave their wallets open for $HIKI." },
            { emoji: "📱", title: "Always On Crypto Twitter", desc: "While normies sleep, hikikomori are posting. 24/7 market monitoring from the comfort of their blanket." },
            { emoji: "🌕", title: "Moon Bound", desc: "The only place a hikikomori will go outside for. TO THE MOON. 🚀" },
          ].map((item) => (
            <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-colors">
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* トークノミクス */}
      <section id="tokenomics" className="py-20 px-6 bg-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-2">Tokenomics</h2>
          <p className="text-white/60 mb-10">シンプル。ガバない。ひきこもる。</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Total Supply", value: "1,000,000,000", sub: "1 Billion $HIKI" },
              { label: "Tax", value: "0%", sub: "Buy & Sell" },
              { label: "LP", value: "Burned 🔥", sub: "Locked forever" },
              { label: "Mint", value: "Revoked ✅", sub: "No rug" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="text-xs text-white/40 mb-1">{item.label}</div>
                <div className="text-xl font-black text-purple-400">{item.value}</div>
                <div className="text-xs text-white/40 mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
            <h3 className="font-bold mb-4">Distribution</h3>
            <div className="space-y-3">
              {[
                { label: "🌊 Liquidity Pool", pct: "80%", color: "bg-purple-500" },
                { label: "📢 Marketing & CEX", pct: "10%", color: "bg-pink-500" },
                { label: "👥 Community Rewards", pct: "10%", color: "bg-blue-500" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-sm w-44 text-white/80">{item.label}</span>
                  <div className="flex-1 bg-white/10 rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full`} style={{ width: item.pct }} />
                  </div>
                  <span className="text-sm font-bold text-white/80 w-10">{item.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ロードマップ */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-10">Roadmap</h2>
        <div className="space-y-4">
          {[
            { phase: "Phase 1", title: "ひきこもる", items: ["Pump.fun launch", "Website live", "X community launch", "1,000 holders"], done: true },
            { phase: "Phase 2", title: "バズる", items: ["10,000 holders", "Trending on Pump.fun", "Crypto Twitter viral", "CEX listings"], done: false },
            { phase: "Phase 3", title: "月へ行く", items: ["50,000 holders", "Major CEX listing", "Merch drop", "HIKI IRL meetup（部屋で）"], done: false },
          ].map((phase) => (
            <div key={phase.phase} className={`border rounded-2xl p-6 ${phase.done ? "border-purple-500/50 bg-purple-500/5" : "border-white/10 bg-white/5"}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${phase.done ? "bg-purple-500 text-white" : "bg-white/10 text-white/60"}`}>{phase.phase}</span>
                <h3 className="font-bold text-lg">{phase.title}</h3>
                {phase.done && <span className="text-green-400 text-sm">← 現在地</span>}
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {phase.items.map((item) => (
                  <li key={item} className="text-sm text-white/60 flex gap-2">
                    <span className={phase.done ? "text-purple-400" : "text-white/20"}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 買い方 */}
      <section id="how-to-buy" className="py-20 px-6 bg-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-2">How to Buy</h2>
          <p className="text-white/60 mb-10">部屋から出なくても買える。当然だ。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              { step: "01", title: "Phantomウォレットを作る", desc: "phantom.app からダウンロード。Chrome拡張機能として追加するだけ。" },
              { step: "02", title: "SOLを買う", desc: "bitFlyer・CoincheckなどでSOLを購入し、Phantomウォレットに送金。" },
              { step: "03", title: "Pump.funで$HIKIを買う", desc: "pump.funにアクセスし、$HIKIを検索。CAをコピーして検索するのが確実。" },
              { step: "04", title: "ひきこもって待つ", desc: "あとは寝ながら待つだけ。これがhikikomoriの真骨頂。🛏️🌕" },
            ].map((step) => (
              <div key={step.step} className="bg-black border border-white/10 rounded-2xl p-5 hover:border-purple-500/50 transition-colors">
                <div className="text-4xl font-black text-white/10 mb-2">{step.step}</div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button onClick={handleCopy}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-lg px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
              {copied ? "Copied! 🎉" : "Copy Contract Address"}
            </button>
          </div>
        </div>
      </section>

      {/* 免責事項 */}
      <section className="py-10 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/30 text-xs leading-relaxed">
            $HIKI is a meme coin created for entertainment purposes only. It has no intrinsic value or financial utility.
            This is NOT an investment. Do not invest money you cannot afford to lose.
            $HIKIはエンターテインメント目的のミームコインです。投資を推奨するものではありません。
          </p>
          <p className="text-white/20 text-xs mt-4">© 2026 $HIKI — Never outside, always on-chain.</p>
        </div>
      </section>
    </main>
  );
}
