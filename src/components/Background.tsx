import { motion } from 'framer-motion'

export default function Background() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#E85D04' }}>
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10">
            Creative director. Product builder. AI native.
          </h2>

          <div className="space-y-6 text-neutral-600 leading-relaxed">
            <p>
              25 years in advertising. Associate Creative Director at Leo Burnett for 17 years. Then Saatchi & Saatchi. Brands like Camel, Pull-Ups, Kellogg's. The kind of career that teaches you how to move fast, make things people actually care about, and sell ideas in rooms that don't want to buy them.
            </p>
            <p>
              4 years ago I started building with AI before most people knew how to spell "prompt engineering." I built agents, systems, and products — not experiments. Things that run in production, ship features, and get real users.
            </p>
            <p>
              Now I'm looking for the right company to bring this into. If you're building something that matters and need someone who can think strategically AND ship autonomously — let's talk.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="mailto:sketchandslogan@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#E85D04' }}
            >
              Let's talk → sketchandslogan@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
