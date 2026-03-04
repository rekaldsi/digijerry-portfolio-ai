import { motion } from 'framer-motion'

const stats = [
  { value: '25', label: 'Years in advertising' },
  { value: '4+', label: 'Years in AI' },
  { value: '42', label: 'Active agents' },
  { value: '5', label: 'Products live' },
]

const prompts = [
  'Show me your ad work',
  'What AI have you built?',
  'Who have you worked for?',
  "What's your background?",
]

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden" style={{ backgroundColor: '#0f0f0f' }}>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orange glow top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at -5% -5%, rgba(232,93,4,0.15) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10 w-full">
        {/* H1 — the statement, not the name */}
        <motion.h1
          className="font-black leading-none tracking-tight mb-8"
          style={{ fontSize: 'clamp(3rem, 14vw, 8rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-white block">Creative</span>
          <motion.span
            className="block"
            style={{ color: '#C8F135' }}
            animate={{ skewX: [0, -1.5, 1, -0.5, 0] }}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeInOut' }}
          >
            Generalist.
          </motion.span>
          <span className="text-white block">AI Architect.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          className="text-neutral-400 text-lg max-w-lg mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          25 years of creative strategy. 4 years of AI. Built to ship.
        </motion.p>

        {/* Prompt chips */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {prompts.map((p) => (
            <a
              key={p}
              href="#projects"
              className="text-xs font-semibold px-4 py-2 rounded-full border border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-neutral-200 transition-colors uppercase tracking-wider"
            >
              {p}
            </a>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-neutral-900 text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#C8F135' }}
          >
            See My Work ↓
          </a>
          <a
            href="mailto:sketchandslogan@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-neutral-700 text-neutral-300 hover:border-neutral-500 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="px-5 py-4 flex flex-col" style={{ backgroundColor: '#141414' }}>
              <span
                className="text-3xl font-black leading-none"
                style={{ color: i === 0 ? '#C8F135' : '#ffffff' }}
              >
                {s.value}
              </span>
              <span className="text-xs text-neutral-500 mt-1 uppercase tracking-wider font-medium">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8L10 13L15 8" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
