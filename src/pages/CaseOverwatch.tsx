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
  { num: '01', title: 'Live Aircraft Tracking', body: 'ADS-B feed shows every aircraft over the city in real time. Built as a tool for understanding airspace — and the beginning of a broader spatial awareness layer.' },
  { num: '02', title: 'Mesh Node Mapping', body: 'Every Trade Post Mesh node plotted on the grid. Originally built to plan and deploy the LoRa radio network across Chicago. The map became the network planning tool.' },
  { num: '03', title: 'BLE and WiFi Scatter', body: '50,000+ BLE devices and 1.3M WiFi access points mapped from field scanning runs. A picture of the invisible radio environment of the city.' },
  { num: '04', title: 'Street Traffic and Incidents', body: 'Live traffic via Overpass API, real-time incident feeds, and speed camera locations. The foundation of any real urban intelligence system.' },
]

const useCases = [
  { title: 'Municipal Planning', body: 'A platform for city planners to visualize infrastructure, coverage gaps, and resource distribution across neighborhoods.' },
  { title: 'Drone Flight Paths', body: 'Hobby and commercial drone operators need to understand airspace, signal density, and no-fly zones in real terms. OVERWATCH gives them that picture.' },
  { title: 'Mesh Network Deployment', body: 'The original use case. Map where nodes exist, where coverage is thin, and where to place the next radio for maximum reach.' },
  { title: 'Robotics and Spatial AI', body: 'As autonomous robots and robot dogs enter public spaces, they need a live model of the environment around them. OVERWATCH is designed to be that layer.' },
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
      <section style={{ backgroundColor: '#0f0f0f' }} className="pt-16 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.button onClick={handleBack}
            className="text-neutral-500 text-sm font-medium hover:text-white transition-colors mb-12 flex items-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            ← Back to Work
          </motion.button>
          <motion.p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Case Study · OVERWATCH
          </motion.p>
          <motion.h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            A Spatial Intelligence<br />Layer for the Real World.
          </motion.h1>
          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Built as a civilian platform for understanding what is happening in physical space. Started as a mesh network planning tool. Evolved into a live multi-layer intelligence grid covering aircraft, radio signals, traffic, and infrastructure across a city.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {[{ value: '179', label: 'Live aircraft tracked' }, { value: '50K+', label: 'BLE devices mapped' }, { value: '368', label: 'Mesh nodes deployed' }].map((s) => (
              <div key={s.label} className="rounded-xl px-5 py-3 border border-neutral-800">
                <div className="text-white font-bold text-sm">{s.value}</div>
                <div className="text-neutral-500 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SCREENSHOT */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <img src="/overwatch-hero.jpg" alt="OVERWATCH live grid" className="w-full rounded-2xl border border-neutral-100 shadow-sm" />
          </motion.div>
        </div>
      </section>

      {/* DATA LAYERS */}
      <section className="bg-white pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Origin</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">It started as a map. It became something bigger.</h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-6">
              OVERWATCH was originally built to plan where to place Trade Post Mesh radio nodes across Chicago. I needed a way to visualize coverage, signal reach, and dead zones. Once the map was live with real data, it became clear this was a platform, not just a planning tool.
            </p>
            <blockquote className="border-l-4 pl-6 py-2" style={{ borderColor: '#E85D04' }}>
              <p className="text-xl font-semibold text-neutral-800 italic leading-relaxed">
                "When autonomous systems need to understand the world around them, this is the kind of layer they need."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* LAYERS */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The System</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Live data. Multiple layers. One grid.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {layers.map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 border border-neutral-800">
                <div className="text-4xl font-black mb-4 leading-none" style={{ color: '#E85D04' }}>{item.num}</div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>Applications</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Where this is going.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t-2 pt-6" style={{ borderColor: '#E85D04' }}>
                <h3 className="font-bold text-neutral-900 text-lg mb-3">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Infrastructure thinking. Not app thinking.</h2>
            <p className="text-neutral-400 leading-relaxed text-lg mb-8">
              OVERWATCH is built on React, MapLibre GL, Supabase, and Railway. Live data feeds refresh continuously. The architecture is designed to add new layers without rebuilding the core. This is what it looks like when someone thinks about a platform, not just a feature.
            </p>
            <a href="mailto:sketchandslogan@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#E85D04' }}>
              Let's talk →
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
