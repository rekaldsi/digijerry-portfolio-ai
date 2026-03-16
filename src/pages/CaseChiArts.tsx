import { motion } from 'framer-motion'
import type { Easing } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// @ts-ignore
import EmbedDirectory from '../chiarts/EmbedDirectory'
// @ts-ignore
import EmbedLetterGenerator from '../chiarts/EmbedLetterGenerator'
// @ts-ignore
import EmbedGrantCalendar from '../chiarts/EmbedGrantCalendar'

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
    body: 'Chicago High School for the Arts is a public magnet school in the Loop — one of the few schools in the country offering a full conservatory arts education inside a public high school. Music, Theatre, Dance, Visual Arts, Creative Writing. Tuition-free, audition-based, serving some of the most talented young people in the city.',
  },
  {
    icon: '⚠️',
    title: 'What Happened',
    body: 'Midway through the 2024–25 school year, the ChiArts Foundation board disbanded and returned control to Chicago Public Schools. The fundraising infrastructure — the relationships, the pipelines, the institutional knowledge — disappeared with it. Parents started running pizza days. Teachers were looking for partners to cover graduation fees kids couldn\'t afford. Theater kids were practicing for shows without food.',
  },
  {
    icon: '🎯',
    title: 'The Gap I Saw',
    body: 'The PSO, the Foundation staff, and ChiArts teachers were scrambling — passionate, committed, and operating with no tools. No centralized partner list. No grant calendar. No way to generate outreach letters at scale. I had 20 years in the Chicago creative industry and a working knowledge of the exact organizations that could help. That combination felt like a responsibility.',
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
            I knew every organization that could save this school. So I built the tool to reach them.
          </motion.h1>
          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Midway through her freshman year, the board disbanded. Fundraising infrastructure gone. Parents scrambling with pizza days and snack drives. Teachers looking for partners to cover graduation fees kids couldn't afford. I'm a strategist and a builder. So I built something.
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
              { icon: '✉️', value: '90 sec', label: 'Outreach letter, ready to send', accent: GOLD_LIGHT },
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
                The programs survived. The infrastructure to fund them didn't. I had the skills to build it. So I did.
              </p>
            </div>

            {/* My Role */}
            <div className="mt-12 pt-10 border-t border-neutral-200">
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: GOLD }}>My Role</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Strategy', detail: 'Defined the platform concept, scope, and toolset from scratch' },
                  { label: 'Research', detail: '97 organizations manually vetted, every description and letter template authored' },
                  { label: 'Product Design', detail: 'UX architecture, information hierarchy, interaction design' },
                  { label: 'Development', detail: 'Full-stack build — React, Vite, Tailwind, deployed to production' },
                ].map((r) => (
                  <div key={r.label} className="border border-neutral-200 rounded-xl p-4 bg-neutral-50">
                    <p className="font-bold text-neutral-900 text-sm mb-1">{r.label}</p>
                    <p className="text-neutral-500 text-xs leading-relaxed">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>Why It Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              This isn't a portfolio project. It's personal.
            </h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed text-lg">
              <p>
                I watched my daughter go through this. I watched teachers scramble. I watched parents run pizza days to cover rehearsal snacks for kids who just wanted to be there. These are talented young people — Music, Theatre, Dance, Visual Arts, Creative Writing — who earned their place at this school through an audition. They didn't earn a fundraising crisis.
              </p>
              <p>
                I've spent 20 years working alongside the exact organizations that could help ChiArts — the agencies, the foundations, the corporate partners. I know these rooms. So I built the tool that maps all of them, writes the outreach letters, tracks the deadlines, and hands it to the people who can actually use it.
              </p>
              <p>
                The Supporter Hub won't solve the underlying problem of how public arts education is funded in this city. But it means the next development conversation happens instead of getting lost in a spreadsheet. That's worth building.
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

      {/* WHAT WAS BUILT — Live Module Board */}
      <section style={{ backgroundColor: '#0d0d0d' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-6">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>What Was Built</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Five tools. Try three of them right here.</h2>
            <p className="text-neutral-400 max-w-2xl">The modules below are pulled directly from the live platform — not screenshots, not mockups. Partner directory, letter generator, grant calendar. Interactive, working, real.</p>
          </motion.div>

          {/* Tool list — text only for tools 4+5 */}
          <motion.div {...fadeUp} className="mb-16">
            <div className="flex flex-wrap gap-4 mt-6">
              {tools.map((t) => (
                <span key={t.num} className="flex items-center gap-2 text-sm text-neutral-400 border border-neutral-800 rounded-full px-4 py-1.5">
                  <span className="font-bold" style={{ color: GOLD }}>{t.num}</span>
                  <span>{t.title}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Module board — dark card layout */}
          <div className="space-y-20">

            {/* Module 1: Partner Directory */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="mb-6 flex items-end gap-4">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: GOLD }}>01</span>
                  <h3 className="text-white font-black text-2xl mt-1">Partner & Funder Directory</h3>
                  <p className="text-neutral-400 text-sm mt-1 max-w-xl">97 vetted organizations across 12 categories. Filter by type, see foundation partners flagged, and launch a personalized letter from any card.</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <EmbedDirectory />
              </div>
            </motion.div>

            {/* Modules 2+3 side by side — equal height, top-aligned */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

              {/* Letter Generator */}
              <div className="flex flex-col">
                <div className="mb-6 min-h-[88px]">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: GOLD }}>02</span>
                  <h3 className="text-white font-black text-2xl mt-1">Letter Generator</h3>
                  <p className="text-neutral-400 text-sm mt-1">Select a partner type, enter a name, get a personalized outreach letter. Try it.</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 flex-1">
                  <EmbedLetterGenerator />
                </div>
              </div>

              {/* Grant Calendar */}
              <div className="flex flex-col">
                <div className="mb-6 min-h-[88px]">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: GOLD }}>03</span>
                  <h3 className="text-white font-black text-2xl mt-1">Grant Calendar</h3>
                  <p className="text-neutral-400 text-sm mt-1">Active funding opportunities sorted by urgency. The first view every Monday morning.</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 flex-1">
                  <EmbedGrantCalendar />
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section style={{ backgroundColor: '#0d0d0d' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What this says about how I work.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-6">
              I saw a problem that involved people I care about, in an institution I believe in, in a city I've worked in for 20 years. I didn't wait to be asked. I defined the product, did the research, designed the UX, and built it — start to shipped — because that's what the situation required.
            </p>
            <p className="text-neutral-400 leading-relaxed text-lg mb-10">
              The Supporter Hub is live at chiarts.support. The partner directory keeps growing. The letters go out. The school keeps going. My daughter is still there.
            </p>

            <div className="my-10 relative pl-6 md:pl-8 text-left">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_LIGHT})` }} />
              <p className="text-lg md:text-xl font-semibold text-white leading-snug italic">
                The best work comes from problems you refuse to leave unsolved.
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
