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
    body: 'Live market pricing from PriceCharting and GoCollect mapped to every issue in the vault. Raw fair market value, CGC-graded values across every grade tier, 30-day trend lines, and total portfolio valuation. Collectors see their collection the way an investor sees a stock portfolio, with the data to back it up.',
    image: '/kodex-portfolio-value.png',
    imageAlt: 'KØDEX portfolio valuation with total value, 30-day trend, and pricing coverage',
    caption: 'Live portfolio valuation powered by PriceCharting and GoCollect pricing feeds.',
  },
  {
    num: '02',
    title: 'Collection Grid',
    body: 'Every issue rendered with cover art auto-matched from a database of millions of covers. CGC and CBCS slab presentation, duplicate copy detection with visual badges, barcode scan import, and deep filtering by publisher, series, creator, era, or grade. Designed to handle collections from 50 books to 50,000.',
    image: '/kodex-comic-grid.png',
    imageAlt: 'KØDEX Collection grid with cover art, grade badges, and filtering',
    caption: 'Collection grid with auto-matched cover art, slab presentation, and deep filtering.',
  },
  {
    num: '03',
    title: 'Signing Planner',
    body: 'Cross-references a collector\'s entire library against live convention guest lists. Surfaces which books to bring to which events, mapped by creator, by show, by city. Every serious collector has missed a signing for a book they already owned. KØDEX makes sure that never happens again.',
    image: null,
    imageAlt: null,
    caption: null,
  },
  {
    num: '04',
    title: 'Smart Insights Engine',
    body: 'Pattern recognition across the entire collection. Run completion tracking, key issue identification, publisher concentration analysis, milestone alerts when the portfolio crosses value thresholds, and investment performance scoring. The system finds what a collector would never find manually, because it never stops looking.',
    image: '/kodex-smart-insights.png',
    imageAlt: 'KØDEX Smart Insights showing milestone alerts, trend analysis, and collection intelligence',
    caption: 'AI-generated insights: milestones, trends, opportunities, and investment intelligence.',
  },
  {
    num: '05',
    title: 'DEX: The Intelligence Layer',
    body: 'A conversational AI agent that sits on top of the entire KØDEX intelligence database. It knows every comic, every creator, every price point, every convention guest. But it also knows YOUR collection. Ask it what to grade, what\'s trending, what you\'re missing from a run, or what your Spider-Man books are worth today. It\'s not a chatbot. It\'s a comic expert with perfect memory that works exclusively for you.',
    image: '/kodex-dex.png',
    imageAlt: 'DEX, the KØDEX AI intelligence agent, answering personalized collection questions',
    caption: 'DEX: an AI agent with access to millions of data points, scoped to your collection.',
  },
]

const pipeline = [
  'Collector scans a barcode or searches a title to add an issue',
  'ComicVine API matches the issue to series metadata, creator credits, and cover art',
  'Grand Comics Database (GCD) layers in publisher data, print runs, and key issue flags',
  'PriceCharting and GoCollect APIs attach live market pricing across raw and graded tiers',
  'Metron cross-references variant editions, story arcs, and character appearances',
  'The issue appears in the vault, fully enriched: art, metadata, pricing, grade, and value',
  'DEX and the Insights Engine immediately factor the new issue into portfolio intelligence',
]

const decisions = [
  {
    title: 'Bloomberg for Comics',
    body: 'Every collector app before KØDEX thought like a library catalog. KØDEX was designed to think like a financial terminal. Value front and center. Trend lines. Key issue flags. Run completion as a strategic target. The collection is an asset and the UI should treat it that way.',
  },
  {
    title: 'The Database is the Product',
    body: 'The real moat is the intelligence layer underneath. Millions of records spanning comics, covers, creators, pricing history, convention schedules, and variant editions, all cross-referenced and continuously enriched by five APIs running in parallel. The UI is the window. The database is the brain.',
  },
  {
    title: 'Zero Manual Entry',
    body: 'Scan a barcode and the system builds the full record: cover art, metadata, pricing, creator credits, key issue status. The collector should never type a series name. The enrichment pipeline does in seconds what would take a human 20 minutes of manual research.',
  },
  {
    title: 'AI That Knows You',
    body: 'Generic AI advice is useless to a collector. DEX is different because it has two knowledge bases: the entire comic intelligence database AND the user\'s personal collection. That intersection is where real value lives. "What should I grade?" is only answerable if the system knows what you own and what it\'s worth.',
  },
]

const techStack = [
  { label: 'Frontend', value: 'React + Vite + TypeScript + Tailwind' },
  { label: 'Database', value: 'Supabase (PostgreSQL) + SQLite local cache' },
  { label: 'APIs', value: 'ComicVine, GCD, PriceCharting, GoCollect, Metron' },
  { label: 'AI/ML', value: 'Claude API (DEX agent), GPT-4o (cover recognition)' },
  { label: 'Infra', value: 'Railway, PM2, Convex (orchestration)' },
  { label: 'Scale', value: '200K+ records today, architected for millions' },
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
            The Intelligence Layer<br />for Comic Collectors.
          </motion.h1>
          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            A massive comic intelligence database, millions of records deep, connected to five live data APIs, real-time market pricing, and a conversational AI agent that knows every comic ever published AND everything in your personal collection. Built from scratch. Running in production.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {[
              { value: 'Millions', label: 'of data points across comics, covers, creators, and pricing' },
              { value: '5 APIs', label: 'feeding a continuous enrichment pipeline' },
              { value: 'AI Agent', label: 'that knows your collection and the entire market' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl px-5 py-3 border border-neutral-800 max-w-[280px]">
                <div className="text-white font-bold text-sm">{s.value}</div>
                <div className="text-neutral-400 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HERO SCREENSHOT */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl shadow-orange-500/5">
              <video src="/kodex-dashboard-loop.mp4" autoPlay loop muted playsInline className="w-full" />
            </div>
            <p className="text-sm text-neutral-500 mt-4 text-center italic">Live dashboard: portfolio valuation, 30-day trends, key issue tracking, and run completion intelligence</p>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">A multi-billion dollar market with no real intelligence tool.</h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed text-lg">
              <p>
                The comic collecting market moves serious money. A single graded key issue can sell for tens of thousands of dollars. Collections built over decades can be worth hundreds of thousands. But the tools collectors were using? Spreadsheets. Apps built in the 2000s. Manual price lookups on three different websites. Nothing treated the collection as what it actually is: a financial portfolio with real market dynamics.
              </p>
              <p>
                Beyond valuation, collectors had no systematic way to connect what they owned to the broader comic universe. Which creators worked on which issues. Which books are trending. Which conventions have signings for books in your collection. All of that intelligence existed, scattered across dozens of databases and websites. Nobody had unified it.
              </p>
              <p>
                KØDEX was built to be that unification layer, and to put a conversational AI on top of it that makes all of that intelligence accessible in plain language.
              </p>
            </div>
            <blockquote className="border-l-2 border-[#C8F135] pl-4 md:pl-6 my-8 italic text-base leading-relaxed">
              <p className="text-neutral-700 font-medium">
                "What if your comic collection had the same intelligence infrastructure as a stock portfolio?"
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* THE INTELLIGENCE DATABASE — new section */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Intelligence Database</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Millions of records. Five APIs. One brain.</h2>
            <p className="text-neutral-400 text-lg max-w-3xl leading-relaxed">
              Before a single user adds a comic, KØDEX already knows about it. The platform continuously ingests data from five professional-grade comic databases, building an intelligence layer that covers every published comic book, its creators, its cover art, its market value, and its place in the broader collecting ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: '📚', title: 'Comics & Series', desc: 'Every issue, variant, and printing from major and independent publishers, matched to series data, story arcs, and character appearances.' },
              { icon: '🎨', title: 'Covers & Creators', desc: 'Cover art, interior art, writers, pencillers, inkers, colorists, letterers, and editors, cross-referenced across the entire catalog.' },
              { icon: '💰', title: 'Market Pricing', desc: 'Raw and CGC-graded fair market values across every grade tier, pulled from paid API feeds and updated continuously.' },
              { icon: '🔗', title: 'Cross-References', desc: 'Key issue flags, first appearances, variant registries, and print run data connected across multiple authoritative sources.' },
              { icon: '📅', title: 'Convention Intel', desc: 'Live guest lists from major conventions, mapped to creator credits in the database, so the system knows which signings match which books.' },
              { icon: '🧠', title: 'AI Knowledge Layer', desc: 'All of this data accessible through DEX, a conversational agent that can answer questions about any comic, any creator, any market trend.' },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl p-6 border border-neutral-800 bg-neutral-900/50">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Bar */}
          <motion.div {...fadeUp} className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((item) => (
                <div key={item.label}>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: '#E85D04' }}>{item.label}</div>
                  <div className="text-white text-xs leading-snug">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES, alternating with screenshots */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The System</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Five capabilities. Each one powered by the intelligence layer.</h2>
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
                      <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-lg shadow-black/30">
                        <img src={item.image} alt={item.imageAlt ?? ''} className="w-full" />
                      </div>
                      {item.caption && <p className="text-sm text-neutral-500 mt-3 italic">{item.caption}</p>}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PIPELINE */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Enrichment Pipeline</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">One scan. Seven steps. A fully enriched record.</h2>
            <div className="space-y-5">
              {pipeline.map((step, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4">
                  <span className="text-sm font-black mt-0.5 shrink-0 w-6 text-center" style={{ color: '#E85D04' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step}</p>
                </motion.div>
              ))}
            </div>
            <blockquote className="border-l-2 border-[#C8F135] pl-4 md:pl-6 mt-12 italic text-base leading-relaxed">
              <p className="text-neutral-300 font-medium">
                "The collector scans a barcode. Seven seconds later, the system knows the comic, the creators, the cover, the market value, and which conventions have signings for it. That's the pipeline."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>Design Decisions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">The thinking behind the product.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {decisions.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 border border-neutral-200 transition-all duration-200 ease-out">
                <h3 className="text-neutral-900 font-semibold text-base mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Not a collector app. A collector intelligence platform.</h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-8">
              KØDEX is what happens when you build a massive, continuously enriched comic database, connect it to real market pricing feeds, layer AI on top of it, and let a collector plug their personal library into all of that intelligence. Five APIs. Hundreds of thousands of records today, designed for millions. A conversational agent that knows every comic and knows YOUR comics. Built from scratch by one person. Running in production. Getting smarter every day.
            </p>
            <blockquote className="border-l-2 border-[#C8F135] pl-4 md:pl-6 my-8 italic text-base leading-relaxed text-left">
              <p className="text-neutral-300 font-medium">
                "The collector experience was designed first. The intelligence infrastructure was built to power it."
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
