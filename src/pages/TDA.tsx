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
    title: 'Knowledge Layer',
    body: 'Critical marketing intelligence distributed across presentations, decks, and individual expertise was structured into a centralized, searchable knowledge base. Vehicle positioning, regional market nuances, audience insights, creative frameworks, and production workflows organized so teams stop rebuilding context on every new project.',
  },
  {
    num: '02',
    title: 'Creative Intelligence Layer',
    body: 'Translates structured knowledge into creative guidance. Helps teams generate messaging aligned with campaign frameworks and brand principles. The goal is not to replace creative thinking. It is to reduce repetitive work, accelerate ideation, and keep output grounded in what the organization already knows.',
  },
  {
    num: '03',
    title: 'Governance Layer',
    body: 'Retail marketing requires strict accuracy across hundreds of creative variations each month. The Governance Layer ensures automated and AI-assisted workflows stay aligned with brand guidelines and operational rules. Automation scales safely. Compliance risk stays low. The system does not drift.',
  },
  {
    num: '04',
    title: 'The Connective System',
    body: 'The organization did not need more tools. It needed a connective system that organizes the knowledge and logic behind the work. TDA iOS was designed to bridge creative, technology, production, and strategy into one shared operational framework rather than a collection of adjacent efforts.',
  },
]

const outcomes = [
  { title: 'Intelligence Framework Presented to Leadership', body: 'A centralized intelligence framework designed from the ground up and presented directly to client leadership and the technology team. Not a slide deck of ideas. A structured platform concept with defined components and a clear operational model.' },
  { title: 'Workflow Friction Mapped and Documented', body: 'Analyzed the existing operational ecosystem, identified where knowledge was breaking down, and documented the friction points slowing creative and production teams. The diagnosis came before the prescription.' },
  { title: 'Cross-Discipline Platform Concept', body: 'Designed a platform concept that bridges creative, technology, production, and strategy. Four disciplines that had been running in parallel now had a shared framework to operate within.' },
  { title: 'Governance Model for Safe Automation', body: 'Built a governance model that allows automation to scale without introducing compliance risk. At the volume retail marketing demands, accuracy is not optional. The model makes it systematic.' },
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
            Case Study · TDA iOS
          </motion.p>

          <motion.h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            A Governed Creative<br />Operating System.
          </motion.h1>

          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            A 4-month engagement at Saatchi and Saatchi New York, embedded with the Toyota Dealer Association retail division. TDA iOS was designed as an intelligent operating layer: centralizing creative knowledge, enabling governed automation, and connecting the disciplines that produce retail marketing at scale.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {[
              { value: 'Hundreds', label: 'Creative variations per month' },
              { value: '4 Months', label: 'Engagement duration' },
              { value: 'Saatchi & Saatchi NY', label: 'Agency context' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl px-5 py-3 border border-neutral-800">
                <div className="text-white font-bold text-sm">{s.value}</div>
                <div className="text-neutral-400 text-xs mt-0.5">{s.label}</div>
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
              Critical knowledge was fragmented. Teams were operating in parallel.
            </h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed text-lg">
              <p>
                The Toyota Dealer Association retail division produces localized marketing across regional dealer groups every month. Vehicle positioning, audience insights, regional market conditions, campaign frameworks, production workflows: these lived inside scattered presentations, campaign decks, and individual expertise. Every time a new project started, teams had to rebuild context from scratch.
              </p>
              <p>
                Automation tools were entering the workflow without governance. Creative, production, and technology teams were running in parallel rather than through a shared platform. The risk was not that the tools were bad. The risk was that there was no system to organize the logic behind the work.
              </p>
              <p>
                The insight: the organization did not need more tools. It needed a connective system that organizes the knowledge and logic behind the work, so automation could scale without introducing compliance risk.
              </p>
            </div>
            <blockquote className="border-l-2 border-[#C8F135] pl-4 md:pl-6 my-8 italic text-base leading-relaxed">
              <p className="text-neutral-700 font-medium">
                "The goal was not to introduce automation. It was to design the structure that makes automation safe to use at the volume retail marketing demands."
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
              What TDA iOS Actually Was
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not software. Not an app. An intelligent operating layer.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-6">
              TDA iOS was designed as a framework, not a product. Three components working together: a Knowledge Layer that centralizes and structures critical marketing information, a Creative Intelligence Layer that translates that knowledge into guided creative output, and a Governance Layer that keeps automated workflows aligned with brand rules and compliance requirements.
            </p>
            <p className="text-neutral-400 leading-relaxed text-lg">
              The goal was to give every team, at every stage, a shared foundation to work from. Not more tools sitting next to each other. A system connecting the logic that already existed inside the organization.
            </p>

            <blockquote className="border-l-2 border-[#C8F135] pl-4 md:pl-6 my-8 italic text-base leading-relaxed">
              <p className="text-neutral-300 font-medium">
                "Real AI infrastructure is not a prompt or a button. It is a connected system with memory, rules, and governance built in from the start."
              </p>
            </blockquote>
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
              Three layers. One connected system.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t-2 pt-8 transition-all duration-200 ease-out" style={{ borderColor: '#E85D04' }}>
                <div className="text-3xl font-black mb-4 leading-none" style={{ color: '#E85D04' }}>{item.num}</div>
                <h3 className="text-neutral-900 font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.body}</p>
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
              What one connected system actually looks like.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-10">
              Before TDA iOS, the steps below were separate conversations across separate teams. After, a single logic chain connects every stage:
            </p>
            <div className="space-y-4">
              {[
                'Marketing knowledge captured from existing presentations, decks, playbooks, and team expertise',
                'Information structured into a centralized knowledge base: vehicle positioning, regional nuances, audience insights, production workflows',
                'Knowledge translated into creative guidance aligned with campaign frameworks and brand principles',
                'AI-assisted ideation generates messaging within guardrails, grounded in what the organization already knows',
                'Governance checks validate output against brand guidelines, compliance rules, and operational standards',
                'Content adapted for specific regional markets, dealer promotions, and vehicle availability',
                'Hundreds of creative variations deployed across media channels each month with accuracy at scale',
              ].map((step, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4 transition-all duration-200 ease-out">
                  <span className="text-sm font-black mt-0.5 shrink-0" style={{ color: '#E85D04' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-neutral-300 text-sm leading-relaxed">{step}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-neutral-500 text-sm mt-10 italic">
              That is a system. Before TDA iOS, those were seven separate conversations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              What It Produced
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              A framework designed. A case made.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outcomes.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 bg-neutral-50 border border-neutral-100 transition-all duration-200 ease-out">
                <h3 className="font-semibold text-neutral-900 text-base mb-3">{item.title}</h3>
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
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>
              The Takeaway
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not more tools. A system that connects the ones that already exist.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-8">
              The strategic insight behind TDA iOS was straightforward: organizations at this scale do not struggle because they lack tools. They struggle because nothing organizes the logic those tools need to work from. Knowledge is fragmented. Teams are parallel. Automation enters without rules. TDA iOS was designed to solve all three simultaneously.
            </p>
            <blockquote className="border-l-2 border-[#C8F135] pl-4 md:pl-6 my-8 italic text-base leading-relaxed text-left">
              <p className="text-neutral-300 font-medium">
                "The hard part is not adopting AI. The hard part is building the connective system that makes AI safe, accurate, and scalable inside an organization that cannot afford to get it wrong."
              </p>
            </blockquote>
            <a href="/#contact" onClick={(e) => { e.preventDefault(); sessionStorage.setItem("hashNav", "#contact"); window.location.href = "/#contact"; }}
              className="inline-flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-80"
              style={{ color: '#E85D04' }}>
              Get in touch →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
