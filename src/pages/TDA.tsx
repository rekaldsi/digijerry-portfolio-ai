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

const systems = [
  {
    num: '01',
    title: 'Governance Framework',
    body: 'Established how AI gets used inside the organization — approved tools, compliance boundaries, sandboxing protocols, and team-specific guidance. Turned ad-hoc AI experimentation into a governed practice with clear rules and accountability.',
  },
  {
    num: '02',
    title: 'Centralized Knowledge Base',
    body: 'Designed the intelligence infrastructure that powers the whole system: product positioning, regional nuances, offer categories, platform constraints, and team chain dependencies — all structured as a queryable source of truth for AI-assisted work.',
  },
  {
    num: '03',
    title: 'Prompt Architecture',
    body: 'Codified existing campaign logic into structured AI prompts. Built modular VO and copy frameworks with dynamic content compatibility. Created reusable instruction sets so teams could produce consistent, compliant output without starting from scratch every time.',
  },
  {
    num: '04',
    title: 'Workflow Integration',
    body: 'Connected the knowledge base and prompt framework to real production tasks — disclaimer swaps, storyboard ideation, deck building, script versioning. Reduced friction at every step where AI could accelerate without introducing risk.',
  },
]

const shipped = [
  {
    title: 'Live Creative',
    body: 'Shipped real executional work alongside the systems — including a produced LED ribbon concept for an MLS stadium that went from idea through approval to live execution.',
  },
  {
    title: 'AI Upskilling Program',
    body: 'Created and ran an internal AI upskilling channel. Taught structured prompting, approved tool stacks, and governance boundaries to art directors and creatives. The goal: teach people to direct AI, not just describe to it.',
  },
  {
    title: 'Prompt Library',
    body: 'Built a reusable prompt library and structured instruction sets mapped to real production tasks. Reduced friction across disclaimer handling, storyboard ideation, script versioning, and deck building.',
  },
]

const bridgeAreas = ['Creative (ECD + Art Directors)', 'Strategy', 'Production', 'Technology', 'Analytics', 'Social (DS+)', 'External Vendors']

export default function TDA() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    navigate('/', { state: { from: '/#projects' } })
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO — dark */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="pt-16 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.button
            onClick={handleBack}
            className="text-neutral-500 text-sm font-medium hover:text-white transition-colors mb-12 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            ← Back to Work
          </motion.button>

          <motion.p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#E85D04' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Case Study · TDAiOS
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            An Intelligence OS<br />for Creative Teams.
          </motion.h1>

          <motion.p
            className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Designed and deployed an AI intelligence operating system for a major automotive retail advertising group — built around governance, a centralized knowledge base, and structured workflows that gave creative and production teams a single source of truth for AI-assisted work.
          </motion.p>

          {/* Stat pills */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { value: '4 Months', label: 'Embedded Contract' },
              { value: 'Enterprise Scale', label: 'Automotive Retail Advertising' },
              { value: 'Shipped', label: 'Real creative, real systems' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl px-5 py-3 border border-neutral-800"
              >
                <div className="text-white font-bold text-sm">{stat.value}</div>
                <div className="text-neutral-500 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 — The Brief */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              The Mandate
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Give the team a system, not just a tool.
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-10">
              Brought in as Creative Director, Digital and Technology at a major advertising agency to solve a real problem: creative and production teams were using AI in fragmented, ungoverned ways with no shared context, no consistent output, and no institutional knowledge carrying forward. The mandate was to build the infrastructure that changed that.
            </p>
            <blockquote
              className="border-l-4 pl-6 py-2"
              style={{ borderColor: '#E85D04' }}
            >
              <p className="text-xl font-semibold text-neutral-800 italic leading-relaxed">
                "The goal wasn't to introduce AI. It was to make AI something the whole organization could actually use."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — What Was Built */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              The Systems
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What was actually built.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systems.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 border border-neutral-800"
              >
                <div className="text-4xl font-black mb-4 leading-none" style={{ color: '#E85D04' }}>
                  {item.num}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Shipped Work */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              Real Deliverables
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Not experiments. Shipped work.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shipped.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t-2 pt-6"
                style={{ borderColor: '#E85D04' }}
              >
                <h3 className="font-bold text-neutral-900 text-lg mb-3">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — The Role */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              Cross-Functional
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The connective tissue.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-10">
              Operated between creative, strategy, production, tech, analytics, social, and external vendors — simultaneously. Translated tech to creatives, creative to engineers, AI to compliance, and automation to leadership. That is CD-level connective tissue work.
            </p>
            <div className="flex flex-wrap gap-2">
              {bridgeAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-neutral-700 text-neutral-400"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — Takeaway */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              The Takeaway
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              What this means for you.
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-8">
              In four months: built the governance layer, designed the knowledge base, codified the prompt architecture, integrated AI into live production workflows, trained the teams, and shipped real creative. The organization went from fragmented AI use to a system with structure, accountability, and scale.
            </p>
            <p className="text-xl font-bold text-neutral-900 mb-10">
              This is what it looks like when someone builds the operating system for AI inside an enterprise — not the experiments, the infrastructure.
            </p>
            <a
              href="mailto:sketchandslogan@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#E85D04' }}
            >
              Get in touch →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
