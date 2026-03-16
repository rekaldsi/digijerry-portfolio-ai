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

const phases = [
  { phase: 'Phase 1', name: 'ScanMap', desc: 'Wardrive upload and visualization. Map clustering. A technical instrument panel for WiFi and BLE signal density. Useful — but narrow.' },
  { phase: 'Phase 2', name: 'Mesh Readiness', desc: 'Viability scoring, coverage gap analysis, bridge node detection, relay placement modeling. The tool starts making recommendations, not just pictures.' },
  { phase: 'Phase 3', name: 'OVERWATCH', desc: 'Full infrastructure intelligence engine. Strategic planning dashboard. AI-assisted resilience assessment. Signals treated as environmental infrastructure — the same way you\'d model roads or power lines.' },
  { phase: 'Phase 4', name: 'Live Integration (Planned)', desc: 'Real-time mesh ingestion via MQTT. Event-aware infrastructure alerts. Trade Post transport-layer integration. The neighborhood OS comes online.' },
]

const capabilities = [
  {
    num: '01',
    title: 'Neighborhood Readiness Index',
    body: 'A 0–100 composite score computed from four weighted metrics: BLE device density, mesh node coverage, WiFi relay potential, and signal quality. The first formalized metric for whether a neighborhood can support decentralized coordination without cloud dependency. Not an estimate. A score, with data behind it.',
    image: '/overwatch-system-status.png',
    imageAlt: 'OVERWATCH system status panel showing live Supabase connection, ADS-B aircraft feed, satellite TLE data, and geopolitical threat intelligence rankings',
    caption: 'System status panel: live connections to Supabase, ADS-B aircraft feeds, and satellite TLE data — the always-on backbone that powers the readiness score.',
  },
  {
    num: '02',
    title: 'Live Data Layer System',
    body: 'A unified command dashboard with independently toggleable intelligence layers: live aircraft via ADS-B, global conflict events via GDELT, natural disaster alerts via GDACS, earthquake data from USGS, cybersecurity C2 nodes from abuse.ch, NASA environmental feeds, and local Chicago infrastructure layers. Each layer is sourced, ingested, and rendered in real time. One interface. Every signal.',
    image: '/overwatch-global-events.png',
    imageAlt: 'OVERWATCH global OSINT dashboard showing live aircraft, conflict events, GDACS alerts, earthquakes, and C2 nodes across a world map',
    caption: 'Global intelligence view: conflict events, disaster alerts, live aircraft, earthquake data, and C2 nodes — all active layers, single map.',
  },
  {
    num: '03',
    title: 'Spatial Intelligence Grid',
    body: 'City-scale mesh infrastructure mapped at the node level. Named Meshtastic nodes are identified and plotted individually. Signal detection clusters show density and coverage across neighborhoods. Gap detection surfaces exactly where the network is thin — and relay placement recommendations tell you where to put hardware to fix it. Infrastructure planning, not map decoration.',
    image: '/overwatch-wifi-ble.png',
    imageAlt: 'OVERWATCH Chicago mesh node map showing named Meshtastic nodes, WiFi and BLE signal cluster density across the city',
    caption: 'Chicago mesh intelligence grid: named LoRa nodes identified, signal clusters mapped by density — coverage gaps visible at a glance.',
  },
  {
    num: '04',
    title: 'Mobile SIGINT Pipeline',
    body: 'Field data flows from a custom Android scanner — wardrive sessions ingesting WiFi access points and BLE devices across real neighborhoods — synced to OVERWATCH via JEEP-PI. The signal filter panel lets analysts slice by frequency band (2.4 GHz / 5 GHz), time window, and minimum signal strength. The result is a continuously growing dataset of physical RF infrastructure, queryable in real time.',
    image: '/overwatch-signal-filters.png',
    imageAlt: 'OVERWATCH JEEP-PI sync panel showing wardriving scan totals, WiFi APs, BLE devices, and signal filter controls',
    caption: 'JEEP-PI sync: mobile wardriving sessions continuously feeding WiFi APs, BLE devices, and scan metadata into the intelligence layer.',
  },
]

const decisions = [
  {
    title: 'ScanMap Describes the Tool. Overwatch Describes What It Is.',
    body: 'The rename wasn\'t branding. ScanMap visualized signals. Overwatch models infrastructure resilience. When formal viability scoring, gap analysis, bridge node detection, and AI insights were in place, the original name was no longer accurate. The new name is.',
  },
  {
    title: 'Signals Are Infrastructure, Not Surveillance',
    body: 'The system ingests WiFi, BLE, and mesh signals without identity tracking, payload interception, or personal data collection. Signals are treated the same way you\'d treat road data or power grid topology — as environmental infrastructure. That framing was designed in from day one.',
  },
  {
    title: 'AI Grounded in Local Scan Data',
    body: 'The Gemini-powered insights layer doesn\'t generate generic recommendations. It reasons from the actual scan data for the actual area being analyzed. Relay suggestions, redundancy warnings, and coverage assessments are grounded in what the field scanner found on the ground.',
  },
  {
    title: 'Infrastructure Awareness Before Coordination',
    body: 'OVERWATCH exists to answer one question before Trade Post asks you to rely on the mesh: can this neighborhood actually support it? Modeling resilience before building on it is the engineering discipline the rest of the Neighborhood OS depends on.',
  },
]

const stats = [
  { icon: '📡', value: 'Millions', label: 'Field scans processed' },
  { icon: '📶', value: '1M+', label: 'WiFi APs mapped' },
  { icon: '🔵', value: '180K+', label: 'BLE devices cataloged' },
  { icon: '🔗', value: 'Live', label: 'Mesh nodes tracked' },
]

export default function CaseOverwatch() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleBack = () => {
    navigate('/', { state: { from: '/#projects' } })
    setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section style={{ backgroundColor: '#060a0f' }} className="pt-16 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.button onClick={handleBack}
            className="text-neutral-500 text-sm font-medium hover:text-white transition-colors mb-12 flex items-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            ← Back to Work
          </motion.button>
          <motion.p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00BFFF' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Case Study · OVERWATCH
          </motion.p>
          <motion.h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Spatial Intelligence<br />Infrastructure.
          </motion.h1>
          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            No one was modeling neighborhood connectivity as infrastructure. So I built a system that does. OVERWATCH transforms raw RF signal data — WiFi, BLE, LoRa mesh — into a structured resilience model that answers one question: can this neighborhood function without the internet?
          </motion.p>

          {/* Hero stat cards — gradient accent, emoji icons */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="relative rounded-xl p-4 border border-neutral-700/60 bg-gradient-to-br from-neutral-900 to-neutral-800/80 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: 'linear-gradient(90deg, #00BFFF, transparent)' }} />
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="text-white font-black text-lg tracking-tight">{s.value}</div>
                <div className="text-neutral-400 text-xs mt-1 leading-relaxed">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HERO SCREENSHOT */}
      <section style={{ backgroundColor: '#060a0f' }} className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <video
              src="/overwatch-map-zoom.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-2xl border border-neutral-800"
            />
            <p className="text-sm text-neutral-400 mt-3 text-center italic">
              OVERWATCH grid live. Tracking aircraft via ADS-B, BLE devices, active mesh nodes, and cumulative wardriving scans — all layers updated in real time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00BFFF' }}>Origin</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              It started as a map. It became a model.
            </h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed text-lg">
              <p>
                ScanMap was built to visualize wardriving data — upload WiFi and BLE scans, see signal density on a map, analyze mesh readiness. A technical instrument panel. Useful, but narrow.
              </p>
              <p>
                The pivot happened when the analysis started generating real insight: mesh viability could be scored. Coverage gaps could be located precisely. Bridge nodes — the critical single points of failure — could be identified. Relay placement could be recommended algorithmically. AI could reason about local infrastructure from local data.
              </p>
              <p>
                At that point, this wasn't a mapping tool anymore. It was a strategic planning engine for neighborhood-scale infrastructure resilience. Millions of scans processed. Dozens of live data layers. A formal scoring engine. ScanMap described what it did. OVERWATCH describes what it is.
              </p>
            </div>

            {/* Pull quote — gradient bar, no quotation marks */}
            <div className="my-12 relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #00BFFF, #C8F135)' }} />
              <p className="text-xl md:text-2xl font-semibold text-neutral-900 leading-snug italic">
                Most neighborhood platforms assume connectivity. OVERWATCH measures it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EVOLUTION TIMELINE */}
      <section style={{ backgroundColor: '#060a0f' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00BFFF' }}>Evolution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Four phases. One through-line.</h2>
          </motion.div>
          <div className="space-y-10">
            {phases.map((p, i) => (
              <motion.div key={p.phase}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start transition-all duration-200 ease-out">
                <div className="shrink-0 w-1 self-stretch rounded-full" style={{ backgroundColor: i < 3 ? '#00BFFF' : '#334155' }} />
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: i < 3 ? '#00BFFF' : '#475569' }}>{p.phase}</span>
                  <h3 className="text-white font-bold text-xl mt-1 mb-2">{p.name}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00BFFF' }}>Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">What the intelligence engine actually does.</h2>
          </motion.div>
          <div className="space-y-24">
            {capabilities.map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="transition-all duration-200 ease-out">
                {item.image ? (
                  <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                    <div className="flex-1">
                      <div className="text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#00BFFF' }}>{item.num}</div>
                      <h3 className="text-neutral-900 font-black text-3xl mb-5 tracking-tight leading-tight">{item.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{item.body}</p>
                    </div>
                    <div className="flex-1">
                      <img src={item.image} alt={item.imageAlt ?? ''}
                        className="w-full rounded-xl border border-neutral-100 shadow-sm" />
                      {item.caption && <p className="text-sm text-neutral-500 mt-3 italic">{item.caption}</p>}
                    </div>
                  </div>
                ) : (
                  <div className="border-t pt-10 border-neutral-100">
                    <div className="text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#00BFFF' }}>{item.num}</div>
                    <h3 className="text-neutral-900 font-black text-3xl mb-5 tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed max-w-2xl">{item.body}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Pull quote — gradient bar */}
          <motion.div {...fadeUp} className="mt-16">
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #00BFFF, #C8F135)' }} />
              <p className="text-xl md:text-2xl font-semibold text-neutral-900 leading-snug italic">
                Nine live data layers. A formal mesh viability scoring engine. AI-grounded infrastructure insights. This is applied spatial intelligence built to answer a real question.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section style={{ backgroundColor: '#060a0f' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00BFFF' }}>Design Decisions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">The thinking behind the system.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {decisions.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 border border-neutral-800 transition-all duration-200 ease-out">
                <h3 className="text-white font-semibold text-base mb-3">{item.title}</h3>
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
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00BFFF' }}>System Context</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              The intelligence spine of a larger system.
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-6">
              OVERWATCH doesn't stand alone. It's the infrastructure awareness layer of Neighborhood OS — the full stack that includes SIVOPS (the offline field scanner) and Trade Post (the coordination and barter platform). The pipeline: SIVOPS collects signals in the field, OVERWATCH models what those signals mean for infrastructure resilience, Trade Post uses that intelligence to route coordination through mesh when the grid fails.
            </p>
            <p className="text-neutral-600 leading-relaxed text-lg">
              OVERWATCH answers the question every other layer depends on: is this neighborhood ready to operate independently?
            </p>
            <div className="mt-10 p-6 rounded-2xl border border-neutral-100 bg-neutral-50 text-center">
              <p className="text-neutral-500 text-sm font-bold tracking-widest uppercase mb-2">The Pipeline</p>
              <p className="text-neutral-900 font-bold text-lg">SIVOPS → OVERWATCH → Trade Post</p>
              <p className="text-neutral-500 text-sm mt-1">Field Sensor → Infrastructure Intelligence → Economic Coordination</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section style={{ backgroundColor: '#060a0f' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00BFFF' }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Resilience modeling. Running in production.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-8">
              Built on React, TypeScript, Supabase, MapLibre GL, and Gemini — processing millions of field scans from a custom Android scanner running offline in real neighborhoods. Live data layers spanning aircraft, conflict events, environmental feeds, and local infrastructure. A formal mesh viability scoring engine. AI-grounded infrastructure insights. This isn't a hobby map. It's infrastructure planning.
            </p>

            {/* Final pull quote — gradient bar, left-aligned */}
            <div className="my-10 relative pl-6 md:pl-8 text-left">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #00BFFF, #C8F135)' }} />
              <p className="text-lg md:text-xl font-semibold text-white leading-snug italic">
                Not a wardriving tool. An infrastructure resilience engine.
              </p>
            </div>

            <a href="/#contact" onClick={(e) => { e.preventDefault(); sessionStorage.setItem("hashNav", "#contact"); window.location.href = "/#contact"; }}
              className="inline-flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-80"
              style={{ color: '#00BFFF' }}>
              Let's talk →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
