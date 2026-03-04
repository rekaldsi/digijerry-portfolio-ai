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
            Creative director. Systems builder. AI native.
          </h2>

          <div className="space-y-6 text-neutral-600 leading-relaxed">
            <p>
              Nearly two decades in advertising — most of it as Associate Creative Director at Leo Burnett, one of the most demanding creative environments in the world. Before that, FCB, experiential work for R.J. Reynolds, national TV and radio. The through-line: making things people actually respond to, and selling ideas in rooms that don't want to buy them.
            </p>
            <p>
              Four years ago I started building with AI before most people knew what to call it. Not prompting — architecting. I've built custom agents, generative workflows, prompt frameworks, and autonomous systems that run in production. Most recently embedded at Saatchi & Saatchi as Creative Director, Digital & Technology for Toyota TDA — operationalizing AI inside one of the most complex retail advertising systems in the world.
            </p>
            <p>
              I don't just use AI tools. I design the systems that make them usable at scale — with governance, modularity, and real creative output baked in. The work above isn't a demo reel. It's what's live.
            </p>
            <p>
              BFA in Multimedia/Design, Illinois Institute of Art. Based in Chicago. If you need someone who can think at the strategy level and ship at the execution level — that's the job I've been doing.
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
