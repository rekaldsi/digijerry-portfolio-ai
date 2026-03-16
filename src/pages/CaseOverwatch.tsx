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
  { phase: 'Phase 1', name: 'ScanMap', desc: 'Wardrive upload and visualization. Map clustering. A technical instrument panel for WiFi and BLE signal density. Useful, but narrow.' },
  { phase: 'Phase 2', name: 'Mesh Readiness', desc: 'Viability scoring, coverage gap analysis, bridge node detection, relay placement modeling. The tool starts making recommendations, not just pictures.' },
  { phase: 'Phase 3', name: 'OVERWATCH', desc: 'Full infrastructure intelligence engine. Strategic planning dashboard. AI-assisted resilience assessment. Signals treated as environmental infrastructure, the same way you\'d model roads or power lines.' },
  { phase: 'Phase 4', name: 'Live Integration (Shipped)', desc: 'Real-time JEEP-PI field sync at 5-second intervals. Incident alert layer: PROTEST, ICE, POLICE, ROAD, FIRE, MEDICAL, with 4-hour expiry. ADS-B aircraft tracking. AI Query Console: natural language to PostGIS SQL via Gemini. The platform became a live operational picture.' },
  { phase: 'Phase 5', name: 'Multi-Domain Expansion (Shipped)', desc: 'Global OSINT layers added: GDELT conflict events updated every 15 minutes, GDACS disaster alerts, USGS earthquakes, CelesTrak satellite TLE feeds, NASA FIRMS fire hotspots, NASA environmental imagery, feodotracker C2 nodes, IDOT camera grid. OVERWATCH became a full-spectrum intelligence platform.' },
]

const capabilities = [
  {
    num: '01',
    title: 'Neighborhood Readiness Index',
    body: 'A 0-100 composite score computed from four weighted metrics: BLE device density, mesh node coverage, WiFi relay potential, and signal quality. Named Meshtastic nodes are plotted individually. The WiGLE layer overlays crowd-sourced WiFi density on field-collected data. Coverage gap detection surfaces exactly where the network is thin, and relay placement recommendations tell you where hardware should go. Not an estimate. A score, with data behind it.',
    image: '/overwatch-wifi-ble.png',
    imageAlt: 'OVERWATCH Chicago mesh node map showing named Meshtastic nodes, WiFi and BLE signal cluster density across the city',
    caption: 'Chicago mesh intelligence grid: named LoRa nodes identified, signal clusters mapped by density, coverage gaps visible at a glance.',
  },
  {
    num: '02',
    title: 'Live Data Layer System',
    body: 'Independently toggleable intelligence layers span every domain: live aircraft via ADS-B, global conflict events via GDELT updated every 15 minutes, natural disaster alerts via GDACS, earthquake data from USGS, cybersecurity C2 nodes from feodotracker, 500 CelesTrak satellite TLE feeds, NASA FIRMS fire hotspots, NASA GIBS environmental imagery, RainViewer weather radar, and local Chicago infrastructure layers including IDOT traffic cameras. Each layer is sourced, ingested, and rendered in real time. One interface. Every signal.',
    image: '/overwatch-global-events.png',
    imageAlt: 'OVERWATCH global OSINT dashboard showing live aircraft, conflict events, GDACS alerts, earthquakes, and C2 nodes across a world map',
    caption: 'Global intelligence view: conflict events, disaster alerts, live aircraft, earthquake data, and C2 nodes. All active layers, single map.',
  },
  {
    num: '03',
    title: 'System Status and Threat Intel',
    body: 'The platform maintains live health monitoring across every data source: Supabase connectivity, ADS-B aircraft feed status, satellite TLE ingestion, and JEEP-PI field sync uplinks. The threat intelligence panel shows country-level assessments at HIGH or ELEVATED classifications, updated continuously. Five tactical map rendering modes, NORMAL, NVG, CRT, EO, and FLIR, adapt the visual layer to mission context. Geographic presets (CHI, MIDWEST, NATIONAL, GLOBAL) snap the viewport to the relevant scale.',
    image: '/overwatch-system-status.png',
    imageAlt: 'OVERWATCH system status panel showing live Supabase connection, ADS-B aircraft feed, satellite TLE data, and geopolitical threat intelligence rankings by country',
    caption: 'System status panel: live data source health, JEEP-PI uplink sync, and geopolitical threat classifications by country.',
  },
  {
    num: '04',
    title: 'Mobile SIGINT Pipeline',
    body: 'JEEP-PI is a Raspberry Pi-based mobile scanner that syncs to OVERWATCH every 5 seconds. Field sessions ingest WiFi access points and BLE devices across real neighborhoods in real time. The signal filter panel slices by frequency band (2.4 GHz / 5 GHz), time window, and minimum signal strength in dBm. WiGLE integration overlays crowd-sourced WiFi density on top of live field collection. The result is a continuously growing, queryable dataset of physical RF infrastructure.',
    image: '/overwatch-signal-filters.png',
    imageAlt: 'OVERWATCH JEEP-PI sync panel showing wardriving scan totals, WiFi APs, BLE devices, and signal filter controls',
    caption: 'JEEP-PI sync: 5-second field polling feeding WiFi APs, BLE devices, and scan metadata into the intelligence layer continuously.',
  },
  {
    num: '05',
    title: 'AI Query Console',
    body: 'Natural language queries translated directly to PostGIS SQL via Gemini, then executed against live scan data in Supabase. Type "show all BLE devices near downtown Chicago" and OVERWATCH generates the SQL, runs it, and returns results on the map. Queries target the observations, mesh_messages, and mesh_nodes tables. No pre-built filters, no dropdown menus. A direct intelligence interface to the underlying spatial database.',
    image: '',
    imageAlt: '',
    caption: '',
  },
]

const decisions = [
  {
    title: 'ScanMap Describes the Tool. OVERWATCH Describes What It Is.',
    body: 'The rename was not branding. ScanMap visualized signals. OVERWATCH models infrastructure resilience. When formal viability scoring, gap analysis, bridge node detection, and AI insights were in place, the original name was no longer accurate. The new name is.',
  },
  {
    title: 'Signals Are Infrastructure, Not Surveillance',
    body: 'The system ingests WiFi, BLE, and mesh signals without identity tracking, payload interception, or personal data collection. Signals are treated the same way you\'d treat road data or power grid topology: as environmental infrastructure. That framing was designed in from day one.',
  },
  {
    title: 'AI Grounded in Local Scan Data',
    body: 'The AI query layer does not generate generic recommendations. It translates natural language directly to PostGIS SQL and executes it against the actual scan data for the actual area being analyzed. Relay suggestions, coverage queries, and infrastructure assessments run against what the field scanner found on the ground.',
  },
  {
    title: 'Infrastructure Awareness Before Coordination',
    body: 'OVERWATCH exists to answer one question before Trade Post asks you to rely on the mesh: can this neighborhood actually support it? Modeling resilience before building on it is the engineering discipline the rest of the Neighborhood OS depends on.',
  },
  {
    title: 'From Neighborhood Tool to Multi-Domain Platform',
    body: 'OVERWATCH started as a mesh readiness tool for one city. The expansion into global OSINT layers was not scope creep. It was the realization that local infrastructure resilience exists inside a larger threat context. Knowing a neighborhood can run mesh is more actionable when you also know what is happening in the air above it, the region around it, and the global conditions shaping it. Local and global are the same picture.',
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">Five phases. One through-line.</h2>
          </motion.div>
          <div className="space-y-10">
            {phases.map((p, i) => (
              <motion.div key={p.phase}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start transition-all duration-200 ease-out">
                <div className="shrink-0 w-1 self-stretch rounded-full" style={{ backgroundColor: '#00BFFF' }} />
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#00BFFF' }}>{p.phase}</span>
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
                Multi-domain. Air, ground, signal, conflict, environment. A formal mesh viability scoring engine and natural language intelligence queries against live scan data. Applied spatial intelligence built to answer a real question.
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
              OVERWATCH does not stand alone. It is the intelligence layer of Neighborhood OS: the full stack that includes JEEP-PI (the physical mobile scanner hardware) and Trade Post (the coordination platform). The pipeline: JEEP-PI collects signals in the field, OVERWATCH models what those signals mean for infrastructure resilience, Trade Post uses that intelligence to route coordination through mesh when the grid fails.
            </p>
            <p className="text-neutral-600 leading-relaxed text-lg">
              OVERWATCH answers the question every other layer depends on: is this neighborhood ready to operate independently?
            </p>
            <div className="mt-10 p-6 rounded-2xl border border-neutral-100 bg-neutral-50 text-center">
              <p className="text-neutral-500 text-sm font-bold tracking-widest uppercase mb-2">The Pipeline</p>
              <p className="text-neutral-900 font-bold text-lg">JEEP-PI → OVERWATCH → Trade Post</p>
              <p className="text-neutral-500 text-sm mt-1">Physical Collection → Intelligence Layer → Coordination Layer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00BFFF' }}>Why It Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              We built the internet. We never built a backup.
            </h2>
            <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
              <p>
                Every system we depend on, from emergency alerts to supply chains to the apps on your phone, assumes the internet is on. When it goes down, whether from a storm, a power failure, a cyberattack, or something nobody predicted, our ability to coordinate collapses with it. We have no visibility into what is actually happening around us. No situational awareness. No way to know what our neighbors know.
              </p>
              <p>
                OVERWATCH is the answer to a question most people haven't thought to ask yet: what does the physical world around you look like, right now, without depending on the cloud to tell you?
              </p>
              <p>
                It maps the invisible infrastructure that already exists in every neighborhood. The WiFi routers. The Bluetooth devices. The LoRa mesh radios. The aircraft overhead. The environmental and geopolitical conditions shaping the region. Combined, these signals tell a story about whether a place is connected, resilient, and ready, or dangerously dependent on systems it doesn't control.
              </p>
              <p>
                This isn't a niche technical idea. It's the next layer of infrastructure awareness that cities, emergency planners, community organizers, and anyone who builds for the real world will eventually need. OVERWATCH builds that layer now.
              </p>
            </div>

            <div className="my-12 relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #00BFFF, #C8F135)' }} />
              <p className="text-xl md:text-2xl font-semibold text-neutral-900 leading-snug italic">
                The internet is not infrastructure. It is a service. OVERWATCH treats what is underneath it as infrastructure instead.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTELLIGENCE LAYERS */}
      <section style={{ backgroundColor: '#060a0f' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00BFFF' }}>Intelligence Layers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">19 signals. One picture.</h2>
            <p className="text-neutral-400 text-lg max-w-2xl">Every layer is a live feed from a real data source. Toggle any combination. The map updates instantly.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { group: 'Field Collection', color: '#C8F135', items: [
                { icon: '📡', name: 'WiFi Scatter', what: 'Every WiFi access point detected during wardriving sessions, plotted by exact location. Shows where wireless infrastructure actually lives.' },
                { icon: '🔵', name: 'BLE Devices', what: 'Bluetooth Low Energy devices detected in the field. Wearables, sensors, speakers, locks, anything broadcasting a BLE signal.' },
                { icon: '🔗', name: 'Mesh Nodes', what: 'Active LoRa mesh radio nodes from the Meshtastic network. Named devices plotted individually, showing the real topology of the off-grid communication layer.' },
                { icon: '📍', name: 'JEEP-PI Live', what: 'Real-time position and scan feed from the mobile collection unit. Updates every 5 seconds while in the field.' },
                { icon: '🌐', name: 'WiGLE Networks', what: 'Crowd-sourced global WiFi database overlaid on field data. Adds density context from millions of publicly reported access points worldwide.' },
              ]},
              { group: 'Air and Space', color: '#00BFFF', items: [
                { icon: '✈️', name: 'Live Aircraft', what: 'Every aircraft currently in the air, tracked via ADS-B transponder signals. Altitude, heading, speed, and flight ID in real time.' },
                { icon: '🛰️', name: 'Satellites', what: '500 active satellites tracked using orbital data from CelesTrak. Shows what is overhead at any given moment.' },
              ]},
              { group: 'Global Intelligence', color: '#ff6b6b', items: [
                { icon: '⚔️', name: 'Conflict Events', what: 'Armed conflict incidents pulled from GDELT every 15 minutes. Sourced from global news media and mapped to precise locations.' },
                { icon: '🚨', name: 'Disaster Alerts', what: 'Natural disasters, industrial accidents, and humanitarian emergencies tracked via GDACS. Updated continuously from official international sources.' },
                { icon: '🦠', name: 'C2 Nodes', what: 'Active cybersecurity threat infrastructure: command-and-control servers used by malware and botnets, sourced from feodotracker. Shows where active cyberattacks are being coordinated from.' },
                { icon: '🌍', name: 'Earthquakes', what: 'Seismic events globally, sourced from USGS in real time. Magnitude, depth, and affected population radius.' },
              ]},
              { group: 'Environment', color: '#C8F135', items: [
                { icon: '🔥', name: 'Fire Hotspots', what: 'Active wildfire and burn detections from NASA FIRMS satellite imagery. Updated multiple times daily.' },
                { icon: '🌫️', name: 'NASA MODIS', what: 'True-color and false-color satellite imagery from NASA. Shows ground conditions, smoke, flooding, and land change from orbit.' },
                { icon: '💨', name: 'NASA Aerosol', what: 'Atmospheric aerosol density from NASA satellites. Tracks smoke, dust, and air quality conditions at regional scale.' },
                { icon: '🌧️', name: 'Weather Radar', what: 'Live precipitation radar from RainViewer. Real-time storm tracking with adjustable opacity over any map layer.' },
              ]},
              { group: 'Chicago Local', color: '#00BFFF', items: [
                { icon: '🚗', name: 'Street Traffic', what: 'Live traffic conditions on Chicago roads from OpenStreetMap. Congestion, closures, and flow rate.' },
                { icon: '📷', name: 'Speed Cameras', what: 'All City of Chicago speed enforcement camera locations from the open data portal. Static layer showing the full enforcement grid.' },
                { icon: '⚠️', name: 'Incidents', what: 'Community-reported alerts: protests, police activity, road closures, fires, and medical events. User-generated, expire after 4 hours.' },
                { icon: '☀️', name: 'Sun Calc', what: 'Right-click anywhere on the map to get precise sunrise, sunset, golden hour, and solar position for that location and date.' },
                { icon: '📸', name: 'Mapillary', what: 'Street-level photography layer. Click any mapped road to see what it actually looks like on the ground.' },
              ]},
            ].map((group) => (
              <motion.div key={group.group}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-neutral-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-neutral-800">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: group.color }}>{group.group}</span>
                </div>
                <div className="divide-y divide-neutral-800">
                  {group.items.map((item) => (
                    <div key={item.name} className="px-6 py-4 flex gap-4">
                      <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-white font-semibold text-sm mb-1">{item.name}</p>
                        <p className="text-neutral-500 text-xs leading-relaxed">{item.what}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section style={{ backgroundColor: '#060a0f' }} className="py-24 px-6 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#00BFFF' }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A new kind of map. Built for what's coming.
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-8">
              OVERWATCH is what happens when you stop treating the internet as a given and start asking what you'd know without it. It is a working system, deployed and live, that combines field-collected signal data with real-time global intelligence feeds into a single coherent picture. No guesswork. No assumptions. Just what the world actually looks like, right now.
            </p>
            <p className="text-neutral-400 leading-relaxed text-lg mb-10">
              This kind of spatial intelligence platform has obvious applications far beyond the original use case: emergency management, urban planning, community resilience, journalism, security research, and anywhere situational awareness matters more than a Google Maps pin.
            </p>

            <div className="my-10 relative pl-6 md:pl-8 text-left">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #00BFFF, #C8F135)' }} />
              <p className="text-lg md:text-xl font-semibold text-white leading-snug italic">
                Not a wardriving tool. A new category of infrastructure awareness.
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
