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
              Nearly two decades as an Associate Creative Director at Leo Burnett — one of the most demanding creative environments in the world. Before that, FCB, experiential work for R.J. Reynolds, and national TV and radio at Bridges Media Group. The through-line: moving fast, making things people actually respond to, and selling ideas in rooms that don't want to buy them.
            </p>
            <p>
              Four years ago I started building with AI before most people knew what to call it. Not prompting — building. Custom agents, generative workflows, autonomous systems running in production. I've shipped platforms, trained teams, and deployed tools that actually got used. The portfolio above isn't a demo reel. It's what's live.
            </p>
            <p>
              BFA in Multimedia/Design from Illinois Institute of Art. Based in Chicago. If you're building something that needs both strategic vision and the technical chops to ship it — I'm the person you're looking for.
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
