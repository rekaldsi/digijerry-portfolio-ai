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
    title: 'DEAR Prompt Framework',
    body: 'Codified the six-year DEAR campaign architecture into structured AI prompts. Built Feature → Emotion → Action logic. Designed modular VO + super structure for DCO compatibility. Moved DEAR from creative campaign to programmable retail engine.',
  },
  {
    num: '02',
    title: 'TDA KnowledgeBot',
    body: 'Designed foundational knowledge infrastructure: vehicles + positioning, regional nuances, offer categories, platform constraints, team chain dependencies. System architecture thinking, not creative output.',
  },
  {
    num: '03',
    title: 'Road Rivals DCO',
    body: 'Contributed to modular video system supporting 33 competitive advantages across 99 sizes. Built versioning logic for dynamic creative at scale. Audited Innovid template structure and identified automation bottlenecks.',
  },
  {
    num: '04',
    title: 'AI Search Pilot',
    body: 'Introduced contextual product mention strategy for AI search visibility — sitting between Tier 1 brand and Tier 2 retail. Region-specific testing (Denver, Chicago, NY) grounded in Toyota Pressroom data. Upstream innovation tied to downstream sales KPIs.',
  },
]

const shipped = [
  {
    title: 'RBNY LED Ribbon',
    body: 'Developed the creative concept for the soccer field LED ribbon display. Pushed it through approval. Saw it produced and executed live.',
  },
  {
    title: 'SEED Channel',
    body: 'Created and ran internal AI upskilling channel inside Marcel. Taught structured prompting, approved tool stacks, and governance boundaries to art directors and creatives across the agency.',
  },
  {
    title: 'Dearware Framework',
    body: 'Built prompt library and reusable instruction sets. Trained teams to direct AI rather than just describe to it. Reduced production friction across disclaimer swaps, storyboard ideation, and deck building.',
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
            Case Study · Saatchi & Saatchi × Toyota TDA
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building AI<br />Into the Machine.
          </motion.h1>

          <motion.p
            className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Four months at the intersection of creative, technology, and production — inside one of the most complex retail advertising systems in the world.
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
              { value: 'Enterprise Scale', label: 'Toyota Dealer Association' },
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
              Bridge creative and emerging tech.
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-10">
              Brought in as Creative Director, Digital & Technology at Saatchi & Saatchi to align with Toyota TDA's evolving needs. The expectation: advance AI-driven workflows, support DCO and retail personalization, and build scalable systems across creative and production.
            </p>
            <blockquote
              className="border-l-4 pl-6 py-2"
              style={{ borderColor: '#E85D04' }}
            >
              <p className="text-xl font-semibold text-neutral-800 italic leading-relaxed">
                "The expectation was to bridge creative and tech. What actually happened was bigger."
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
              In four months: operationalized AI inside a legacy retail system, reinforced and scaled a six-year campaign architecture, shipped real creative, educated teams, reduced risk through structure, and introduced forward-looking experimentation tied to retail outcomes.
            </p>
            <p className="text-xl font-bold text-neutral-900 mb-10">
              This wasn't experimenting with AI. This was building systems that made AI safer, faster, and usable inside an enterprise retail machine.
            </p>
            <a
              href="mailto:sketchandslogan@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#E85D04' }}
            >
              Get in touch → sketchandslogan@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
