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

const pillars = [
  {
    num: '01',
    title: 'The Knowledge Spine',
    body: 'Codified recurring creative truths into a structured memory framework: vehicle positioning, regional persona bias, offer categories, platform constraints, and team approval chains. Without this, AI output is random. With it, every generated asset knows what it is, where it is going, and who it is talking to.',
  },
  {
    num: '02',
    title: 'DEAR as a Programmable Engine',
    body: 'DEAR had been a durable campaign format for six years. TDAiOS systematized it into a rules engine. Every AI output had to pass a Tier lens, vehicle voice structure, Feature to Emotion to Action logic, offer inclusion, and modular VO readiness for DCO. This encoded creative discipline. It stopped AI from drifting into Tier 1 brand manifestos or feature dumps without emotional logic.',
  },
  {
    num: '03',
    title: 'Governance Over Hype',
    body: 'The system was framed around auditability, version control, and guardrails before automation. Clear container logic (Tier 1 vs Tier 2 vs Tier 3) reduced QA friction and kept output compliant under Publicis AI governance requirements. This wasn\'t "let\'s use AI." It was "let\'s make the system safer at scale."',
  },
  {
    num: '04',
    title: 'Connected Flow Architecture',
    body: 'TDAiOS connected what had been adjacent efforts into one pipeline: OAT offer feeds flowing into DEAR scripting, into DCO execution, into media, social, chat, retargeting, and measurement. For the first time, a script generated for a RAV4 APR offer in Denver carried the right persona bias, the right voice, the right dynamic super, and tied back to Tier 2 sales KPIs.',
  },
]

const outcomes = [
  { title: 'Formal AI-Readiness Narrative', body: 'Leadership had a structured story for where the organization stood on AI. Not hype, not fear. A documented readiness model with a clear path forward.' },
  { title: 'Vendor Evaluation Criteria', body: 'Built structured criteria for evaluating automation vendors: the difference between real automation depth and template wrapping dressed up as AI.' },
  { title: 'Reduced Operational Drag', body: 'At 100 to 300+ assets per month, reducing friction at the scripting, versioning, and QA stages compounds fast. The framework made that reduction systematic.' },
  { title: 'Publicis Alignment', body: 'TDAiOS anticipated the shift from AI novelty to measurable business outcomes, positioning the division as designing a governed creative operating system, not just experimenting with tools.' },
]

export default function TDA() {
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
            Case Study · TDAiOS
          </motion.p>

          <motion.h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            A Governed Creative<br />Operating System.
          </motion.h1>

          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            A governance-first operating model built to unify DEAR scripting, dynamic offer logic, personalization rules, and AI-assisted production into a scalable Tier-2 retail system. Designed to reduce risk, increase versioning efficiency, and align creative automation with measurable sales outcomes.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {[
              { value: '100–300+', label: 'Assets shipped per month' },
              { value: '6 Years', label: 'Of DEAR logic formalized' },
              { value: 'Tier 2', label: 'Automotive retail scale' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl px-5 py-3 border border-neutral-800">
                <div className="text-white font-bold text-sm">{s.value}</div>
                <div className="text-neutral-500 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Creative was modular. The system was not.
            </h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed text-lg">
              <p>
                The retail advertising division had real assets: a strong six-year creative framework, a dynamic offer system, DCO execution partners, regional persona mappings, and teams across creative, tech, production, analytics, and social. The infrastructure existed. What didn't exist was anything connecting it.
              </p>
              <p>
                Dynamic video scaling, social automation experiments, AI chat pilots, model-specific retargeting logic, and competitive creative systems were all running as adjacent efforts. No shared memory. No governance model. No way to connect script logic to offer logic to audience logic to production logic at the speed and volume Tier 2 retail demands.
              </p>
              <p>
                Meanwhile, pressure from leadership was shifting from AI hype to connected systems with measurable outcomes. The timing created the opening. TDAiOS was the attempt to build the unifying logic layer before the window closed.
              </p>
            </div>
            <blockquote className="border-l-4 pl-6 py-2 mt-10" style={{ borderColor: '#E85D04' }}>
              <p className="text-xl font-semibold text-neutral-800 italic leading-relaxed">
                "The goal wasn't to introduce AI. It was to build the operating model that made AI usable, auditable, and scalable inside an enterprise retail machine."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* WHAT IT WAS */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              What TDAiOS Actually Was
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not software. Not an app. An operating model.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-6">
              TDAiOS was a connected intelligence layer that unified: creative logic, offer truth, persona strategy, regional nuance, DCO mechanics, AI-assisted production, and compliance guardrails. It formalized how Tier 2 retail content gets generated, versioned, and deployed.
            </p>
            <p className="text-neutral-400 leading-relaxed text-lg">
              Think of it as the operating system that sat beneath the tools, giving every asset, at every stage, a shared set of rules to follow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE FOUR PILLARS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              The Architecture
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Four pillars. One connected system.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t-2 pt-8" style={{ borderColor: '#E85D04' }}>
                <div className="text-3xl font-black mb-4 leading-none" style={{ color: '#E85D04' }}>{item.num}</div>
                <h3 className="text-neutral-900 font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE FLOW */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              The Connected Pipeline
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              What one connected pipeline looks like.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-10">
              Before TDAiOS, adjacent systems ran independently. After, a single logic chain connected every step:
            </p>
            <div className="space-y-3">
              {[
                'OAT feed surfaces an APR offer for a specific model in a specific region',
                'Knowledge layer confirms the regional persona bias and vehicle positioning',
                'DEAR script generated with the correct voice, emotional arc, and offer integration',
                'Modular supers built for DCO, dynamic pricing swapped by execution partner',
                'Retargeting logic resolves to the last-touched model for the individual user',
                'Chat layer defers offers appropriately for legal compliance',
                'Measurement ties the full chain back to Tier 2 sales outcomes',
              ].map((step, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4">
                  <span className="text-sm font-black mt-0.5 shrink-0" style={{ color: '#E85D04' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-neutral-300 text-sm leading-relaxed">{step}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-neutral-500 text-sm mt-10 italic">
              That's a system. Before TDAiOS, those were seven separate conversations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              What It Enabled
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Not fully productized. Still consequential.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outcomes.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 bg-neutral-50 border border-neutral-100">
                <h3 className="font-bold text-neutral-900 text-base mb-3">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              The Strategic Hook
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not "using AI." Designing the system that makes AI safe to use at scale.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-8">
              TDAiOS repositioned what AI means inside an enterprise creative organization. Not a tool people experiment with. A governed, connected operating model that encodes creative discipline, aligns to compliance requirements, and scales production without scaling chaos. This is the work that matters when leadership stops asking "are you using AI?" and starts asking "can this system actually ship?"
            </p>
            <p className="text-white font-bold text-lg mb-10">
              That question has an answer now. And I built it.
            </p>
            <a href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#E85D04' }}>
              Get in touch →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
