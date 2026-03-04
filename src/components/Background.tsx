import { motion } from 'framer-motion'

const stats = [
  { value: '25+', label: 'Years in advertising' },
  { value: '17', label: 'Years at Leo Burnett' },
  { value: '4', label: 'Years building AI systems' },
  { value: '∞', label: 'Appetite for what\'s next' },
]

export default function Background() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#E85D04' }}>
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 max-w-3xl leading-tight">
            Most people have a career or a curiosity. I built both into the same job.
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-neutral-100"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-black mb-1" style={{ color: '#E85D04' }}>{stat.value}</div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-neutral-600 leading-relaxed"
          >
            <p className="text-lg">
              Nearly two decades in advertising. Seventeen of those years as Associate Creative Director at Leo Burnett, working on the kind of brands that don't forgive bad work. Camel. Kellogg's. Pull-Ups. United. You learn fast or you don't last.
            </p>
            <p>
              Before that: FCB, experiential campaigns for R.J. Reynolds across five cities, national TV and radio at Bridges Media Group. The through-line across all of it is the same thing — figuring out how to make people feel something, and then building the thing that makes it happen.
            </p>
            <p>
              Most recently embedded at Saatchi and Saatchi as Creative Director, Digital and Technology for Toyota TDA. Operationalized AI inside one of the most complex retail advertising systems in the country. Built the frameworks. Trained the teams. Shipped the work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-neutral-600 leading-relaxed"
          >
            <p className="text-lg">
              Four years ago I started building with AI before most people knew what to call it. Not using tools. Architecting systems. Custom agents. Generative workflows. Prompt frameworks with governance baked in. Autonomous pipelines that run while I sleep.
            </p>
            <p>
              The rare thing I bring is that I can hold both ends of the problem at the same time. I can sit in a strategy session and reframe the brief. I can also open a terminal and ship a feature. Most people do one. I do both, and I know which one the moment needs.
            </p>
            <p className="font-semibold text-neutral-800 text-base">
              I'm not looking for a job to grow into. I'm looking for a room where the problems are hard enough to be worth solving.
            </p>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <a
            href="mailto:sketchandslogan@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#E85D04' }}
          >
            Let's talk → sketchandslogan@gmail.com
          </a>
        </motion.div>

      </div>
    </section>
  )
}
