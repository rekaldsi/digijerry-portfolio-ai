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

        {/* Instagram CTA */}
        <motion.div {...fadeUp} className="mt-14 text-center">
          <p className="text-neutral-400 text-sm mb-3">Want to see more generative experiments?</p>
          <a
            href="https://www.instagram.com/sig.seeker/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 text-neutral-700 text-sm font-semibold hover:border-neutral-400 hover:text-neutral-900 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @sig.seeker on Instagram →
          </a>
        </motion.div>
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
