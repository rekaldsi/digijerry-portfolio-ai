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

const features = [
  { num: '01', title: 'Offer, Need, Alert', body: 'Three post types power the local economy. Post what you have, post what you need, or push an alert to everyone in range. No accounts required. No central server needed to survive.' },
  { num: '02', title: 'Mesh-First Architecture', body: 'Built on Meshtastic LoRa radio hardware. Messages travel node to node without WiFi or cell service. If the grid goes down, the mesh stays up.' },
  { num: '03', title: 'Location-Aware', body: 'Posts are tagged to mesh nodes — Cook County, Pilsen, Wicker Park. The network knows where you are relative to the information that matters to you.' },
  { num: '04', title: 'Emergency Mode', body: 'When infrastructure fails, Trade Post becomes the communication layer. Tornado watches, power outages, real events that happened on the network while it was live.' },
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
      <section style={{ backgroundColor: '#0f0f0f' }} className="pt-16 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.button onClick={handleBack}
            className="text-neutral-500 text-sm font-medium hover:text-white transition-colors mb-12 flex items-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            ← Back to Work
          </motion.button>
          <motion.p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Case Study · Trade Post Mesh
          </motion.p>
          <motion.h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            An Off-Grid Neighborhood<br />Operating System.
          </motion.h1>
          <motion.p className="text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            A decentralized platform for local communities to trade, barter, request help, and share alerts — even when the internet and cell service are completely gone. No tracking. No central authority. Just neighbors talking to neighbors.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {[{ value: 'LoRa', label: 'Mesh radio protocol' }, { value: '0', label: 'Infrastructure required' }, { value: 'Live', label: 'Active mesh in Chicago' }].map((s) => (
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
            <img src="/tradepost-case.jpg" alt="Trade Post Mesh feed" className="w-full rounded-2xl border border-neutral-100 shadow-sm" />
            <p className="text-neutral-400 text-xs mt-3 text-center">Live feed during a Cook County tornado watch. Mesh staying active on battery backup in Pilsen.</p>
          </motion.div>
        </div>
      </section>

      {/* THE IDEA */}
      <section className="bg-white pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Idea</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">What if your neighborhood didn't need the internet to function?</h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-6">
              Trade Post Mesh was designed around one question: what does local community infrastructure look like when you remove dependence on centralized systems? The answer is a mesh radio network with a feed built for trading, helping, and alerting — running on hardware that fits in your pocket and reaches a mile without any towers.
            </p>
            <p className="text-neutral-600 leading-relaxed text-lg">
              It is not a social network. It is not a marketplace. It is a neighborhood operating system for the moments when those things stop working.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ backgroundColor: '#0f0f0f' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built for when everything else fails.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item, i) => (
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

      {/* TAKEAWAY */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#E85D04' }}>The Takeaway</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">This is what first principles thinking looks like.</h2>
            <p className="text-neutral-600 leading-relaxed text-lg mb-8">
              Trade Post Mesh was built with Meshtastic, Python, Raspberry Pi, and LoRa radio hardware. The web interface bridges the mesh to a browser-friendly feed. The architecture is intentionally decentralized — there is no single point of failure because there is no single point. This project exists because I asked what infrastructure should actually look like, then built it.
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
