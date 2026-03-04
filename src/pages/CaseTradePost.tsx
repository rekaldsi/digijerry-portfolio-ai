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

const layers = [
  {
    tag: 'Layer 1',
    title: 'SIVOPS — Field Capture',
    body: 'The offline Android field scanner. Termux-based. No cloud. No telemetry. GPS-merged WiFi and BLE scanning that outputs structured JSONL — every access point, every Bluetooth signal, every mesh node, tagged with coordinates and signal quality. Runs without internet. Built for the field.',
    color: '#00C896',
  },
  {
    tag: 'Layer 2',
    title: 'OVERWATCH — Infrastructure Intelligence',
    body: 'The intelligence layer that turns raw RF noise into structured neighborhood data. Ingests SIVOPS scan output, Meshtastic mesh nodes, WiGLE enrichment, and GPS metadata. Computes BLE density, mesh coverage, WiFi relay potential, redundancy scores, and bridge node identification — all aggregated into a 0–100 Neighborhood Readiness Index.',
    color: '#E85D04',
  },
  {
    tag: 'Layer 3',
    title: 'Trade Post — Coordination Layer',
    body: 'The local coordination layer that runs on top of the infrastructure Overwatch models. Mesh-native posts — offers, needs, alerts — that route through Meshtastic LoRa radio when the internet is down. An economic and social coordination platform designed to function when the grid doesn\'t.',
    color: '#E85D04',
  },
]

const features = [
  {
    num: '01',
    title: 'Mesh-Native Feed',
    body: 'Posts flow through Meshtastic LoRa radio as the primary transport. No internet required. When a tornado watch drops or a grid goes down, alerts propagate through the physical mesh — not a cloud server. Every post is tagged with the node it originated from.',
    image: '/tradepost-feed-alert.jpg',
    imageAlt: 'Trade Post feed showing tornado watch and Pilsen power outage alerts — real events',
    caption: 'Real posts from a real Cook County tornado watch and Pilsen transformer outage — both propagating through the mesh while the grid was stressed.',
  },
  {
    num: '02',
    title: 'Alert System',
    body: 'A dedicated alert type for time-sensitive neighborhood events — weather emergencies, power outages, grid failures, safety notices. Posted by node ID, timestamped, geotagged, and set to expire. Not a notification push. A persistent mesh broadcast.',
    image: null,
  },
  {
    num: '03',
    title: 'Offer / Need Matching',
    body: 'The core barter and trade coordination layer. Post what you have. Post what you need. Filter by type, radius, or node. The system is designed to facilitate local value exchange without a central marketplace, payment processor, or identity requirement.',
    image: null,
  },
  {
    num: '04',
    title: 'OVERWATCH Intelligence Layer',
    body: 'The map view surfaces the Overwatch infrastructure data underneath Trade Post — mesh node density, coverage gaps, signal quality, redundancy scores. So you\'re not just seeing posts. You\'re seeing whether the network those posts travel on can actually sustain itself.',
    image: '/overwatch-map-full.jpg',
    imageAlt: 'OVERWATCH grid — Chicago mesh intelligence with 5.2M scans, 50K BLE devices, 368 mesh nodes',
    caption: 'OVERWATCH — the infrastructure intelligence engine underneath Trade Post. 5,237,009 scans. 1.3M WiFi APs. 182K BLE devices. 368 active mesh nodes.',
  },
]

const readiness = [
  { metric: '5.2M+', label: 'Field scans processed' },
  { metric: '1.3M', label: 'WiFi access points mapped' },
  { metric: '182K', label: 'BLE devices cataloged' },
  { metric: '368', label: 'Active mesh nodes tracked' },
]

const decisions = [
  {
    title: 'Infrastructure First, App Second',
    body: 'Most neighborhood platforms assume connectivity. This system measures it. Overwatch quantifies whether a neighborhood can function independently before Trade Post asks it to coordinate locally. That sequencing matters — you can\'t build a resilience app on a foundation you haven\'t modeled.',
  },
  {
    title: 'Signals Are Infrastructure, Not Surveillance',
    body: 'The system ingests WiFi, BLE, and mesh signals without tracking identity, intercepting payloads, or monetizing personal data. Signals are treated as environmental infrastructure — the same way you\'d map roads or power lines. That ethical framing was designed in, not bolted on.',
  },
  {
    title: 'LoRa as Primary Transport',
    body: 'Meshtastic LoRa radio was chosen because it works when the internet doesn\'t. The whole point of a neighborhood operating system is resilience. If the transport layer is the cloud, the system fails exactly when it\'s needed most. LoRa mesh survives grid stress.',
  },
  {
    title: 'The Neighborhood Readiness Index',
    body: 'The 0–100 readiness score is the first formalized metric for whether a neighborhood can support decentralized coordination. It combines BLE density, mesh coverage, WiFi relay potential, and signal quality into a single weighted number. Not a dashboard metric — a planning tool.',
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
            An Off-Grid Neighborhood<br />Operating System.
          </motion.h1>
          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            A three-layer infrastructure and coordination platform built to function when the internet doesn't. Field scanning, mesh intelligence, and local economic coordination — unified into a system designed for neighborhood resilience, not convenience.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {readiness.map((s) => (
              <div key={s.label} className="rounded-xl px-5 py-3 border border-neutral-800">
                <div className="text-white font-bold text-sm">{s.metric}</div>
                <div className="text-neutral-500 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LIVE SCREENSHOT */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <img src="/tradepost-feed-alert.jpg" alt="Trade Post live feed" className="w-full rounded-2xl border border-neutral-800" />
            <p className="text-neutral-500 text-xs mt-3 text-center">
              Live feed during an actual Cook County tornado watch — alerts propagating through the mesh while the grid was stressed
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
              Every neighborhood platform assumes the grid stays on.
            </h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed text-lg">
              <p>
                Nextdoor needs the internet. Signal needs the internet. Every coordination, alert, and exchange platform built for neighborhoods is dependent on the same infrastructure it's supposed to help people survive without. When the grid goes down — tornado, power outage, infrastructure attack — the tools disappear exactly when they're needed most.
              </p>
              <p>
                There's also a deeper problem: nobody had ever formally measured whether a neighborhood could support decentralized coordination. You couldn't answer "can this area run a mesh?" without building the tools to measure it first.
              </p>
              <p>
                Trade Post Mesh was built to solve both — starting with the measurement layer, then building the coordination layer on top of what the data said was actually possible.
              </p>
            </div>
            <blockquote className="border-l-4 pl-6 py-2 mt-10" style={{ borderColor: '#00C896' }}>
              <p className="text-xl font-semibold text-neutral-800 italic leading-relaxed">
                "We started by mapping signals. We ended up modeling neighborhoods."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* THREE LAYERS */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Architecture</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Three layers. One connected system.</h2>
          </motion.div>
          <div className="space-y-8">
            {layers.map((layer, i) => (
              <motion.div key={layer.tag}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start">
                <div className="shrink-0 w-1 self-stretch rounded-full" style={{ backgroundColor: layer.color }} />
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: layer.color }}>{layer.tag}</span>
                  <h3 className="text-white font-bold text-xl mt-1 mb-2">{layer.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">{layer.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* pipeline arrow */}
          <motion.div {...fadeUp} className="mt-14 text-center">
            <p className="text-neutral-600 text-sm tracking-widest uppercase font-bold">
              SIVOPS → OVERWATCH → TRADE POST
            </p>
            <p className="text-neutral-500 text-sm mt-2">Field Sensor → Infrastructure Intelligence → Economic Coordination</p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Features</p>
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
                  <div className="border-t pt-8" style={{ borderColor: '#e5e7eb' }}>
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

      {/* TAKEAWAY */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00C896' }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Resilience infrastructure. Built before it was needed.
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-8">
              Trade Post Mesh is a full-stack system spanning field hardware, geospatial intelligence, and a mesh-native coordination platform. It runs on React, Supabase, MapLibre GL, Meshtastic, and a custom Termux-based field scanner. The OVERWATCH intelligence layer has processed over 5 million scans. The coordination layer was running live during a real Cook County tornado watch.
            </p>
            <p className="text-neutral-900 font-bold text-lg mb-10">
              This is systems thinking applied to infrastructure resilience. Not a concept. Not a mockup. Running in production and battle-tested by actual emergencies.
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
