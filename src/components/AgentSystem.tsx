import { motion } from 'framer-motion'

const stats = [
  { value: '18+', label: 'Specialized Agents' },
  { value: '6', label: 'Active Projects' },
  { value: '24/7', label: 'Autonomous Operation' },
  { value: '4 yrs', label: 'Building AI Systems' },
]

const tools = ['Convex', 'Supabase', 'Railway', 'PM2', 'GitHub']

export default function AgentSystem() {
  return (
    <section id="ai-system" className="bg-neutral-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#E85D04' }}>
            The AI System
          </p>

          {/* H2 */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            I built my own AI twin.
          </h2>

          {/* Subtext */}
          <p className="text-neutral-400 max-w-2xl text-lg leading-relaxed mb-14">
            MrMagoochi is a persistent, multi-agent AI system running 24/7 on a Mac mini. It orchestrates 18+ specialized agents for creative strategy, research, autonomous coding, and ops — all with persistent memory, Convex logging, and Railway deploys.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black mb-1" style={{ color: '#E85D04' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="rounded-2xl border border-neutral-800 bg-neutral-800/40 p-8 mb-14"
          >
            {/* Main flow */}
            <div className="flex flex-col md:flex-row items-center gap-3 mb-8 justify-center">
              {['Main Session', 'Sub-Agents', 'Tools'].map((node, i) => (
                <div key={node} className="flex items-center gap-3">
                  <div
                    className="px-5 py-3 rounded-xl border text-sm font-semibold text-white text-center min-w-[130px]"
                    style={{ borderColor: '#E85D04', backgroundColor: 'rgba(232,93,4,0.08)' }}
                  >
                    {node}
                  </div>
                  {i < 2 && (
                    <svg className="hidden md:block text-neutral-600 flex-shrink-0" width="28" height="16" viewBox="0 0 28 16" fill="none">
                      <path d="M0 8H24M24 8L18 2M24 8L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {i < 2 && (
                    <svg className="md:hidden text-neutral-600 rotate-90" width="28" height="16" viewBox="0 0 28 16" fill="none">
                      <path d="M0 8H24M24 8L18 2M24 8L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            {/* Tools row */}
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-300 border border-neutral-700 bg-neutral-800"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            className="border-l-4 pl-6 py-2"
            style={{ borderColor: '#E85D04' }}
          >
            <p className="text-2xl text-neutral-300 italic font-light">
              "It's not a chatbot. It's a system."
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}
