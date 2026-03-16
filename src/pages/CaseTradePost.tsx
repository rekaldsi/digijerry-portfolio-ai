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

const evolution = [
  {
    phase: 'Trade Post',
    desc: 'A neighborhood barter and coordination app. Post offers, post needs, browse listings, send messages. Cloud-hosted on Supabase. Standard client-server architecture. Solid foundation — but dependent on the internet to function.',
  },
  {
    phase: 'Trade Post + OVERWATCH',
    desc: 'Added the infrastructure intelligence layer. OVERWATCH measured real neighborhood signal density — WiFi, BLE, LoRa mesh nodes — and produced a 0–100 Neighborhood Readiness Index. Now the platform knew whether the local network could actually support peer-to-peer traffic.',
  },
  {
    phase: 'Trade Post Mesh',
    desc: 'The full vision, now a working prototype. Mesh-native transport activated by OVERWATCH intelligence. Offers, needs, and alerts broadcast through Meshtastic LoRa radio when the internet is down. E2EE payloads. Offline listing cache. Cloud becomes optional sync, not required infrastructure. Currently preparing for neighborhood pilot testing in Chicagoland.',
  },
]

const contrast = [
  {
    label: 'Transport',
    icon: '📶',
    after: 'Peer-to-peer over LoRa, BLE, and WiFi',
    afterSub: 'Messages travel device-to-device without touching a server.',
    before: 'Previously: Client to Supabase to Client',
  },
  {
    label: 'Connectivity',
    icon: '🔌',
    after: 'Offline-first. Cloud as memory, not dependency.',
    afterSub: 'The app works when the grid is down. Cloud syncs when it comes back.',
    before: 'Previously: Internet required to function',
  },
  {
    label: 'Encryption',
    icon: '🔐',
    after: 'End-to-end encrypted. The server is blind.',
    afterSub: 'Payloads are encrypted before they leave the device. Nothing in transit is readable.',
    before: 'Previously: Server-visible payloads',
  },
  {
    label: 'Mesh Activation',
    icon: '🗺️',
    after: 'Conditional. Triggered by OVERWATCH readiness score.',
    afterSub: 'The system knows when a neighborhood can support mesh and switches automatically.',
    before: 'Previously: Not possible',
  },
]

const features = [
  {
    num: '01',
    title: 'Offer / Need / Alert Feed',
    body: 'The core coordination surface. Post what you have, what you need, or what the neighborhood needs to know right now. Posts are typed — OFFER, NEED, ALERT, PIN — tagged with a node ID and set to expire. Browse without filtering noise from outside your area. When the grid is up, it syncs to cloud. When it isn\'t, the mesh carries it.',
    image: '/tradepost-main.png',
    imageAlt: 'Trade Post Mesh feed showing a life-critical NEED post for insulin storage during a power outage',
    caption: 'A real scenario: power out, insulin needs refrigeration, Back of the Yards. The app surfaces this to neighbors within mesh range — no internet required.',
  },
  {
    num: '02',
    title: 'Mesh Transport via Meshtastic LoRa',
    body: 'Lightweight post intents broadcast over LoRa radio: the same long-range, low-power protocol used in disaster relief networks. No internet required for local propagation. Each post hops between mesh nodes, tagged with the originating node ID. The mesh doesn\'t replace the cloud. It activates when the cloud isn\'t there.',
    image: '/tradepost-new-post.png',
    imageAlt: 'New post composer showing mesh radio broadcast options, post types, and location privacy controls',
    caption: 'Post via Gateway or direct radio. Location privacy-fuzzes to ±500m by default. Posts travel peer-to-peer over LoRa when grid connectivity is unavailable.',
  },
  {
    num: '03',
    title: 'E2EE From the Foundation',
    body: 'End-to-end encryption was designed in, not added on. Device key registration, Signal Protocol scaffolding, encrypted payload storage. The server is intentionally blind to offer content. Peer-to-peer mesh transport extends that property: payloads encrypted between devices, no relay decryption at any hop.',
    image: '/tradepost-what-is-it.png',
    imageAlt: 'Trade Post Mesh architecture overview — radio layer, app layer, no cell service required',
    caption: 'Three layers: the radio mesh, the app, and cloud sync. The server sees nothing it doesn\'t need to. Encryption is end-to-end at every transport layer.',
  },
  {
    num: '04',
    title: 'OVERWATCH-Driven Mesh Activation',
    body: 'Mesh transport isn\'t always-on. It\'s conditional — activated when OVERWATCH reports sufficient BLE density, mesh node coverage, and redundancy for the local area. If the neighborhood can support it, offers route peer-to-peer. If not, the system uses cloud relay and flags the gap. Infrastructure viability drives transport selection automatically.',
    image: '/overwatch-map-full.jpg',
    imageAlt: 'OVERWATCH Chicago intelligence grid, the layer that determines when mesh activates',
    caption: 'OVERWATCH: the intelligence layer underneath. Millions of scans, hundreds of mesh nodes, real-time readiness scoring tells Trade Post Mesh when to go peer-to-peer.',
  },
  {
    num: '05',
    title: 'Neighborhood Map',
    body: 'Every post with a location appears on the map. Filter by type — offers, needs, alerts, pins — and see what\'s happening in each neighborhood at a glance. Tap any pin to expand the post. When mesh nodes are visible, the map shows their coverage radius so neighbors know where the off-grid signal reaches.',
    image: '/tradepost-map.png',
    imageAlt: 'Chicago neighborhood map with colored pins for offers, needs, alerts and mesh node locations',
    caption: 'Live map of coordinated activity across Chicago neighborhoods. Colored by post type. Mesh node coverage shown as radius overlays when active.',
  },
]

const usecases = [
  {
    icon: '🌪️',
    title: 'Disaster Response',
    body: 'When the grid fails — tornado, flood, ice storm, power outage — every cloud-dependent tool goes dark. Trade Post Mesh stays on. Neighbors can post alerts, request supplies, and coordinate mutual aid over LoRa radio without touching a cell tower or router.',
  },
  {
    icon: '🏘️',
    title: 'Neighborhood Mutual Aid',
    body: 'A digital layer for the way neighborhoods already work. Post what you have. Find what you need. Coordinate locally without a middleman, a fee, or a platform that monetizes your data. Designed for the kind of reciprocity that already exists in tight-knit communities.',
  },
  {
    icon: '🔄',
    title: 'Barter and Local Trade',
    body: 'Cash-optional exchange for goods and services. Tools, food, labor, childcare, rides — coordinate trades directly with neighbors. The mesh carries intent; settlement happens in person. No payment processor required.',
  },
  {
    icon: '📡',
    title: 'Off-Grid Communities',
    body: 'Rural areas, intentional communities, event campgrounds, protest sites, festival grounds — anywhere centralized internet is unavailable, unreliable, or politically compromised. Trade Post Mesh is the coordination layer that works regardless of grid status.',
  },
  {
    icon: '🏗️',
    title: 'Community Infrastructure',
    body: 'Tool libraries, community gardens, maker spaces, mutual aid networks — any shared resource that requires coordination between neighbors. Pin permanent nodes, publish availability, track who has what and what\'s needed. The platform scales from one block to a whole city.',
  },
  {
    icon: '🛡️',
    title: 'Privacy-Critical Organizing',
    body: 'E2EE from the foundation. The server is intentionally blind. Location fuzzes to ±500m by default. No user tracking, no metadata leakage, no platform with access to what neighbors are trading or requesting. Built for communities where discretion is not optional.',
  },
]

const decisions = [
  {
    title: 'Start With the App, Then Earn the Mesh',
    body: 'Trade Post launched as a standard cloud app first — proving people would actually use a neighborhood coordination platform before building harder mesh infrastructure on top. The evolution to Mesh wasn\'t scope creep. It was the original destination, reached in the right order.',
  },
  {
    title: 'Cloud-Optional, Not Anti-Cloud',
    body: 'The ambition was never to eliminate cloud infrastructure — it was to stop requiring it. Supabase stays in the stack as secondary memory and sync. The shift is in what\'s required vs. what\'s preferred. Cloud becomes a nice-to-have, not a dependency. That\'s a fundamentally different architecture contract.',
  },
  {
    title: 'Economic Exchange as the Hard Use Case',
    body: 'Most mesh apps solve for messaging. Trade Post Mesh targets the harder problem: economic coordination. Matching offers with needs, propagating trade intent hop-by-hop, caching listings locally. Discovery and coordination travel over mesh — settlement syncs when the grid returns. If you can do commerce without the internet, messaging is already solved.',
  },
  {
    title: 'Built for the Worst Moment, Not the Average One',
    body: 'Every architecture decision was stress-tested against one question: does this work when the grid goes down at the exact moment the community needs it most? That constraint ruled out every conventional approach and forced the design toward something genuinely resilient.',
  },
]

export default function CaseTradePost() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleBack = () => {
    navigate('/', { state: { from: '/#projects' } })
    setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="pt-16 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.button onClick={handleBack}
            className="text-neutral-500 text-sm font-medium hover:text-white transition-colors mb-12 flex items-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            ← Back to Work
          </motion.button>
          <motion.p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Case Study · Trade Post Mesh
          </motion.p>
          <motion.h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            A Neighborhood OS.<br />No Internet Required.
          </motion.h1>
          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Trade Post Mesh is a communication infrastructure and neighborhood operating system for barter, mutual aid, and local coordination — built to function without the internet. Trade goods, request help, post alerts, organize your block. It works over LoRa mesh radio when the grid is up, and keeps working when it isn't. Built on Meshtastic, end-to-end encryption, and OVERWATCH infrastructure intelligence. Currently a working prototype preparing for pilot deployment in Chicagoland.
          </motion.p>

          {/* Live Demo CTA */}
          <motion.div className="mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <a
              href="https://trade-post-mesh-production.up.railway.app/app?demo=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-100"
              style={{ backgroundColor: '#00C896', color: '#0a0a0a' }}
            >
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              Explore Live Demo
            </a>
          </motion.div>

          {/* Hero stat cards — gradient accent, emoji icons */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {[
              { icon: '📻', value: 'LoRa Mesh', label: 'Primary transport', accent: '#00C896' },
              { icon: '🔐', value: 'E2EE', label: 'Signal Protocol scaffolding', accent: '#C8F135' },
              { icon: '📴', value: 'Offline-first', label: 'Cloud as optional sync', accent: '#00C896' },
              { icon: '🌪️', value: 'Prototype', label: 'Pilot testing in Chicagoland', accent: '#C8F135' },
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
      <section style={{ backgroundColor: '#0a0a0a' }} className="pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp}>
            <img src="/tradepost-main.png" alt="Trade Post Mesh NEED feed — insulin storage emergency" className="w-full rounded-2xl border border-neutral-800" />
            <p className="text-sm text-neutral-500 mt-3 text-center italic">Live NEED post — power out, insulin needs refrigeration, Back of the Yards. No internet. No cell service. Neighbors still coordinating.</p>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Every platform built for neighbors assumes the grid stays on.
            </h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed text-lg">
              <p>
                Facebook Marketplace. Craigslist. Nextdoor. Every tool built for neighborhood coordination routes through centralized cloud infrastructure. When the grid goes down — tornado, power outage, infrastructure failure — they disappear. During the exact moments when neighbors most need to find supplies, post safety alerts, request help, and coordinate exchange, the tools stop working.
              </p>
              <p>
                But the problem runs deeper than disaster preparedness. Even on a normal day, local coordination is broken. Mutual aid networks run on spreadsheets. Barter happens through private DMs on platforms that take a cut. Community resources — tool libraries, shared gardens, skill exchanges — have no shared operating layer. Neighbors are willing to help each other. The infrastructure to facilitate it doesn't exist.
              </p>
              <p>
                Trade Post Mesh is that infrastructure. A neighborhood operating system for trade, mutual aid, and local coordination — built to work at full capacity when the internet is available, and to keep working when it isn't.
              </p>
            </div>

            {/* Pull quote */}
            <div className="my-12 relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #00C896, #C8F135)' }} />
              <p className="text-xl md:text-2xl font-semibold text-neutral-900 leading-snug italic">
                Neighbors are willing to help each other. The infrastructure to make it easy has never existed. Until now.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EVOLUTION */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Evolution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Started as an app. Became an operating system.</h2>
          </motion.div>
          <div className="space-y-10">
            {evolution.map((item, i) => (
              <motion.div key={item.phase}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start transition-all duration-200 ease-out">
                <div className="shrink-0 w-1 self-stretch rounded-full" style={{ backgroundColor: i === evolution.length - 1 ? '#00C896' : '#1f2937' }} />
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: i === evolution.length - 1 ? '#00C896' : '#6b7280' }}>
                    {i === evolution.length - 1 ? '→ Current' : `Step ${i + 1}`}
                  </span>
                  <h3 className="text-white font-bold text-xl mt-1 mb-2">{item.phase}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>What It's For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">One platform. Many reasons to use it.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usecases.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl p-6 border border-neutral-200 bg-neutral-50">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-neutral-900 font-bold text-base mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE SHIFT */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Architecture Shift</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Cloud-optional. Not anti-cloud.</h2>
          </motion.div>
          <div className="space-y-4">
            {contrast.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-6 items-start py-6 border-b border-neutral-100 last:border-b-0">
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-neutral-50 border border-neutral-100">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#00C896' }}>{item.label}</p>
                  <p className="text-neutral-900 font-bold text-lg leading-snug mb-1">{item.after}</p>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-3">{item.afterSub}</p>
                  <p className="text-neutral-400 text-xs">{item.before}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pull quote — gradient bar */}
          <motion.div {...fadeUp} className="mt-14">
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #00C896, #C8F135)' }} />
              <p className="text-xl md:text-2xl font-semibold text-neutral-900 leading-snug italic">
                If you can do commerce without the internet, messaging is already solved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The System</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">How it works — every day, and when it matters most.</h2>
          </motion.div>
          <div className="space-y-28">
            {features.map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="transition-all duration-200 ease-out">
                {item.image ? (
                  <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                    <div className="flex-1">
                      <div className="text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#00C896' }}>{item.num}</div>
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
                    <div className="text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#00C896' }}>{item.num}</div>
                    <h3 className="text-white font-black text-3xl mb-5 tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed max-w-2xl">{item.body}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>Design Decisions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">The thinking that made this different.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {decisions.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t-2 pt-8 transition-all duration-200 ease-out" style={{ borderColor: '#00C896' }}>
                <h3 className="text-neutral-900 font-semibold text-base mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HARDWARE */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Hardware</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">You need a radio. That's the point.</h2>
            <p className="text-neutral-600 text-lg leading-relaxed">A small LoRa radio is what makes this system independent. No cell tower. No router. No monthly bill. Off-the-shelf Meshtastic devices start at $40, come pre-flashed, and work with Trade Post Mesh out of the box. The radio is the infrastructure — and you own it.</p>
          </motion.div>
          <motion.div {...fadeUp}>
            <img src="/tradepost-hardware.png" alt="Recommended Meshtastic hardware — Seeed T1000-E, WisMesh Pocket, Seeed Solar Node" className="w-full rounded-2xl border border-neutral-200 shadow-sm" />
          </motion.div>
        </div>
      </section>

      {/* SORA VIDEOS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-4">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>Concept Visuals</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">What it could look like in the wild.</h2>
            <p className="text-neutral-600 text-sm mb-10">AI-generated concept videos, made with OpenAI Sora. Experimental.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['/tradepost-sora-1.mp4', '/tradepost-sora-2.mp4', '/tradepost-sora-3.mp4'].map((src, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full rounded-2xl border border-neutral-200 object-cover"
                  style={{ aspectRatio: '9/16' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A new category of platform.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-6">
              Most platforms are built to extract value from local communities — taking a cut of every transaction, selling attention back to advertisers, centralizing data they don't need to hold. Trade Post Mesh inverts that model. No fees. No ads. No platform in the middle of what neighbors do for each other.
            </p>
            <p className="text-neutral-400 leading-relaxed text-lg mb-8">
              It's a working prototype today. It's an open infrastructure play tomorrow. The mesh network is already growing in Chicago through the ChiMesh community. OVERWATCH maps where coverage is strong enough to go fully peer-to-peer. The pilot neighborhoods are already identified. What's next is deployment — and proving this works at city scale.
            </p>

            {/* Final pull quote — gradient bar, left-aligned */}
            <div className="my-10 relative pl-6 md:pl-8 text-left">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #00C896, #C8F135)' }} />
              <p className="text-lg md:text-xl font-semibold text-white leading-snug italic">
                The tools people rely on most disappear exactly when they're needed most. This one doesn't.
              </p>
            </div>

            <a href="/#contact" onClick={(e) => { e.preventDefault(); sessionStorage.setItem("hashNav", "#contact"); window.location.href = "/#contact"; }}
              className="inline-flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-80"
              style={{ color: '#00C896' }}>
              Let's talk →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
