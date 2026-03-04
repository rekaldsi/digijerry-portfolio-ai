import { motion } from 'framer-motion'
import type { Easing } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const ease: Easing = 'easeOut'
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5, ease },
}

const features = [
  {
    num: '01',
    title: 'Portfolio Valuation',
    body: 'Every comic tracked like a stock. Real-time pricing pulled from market data gives collectors an accurate picture of what their collection is actually worth — not what they paid for it.',
  },
  {
    num: '02',
    title: 'Signing Planner',
    body: 'Cross-references your collection against convention guest lists. Shows you exactly which books to bring to which events based on who is signing and what you own.',
  },
  {
    num: '03',
    title: 'Cover Art Intelligence',
    body: 'ComicVine enrichment pipeline matches every issue to high-res cover art, series data, creator credits, and key issue flags — automatically, at scale.',
  },
  {
    num: '04',
    title: 'Insights Dashboard',
    body: 'Not just a list. A living picture of your collection — graded vs raw, key issues, run completion, publisher breakdown, and 30-day value trend.',
  },
]

export default function CaseKodex() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleBack = () => {
    navigate('/', { state: { from: '/#projects' } })
    setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="pt-16 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.button onClick={handleBack}
            className="text-neutral-500 text-sm font-medium hover:text-white transition-colors mb-12 flex items-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            ← Back to Work
          </motion.button>
          <motion.p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Case Study · KØDEX
          </motion.p>
          <motion.h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Your Collection.<br />Treated Like a Portfolio.
          </motion.h1>
          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            A full-stack intelligence platform built for serious comic collectors. Not a spreadsheet. Not a checklist. A living dashboard that tracks value, surfaces opportunities, and tells you exactly what your collection is worth right now.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {[{ value: '4.1K+', label: 'Comics tracked' }, { value: '$29K+', label: 'Collection value indexed' }, { value: 'Live', label: 'In production on Railway' }].map((s) => (
              <div key={s.label} className="rounded-xl px-5 py-3 border border-neutral-800">
                <div className="text-white font-bold text-sm">{s.value}</div>
                <div className="text-neutral-500 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SCREENSHOT */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <img src="/kodex-case.jpg" alt="KØDEX dashboard" className="w-full rounded-2xl border border-neutral-100 shadow-sm" />
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-white pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Collectors had no real picture of what they owned.</h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-6">
              Serious comic collectors were managing thousands of issues across spreadsheets, apps that hadn't been updated in years, and gut instinct. There was no single place that connected what you owned to what it was worth, who was signing near you, or what you needed to complete a run.
            </p>
            <blockquote className="border-l-4 pl-6 py-2" style={{ borderColor: '#E85D04' }}>
              <p className="text-xl font-semibold text-neutral-800 italic leading-relaxed">
                "Built to treat your comic collection the way a financial advisor treats your stock portfolio."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>What Was Built</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Intelligence at every layer.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 border border-neutral-800">
                <div className="text-4xl font-black mb-4 leading-none" style={{ color: '#E85D04' }}>{item.num}</div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Built from scratch. Running in production.</h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-8">
              KØDEX is a full-stack SaaS application built with React, Vite, Supabase, and Railway. The enrichment pipeline alone processes hundreds of thousands of records from ComicVine to power cover matching, series data, and key issue flags. This is what it looks like when a creative person learns to build.
            </p>
            <a href="mailto:sketchandslogan@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#E85D04' }}>
              Let's talk →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
