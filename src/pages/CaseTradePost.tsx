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
    desc: 'A neighborhood barter and coordination app. Post offers, post needs, browse listings, send messages. Cloud-hosted on Supabase. Standard client-server architecture. Solid foundation, but dependent on the internet to function.',
  },
  {
    phase: 'Trade Post + OVERWATCH',
    desc: 'Added the infrastructure intelligence layer. OVERWATCH measured real neighborhood signal density, WiFi, BLE, LoRa mesh nodes, and produced a 0–100 Neighborhood Readiness Index. Now the platform knew whether the local network could actually support peer-to-peer traffic.',
  },
  {
    phase: 'Trade Post Mesh',
    desc: 'The full system. Mesh-native transport activated by OVERWATCH intelligence. Offers, needs, and alerts broadcast through Meshtastic LoRa radio when the internet is down. E2EE payloads. Offline listing cache. Cloud becomes optional sync, not required infrastructure. The neighborhood OS.',
  },
]

const contrast = [
  { label: 'Transport', before: 'Client → Supabase → Client', after: 'Client → LoRa / BLE / WiFi → Client' },
  { label: 'Connectivity', before: 'Grid required', after: 'Offline-first, cloud as memory' },
  { label: 'Encryption', before: 'Server-visible payloads', after: 'E2EE, server blind' },
  { label: 'Mesh activation', before: 'N/A', after: 'Conditional, triggered by OVERWATCH readiness score' },
]

const features = [
  {
    num: '01',
    title: 'Offer / Need / Alert Feed',
    body: 'The core coordination surface. Post what you have, what you need, or what the neighborhood needs to know right now. Posts are typed, OFFER, NEED, ALERT, PIN, tagged with a node ID and set to expire. Browse without filtering noise from outside your area. When the grid is up, it syncs to cloud. When it isn\'t, the mesh carries it.',
    image: '/tradepost-feed-alert.jpg',
    imageAlt: 'Trade Post live feed, tornado watch and Pilsen power outage alerts',
    caption: 'Live feed during a real Cook County tornado watch and Pilsen transformer outage. Both alerts propagating through the mesh while the grid was stressed.',
  },
  {
    num: '02',
    title: 'Mesh Transport via Meshtastic LoRa',
    body: 'Lightweight post intents broadcast over LoRa radio: the same long-range, low-power protocol used in disaster relief networks. No internet required for local propagation. Each post hops between mesh nodes, tagged with the originating node ID. The mesh doesn\'t replace the cloud. It activates when the cloud isn\'t there.',
    image: null,
  },
  {
    num: '03',
    title: 'E2EE From the Foundation',
    body: 'End-to-end encryption was designed in, not added on. Device key registration, Signal Protocol scaffolding, encrypted payload storage. The server is intentionally blind to offer content. Peer-to-peer mesh transport extends that property: payloads encrypted between devices, no relay decryption at any hop.',
    image: null,
  },
  {
    num: '04',
    title: 'OVERWATCH-Driven Mesh Activation',
    body: 'Mesh transport isn\'t always-on. It\'s conditional, activated when OVERWATCH reports sufficient BLE density, mesh node coverage, and redundancy for the local area. If the neighborhood can support it, offers route peer-to-peer. If not, the system uses cloud relay and flags the gap. Infrastructure viability drives transport selection automatically.',
    image: '/overwatch-map-full.jpg',
    imageAlt: 'OVERWATCH Chicago intelligence grid, the layer that determines when mesh activates',
    caption: 'OVERWATCH: the intelligence layer underneath. 5.2M scans, 368 mesh nodes, real-time readiness scoring tells Trade Post Mesh when to go peer-to-peer.',
  },
  {
    num: '05',
    title: 'Offline Listing Cache',
    body: 'Listings cache locally so the experience doesn\'t degrade when connectivity does. Browse, post, and respond with no active connection. When the network returns (cloud or mesh) state syncs forward. No lost posts, no blank screens, no error states during the exact moments the platform is needed most.',
    image: null,
  },
]

const decisions = [
  {
    title: 'Start With the App, Then Earn the Mesh',
    body: 'Trade Post launched as a standard cloud app first. Proving people would actually use a neighborhood coordination platform before building the harder mesh infrastructure on top. The evolution to Mesh wasn\'t scope creep. It was the original destination, reached in the right order.',
  },
  {
    title: 'Cloud-Optional, Not Anti-Cloud',
    body: 'The ambition was never to eliminate cloud infrastructure. It was to make the platform function when cloud isn\'t available. Supabase stays in the stack as secondary memory and sync layer. The shift is in what\'s required vs. what\'s optional. Cloud becomes a nice-to-have, not a dependency.',
  },
  {
    title: 'Economic Exchange as the Hard Use Case',
    body: 'Most mesh apps solve for messaging. Trade Post Mesh targeted the harder problem: economic coordination. Matching offers with needs, propagating trade intent hop-by-hop, caching listings locally, completing transactions peer-to-peer. If you can do commerce without the internet, messaging is already solved.',
  },
  {
    title: 'Designed for the Scenarios That Matter Most',
    body: 'Disaster events, grid failures, low-connectivity environments, community-run infrastructure. These aren\'t edge cases, they\'re the primary design targets. Every architecture decision was made by asking: does this work when the grid goes down at the worst possible time?',
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
          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Trade Post started as a neighborhood barter app. It became something bigger: a decentralized operating system for local economic coordination, one that functions when WiFi is down, cellular is congested, and the cloud is unreachable. Built on Meshtastic LoRa mesh, E2EE, and OVERWATCH infrastructure intelligence.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {[
              { value: 'LoRa Mesh', label: 'Primary transport' },
              { value: 'E2EE', label: 'Signal Protocol scaffolding' },
              { value: 'Offline-first', label: 'Cloud as optional sync' },
              { value: 'Live', label: 'Ran during real emergencies' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl px-5 py-3 border border-neutral-800">
                <div className="text-white font-bold text-sm">{s.value}</div>
                <div className="text-neutral-500 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HERO SCREENSHOT */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <img src="/tradepost-feed-alert.jpg" alt="Trade Post live feed" className="w-full rounded-2xl border border-neutral-800" />
            <p className="text-neutral-500 text-xs mt-3 text-center">
              Live, Cook County tornado watch + Pilsen transformer outage. Both alerts propagating through the mesh while the grid was stressed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Every local platform assumes the grid stays on.
            </h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed text-lg">
              <p>
                Facebook Marketplace. Craigslist. Nextdoor. Every tool built for neighborhood coordination routes through centralized cloud infrastructure. When the grid goes down, tornado, power outage, infrastructure failure, they go down with it. During the exact moments when neighbors most need to coordinate, share supplies, post safety alerts, and find what's available nearby, the tools disappear.
              </p>
              <p>
                The deeper problem: most mesh apps treat economic exchange as out of scope. They solve for messaging. Trade Post Mesh targeted the harder use case, can local barter actually operate without centralized infrastructure? Not theoretically. Practically. Post an offer. Match a need. Complete a trade. All of it, without a server in the middle.
              </p>
            </div>
            <blockquote className="border-l-4 pl-6 py-2 mt-10" style={{ borderColor: '#00C896' }}>
              <p className="text-xl font-semibold text-neutral-800 italic leading-relaxed">
                "Trade Post proves people will trade locally. OVERWATCH proves the network can support it. Trade Post Mesh makes the exchange independent."
              </p>
            </blockquote>
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
          <div className="space-y-8">
            {evolution.map((item, i) => (
              <motion.div key={item.phase}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start">
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

      {/* ARCHITECTURE SHIFT */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Architecture Shift</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Cloud-optional. Not anti-cloud.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contrast.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-neutral-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-neutral-100 bg-neutral-50">
                  <span className="text-neutral-500 text-xs font-bold tracking-widest uppercase">{item.label}</span>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-5 py-4 border-r border-neutral-100">
                    <p className="text-xs text-neutral-400 uppercase font-bold mb-2 tracking-wider">Before</p>
                    <p className="text-neutral-500 text-sm">{item.before}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-xs font-bold mb-2 tracking-wider uppercase" style={{ color: '#00C896' }}>After</p>
                    <p className="text-neutral-900 text-sm font-medium">{item.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The System</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built for when things go wrong.</h2>
          </motion.div>
          <div className="space-y-24">
            {features.map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                {item.image ? (
                  <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}>
                    <div className="flex-1">
                      <div className="text-4xl font-black mb-4" style={{ color: '#00C896' }}>{item.num}</div>
                      <h3 className="text-white font-bold text-2xl mb-4">{item.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{item.body}</p>
                    </div>
                    <div className="flex-1">
                      <img src={item.image} alt={item.imageAlt} className="w-full rounded-xl border border-neutral-800" />
                      {item.caption && <p className="text-neutral-500 text-xs mt-3">{item.caption}</p>}
                    </div>
                  </div>
                ) : (
                  <div className="border-t border-neutral-800 pt-8">
                    <div className="text-4xl font-black mb-4" style={{ color: '#00C896' }}>{item.num}</div>
                    <h3 className="text-white font-bold text-2xl mb-4">{item.title}</h3>
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
                className="border-t-2 pt-8" style={{ borderColor: '#00C896' }}>
                <h3 className="text-neutral-900 font-bold text-base mb-3">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SORA VIDEOS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-4">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>Concept Visuals</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">What it could look like in the wild.</h2>
            <p className="text-neutral-500 text-sm mb-10">AI-generated concept videos, made with OpenAI Sora. Experimental.</p>
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
              A proof of concept for economic coordination without the cloud.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-8">
              Trade Post Mesh is built on React, Supabase, Meshtastic LoRa, and Signal Protocol scaffolding, with OVERWATCH as the infrastructure intelligence layer that determines when peer-to-peer transport is viable. The feed ran live during a real Cook County tornado watch. The architecture is designed to scale to any neighborhood with sufficient mesh density, as measured by the readiness scoring engine underneath it.
            </p>
            <p className="text-white font-bold text-lg mb-10">
              Not anti-cloud. Just cloud-optional. That's the only design target that matters when the grid fails.
            </p>
            <a href="/#contact" onClick={(e) => { e.preventDefault(); window.location.href = "/#contact"; }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#00C896' }}>
              Let's talk →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
