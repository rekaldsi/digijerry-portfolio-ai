import { useState } from 'react'
import { motion } from 'framer-motion'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/xwvngbpv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, message }),
      })
      if (res.ok) {
        setStatus('sent')
        setName('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-white py-24 px-6 border-t border-neutral-100">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#E85D04' }}>
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Let's talk.
          </h2>
          <p className="text-neutral-500 text-lg mb-10">
            Tell me what you're working on. I'll get back to you.
          </p>

          {status === 'sent' ? (
            <div className="rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
              <div className="text-3xl mb-3">✓</div>
              <p className="font-semibold text-neutral-900 text-lg">Message sent.</p>
              <p className="text-neutral-500 mt-1">I'll be in touch.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Your name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  placeholder="First and last"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 text-sm"
                  style={{ '--tw-ring-color': '#E85D04' } as React.CSSProperties}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="What are you working on?"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 text-sm resize-none"
                  style={{ '--tw-ring-color': '#E85D04' } as React.CSSProperties}
                />
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-sm">Something went wrong. Try again.</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-full font-semibold text-white text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: '#E85D04' }}
              >
                {status === 'sending' ? 'Sending...' : 'Send message →'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
