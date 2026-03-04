import { motion, AnimatePresence } from 'framer-motion'
import type { Easing } from 'framer-motion'
import { useState, useRef } from 'react'

const ease: Easing = 'easeOut'
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5, ease },
}

const videos = [
  {
    src: '/gen-deepfake-jerry.mp4',
    title: 'Glitch Self Portrait',
    tools: 'OpenAI Sora · CapCut',
    desc: 'I fed Sora my own face and let it fabricate me into scenarios that never happened. Doctor. Spokesperson. Stranger. Every frame is AI-generated — none of it is real. The last line lands the point: "You can\'t believe what you see anymore."',
  },
  {
    src: '/gen-wreckz-lolla.mp4',
    title: 'Wreckz Goes to Lolla',
    tools: 'Midjourney Animate · RunwayML · CapCut',
    desc: 'A robot love story. Wreckz and his cyborg girl, going to Lollapalooza. A personal challenge to hold character consistency across AI-generated scenes and actually tell a story with it. Fun was the whole assignment.',
  },
]

export default function GenerativeWork() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)

  const openModal = (idx: number) => {
    setActiveIdx(idx)
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.muted = false
        modalVideoRef.current.play()
      }
    }, 100)
  }

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
      modalVideoRef.current.currentTime = 0
    }
    setActiveIdx(null)
  }

  return (
    <section id="generative" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-neutral-400">Generative Experiments</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Exploring what AI can create, distort,<br className="hidden md:block" /> and make you question.
          </h2>
          <p className="text-neutral-500 text-base max-w-2xl">
            Not every project is a platform. Some are experiments in what these tools can actually do when you push them creatively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group cursor-pointer"
              onClick={() => openModal(i)}
            >
              {/* Video thumbnail — autoplay muted loop */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-100" style={{ aspectRatio: '9/16', maxHeight: '520px' }}>
                <video
                  src={v.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-neutral-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card copy */}
              <div className="mt-5">
                <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-1">{v.tools}</p>
                <h3 className="text-neutral-900 font-bold text-xl mb-2">{v.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative flex flex-col items-center"
              style={{ maxWidth: '420px', width: '90vw' }}
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-medium"
              >
                ✕ Close
              </button>

              <video
                ref={modalVideoRef}
                src={videos[activeIdx].src}
                controls
                autoPlay
                playsInline
                className="w-full rounded-2xl"
                style={{ maxHeight: '80vh' }}
              />
              <div className="mt-4 text-center px-2">
                <p className="text-white font-bold text-lg">{videos[activeIdx].title}</p>
                <p className="text-white/50 text-xs mt-1">{videos[activeIdx].tools}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
