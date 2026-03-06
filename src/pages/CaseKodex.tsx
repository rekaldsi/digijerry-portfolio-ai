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
    title: 'Portfolio Valuation Engine',
    body: 'Every comic tracked against real market pricing data. The dashboard shows total collection value, 30-day trend, and per-issue fair market estimates. Same mental model as a brokerage account, applied to a long box.',
    image: '/kodex-insights.jpg',
    imageAlt: 'KØDEX Insights, $52,405 portfolio value with 30-day trend',
    caption: 'Portfolio dashboard: $52,405 tracked value, 30-day trend, and per-issue fair market estimates.',
  },
  {
    num: '02',
    title: 'Collection Grid',
    body: 'A visual grid of every issue in the collection, cover art matched from the ComicVine enrichment pipeline, graded/raw status, duplicate detection, barcode scan import, and filter by publisher, series, or creator. 4,099 issues and counting.',
    image: '/kodex-collection.jpg',
    imageAlt: 'KØDEX Collection grid view',
    caption: 'Collection grid: 4,099 issues, cover art matched by the enrichment pipeline.',
  },
  {
    num: '03',
    title: 'Signing Planner',
    body: 'Cross-references your collection against convention guest lists in real time. Shows you which books to bring to which events (by creator, by event, by city) so you never miss a signing opportunity for something you already own.',
    image: '/kodex-signings.jpg',
    imageAlt: 'KØDEX Signing Planner, 64 events, 64 creators tracked',
    caption: 'Signing Planner: 64 events, 64 creators tracked against your personal collection.',
  },
  {
    num: '04',
    title: 'Smart Insights and Milestones',
    body: 'AI-powered collection analytics surface patterns a collector wouldn\'t find manually, run completion status, key issue flags, publisher concentration, milestone alerts ("Your collection crossed $50,000 in value"), and growth trends over time.',
    image: null,
    caption: null,
  },
]

const pipeline = [
  'Collector scans a barcode or searches a title to add an issue',
  'ComicVine enrichment pipeline matches the issue to series data, creator credits, and cover art',
  'GCD bulk data fills in publisher, print run, and key issue metadata',
  'PriceCharting and GoCollect feeds attach real market pricing',
  'Issue appears in the collection grid with full art, grade, and value',
  'Signing Planner cross-references the issue against upcoming convention guest lists',
  'Insights dashboard recalculates portfolio value, trend, and smart alerts',
]

const decisions = [
  {
    title: 'Stock Portfolio Mental Model',
    body: 'Most collector apps think like libraries. KØDEX was designed to think like a brokerage. That framing drove every UI decision, value front and center, trend lines, key issue flags, run completion as a strategic target.',
  },
  {
    title: 'Enrichment Pipeline Over Manual Entry',
    body: 'The collection grows because the pipeline does the work. Scan a barcode and the system builds the full record, art, metadata, pricing, creator credits. The collector should never type a series name.',
  },
  {
    title: 'Signing Planner as the Killer Feature',
    body: 'Every serious collector has missed a signing for a book they already owned. Building a planner that cross-references your collection against live convention guest data turns a problem everyone has into something KØDEX solves.',
  },
  {
    title: 'Scale First, Polish After',
    body: 'The enrichment pipeline was built to handle 185,000+ catalog records before the UI was finished. Getting the data layer right at scale meant the collector experience would always have something to display, even during development.',
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
            A full-stack intelligence platform built for serious comic collectors. Not a spreadsheet. Not a checklist. A living system that tracks real market value, enriches every issue with cover art and metadata, surfaces signing opportunities at conventions, and tells you exactly what your collection is worth, right now.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {[
              { value: '4,099', label: 'Comics in collection' },
              { value: '$52K+', label: 'Portfolio value tracked' },
              { value: '185K+', label: 'Catalog records enriched' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl px-5 py-3 border border-neutral-800">
                <div className="text-white font-bold text-sm">{s.value}</div>
                <div className="text-neutral-400 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HERO SCREENSHOT */}
      <section className="bg-white pt-16 pb-4 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <video src="/kodex-dashboard-loop.mp4" autoPlay loop muted playsInline className="w-full rounded-2xl border border-neutral-100 shadow-sm" />
            <p className="text-sm text-neutral-500 mt-3 text-center italic">Dashboard, collection value, 30-day trend, key issue counts, and run completion intelligence</p>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Serious collectors had no serious tool.</h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed text-lg">
              <p>
                The comic collecting market is not small. Graded key issues sell for tens of thousands of dollars. Collections built over decades can be worth hundreds of thousands. And yet the tools collectors were using, spreadsheets, apps built in the 2000s, manual price lookups, had no concept of the collection as an asset with real financial weight.
              </p>
              <p>
                Collectors also had no systematic way to connect what they owned to signing opportunities at conventions. Every event, they'd manually scroll guest lists hoping to remember which books they had. It was a problem everyone had and nobody had solved.
              </p>
              <p>
                KØDEX was built to solve both, and to do it at the level of sophistication the market actually deserved.
              </p>
            </div>
            <blockquote className="border-l-2 border-[#C8F135] pl-4 md:pl-6 my-8 italic text-base leading-relaxed">
              <p className="text-neutral-700 font-medium">
                "Built to treat your comic collection the way a financial advisor treats your stock portfolio."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* FEATURES, alternating with screenshots */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The System</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built feature by feature, each one earning its place.</h2>
          </motion.div>

          <div className="space-y-28">
            {features.map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="transition-all duration-200 ease-out">
                <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                  <div className="flex-1">
                    <div className="text-4xl font-black mb-5 leading-none" style={{ color: '#E85D04' }}>{item.num}</div>
                    <h3 className="text-white font-bold text-2xl mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{item.body}</p>
                  </div>
                  {item.image && (
                    <div className="flex-1">
                      <img src={item.image} alt={item.imageAlt} className="w-full rounded-xl border border-neutral-800" />
                      {item.caption && <p className="text-sm text-neutral-500 mt-3 italic">{item.caption}</p>}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <blockquote className="border-l-2 border-[#C8F135] pl-4 md:pl-6 my-6 italic text-base leading-relaxed">
              <p className="text-neutral-300 font-medium">
                "The enrichment pipeline was built to handle 185,000+ catalog records before the UI was finished. Getting the data layer right at scale meant the collector experience would always have something to display."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* THE PIPELINE */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Data Pipeline</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">One scan. Seven steps. A fully enriched record.</h2>
            <div className="space-y-4">
              {pipeline.map((step, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4 transition-all duration-200 ease-out">
                  <span className="text-sm font-black mt-0.5 shrink-0" style={{ color: '#E85D04' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>Design Decisions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">The thinking behind the product.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {decisions.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 border border-neutral-800 transition-all duration-200 ease-out">
                <h3 className="text-white font-semibold text-base mb-3">{item.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Built from scratch. Running in production. Getting smarter every day.</h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-8">
              KØDEX is a full-stack SaaS application built with React, Vite, Supabase, and Railway. The enrichment pipeline runs continuously, processing ComicVine, GCD, GoCollect, and PriceCharting data across 185,000+ catalog records. This is what it looks like when a creative person learns to think like a product engineer and build accordingly.
            </p>
            <blockquote className="border-l-2 border-[#C8F135] pl-4 md:pl-6 my-8 italic text-base leading-relaxed text-left">
              <p className="text-neutral-700 font-medium">
                "The collector experience was designed first. The infrastructure was built to deserve it."
              </p>
            </blockquote>
            <a href="/#contact" onClick={(e) => { e.preventDefault(); sessionStorage.setItem("hashNav", "#contact"); window.location.href = "/#contact"; }}
              className="inline-flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-80"
              style={{ color: '#E85D04' }}>
              Let's talk →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
