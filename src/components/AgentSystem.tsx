import { motion } from 'framer-motion'

const stats = [
  { value: '18+', label: 'Specialized Agents' },
  { value: '50+', label: 'Integrations & Skills' },
  { value: '24/7', label: 'Autonomous Operation' },
  { value: '4 yrs', label: 'Building AI Systems' },
]

const agents = [
  {
    emoji: '🧠',
    name: 'MrMagoochi',
    role: 'Main Orchestrator',
    desc: 'The core session. Reads context, routes tasks, manages memory, and coordinates all sub-agents.',
    color: '#E85D04',
  },
  {
    emoji: '🔭',
    name: 'Research Scout',
    role: 'Intelligence Gatherer',
    desc: 'Web research, API docs, competitive analysis, and tech landscape mapping, no file writes.',
    color: '#3B82F6',
  },
  {
    emoji: '⚙️',
    name: 'Code Builder',
    role: 'Feature Engineer',
    desc: 'Greenfield builds and multi-file features. Works from PRDs, branches, and commits clean.',
    color: '#8B5CF6',
  },
  {
    emoji: '🛡️',
    name: 'Security Sentinel',
    role: 'Security Auditor',
    desc: 'RLS checks, API key review, exposure audits. Runs on schedule and on-demand.',
    color: '#EF4444',
  },
  {
    emoji: '🚀',
    name: 'DevOps Agent',
    role: 'Infrastructure Ops',
    desc: 'Deploy scripts, PM2 management, Railway/Supabase ops, and migration runs.',
    color: '#10B981',
  },
  {
    emoji: '📋',
    name: 'Strategist',
    role: 'Creative Director',
    desc: 'High-level product direction, creative briefs, positioning, and insight-led strategy.',
    color: '#F59E0B',
  },
  {
    emoji: '✍️',
    name: 'Editor',
    role: 'Voice Shaper',
    desc: "Rewrites content in Jerry's voice. Kills filler. Makes everything sound human.",
    color: '#06B6D4',
  },
  {
    emoji: '🔍',
    name: 'QA Testing',
    role: 'Quality Guard',
    desc: 'Smoke tests, regression checks, and edge case hunting before anything ships.',
    color: '#EC4899',
  },
]

const tools = [
  { name: 'Convex', desc: 'Operational logging' },
  { name: 'Supabase', desc: 'Production database' },
  { name: 'Railway', desc: 'Cloud deploys' },
  { name: 'PM2', desc: 'Process management' },
  { name: 'GitHub', desc: 'Version control' },
  { name: 'Claude API', desc: 'AI backbone' },
]

const integrations = [
  {
    category: 'Local Models',
    color: '#C8F135',
    items: ['GPT-OSS 20B (LMStudio)', 'DeepSeek Coder 6.7B', 'Qwen3 8B (Ollama)', 'Gemma 3 27B', 'Phi-4 Mini', 'Kimi VL (vision)', 'MLX Whisper (local STT)', 'LMStudio runtime'],
  },
  {
    category: 'AI & Cloud LLMs',
    color: '#8B5CF6',
    items: ['Claude 4 (Anthropic)', 'Gemini 2.5 Pro/Flash', 'GPT / OpenAI', 'Google AI Studio', 'ElevenLabs TTS', 'OpenAI Whisper API'],
  },
  {
    category: 'MCP Servers',
    color: '#E85D04',
    items: ['Playwright MCP', 'Supabase MCP', 'Filesystem MCP', 'Memory MCP', 'Augment Codebase', 'mcporter (custom)', 'Meshtastic MCP'],
  },
  {
    category: 'Dev & Orchestration',
    color: '#F59E0B',
    items: ['Convex (logging)', 'n8n (workflows)', 'Docker', 'PM2 (21 processes)', 'Railway', 'GitHub CLI', 'tmux'],
  },
  {
    category: 'GenAI Creative',
    color: '#EC4899',
    items: ['Midjourney', 'RunwayML', 'Luma Dream Machine', 'Pika', 'Kling', 'Hailuo MiniMax', 'Hedra', 'Higgsfield'],
  },
  {
    category: 'Channels & Comms',
    color: '#10B981',
    items: ['Telegram', 'Signal', 'Discord', 'Slack', 'iMessage', 'WhatsApp', 'Email (IMAP/SMTP)'],
  },
]

export default function AgentSystem() {
  return (
    <section id="ai-system" className="bg-neutral-900 text-white py-24 overflow-hidden">
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
            MrMagoochi is a persistent, multi-agent AI system running 24/7 on a Mac mini. It orchestrates 18+ specialized agents for creative strategy, research, autonomous coding, and ops, all with persistent memory, real-time logging, and autonomous deploys.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: '#E85D04' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Agent Grid */}
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6">
              Agent Fleet, Selected
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {agents.map((agent, i) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
                  className="rounded-xl p-5 border border-neutral-800 bg-neutral-800/40 hover:bg-neutral-800/70 transition-colors"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                      style={{ backgroundColor: `${agent.color}18`, border: `1px solid ${agent.color}40` }}
                    >
                      {agent.emoji}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white leading-tight">{agent.name}</div>
                      <div className="text-xs font-medium mt-0.5" style={{ color: agent.color }}>{agent.role}</div>
                    </div>
                  </div>
                  {/* Status dot */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                    <span className="text-xs text-neutral-400">Online</span>
                  </div>
                  {/* Desc */}
                  <p className="text-xs text-neutral-400 leading-relaxed">{agent.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Infrastructure row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="rounded-2xl border border-neutral-800 bg-neutral-800/30 p-6 mt-8 mb-14"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-5">
              Infrastructure
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
              {tools.map((tool) => (
                <div key={tool.name} className="text-center">
                  <div className="text-sm font-semibold text-white mb-1">{tool.name}</div>
                  <div className="text-xs text-neutral-400">{tool.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Integrations & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            className="mt-8 mb-14"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6">
              Tech Stack & Integrations
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {integrations.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.07 }}
                  className="rounded-xl border border-neutral-800 bg-neutral-800/30 p-6"
                >
                  <div
                    className="text-xs font-bold tracking-wider uppercase mb-4 pb-3 border-b border-neutral-800"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-neutral-400">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: group.color }}></span>
                        {item}
                      </li>
                    ))}
                    <li className="flex items-center gap-2 pt-1">
                      <span className="text-xs font-medium tracking-wider" style={{ color: group.color }}>+ more</span>
                    </li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            className="border-l-2 border-[#C8F135] pl-4 md:pl-6 my-6 italic text-base leading-relaxed"
          >
            <p className="text-neutral-300 font-medium">
              "It's not a chatbot. It's a system."
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}
