import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#FAFAF9]">
      {/* Subtle radial gradient from top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at -10% -10%, rgba(232,93,4,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <p
            className="text-xs font-semibold tracking-[0.15em] sm:tracking-[0.25em] uppercase mb-6"
            style={{ color: '#E85D04' }}
          >
            Creative Generalist · AI Architect · Product Builder
          </p>

          {/* H1 */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-neutral-900 leading-none tracking-tight mb-6">
            JERRY<br />CIESLIK
          </h1>

          {/* Subhead */}
          <p className="text-xl text-neutral-500 max-w-lg mb-10 leading-relaxed">
            25 years of creative strategy. 4 years of AI. Built to ship.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#E85D04' }}
            >
              See My Work ↓
            </a>
            <a
              href="https://www.instagram.com/sig.seeker/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-neutral-300 text-neutral-700 hover:border-neutral-500 transition-colors"
            >
              Instagram: @sig.seeker
            </a>
            <a
              href="mailto:sketchandslogan@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-neutral-300 text-neutral-700 hover:border-neutral-500 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-neutral-400">
            <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
