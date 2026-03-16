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
  viewport: { once: true as const, margin: '-120px' },
  transition: { duration: 0.5, ease },
}

const tools = [
  { num: '01', title: 'Partner & Funder Directory' },
  { num: '02', title: 'Outreach Letter Generator' },
  { num: '03', title: 'Grant Calendar' },
  { num: '04', title: 'Corporate Matching Gifts' },
  { num: '05', title: 'Social Media Templates' },
]

const context = [
  {
    icon: '🏫',
    title: 'What ChiArts Is',
    body: 'Chicago High School for the Arts is a public magnet school in the Loop. Tuition-free, audition-based, and built around conservatory training in Music, Theatre, Dance, Visual Arts, and Creative Writing.',
  },
  {
    icon: '⚠️',
    title: 'What Happened',
    body: 'During the 2024–25 school year, the ChiArts Foundation board disbanded and fundraising operations reset under CPS. Parents were running pizza days. Teachers were looking for partners to cover graduation fees kids couldn\'t afford.',
  },
  {
    icon: '🎯',
    title: 'What Needed To Exist',
    body: 'A practical operating system for fundraising: partner intelligence, faster outreach, and a live grants cadence that staff and parent volunteers could use immediately — with zero onboarding.',
  },
]

const decisions = [
  {
    title: 'Design for speed, not training',
    body: 'Every module was built for immediate adoption by busy school staff. No custom dashboards, no complex setup, no dependency on one operator.',
  },
  {
    title: 'Prioritize action over information',
    body: 'Directory cards connect directly to outreach generation. Grant rows include next action language. The product pushes users toward execution, not browsing.',
  },
  {
    title: 'Ship as a real system',
    body: 'This is production software, not a concept deck. Live data structures, reusable templates, and deploy-ready architecture were required from day one.',
  },
]

const outcomes = [
  { value: '97', label: 'Organizations vetted and structured' },
  { value: '12', label: 'Funding categories operationalized' },
  { value: '90 sec', label: 'Average time to usable outreach letter' },
  { value: 'Live', label: 'Platform available at chiarts.support' },
]

const GOLD = '#C9A84C'
const GOLD_LIGHT = '#E8C87A'

function SectionDivider({ fromDark = false }: { fromDark?: boolean }) {
  return (
    <div className={fromDark ? 'bg-[#0d0d0d]' : 'bg-white'} aria-hidden="true">
      <div
        className="h-10"
        style={{
          background: fromDark
            ? 'linear-gradient(to bottom, rgba(13,13,13,1), rgba(13,13,13,0) 65%, rgba(255,255,255,1))'
            : 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0) 65%, rgba(13,13,13,1))',
        }}
      />
    </div>
  )
}

export default function CaseChiArts() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    navigate('/', { state: { from: '/#projects' } })
    setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <div className="min-h-screen bg-white">
      <section style={{ backgroundColor: '#0d0d0d' }} className="px-6 pb-24 pt-16">
        <div className="mx-auto max-w-5xl">
          <motion.button
            onClick={handleBack}
            className="mb-12 flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            ← Back to Work
          </motion.button>

          <motion.p
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: GOLD }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Case Study · ChiArts Supporter Hub
          </motion.p>

          <motion.h1
            className="mb-6 text-4xl font-black leading-none tracking-tight text-white sm:text-5xl md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            This school didn't need saving. It needed better tools.
          </motion.h1>

          <motion.p
            className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            When the ChiArts Foundation board disbanded, the school kept going. The fundraising infrastructure didn't. My daughter was a freshman there. I had 20 years of Chicago creative industry contacts and the skills to build something useful. So I did.
          </motion.p>

          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://chiarts.support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 hover:scale-105 hover:opacity-90 active:scale-100"
              style={{ backgroundColor: GOLD, color: '#0d0d0d' }}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-current" />
              View Live Site
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { value: '97', label: 'Vetted partners and funders', accent: GOLD },
              { value: '12', label: 'Funding categories', accent: GOLD_LIGHT },
              { value: '5', label: 'Conservatory disciplines', accent: GOLD },
              { value: '90 sec', label: 'Outreach letter, ready to send', accent: GOLD_LIGHT },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="relative overflow-hidden rounded-xl border border-neutral-700/60 bg-gradient-to-br from-neutral-900 to-neutral-800/80 p-4"
              >
                <div
                  className="absolute left-0 top-0 h-[2px] w-full"
                  style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }}
                />
                <div className="text-base font-black tracking-tight text-white">{s.value}</div>
                <div className="mt-1 text-xs leading-relaxed text-neutral-400">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section style={{ backgroundColor: '#0d0d0d' }} className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp}>
            <img
              src="/chiarts-hero.png"
              alt="ChiArts Supporter Hub hero section with mission statement and primary calls to action"
              className="w-full rounded-2xl border border-neutral-800 shadow-2xl"
            />
            <p className="mt-3 text-center text-sm italic text-neutral-500">
              chiarts.support, live and in active use
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider fromDark />

      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="mb-14">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: GOLD }}>
              The Context
            </p>
            <h2 className="mb-10 max-w-2xl text-3xl font-bold text-neutral-900 md:text-4xl">
              Personal urgency, handled with product discipline.
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {context.map((item) => (
                <div key={item.title} className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  {/* Gold left border accent */}
                  <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_LIGHT})` }} />
                  <div className="pl-2">
                    {/* Icon badge */}
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-2xl" style={{ background: `linear-gradient(135deg, ${GOLD}22, ${GOLD}11)`, border: `1px solid ${GOLD}44` }}>
                      {item.icon}
                    </div>
                    <h3 className="mb-2 text-sm font-black uppercase tracking-widest text-neutral-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-1 gap-10 border-t border-neutral-200 pt-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: GOLD }}>
                Product Decisions
              </p>
              <div className="space-y-3">
                {decisions.map((item) => (
                  <div key={item.title} className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-xl" style={{ background: `linear-gradient(to bottom, ${GOLD}, ${GOLD_LIGHT})` }} />
                    <div className="pl-3">
                      <h3 className="mb-1 text-sm font-black text-neutral-900">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-neutral-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: GOLD }}>
                My Role
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Strategy', detail: 'Defined scope, priorities, and tool architecture', icon: '🎯' },
                  { label: 'Research', detail: 'Vetted organizations and authored source content', icon: '🔍' },
                  { label: 'Design', detail: 'Built information hierarchy and interaction system', icon: '✏️' },
                  { label: 'Build', detail: 'Shipped React + Vite + Tailwind app to production', icon: '⚙️' },
                ].map((r) => (
                  <div key={r.label} className="rounded-xl p-4" style={{ background: `linear-gradient(135deg, ${GOLD}18, ${GOLD}08)`, border: `1px solid ${GOLD}33` }}>
                    <p className="mb-1 text-sm font-black text-neutral-900">{r.label}</p>
                    <p className="text-xs leading-relaxed text-neutral-600">{r.detail}</p>
                  </div>
                ))}
              </div>
              <div className="relative mt-8 border-l-2 pl-5" style={{ borderColor: GOLD }}>
                <p className="text-lg font-semibold italic leading-snug text-neutral-900">
                  The programs survived. The infrastructure to fund them did not. So I built the infrastructure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section style={{ backgroundColor: '#0d0d0d' }} className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: GOLD }}>
              What Was Built
            </p>
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Five tools. Try three of them right here.</h2>
            <p className="max-w-3xl text-neutral-400">
              These embeds are pulled directly from production. No mocks, no iframes, no static screenshots.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-14">
            <div className="mt-6 flex flex-wrap gap-3">
              {tools.map((t) => (
                <span
                  key={t.num}
                  className="flex items-center gap-2 rounded-full border border-neutral-800 bg-[#111111] px-4 py-1.5 text-sm text-neutral-300"
                >
                  <span className="font-bold" style={{ color: GOLD }}>
                    {t.num}
                  </span>
                  <span>{t.title}</span>
                </span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-[#121212] p-4 md:p-6"
            >
              <div className="mb-5 md:mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
                  01
                </span>
                <h3 className="mt-1 text-2xl font-black text-white">Partner & Funder Directory</h3>
                <p className="mt-1 max-w-2xl text-sm text-neutral-400">
                  97 vetted organizations across 12 categories. Filter by partner type, flag foundation relationships, and launch personalized outreach from each card.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                <EmbedDirectory />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-6 lg:grid-cols-2"
            >
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#121212] p-4 md:p-6">
                <div className="mb-5 min-h-[110px] md:mb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
                    02
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-white">Letter Generator</h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    Select partner type, add a contact, and generate a tailored outreach letter in under two minutes.
                  </p>
                </div>
                <div className="flex-1 overflow-hidden rounded-xl ring-1 ring-white/10">
                  <EmbedLetterGenerator />
                </div>
              </div>

              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#121212] p-4 md:p-6">
                <div className="mb-5 min-h-[110px] md:mb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
                    03
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-white">Grant Calendar</h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    High-priority opportunities sorted by status, deadline, and recommended next action.
                  </p>
                </div>
                <div className="flex-1 overflow-hidden rounded-xl ring-1 ring-white/10">
                  <EmbedGrantCalendar />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider fromDark />

      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: GOLD }}>
              Outcomes
            </p>
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">Strategy. Research. Design. Code. All of it.</h2>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-600">
              This wasn't a team project or an agency brief. One person, one week, a real problem — and a working platform that shipped to production. If that's the kind of person you're looking for, keep reading.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {outcomes.map((item) => (
                <div key={item.label} className="relative overflow-hidden rounded-xl p-4" style={{ background: `linear-gradient(135deg, #0d0d0d, #1a1a1a)`, border: `1px solid ${GOLD}33` }}>
                  <div className="absolute left-0 top-0 h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
                  <p className="text-2xl font-black leading-none" style={{ color: GOLD }}>
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section style={{ backgroundColor: '#0d0d0d' }} className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: GOLD }}>
              The Takeaway
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">What this says about how I work.</h2>
            <p className="mb-6 text-lg leading-relaxed text-neutral-400">
              I saw a problem that involved people I care about, in an institution I believe in, in a city I've worked in for 20 years. I didn't wait to be asked. I defined the product, did the research, designed the UX, and built it — start to shipped — because that's what the situation required.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-neutral-400">
              The Supporter Hub is live at chiarts.support. The partner directory keeps growing. The letters go out. The school keeps going. My daughter is still there.
            </p>

            <div className="my-10 text-left">
              <div className="relative border-l-2 pl-5" style={{ borderColor: GOLD }}>
                <p className="text-lg font-semibold italic leading-snug text-white md:text-xl">
                  The best work comes from problems you refuse to leave unsolved.
                </p>
              </div>
            </div>

            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault()
                sessionStorage.setItem('hashNav', '#contact')
                window.location.href = '/#contact'
              }}
              className="inline-flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-80"
              style={{ color: GOLD }}
            >
              Let's talk →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
