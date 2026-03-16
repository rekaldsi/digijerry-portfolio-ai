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

const tools = [
  {
    num: '01',
    title: 'Partner & Funder Directory',
    body: 'A curated, searchable directory of 97 potential partners and funders across 12 categories — foundations, corporate partners, government grants, arts funders, music industry, ad agencies, and more. Each entry is tagged by conservatory alignment (Music, Theatre, Dance, Visual Arts, Creative Writing), flagged for existing relationships, and filtered by priority. Built to be handed directly to ChiArts development staff and used without training.',
    image: '/chiarts-directory2.png',
    imageAlt: 'ChiArts partner directory with category filters and Leo Burnett, DDB, Energy BBDO cards',
    caption: '97 vetted partners filterable by category — ad agencies, foundations, government grants, and more. Each card has a personalized outreach letter built in.',
  },
  {
    num: '02',
    title: 'Outreach Letter Generator',
    body: 'Personalized outreach letters generated on demand — formatted for foundations, corporate partners, government contacts, and individual donors. Select a partner type, enter a contact name, and get a ready-to-send letter in seconds. Reduces a 45-minute task to 90 seconds. Every partner card has a direct "Generate Letter" link that pre-fills the form.',
    image: '/chiarts-letter-gen.png',
    imageAlt: 'ChiArts letter generator form with partner type selector, role picker, and generate button',
    caption: 'Select funder type, enter contact name, generate. The form pre-fills from any partner card in the directory.',
  },
  {
    num: '03',
    title: 'Grant Calendar',
    body: 'Upcoming grant deadlines surfaced in one view. No more tracking spreadsheets, missed windows, or hunting through foundation websites. Each grant entry includes the funder, deadline, eligibility notes, and conservatory alignment. The first thing a development director opens on Monday morning.',
    image: '/chiarts-grants.png',
    imageAlt: 'ChiArts grant calendar showing upcoming grant deadlines and funder details',
    caption: 'Grant deadlines, eligibility, and funder context in one place — no spreadsheets, no hunting.',
  },
  {
    num: '04',
    title: 'Corporate Matching Gifts',
    body: 'A lookup tool for corporate matching gift programs. Donors and staff can search by employer and instantly see if their company will match gifts to arts education organizations. Surfaces programs that ChiArts donors are likely already eligible for — money left on the table, made visible.',
    image: null,
    imageAlt: null,
    caption: null,
  },
  {
    num: '05',
    title: 'Social Media Templates',
    body: 'Campaign-ready social copy for fundraising moments, program announcements, donor appreciation, and advocacy. Designed to sound like the school, not like a marketing department. Staff can copy, personalize, and post — no content creation required.',
    image: null,
    imageAlt: null,
    caption: null,
  },
]

const context = [
  {
    icon: '🏫',
    title: 'What ChiArts Is',
    body: 'Chicago High School for the Arts is a public magnet school in Chicago\'s Loop — one of the few schools in the country that offers a full arts conservatory education inside a public high school. Music, Theatre, Dance, Visual Arts, and Creative Writing. Tuition-free, audition-based, serving some of Chicago\'s most talented young people.',
  },
  {
    icon: '⚠️',
    title: 'The Crisis',
    body: 'In 2025, the ChiArts Foundation — the independent board that had governed and funded the school for over a decade — disbanded and returned operational control to Chicago Public Schools. The school retained its identity and programs, but lost the fundraising infrastructure that had sustained them.',
  },
  {
    icon: '🎯',
    title: 'The Gap',
    body: 'A school that had relied on an organized development operation suddenly needed to rebuild its donor relationships, partnership pipeline, and funding strategy — with a staff not trained in institutional development and no centralized tools to support them.',
  },
]

export default function CaseChiArts() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleBack = () => {
    navigate('/', { state: { from: '/#projects' } })
    setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  const GOLD = '#C9A84C'
  const GOLD_LIGHT = '#E8C87A'

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section style={{ backgroundColor: '#0d0d0d' }} className="pt-16 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.button onClick={handleBack}
            className="text-neutral-500 text-sm font-medium hover:text-white transition-colors mb-12 flex items-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            ← Back to Work
          </motion.button>
          <motion.p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Case Study · ChiArts Supporter Hub
          </motion.p>
          <motion.h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Built to keep a school alive.
          </motion.h1>
          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            When Chicago High School for the Arts lost its independent foundation board and returned to CPS governance, the school's fundraising infrastructure went with it. The ChiArts Supporter Hub is a development operations tool built to replace it — a partner directory, grant calendar, outreach generator, and matching gifts lookup, purpose-built for a school trying to rebuild its funding pipeline from scratch.
          </motion.p>

          {/* CTA */}
          <motion.div className="mb-14" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <a
              href="https://chiarts.support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-100"
              style={{ backgroundColor: GOLD, color: '#0d0d0d' }}
            >
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              View Live Site
            </a>
          </motion.div>

          {/* Stat cards */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {[
              { icon: '🏛️', value: '97', label: 'Vetted partners and funders', accent: GOLD },
              { icon: '📋', value: '12', label: 'Funding categories', accent: GOLD_LIGHT },
              { icon: '🎓', value: '5', label: 'Conservatory disciplines', accent: GOLD },
              { icon: '✉️', value: 'Ready', label: 'Outreach letters on demand', accent: GOLD_LIGHT },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="relative rounded-xl p-4 border border-neutral-700/60 bg-gradient-to-br from-neutral-900 to-neutral-800/80 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }} />
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="text-white font-black text-base tracking-tight">{s.value}</div>
                <div className="text-neutral-400 text-xs mt-1 leading-relaxed">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HERO SCREENSHOT */}
      <section style={{ backgroundColor: '#0d0d0d' }} className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <img
              src="/chiarts-hero.png"
              alt="ChiArts Supporter Hub — hero section with mission statement and primary CTAs"
              className="w-full rounded-2xl border border-neutral-800 shadow-2xl"
            />
            <p className="text-neutral-500 text-sm mt-3 text-center italic">chiarts.support — live, deployed, available to ChiArts staff today</p>
          </motion.div>
        </div>
      </section>

      {/* THE CONTEXT */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>The Context</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">
              A school with no safety net.
            </h2>
            <div className="space-y-8">
              {context.map((item, i) => (
                <motion.div key={item.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl border border-neutral-100 bg-neutral-50">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-neutral-900 font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="my-14 relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_LIGHT})` }} />
              <p className="text-xl md:text-2xl font-semibold text-neutral-900 leading-snug italic">
                The programs survived. The infrastructure to fund them didn't. This tool is the bridge.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WAS BUILT */}
      <section style={{ backgroundColor: '#0d0d0d' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>What Was Built</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Five tools. One goal: make development work easier.</h2>
          </motion.div>
          <div className="space-y-28">
            {tools.map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                {item.image ? (
                  <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                    <div className="flex-1">
                      <div className="text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>{item.num}</div>
                      <h3 className="text-white font-black text-3xl mb-5 tracking-tight leading-tight">{item.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{item.body}</p>
                    </div>
                    <div className="flex-1">
                      <img src={item.image} alt={item.imageAlt ?? ''} className="w-full rounded-xl border border-neutral-800" />
                      {item.caption && <p className="text-sm text-neutral-500 mt-3 italic">{item.caption}</p>}
                    </div>
                  </div>
                ) : (
                  <div className="border-t border-neutral-800 pt-10">
                    <div className="text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>{item.num}</div>
                    <h3 className="text-white font-black text-3xl mb-5 tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed max-w-2xl">{item.body}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Why It Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              This isn't a marketing project. It's a survival tool.
            </h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed text-lg">
              <p>
                Public arts education in Chicago is underfunded by design. Schools like ChiArts exist because independent foundations fought for them. When that foundation structure disappears, the school doesn't close immediately — but the clock starts. Without an active development pipeline, programs get cut, teachers leave, and the school slowly stops being what it was built to be.
              </p>
              <p>
                The Supporter Hub doesn't solve that problem. But it gives the people trying to solve it a tool that actually works — instead of a spreadsheet, a stack of PDFs, and institutional knowledge walking out the door with the last development director.
              </p>
              <p>
                Ninety-seven partners. Twelve categories. Grant deadlines surfaced automatically. Letters ready in 90 seconds. None of that sounds glamorous. But it's the difference between a development conversation that happens and one that doesn't.
              </p>
            </div>

            {/* Pull quote */}
            <div className="my-12 relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_LIGHT})` }} />
              <p className="text-xl md:text-2xl font-semibold text-neutral-900 leading-snug italic">
                When good institutions lose their infrastructure, they don't fail loudly. They just quietly stop being what they were.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section style={{ backgroundColor: '#0d0d0d' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technology in service of something that matters.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-6">
              This project wasn't commissioned. It was built because the need was real and the solution was obvious. A school full of talented kids, five world-class conservatory programs, and a development staff suddenly starting from zero — that's not a technology problem. But technology can make the human work a lot easier.
            </p>
            <p className="text-neutral-400 leading-relaxed text-lg mb-10">
              The Supporter Hub is a working tool, live at chiarts.support, available to ChiArts staff and anyone in their network who wants to help. The partner directory grows. The grant calendar updates. The letters go out. The school keeps going.
            </p>

            <div className="my-10 relative pl-6 md:pl-8 text-left">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_LIGHT})` }} />
              <p className="text-lg md:text-xl font-semibold text-white leading-snug italic">
                The best tool is the one that gets used. This one was built to be used on day one.
              </p>
            </div>

            <a href="/#contact" onClick={(e) => { e.preventDefault(); sessionStorage.setItem("hashNav", "#contact"); window.location.href = "/#contact"; }}
              className="inline-flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-80"
              style={{ color: GOLD }}>
              Let's talk →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
