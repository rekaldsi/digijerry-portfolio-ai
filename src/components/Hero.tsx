import { motion } from 'framer-motion'
import type { Easing } from 'framer-motion'
import GridParticles from './GridParticles'

const breathEase: Easing = 'easeInOut'

const stats = [
  { value: '25', label: 'Years in advertising' },
  { value: '4+', label: 'Years in AI' },
  { value: '42', label: 'Active agents' },
  { value: '4', label: 'Products live' },
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

      {/* Grid particles — tiny traffic on the grid lines */}
      <GridParticles />

      {/* Orange glow top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at -5% -5%, rgba(232,93,4,0.15) 0%, transparent 60%)',
        }}
      />

      {/* Animated lime accent glow bottom-right */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: breathEase }}
        style={{
          background: 'radial-gradient(ellipse 55% 45% at 105% 105%, rgba(200,241,53,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Slowly drifting ambient orb */}
      <motion.div
        className="absolute pointer-events-none overflow-hidden"
        style={{ width: '600px', height: '600px', top: '10%', right: '-150px', borderRadius: '50%' }}
        animate={{ y: [-15, 15, -15], x: [-8, 8, -8] }}
        transition={{ duration: 14, repeat: Infinity, ease: breathEase }}
      >
        <div style={{
          width: '100%', height: '100%', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,241,53,0.025) 0%, transparent 70%)',
        }} />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10 w-full">
        {/* H1 — the statement, not the name */}
        <motion.h1
          className="font-black leading-none tracking-tight mb-8"
          style={{ fontSize: 'clamp(2.8rem, 9vw, 6rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-white block">Creative</span>
          <motion.span
            className="inline-block"
            style={{ color: '#C8F135' }}
            animate={{
              x: [0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 2, -1, 1, 0],
              y: [0, 0, 0, 0, 0, 0, 0, 0, 0,  1,-1,  2,-1, 0],
            }}
            transition={{
              duration: 6,
              delay: 2,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.88, 0.91, 0.93, 0.95, 0.97, 1],
            }}
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

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-neutral-900 text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#C8F135' }}
          >
            See My Work ↓
          </a>
          <a
            href="https://www.instagram.com/sig.seeker/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-neutral-700 text-neutral-300 hover:border-neutral-500 transition-colors"
          >
            @sig.seeker
          </a>
          <a
            href="#contact"
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
