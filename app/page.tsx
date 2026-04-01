"use client";

import { useState, useEffect, useRef } from "react";

const CA_ADDRESS = "REPLACE_AFTER_PUMP_FUN_LAUNCH";

/* ---------- SVG Icons ---------- */
function IconBed({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="10" y="55" width="80" height="25" rx="6" fill="#7C3AED" />
      <rect x="10" y="45" width="35" height="15" rx="4" fill="#A78BFA" />
      <circle cx="27" cy="40" r="10" fill="#DDD6FE" />
      <rect x="5" y="75" width="8" height="12" rx="2" fill="#6D28D9" />
      <rect x="87" y="75" width="8" height="12" rx="2" fill="#6D28D9" />
      <rect x="12" y="52" width="76" height="4" rx="2" fill="#8B5CF6" />
    </svg>
  );
}

function IconMoon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z" fill="#FBBF24" />
    </svg>
  );
}

function IconRocket({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconPhone({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="25" y="10" width="50" height="80" rx="10" fill="#4C1D95" stroke="#7C3AED" strokeWidth="3" />
      <rect x="30" y="18" width="40" height="55" rx="3" fill="#1E1B4B" />
      <circle cx="50" cy="80" r="4" fill="#7C3AED" />
      <rect x="38" y="30" width="24" height="3" rx="1" fill="#22D3EE" />
      <rect x="35" y="37" width="30" height="3" rx="1" fill="#818CF8" />
      <rect x="35" y="44" width="20" height="3" rx="1" fill="#818CF8" />
      <circle cx="62" cy="25" r="3" fill="#34D399" />
    </svg>
  );
}

function IconTarget({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#7C3AED" strokeWidth="4" />
      <circle cx="50" cy="50" r="28" fill="none" stroke="#A78BFA" strokeWidth="3" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="#C4B5FD" strokeWidth="2" />
      <circle cx="50" cy="50" r="5" fill="#FBBF24" />
      <line x1="50" y1="5" x2="50" y2="20" stroke="#7C3AED" strokeWidth="2" />
      <line x1="50" y1="80" x2="50" y2="95" stroke="#7C3AED" strokeWidth="2" />
      <line x1="5" y1="50" x2="20" y2="50" stroke="#7C3AED" strokeWidth="2" />
      <line x1="80" y1="50" x2="95" y2="50" stroke="#7C3AED" strokeWidth="2" />
    </svg>
  );
}

function IconFire({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 2c1 4-2 6-2 10a4 4 0 0 0 8 0c0-4-3-6-3-10 3 2 7 6 7 12a8 8 0 1 1-16 0c0-4 3-8 6-12z" fill="#F97316" />
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#22C55E" />
      <path d="M8 12l2.5 3L16 9" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconWave({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0 4 3 6 0" fill="none" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 18c2-3 4-3 6 0s4 3 6 0 4-3 6 0 4 3 6 0" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconMegaphone({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

function IconUsers({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/* ---------- Particles ---------- */
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number; color: string }[] = [];
    const colors = ["#7C3AED", "#A78BFA", "#FBBF24", "#EC4899", "#6366F1", "#8B5CF6"];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 7; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.3 - 0.15,
        alpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = p.alpha;
        ctx!.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;
      }
      ctx!.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />;
}

export default function HikiPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CA_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen text-white overflow-x-hidden relative" style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(124,58,237,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(236,72,153,0.10) 0%, transparent 50%)" }}>

      <Particles />

      {/* noise overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-[1]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      {/* Nav - glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 px-6 py-3" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-black text-xl tracking-tighter bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">$HIKI</span>
          <div className="flex gap-4 text-sm items-center">
            <a href="#about" className="text-white/60 hover:text-white transition-colors min-h-[44px] inline-flex items-center">About</a>
            <a href="#tokenomics" className="text-white/60 hover:text-white transition-colors min-h-[44px] inline-flex items-center">Tokenomics</a>
            <a href="#how-to-buy" className="text-white/60 hover:text-white transition-colors min-h-[44px] inline-flex items-center">Buy</a>
            <a href="https://twitter.com/intent/tweet?text=%24HIKI+to+the+moon+%23HIKI+%23Solana+%23memecoins"
              target="_blank" rel="noopener noreferrer"
              aria-label="Share on X"
              className="bg-white text-black font-bold px-3 py-1 rounded-full hover:bg-white/90 transition-colors min-h-[44px] inline-flex items-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current mr-1" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Share
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 text-center px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative">
          <div className="flex justify-center mb-6">
            <div className="animate-bounce">
              <IconBed className="w-24 h-24" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">
              $HIKI
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-purple-400 mb-4">
            Never leave your room.<br />Always go to the moon.
          </p>
          <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            The meme coin for the world&apos;s most powerful crypto traders —<br />
            <span className="text-white">Hikikomori</span>. We don&apos;t go outside. We go to the moon. <IconMoon className="w-5 h-5 inline-block -mt-0.5" />
          </p>

          {/* CA - glassmorphism */}
          <div className="inline-flex items-center gap-3 rounded-xl px-5 py-3 mb-8 border border-white/10" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}>
            <span className="text-white/40 text-xs">CA:</span>
            <span className="text-sm font-mono text-white/80">{CA_ADDRESS}</span>
            <button onClick={handleCopy}
              aria-label="Copy contract address"
              className="text-xs bg-purple-500 hover:bg-purple-400 text-white px-3 py-1 rounded-lg transition-colors min-h-[44px]">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#how-to-buy"
              aria-label="Buy HIKI token"
              className="inline-flex items-center justify-center gap-2 text-white font-black text-lg px-8 min-h-[52px] rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)" }}>
              Buy $HIKI <IconRocket className="w-5 h-5" />
            </a>
            <a href="https://pump.fun" target="_blank" rel="noopener noreferrer"
              aria-label="View on Pump.fun"
              className="border border-white/20 text-white font-bold text-lg px-8 min-h-[52px] rounded-2xl hover:border-white/50 transition-colors inline-flex items-center justify-center">
              View on Pump.fun
            </a>
          </div>
        </div>
      </section>

      {/* About cards - glassmorphism */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <IconBed className="w-12 h-12" />, title: "Never Goes Outside", desc: "True hikikomori don't leave their room. But they DO leave their wallets open for $HIKI." },
            { icon: <IconPhone className="w-12 h-12" />, title: "Always On Crypto Twitter", desc: "While normies sleep, hikikomori are posting. 24/7 market monitoring from the comfort of their blanket." },
            { icon: <IconTarget className="w-12 h-12" />, title: "Moon Bound", desc: "The only place a hikikomori will go outside for. TO THE MOON." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:scale-[1.02] border border-white/10" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}>
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-20 px-6 relative z-10" style={{ background: "rgba(255,255,255,0.03)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">Tokenomics</h2>
          <p className="text-white/60 mb-10">Simple. No rug. Just hikikomori.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Total Supply", value: "1,000,000,000", sub: "1 Billion $HIKI" },
              { label: "Tax", value: "0%", sub: "Buy & Sell" },
              { label: "LP", value: "Burned", sub: "Locked forever", hasIcon: "fire" },
              { label: "Mint", value: "Revoked", sub: "No rug", hasIcon: "check" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl p-5 border border-white/10" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}>
                <div className="text-xs text-white/40 mb-1">{item.label}</div>
                <div className="text-xl font-black text-purple-400 flex items-center justify-center gap-1">
                  {item.value}
                  {item.hasIcon === "fire" && <IconFire className="w-5 h-5" />}
                  {item.hasIcon === "check" && <IconCheck className="w-5 h-5" />}
                </div>
                <div className="text-xs text-white/40 mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-6 text-left border border-white/10" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}>
            <h3 className="font-bold mb-4">Distribution</h3>
            <div className="space-y-3">
              {[
                { label: "Liquidity Pool", icon: <IconWave className="w-4 h-4 inline -mt-0.5 mr-1" />, pct: "80%", color: "bg-purple-500" },
                { label: "Marketing & CEX", icon: <IconMegaphone className="w-4 h-4 inline -mt-0.5 mr-1 text-pink-400" />, pct: "10%", color: "bg-pink-500" },
                { label: "Community Rewards", icon: <IconUsers className="w-4 h-4 inline -mt-0.5 mr-1 text-blue-400" />, pct: "10%", color: "bg-blue-500" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-sm w-44 text-white/80">{item.icon}{item.label}</span>
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

      {/* Roadmap */}
      <section className="py-20 px-6 max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl font-black text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">Roadmap</h2>
        <div className="space-y-4">
          {[
            { phase: "Phase 1", title: "Hikikomoru", items: ["Pump.fun launch", "Website live", "X community launch", "1,000 holders"], done: true },
            { phase: "Phase 2", title: "Go Viral", items: ["10,000 holders", "Trending on Pump.fun", "Crypto Twitter viral", "CEX listings"], done: false },
            { phase: "Phase 3", title: "To the Moon", items: ["50,000 holders", "Major CEX listing", "Merch drop", "HIKI IRL meetup (in your room)"], done: false },
          ].map((phase) => (
            <div key={phase.phase} className={`border rounded-2xl p-6 ${phase.done ? "border-purple-500/50" : "border-white/10"}`} style={{ background: phase.done ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${phase.done ? "bg-purple-500 text-white" : "bg-white/10 text-white/60"}`}>{phase.phase}</span>
                <h3 className="font-bold text-lg">{phase.title}</h3>
                {phase.done && <span className="text-green-400 text-sm flex items-center gap-1"><IconCheck className="w-4 h-4" /> Current</span>}
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {phase.items.map((item) => (
                  <li key={item} className="text-sm text-white/60 flex gap-2">
                    <span className={phase.done ? "text-purple-400" : "text-white/20"}>
                      <svg viewBox="0 0 16 16" className="w-4 h-4 inline" aria-hidden="true"><path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How to buy */}
      <section id="how-to-buy" className="py-20 px-6 relative z-10" style={{ background: "rgba(255,255,255,0.03)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">How to Buy</h2>
          <p className="text-white/60 mb-10">Buy from your room. Obviously.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              { step: "01", title: "Create a Phantom wallet", desc: "Download from phantom.app. Just add the Chrome extension." },
              { step: "02", title: "Buy SOL", desc: "Purchase SOL from an exchange and send to your Phantom wallet." },
              { step: "03", title: "Buy $HIKI on Pump.fun", desc: "Go to pump.fun, search for $HIKI. Copy the CA for precise search." },
              { step: "04", title: "Stay in bed and hold", desc: "Now just wait in your blanket. This is the hikikomori way." },
            ].map((step) => (
              <div key={step.step} className="rounded-2xl p-5 hover:border-purple-500/50 transition-all border border-white/10" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)" }}>
                <div className="text-4xl font-black text-white/10 mb-2">{step.step}</div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button onClick={handleCopy}
              aria-label="Copy contract address"
              className="inline-flex items-center justify-center gap-2 text-white font-black text-lg px-8 min-h-[52px] rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)" }}>
              {copied ? "Copied!" : "Copy Contract Address"}
            </button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/30 text-xs leading-relaxed">
            $HIKI is a meme coin created for entertainment purposes only. It has no intrinsic value or financial utility.
            This is NOT an investment. Do not invest money you cannot afford to lose.
            $HIKI is an entertainment meme coin. It is not a recommendation to invest.
          </p>
          <p className="text-white/20 text-xs mt-4">&copy; 2026 $HIKI &mdash; Never outside, always on-chain.</p>
          <p className="text-white/20 text-xs mt-2"><a href="/privacy" className="underline hover:text-white/40">Privacy Policy</a></p>
        </div>
      </section>
    </main>
  );
}
