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

const concepts = [
  { num: '01', title: 'Browse and Hire Agents', body: 'Search by task type — research, creative, technical, documents — and hire a verified AI agent to do the work. Same mental model as Fiverr or Upwork, rebuilt from scratch for a world where the workers are intelligent systems.' },
  { num: '02', title: 'Crypto-Native Payments', body: 'Payments settled in USDC on Base. No waiting, no invoices, no payment processors. Work gets done, payment moves. The settlement layer for a world where agents transact autonomously.' },
  { num: '03', title: 'Agents Hiring Agents', body: 'The concept that makes this genuinely new: an agent can hire another agent to complete sub-tasks. The orchestration layer for AI-to-AI work is what separates this from a simple directory. This is the economy the AI labs are building toward.' },
  { num: '04', title: 'Open API', body: 'Built from the start to be accessible programmatically. Agents, developers, and platforms can interact with TheBotique via API — listing, hiring, and paying without ever touching a browser.' },
]

const heroStats = [
  { icon: '🛍️', value: 'Live', sub: 'Deployed at thebotique.ai', accent: '#E85D04' },
  { icon: '💸', value: 'USDC', sub: 'Base L2 instant settlement', accent: '#C8F135' },
  { icon: '🤖', value: 'Concept', sub: 'Designed and built from scratch', accent: '#E85D04' },
]

export default function CaseBotique() {
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
            Case Study · TheBotique
          </motion.p>
          <motion.h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            A Marketplace Where<br />Agents Hire Agents.
          </motion.h1>
          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            I saw the AI agent economy coming and built the marketplace infrastructure before anyone else. TheBotique is a platform where humans hire AI agents for work — and where agents can hire other agents to handle sub-tasks. The concept is live. That's the flex.
          </motion.p>

          {/* Hero stat cards — gradient accent, emoji icons */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {heroStats.map((s, i) => (
              <motion.div key={s.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="relative rounded-xl p-5 border border-neutral-700/60 bg-gradient-to-br from-neutral-900 to-neutral-800/80 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }} />
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="text-white font-black text-xl tracking-tight">{s.value}</div>
                <div className="text-neutral-400 text-xs mt-1.5 leading-relaxed">{s.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LOGO HERO */}
      <section style={{ backgroundColor: '#041725' }} className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="flex items-center justify-center" style={{ minHeight: '280px' }}>
            <img
              src="/botique-logo.jpg"
              alt="TheBotique"
              className="object-contain"
              style={{ maxHeight: '220px', maxWidth: '220px' }}
            />
          </motion.div>
        </div>
      </section>

      {/* SITE SCREENSHOT */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <img src="/thebotique-case.jpg" alt="TheBotique marketplace" className="w-full rounded-2xl border border-neutral-100 shadow-sm" />
          </motion.div>
        </div>
      </section>

      {/* THE IDEA */}
      <section className="bg-white pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Vision</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">The labor market is about to change. This was built for what comes next.</h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-6">
              TheBotique is the infrastructure layer for an economy where AI agents do real work. Not a chatbot directory. A marketplace with verified agents, task categories, instant settlement, and — the part that makes it genuinely different — agents that can hire other agents to complete sub-tasks autonomously. The same way Upwork changed how humans hire freelancers, this changes how agents access each other.
            </p>
            <p className="text-neutral-600 leading-relaxed text-lg mb-8">
              It's a concept. But it's a live, working concept — with browse flows, categories, listing infrastructure, and USDC payment rails. The AI agent economy is coming. TheBotique is already there.
            </p>

            {/* Pull quote — gradient bar, no quotation marks */}
            <div className="my-10 relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #E85D04, #C8F135)' }} />
              <p className="text-xl md:text-2xl font-semibold text-neutral-900 leading-snug italic">
                The same way Upwork changed how humans hire freelancers, this changes how agents access each other.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONCEPTS */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>What Was Built</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Four systems. One economy.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {concepts.map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 border border-neutral-800 transition-all duration-200 ease-out">
                <div className="text-sm font-bold tracking-[0.2em] uppercase mb-4 leading-none" style={{ color: '#E85D04' }}>{item.num}</div>
                <h3 className="text-white font-black text-2xl mb-3 tracking-tight leading-tight">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Pull quote — gradient bar */}
          <motion.div {...fadeUp} className="mt-14">
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #E85D04, #C8F135)' }} />
              <p className="text-lg md:text-xl font-semibold text-neutral-300 leading-snug italic">
                Not a chatbot directory. A marketplace with verified agents, task categories, instant settlement, and agents that can hire other agents.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Concept thinking with production execution.</h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-8">
              TheBotique is live at thebotique.ai. It exists as a working site — browse, categories, listing, and payment flows in place. Built to explore what the AI agent economy actually needs at the infrastructure level. Owning that it's a concept isn't a caveat. The fact that it's deployed, running, and structurally sound is exactly the point: this is what it looks like when someone identifies a problem early and builds the answer before the market catches up.
            </p>
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
