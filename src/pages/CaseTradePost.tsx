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

const contrast = [
  { before: 'Client → Supabase → Client', after: 'Client → Bluetooth / WiFi / LoRa → Client', label: 'Transport model' },
  { before: 'Cloud required', after: 'Cloud optional sync', label: 'Infrastructure dependency' },
  { before: 'Grid-up only', after: 'Offline-first, cloud as memory', label: 'Connectivity assumption' },
  { before: 'Centralized routing', after: 'Peer-to-peer propagation', label: 'Message architecture' },
]

const features = [
  {
    num: '01',
    title: 'Mesh-Native Feed',
    body: 'Posts — offers, needs, alerts — broadcast as lightweight intents through Meshtastic LoRa radio. No server required for local propagation. Every post is tagged with the originating node ID, timestamped, and set to expire. When the cloud is available, it syncs. When it isn\'t, the mesh carries it.',
    image: '/tradepost-feed-alert.jpg',
    imageAlt: 'Trade Post live feed — tornado watch and Pilsen power outage alerts propagating through mesh',
    caption: 'Real alerts during a Cook County tornado watch and Pilsen power outage — propagating through the mesh while the grid was stressed.',
  },
  {
    num: '02',
    title: 'E2EE From the Ground Up',
    body: 'The platform was architected with end-to-end encryption as a foundation, not a feature. Device key registration, Signal Protocol scaffolding, encrypted payload storage — the server is intentionally blind to offer content. Mesh transport extends that: payloads encrypted peer-to-peer, no relay decryption.',
    image: null,
  },
  {
    num: '03',
    title: 'Conditional Mesh Activation',
    body: 'Mesh transport isn\'t always-on. It activates based on what OVERWATCH knows about local infrastructure — BLE density, mesh node coverage, redundancy scores, hop limits. If the neighborhood can support it, offers route peer-to-peer. If not, the system falls back to cloud relay. Infrastructure viability drives transport selection.',
    image: null,
  },
  {
    num: '04',
    title: 'Offline Listing Cache',
    body: 'Listings are cached locally so users can browse without connectivity. Post, browse, and respond to offers with no active connection. When the network returns — cloud or mesh — state syncs. The experience doesn\'t degrade when the grid does.',
    image: null,
  },
]

const decisions = [
  {
    title: 'Cloud-Optional, Not Anti-Cloud',
    body: 'The design philosophy wasn\'t to eliminate cloud infrastructure — it was to make the platform function when cloud isn\'t available. Cloud becomes secondary memory, not required transport. That framing drove every architecture decision: local-first, sync when possible.',
  },
  {
    title: 'Economic Coordination as the Use Case',
    body: 'Most mesh apps focus on messaging. Trade Post Mesh focused on economic exchange — the harder problem. Matching offers with needs, propagating trade intent, caching listings locally, completing transactions peer-to-peer. If you can do commerce without the internet, messaging is a solved problem.',
  },
  {
    title: 'Mesh as Conditional Transport',
    body: 'The mesh layer isn\'t a separate mode — it\'s a transport decision made dynamically based on what OVERWATCH has measured about local infrastructure. The intelligence layer and the coordination layer are connected: one tells the other what the neighborhood can support.',
  },
  {
    title: 'Built for the Scenarios That Matter Most',
    body: 'Disaster scenarios, low-connectivity environments, community-run infrastructure, decentralized coordination. These aren\'t edge cases — they\'re the design targets. Most platforms treat degraded connectivity as an error state. Trade Post Mesh treats it as the primary scenario to optimize for.',
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
            Local Exchange.<br />No Internet Required.
          </motion.h1>
          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            A neighborhood coordination and barter platform built to answer one question: can local economic exchange operate without centralized infrastructure? Not theoretically. Practically. When WiFi is down, cellular is congested, and the cloud is unreachable — can neighbors still discover listings, exchange offers, and complete trades?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-neutral-800">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-neutral-300 text-sm font-medium">Running live on Meshtastic LoRa mesh</span>
          </motion.div>
        </div>
      </section>

      {/* HERO SCREENSHOT */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <img src="/tradepost-feed-alert.jpg" alt="Trade Post live feed" className="w-full rounded-2xl border border-neutral-800" />
            <p className="text-neutral-500 text-xs mt-3 text-center">
              Live feed — Cook County tornado watch + Pilsen transformer outage. Both alerts propagating through the mesh while the grid was stressed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE QUESTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Every marketplace assumes the internet stays on.
            </h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed text-lg">
              <p>
                Facebook Marketplace, Craigslist, OfferUp — every local exchange platform routes through centralized cloud infrastructure. When the grid is stressed, they go down. During the exact emergencies when neighbors most need to coordinate — share supplies, post safety alerts, find what's available nearby — the tools disappear.
              </p>
              <p>
                Trade Post Mesh inverted the assumption. Instead of cloud-first with offline as an error state, it's neighborhood-first, offline-first, with cloud as secondary memory when it happens to be available.
              </p>
              <p>
                The mesh layer doesn't replace the platform. It makes the platform resilient.
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

      {/* TRANSPORT CONTRAST */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Architecture Shift</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Cloud-optional. Not anti-cloud.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contrast.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-neutral-800 overflow-hidden">
                <div className="px-5 py-3 border-b border-neutral-800">
                  <span className="text-neutral-500 text-xs font-bold tracking-widest uppercase">{item.label}</span>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-5 py-4 border-r border-neutral-800">
                    <p className="text-xs text-neutral-600 uppercase font-bold mb-2 tracking-wider">Before</p>
                    <p className="text-neutral-400 text-sm">{item.before}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-xs font-bold mb-2 tracking-wider uppercase" style={{ color: '#00C896' }}>After</p>
                    <p className="text-white text-sm font-medium">{item.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>What It Does</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Built for when things go wrong.</h2>
          </motion.div>
          <div className="space-y-20">
            {features.map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                {item.image ? (
                  <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}>
                    <div className="flex-1">
                      <div className="text-4xl font-black mb-4" style={{ color: '#00C896' }}>{item.num}</div>
                      <h3 className="text-neutral-900 font-bold text-2xl mb-4">{item.title}</h3>
                      <p className="text-neutral-500 leading-relaxed">{item.body}</p>
                    </div>
                    <div className="flex-1">
                      <img src={item.image} alt={item.imageAlt} className="w-full rounded-xl border border-neutral-100 shadow-sm" />
                      {item.caption && <p className="text-neutral-400 text-xs mt-3">{item.caption}</p>}
                    </div>
                  </div>
                ) : (
                  <div className="border-t pt-8 border-neutral-100">
                    <div className="text-4xl font-black mb-4" style={{ color: '#00C896' }}>{item.num}</div>
                    <h3 className="text-neutral-900 font-bold text-2xl mb-4">{item.title}</h3>
                    <p className="text-neutral-500 leading-relaxed max-w-2xl">{item.body}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>Design Decisions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">The thinking that made this different.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {decisions.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM CONTEXT */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>System Context</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              The economic layer of Neighborhood OS.
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-6">
              Trade Post Mesh is the top layer of a three-part system. SIVOPS captures field signal data from real neighborhoods. OVERWATCH models that data into infrastructure intelligence — BLE density, mesh coverage, redundancy scores. Trade Post Mesh uses that intelligence to decide whether offers can route peer-to-peer or need cloud relay.
            </p>
            <p className="text-neutral-600 leading-relaxed text-lg">
              The connection matters: mesh transport isn't a separate feature. It's conditional — activated when OVERWATCH says the infrastructure can support it. The layers talk to each other.
            </p>
            <div className="mt-10 p-6 rounded-2xl border border-neutral-100 bg-neutral-50 text-center">
              <p className="text-neutral-500 text-sm font-bold tracking-widest uppercase mb-2">The Stack</p>
              <p className="text-neutral-900 font-bold text-lg">SIVOPS → OVERWATCH → Trade Post Mesh</p>
              <p className="text-neutral-400 text-sm mt-1">Field Sensor → Infrastructure Intelligence → Economic Coordination</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proof that local commerce doesn't need the cloud to exist.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-8">
              Trade Post Mesh is a proof of concept for economic coordination without dependency on centralized networks. It runs on React, Supabase, Meshtastic LoRa, and Signal Protocol scaffolding. The feed was live during a real Cook County tornado watch. The architecture was designed to scale from one neighborhood to any neighborhood with sufficient mesh density — as measured by OVERWATCH.
            </p>
            <p className="text-white font-bold text-lg mb-10">
              Not anti-cloud. Just cloud-optional. That's the design target that matters.
            </p>
            <a href="mailto:sketchandslogan@gmail.com"
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
