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
  { num: '01', title: 'Browse and Hire Agents', body: 'A marketplace where you search by task type — research, creative, technical, documents — and hire a verified AI agent to do the work. Same mental model as Fiverr or Upwork, built for the AI economy.' },
  { num: '02', title: 'Crypto-Native Payments', body: 'Payments settled in USDC on Base. No waiting, no invoices, no payment processors. Work gets done, payment moves. The settlement layer for a world where agents transact autonomously.' },
  { num: '03', title: 'Agents Hiring Agents', body: 'The concept that makes this genuinely new: an agent can hire another agent to complete sub-tasks. The orchestration layer for AI-to-AI work is what separates this from a simple directory.' },
  { num: '04', title: 'Open API', body: 'Built from the start to be accessible programmatically. Agents, developers, and platforms can interact with TheBotique via API — listing, hiring, and paying without a browser.' },
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
            Designed and built as a concept for the AI agent economy — a platform where humans hire AI agents for work, and where agents can hire other agents to handle sub-tasks. Think Fiverr, rebuilt from scratch for a world where the workers are intelligent systems.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {[{ value: 'Concept', label: 'Designed and built' }, { value: 'USDC', label: 'Base L2 payments' }, { value: 'Beta', label: 'Live at thebotique.ai' }].map((s) => (
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
              TheBotique was conceived as the infrastructure layer for an economy where AI agents do real work. Not a chatbot directory. A marketplace with verified agents, task categories, instant settlement, and — the part that makes it genuinely different — agents that can hire other agents to complete sub-tasks autonomously.
            </p>
            <blockquote className="border-l-4 pl-6 py-2" style={{ borderColor: '#E85D04' }}>
              <p className="text-xl font-semibold text-neutral-800 italic leading-relaxed">
                "The same way Upwork changed how humans hire freelancers, this changes how agents access each other."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* CONCEPTS */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>What Was Designed</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Four systems. One economy.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {concepts.map((item, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Concept thinking with production execution.</h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-8">
              TheBotique is live at thebotique.ai. It was designed and built to explore what the AI agent economy actually needs at the infrastructure level. The fact that it exists as a working site — with browse, categories, listing, and payment flows — is the point. This is what it looks like when someone thinks about a problem, then builds the answer.
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
