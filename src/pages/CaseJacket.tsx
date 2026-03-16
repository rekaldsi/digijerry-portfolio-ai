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

const AMBER = '#F59E0B'
const AMBER_LIGHT = '#FCD34D'
const DARK = '#111111'

const problem = [
  {
    icon: '📊',
    title: 'Civic data is scattered',
    body: 'FEC filings, state finance records, court documents, bar ratings, endorsements — all public, all buried in different government databases that most voters never navigate.',
  },
  {
    icon: '⏱️',
    title: 'The ballot arrives with no context',
    body: 'Most voters encounter 30–40 races on primary day. There\'s no centralized resource that tells you who these people are, who funded them, and what their record looks like.',
  },
  {
    icon: '🗂️',
    title: 'Transparency is theoretical',
    body: 'The data is technically available. But "technically available" and "usable by a voter with 10 minutes" are two very different things. The gap between them is where accountability dies.',
  },
]

const features = [
  {
    num: '01',
    title: 'Candidate Profiles',
    body: '81 candidates across 44 races. Each profile contains biography, campaign finance sourced from FEC and ILSBE, red flags with confirmed/unconfirmed discipline, endorsements, and policy positions. Every data point linked to its source.',
    image: '/jacket-candidate.png',
    imageAlt: 'TheJacket candidate profile page showing campaign finance and red flags',
    caption: 'Every profile sourced from FEC, ILSBE, court records, and investigative reporting. Confirmed flags only — "confirmed: true" required before display.',
  },
  {
    num: '02',
    title: 'Transparency Scorecard',
    body: 'A–F grades for every candidate based on documented public record. Finance transparency, red flag count, source credibility. The algorithm is public. The methodology is disclosed. No black box.',
    image: '/jacket-scorecard.png',
    imageAlt: 'TheJacket transparency scorecard with A-F grade color coding',
    caption: 'Searchable, filterable, color-coded A–F grades. Every score has a documented methodology. Every grade links to its evidence.',
  },
  {
    num: '03',
    title: 'Live Intel Feed',
    body: 'Real-time signal feed surfacing new developments — finance filings, court records, endorsements, news hits — across all monitored candidates. Powered by an autonomous AI enrichment pipeline running 3x daily.',
    image: '/jacket-intel.png',
    imageAlt: 'TheJacket live intel feed showing candidate flags and breaking news',
    caption: 'Hot Board Carousel: rAF-driven animation, round-robin interleaved by candidate, severity-colored. News intel cron runs autonomously at 8am, 2pm, and 8pm.',
  },
  {
    num: '04',
    title: 'Booth Mode',
    body: 'Build your personal ballot. Every race, every candidate, their grade and confirmed flags side-by-side. Your picks are saved only on your device — no accounts, no tracking, no data collection.',
    image: '/jacket-booth.png',
    imageAlt: 'TheJacket Booth Mode showing candidate grade cards for ballot building',
    caption: 'Privacy-first by design. Picks stored in localStorage only. Zero accounts required.',
  },
  {
    num: '05',
    title: 'Judicial Watch',
    body: '23 Cook County circuit court judges rated by the Alliance of Bar Associations and the Chicago Bar Association. Separate scoring logic for judicial candidates — bar ratings replace finance as the primary signal.',
    image: null,
    imageAlt: null,
    caption: null,
  },
  {
    num: '06',
    title: 'Races Directory',
    body: 'All 44 races organized by jurisdiction, filterable by party. Federal, statewide, Cook County. Every race clickable, every candidate visible.',
    image: '/jacket-races.png',
    imageAlt: 'TheJacket races directory with party filter pills and race cards',
    caption: '44 races, 81 candidates, 23 judges. Filter by party. Every race on one page.',
  },
]

const decisions = [
  {
    title: 'Static JSON over database',
    body: 'Zero runtime cost. Instant deploys. No database to maintain during quiet periods between elections. The data lives in version-controlled JSON files — editable, auditable, and deployable in seconds.',
  },
  {
    title: 'confirmed: true discipline',
    body: 'Every red flag requires a boolean "confirmed" field. Allegations without independent verification display differently than documented facts. The distinction matters legally and editorially.',
  },
  {
    title: 'Nonpartisan scope, always',
    body: 'Every party on the ballot. Every race. The moment you exclude a party, you stop being a voter tool and start being a campaign tool. That line never moves.',
  },
  {
    title: 'Autonomous AI enrichment',
    body: 'Two cron jobs run without human intervention — news intel at 8/2/8 CDT, data enrichment at 6/2/10 CDT. New signals commit to GitHub and trigger Vercel auto-deploy automatically.',
  },
]

export default function CaseJacket() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleBack = () => {
    navigate('/', { state: { from: '/#projects' } })
    setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: DARK }}>

      {/* HERO */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="pt-16 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.button onClick={handleBack}
            className="text-neutral-500 text-sm font-medium hover:text-white transition-colors mb-12 flex items-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            ← Back to Work
          </motion.button>

          <motion.p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: AMBER }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Case Study · TheJacket
          </motion.p>

          <motion.h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Civic data is public.<br />Making it usable is the work.
          </motion.h1>

          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            TheJacket is a voter intelligence platform for Cook County, Illinois. 81 candidates, 44 races, 23 judges — every campaign finance record, every documented red flag, every transparency grade in one place. Built as a product, not a spreadsheet.
          </motion.p>

          <motion.div className="flex flex-wrap gap-3 mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <a href="https://thejacket.cc" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: AMBER, color: '#0a0a0a' }}>
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              View Live Site
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {[
              { value: '81', label: 'Candidates profiled', accent: AMBER },
              { value: '44', label: 'Races covered', accent: AMBER_LIGHT },
              { value: '23', label: 'Judges rated', accent: AMBER },
              { value: 'A–F', label: 'Transparency grades for all', accent: AMBER_LIGHT },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="relative overflow-hidden rounded-xl border border-neutral-800/60 bg-gradient-to-br from-neutral-900 to-neutral-800/80 p-4">
                <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }} />
                <div className="text-white font-black text-xl tracking-tight">{s.value}</div>
                <div className="text-neutral-400 text-xs mt-1 leading-relaxed">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HERO SCREENSHOT */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <img src="/jacket-hero.png" alt="TheJacket homepage showing the animated jacket hero and live intel feed"
              className="w-full rounded-2xl border border-neutral-800 shadow-2xl" />
            <p className="text-neutral-500 text-sm mt-3 text-center italic">thejacket.cc — live through the March 17, 2026 Illinois primary</p>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: AMBER }}>The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Voters have the right to the information.<br />They just can't find it.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              {problem.map((item) => (
                <div key={item.title} className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl" style={{ background: `linear-gradient(to bottom, ${AMBER}, ${AMBER_LIGHT})` }} />
                  <div className="pl-2">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-2xl border border-neutral-100 bg-neutral-50">
                      {item.icon}
                    </div>
                    <h3 className="mb-2 text-sm font-black uppercase tracking-widest text-neutral-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-14 relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: `linear-gradient(to bottom, ${AMBER}, ${AMBER_LIGHT})` }} />
              <p className="text-xl md:text-2xl font-semibold text-neutral-900 leading-snug italic">
                "Politicians should wear sponsor jackets like NASCAR drivers, then we know who owns them." — Robin Williams. That's the product brief.
              </p>
            </div>
          </motion.div>

          {/* My Role */}
          <motion.div {...fadeUp} className="pt-10 border-t border-neutral-200">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: AMBER }}>My Role</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Product Strategy', detail: 'Defined scope, framing, nonpartisan editorial standards', icon: '🎯' },
                { label: 'Data Research', detail: '81 candidates vetted from FEC, ILSBE, court records, news', icon: '🔍' },
                { label: 'System Design', detail: 'Scoring engine, data schema, editorial policy, UI architecture', icon: '✏️' },
                { label: 'Engineering', detail: 'Full-stack Next.js 15 + TypeScript, autonomous AI enrichment pipeline', icon: '⚙️' },
              ].map((r) => (
                <div key={r.label} className="rounded-xl p-4" style={{ background: `linear-gradient(135deg, ${AMBER}18, ${AMBER}08)`, border: `1px solid ${AMBER}33` }}>
                  <p className="mb-1 text-sm font-black text-neutral-900">{r.label}</p>
                  <p className="text-xs leading-relaxed text-neutral-600">{r.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: AMBER }}>The Platform</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Six surfaces. One unified system.</h2>
          </motion.div>

          <div className="space-y-24">
            {features.map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                {item.image ? (
                  <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                    <div className="flex-1">
                      <div className="text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: AMBER }}>{item.num}</div>
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
                    <div className="text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: AMBER }}>{item.num}</div>
                    <h3 className="text-white font-black text-3xl mb-5 tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed max-w-2xl">{item.body}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DECISIONS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: AMBER }}>Design Decisions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10">
              The choices that define the platform.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {decisions.map((item) => (
                <div key={item.title} className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-xl" style={{ background: `linear-gradient(to bottom, ${AMBER}, ${AMBER_LIGHT})` }} />
                  <div className="pl-3">
                    <h3 className="mb-2 text-sm font-black text-neutral-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: AMBER }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What this says about how I work.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-6">
              TheJacket is a civic information product — not a political one. The platform covers every candidate on the ballot regardless of party, sources every claim to its original document, and makes the methodology public. The goal was a tool voters could trust, built by someone who cares about the same things they do.
            </p>
            <p className="text-neutral-400 leading-relaxed text-lg mb-10">
              It required a scoring engine, an autonomous data pipeline, an editorial policy, a UI system, and 81 individual candidate research files — all built by one person. That's the range this project demonstrates.
            </p>

            <div className="my-10 relative pl-6 md:pl-8 text-left">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: `linear-gradient(to bottom, ${AMBER}, ${AMBER_LIGHT})` }} />
              <p className="text-lg md:text-xl font-semibold text-white leading-snug italic">
                The best work comes from problems you refuse to leave unsolved.
              </p>
            </div>

            <a href="/#contact" onClick={(e) => { e.preventDefault(); sessionStorage.setItem('hashNav', '#contact'); window.location.href = '/#contact'; }}
              className="inline-flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-80"
              style={{ color: AMBER }}>
              Let's talk →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
