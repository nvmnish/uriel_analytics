import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 4000);
    }
  };

  // The hero words that sit on a single line and fade in sequentially one word at a time
  const heroWords = [
    { text: 'Data', isAccent: false },
    { text: 'that', isAccent: false },
    { text: 'gives', isAccent: false },
    { text: 'uriel', isAccent: true },
    { text: 'clarity.', isAccent: false },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#473932] text-white overflow-hidden flex flex-col justify-between selection:bg-[#ff8344]/35 selection:text-white">
      {/* 
        Two-Blob Light Aura matching the reference image:
        1. Large, prominent, luminous yellow blob (#fffcc8) in center-left, blending into background
        2. Smaller, less opaque blended orange blob (#ff8344) extending to the right
      */}

      {/* Blob 1: Softened Yellow Blob with lowered opacity for high text legibility */}
      <div
        className="pointer-events-none absolute top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] rounded-full z-0 select-none opacity-100"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 252, 200, 0.72) 0%, rgba(255, 246, 175, 0.48) 26%, rgba(245, 225, 150, 0.22) 52%, rgba(71, 57, 50, 0) 72%)',
          filter: 'blur(36px)',
        }}
      />

      {/* Blob 2: Smaller, gentle Orange Blob with lowered opacity */}
      <div
        className="pointer-events-none absolute top-[51%] left-[57%] sm:left-[56%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[330px] md:h-[330px] rounded-full z-0 select-none opacity-95"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 131, 68, 0.32) 0%, rgba(255, 131, 68, 0.18) 32%, rgba(255, 145, 80, 0.08) 54%, rgba(71, 57, 50, 0) 72%)',
          filter: 'blur(32px)',
        }}
      />

      {/* 
        Obvious, Tactile Noise Overlays (matching the coarse film grain in reference image):
      */}
      {/* Primary photographic film grain */}
      <div
        className="pointer-events-none fixed inset-0 z-[2] opacity-[0.20] mix-blend-overlay select-none"
        style={{
          backgroundImage: `url("/noise.png")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '160px 160px',
        }}
      />

      {/* Secondary noise layer for deep grainy texture across dark background */}
      <div
        className="pointer-events-none fixed inset-0 z-[2] opacity-[0.01] mix-blend-color-dodge select-none"
        style={{
          backgroundImage: `url("/noise.png")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* High-frequency procedural noise */}
      <div
        className="pointer-events-none fixed inset-0 z-[2] opacity-[0.09] mix-blend-screen select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top Header: Uriel logo in top-left matching reference image */}
      <header className="relative z-10 w-full px-8 py-7 sm:px-12 sm:py-9 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <img
            src="/assets/aistudio/Uriel_logo_7637440f.png"
            alt="Uriel Logo"
            className="h-9 sm:h-11 w-auto object-contain select-none transition-transform duration-300 hover:scale-105 -my-2"
            referrerPolicy="no-referrer"
          />
          <span className="text-white font-medium text-sm sm:text-base tracking-tight font-sans select-none">
            Uriel analytics
          </span>
        </div>
      </header>

      {/* Main Hero Stage */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center -mt-6 sm:-mt-8">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          {/* 
            White Heading fitting on the SAME SINGLE LINE:
            "Data that gives uriel clarity."
            Words fade in one word at a time sequentially.
          */}
          <h1 className="w-full text-center tracking-tight text-white font-light font-sans select-none text-[1.85rem] sm:text-[2.65rem] md:text-[3.35rem] lg:text-[4rem] xl:text-[4.35rem] leading-[1.2] drop-shadow-[0_2px_12px_rgba(45,35,30,0.35)]">
            <div className="flex flex-wrap sm:flex-nowrap items-baseline justify-center gap-x-2 sm:gap-x-3.5 lg:gap-x-4">
              {heroWords.map((word, i) => (
                <motion.span
                  key={`word-${word.text}-${i}`}
                  initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 1.4,
                    delay: 0.2 + i * 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={
                    word.isAccent
                      ? 'font-mono italic font-light text-white inline-block'
                      : 'text-white inline-block'
                  }
                  style={
                    word.isAccent
                      ? {
                          fontFamily: "'Fira Code', monospace",
                          fontWeight: 300,
                          fontStyle: 'italic',
                          letterSpacing: '-0.16em',
                          marginRight: '0.14em',
                        }
                      : undefined
                  }
                >
                  {word.text}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* 
            Solid White Rounded Rectangle (Zero Border) Email Input with Button
          */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.2 + heroWords.length * 0.45 + 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8 sm:mt-10 w-full max-w-md mx-auto"
          >
            {submitted ? (
              <div className="flex items-center justify-center gap-2 py-3 px-5 bg-white rounded-2xl sm:rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.18)] text-xs font-medium text-neutral-800 transition-all border-0">
                <Check className="w-4 h-4 text-[#ff8344]" />
                <span>Invitation request received. We will be in touch shortly.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center w-full bg-white rounded-2xl sm:rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.22)] p-1.5 transition-shadow hover:shadow-[0_6px_36px_rgba(0,0,0,0.28)] border-0"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter work email for early access"
                  required
                  className="w-full bg-transparent text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 pl-4 pr-24 py-2 border-0 outline-none focus:outline-none focus:ring-0 font-sans"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl sm:rounded-full bg-[#473932] hover:bg-[#ff8344] text-white text-xs font-medium transition-colors inline-flex items-center gap-1.5 shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      {/* Quiet Minimal Footer */}
      <footer className="relative z-10 w-full px-8 py-6 sm:px-12 sm:py-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-white/30 font-sans gap-2">
        <div className="flex items-center gap-2">
          <span className="font-medium text-white/50">uriel</span>
          <span>·</span>
          <span>Clarity in Data</span>
        </div>

        <div className="flex items-center gap-4 text-white/30">
          <span>
            Fira Code <span className="italic font-light text-white/40">light</span> &amp; Manrope
          </span>
          <span>·</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
