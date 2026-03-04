import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

type Project = {
  name: string
  status: 'LIVE' | 'ACTIVE / FIELD TESTING' | 'COMING SOON' | 'WRITTEN' | 'IN PROGRESS'
  description: string
  detail: string
  tags: string[]
  fullWidth?: boolean
  demoUrl?: string
  heroImage?: string
  link?: string
}

const projects: Project[] = [
  {
    name: 'KØDEX',
    status: 'LIVE',
    description: 'Comic collection intelligence platform for serious collectors.',
    detail: 'Full-stack SaaS with barcode scanner, ComicVine enrichment pipeline, cover art matching, AI assistant (Dex), signing planner, and insights dashboard.',
    tags: ['React', 'Vite', 'Supabase', 'Railway', 'ComicVine API'],
  },
  {
    name: 'OVERWATCH',
    status: 'LIVE',
    description: 'Civilian spatial intelligence platform.',
    detail: 'Real-time geospatial data layer built for city planning, resource mapping, drone flight paths, and future robot intelligence routing.',
    tags: ['React', 'MapLibre', 'Supabase', 'Railway'],
  },
  {
    name: 'Trade Post Mesh',
    status: 'ACTIVE / FIELD TESTING',
    description: 'Off-grid decentralized communications via LoRa mesh.',
    detail: 'Meshtastic + Raspberry Pi bridge wired into the agent system. Built for disaster comms, off-grid coordination, and mesh intelligence.',
    tags: ['Meshtastic', 'Python', 'Raspberry Pi', 'LoRa'],
    demoUrl: 'https://trade-post-mesh-production.up.railway.app/app',
    heroImage: '/tradepost-feed.jpg',
  },
  {
    name: 'TheBotique',
    status: 'LIVE',
    description: 'AI agent marketplace — hire verified agents, pay with crypto.',
    detail: 'A fully functional marketplace where you can browse, hire, and pay AI agents with USDC on Base (Coinbase L2). Instant on-chain settlement, built-in reputation, money-back guarantee. Web3 + AI infrastructure from scratch.',
    tags: ['React', 'Base / USDC', 'Web3', 'Railway', 'API'],
    demoUrl: 'https://www.thebotique.ai',
    heroImage: '/thebotique-hero.jpg',
  },
  {
    name: 'The Orchard',
    status: 'LIVE',
    description: 'White-label AI brand intelligence dashboard — deployed for Toyota.',
    detail: 'An agency-grade brand stewardship portal built to be white-labeled for any client. Deployed as TDAiOS (Toyota Dealer Association Intelligence Operating System) for Toyota. Campaign intelligence, brand workflows, and AI-assisted decision-making in one system.',
    tags: ['React', 'Lovable', 'AI Workflows', 'White-Label'],
  },
  {
    name: 'DigiJerry',
    status: 'COMING SOON',
    description: 'An AI version of me you can actually talk to.',
    detail: 'Claude API + knowledge base trained on 4 years of conversations and portfolio work. Ask it anything about my career, process, or opinions.',
    tags: ['Claude API', 'React', 'Railway'],
  },
]

const agiBbook: Project = {
  name: 'After Intelligence',
  status: 'IN PROGRESS',
  description: '21 podcast chapters on AGI and what it means for humanity.',
  detail: 'Started as a podcast series before AGI was a mainstream conversation. 21 chapters covering consciousness, rights, identity, governance, and the singularity. The podcast is still in the works — but the chapters are here, and the content is worth reading.',
  tags: ['AGI', 'Podcast', '21 Chapters', 'Writing'],
  fullWidth: true,
  link: '/book',
}

function StatusBadge({ status }: { status: Project['status'] }) {
  const styles: Record<Project['status'], string> = {
    'LIVE': 'bg-green-100 text-green-700',
    'ACTIVE / FIELD TESTING': 'bg-orange-50 text-[#E85D04]',
    'COMING SOON': 'bg-neutral-100 text-neutral-500',
    'WRITTEN': 'bg-neutral-100 text-neutral-500',
    'IN PROGRESS': 'bg-blue-50 text-blue-600',
  }
  return (
    <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${styles[status]}`}>
      {status}
    </span>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className={`bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-md transition-shadow ${project.fullWidth ? 'col-span-1 md:col-span-2' : ''}`}
    >
      {project.fullWidth ? (
        /* Book card — editorial style */
        <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <span className="text-8xl md:text-9xl font-black text-neutral-100 leading-none select-none">
              01
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-3 flex-wrap">
              <h3 className="text-2xl font-bold text-neutral-900">{project.name}</h3>
              <StatusBadge status={project.status} />
            </div>
            <p className="text-neutral-600 font-medium mb-2">{project.description}</p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">{project.detail}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500 font-medium">
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <Link
                to={project.link}
                state={{ from: '/#projects' }}
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                style={{ backgroundColor: '#fff7f3', color: '#E85D04', border: '1px solid #E85D04' }}
              >
                Read the Chapters →
              </Link>
            )}
          </div>
        </div>
      ) : (
        /* Standard card */
        <>
          {/* Hero image or placeholder */}
          <div className="relative aspect-video overflow-hidden bg-neutral-100 flex items-center justify-center">
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt={`${project.name} screenshot`}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <span className="text-neutral-300 text-2xl font-bold tracking-tight select-none">
                {project.name}
              </span>
            )}
            <div className="absolute top-3 right-3">
              <StatusBadge status={project.status} />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-1">{project.name}</h3>
            <p className="text-neutral-600 text-sm font-medium mb-3">{project.description}</p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">{project.detail}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500 font-medium">
                  {tag}
                </span>
              ))}
            </div>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                style={{ backgroundColor: '#fff7f3', color: '#E85D04', border: '1px solid #E85D04' }}
              >
                ▶ Live Demo ↗
              </a>
            )}
          </div>
        </>
      )}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: '#E85D04' }}>
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Built. Shipped. Running.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
          <ProjectCard project={agiBbook} index={projects.length} />
        </div>
      </div>
    </section>
  )
}
