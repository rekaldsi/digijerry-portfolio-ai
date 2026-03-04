import { motion } from 'framer-motion'

const stats = [
  { value: '25', label: 'Years creative' },
  { value: '4+', label: 'Years AI' },
  { value: '42', label: 'Active agents' },
  { value: '5', label: 'Products live' },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#FAFAF9]">

      {/* Background grid — visible on all screens */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232,93,4,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,93,4,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orange radial glow top-left — stronger on mobile */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 50% at -5% -5%, rgba(232,93,4,0.10) 0%, transparent 65%)',
        }}
      />

      {/* Orange accent bar — left edge on desktop, top bar on mobile */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 md:block hidden"
        style={{ backgroundColor: '#E85D04' }}
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 md:hidden block"
        style={{ backgroundColor: '#E85D04' }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10 w-full">
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
          <div className="flex flex-wrap gap-4 mb-12">
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
              @sig.seeker
            </a>
            <a
              href="mailto:sketchandslogan@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-neutral-300 text-neutral-700 hover:border-neutral-500 transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Stat strip — gives the mobile hero life */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-200 rounded-2xl overflow-hidden border border-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {stats.map((s, i) => (
              <div key={s.label} className="bg-[#FAFAF9] px-5 py-4 flex flex-col">
                <motion.span
                  className="text-3xl font-black text-neutral-900 leading-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  style={{ color: i === 0 ? '#E85D04' : undefined }}
                >
                  {s.value}
                </motion.span>
                <span className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-medium">{s.label}</span>
              </div>
            ))}
          </motion.div>
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
