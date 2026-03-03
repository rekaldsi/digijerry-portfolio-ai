import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'GSD Mode',
    body: 'Every project starts with a PRD. Before any code runs, the system builds a plan, validates the architecture, and assigns the right agent to the right task.',
  },
  {
    num: '02',
    title: 'Autonomous Execution',
    body: 'Sub-agents handle research, code, QA, and deploys in parallel. Feature branches, Convex logging, Railway deploys — the infrastructure most companies are still figuring out.',
  },
  {
    num: '03',
    title: 'Persistent Memory',
    body: 'The system remembers. Daily logs, long-term memory files, session snapshots. Context doesn\'t die between conversations — it compounds.',
  },
]

export default function HowIWork() {
  return (
    <section id="process" className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#E85D04' }}>
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            I don't prompt. I architect.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            >
              <div className="text-5xl font-black mb-4 leading-none" style={{ color: '#E85D04' }}>
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">{step.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Bold statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="text-center"
        >
          <p className="text-2xl font-semibold text-neutral-900 relative inline-block">
            I built the infrastructure most companies are still trying to figure out.
            <span
              className="absolute bottom-0 left-0 right-0 h-0.5 -mb-1"
              style={{ backgroundColor: '#E85D04' }}
            />
          </p>
        </motion.div>
      </div>
    </section>
  )
}
