import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

type Project = {
  name: string
  status: 'LIVE' | 'ACTIVE / FIELD TESTING' | 'COMING SOON' | 'WRITTEN' | 'IN PROGRESS' | 'CONCEPT'
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
    description: 'Full-stack AI platform for serious comic collectors.',
    detail: 'Built end-to-end: enrichment pipeline processing 185,000+ catalog records, real-time market pricing, cover art matching, a signing planner that cross-references your collection against convention guest lists, and an insights dashboard that treats your collection the way a financial advisor treats a portfolio. This is what happens when a product builder takes a personal obsession and ships it properly.',
    tags: ['React', 'Vite', 'Supabase', 'Railway', 'ComicVine API'],
    heroImage: '/kodex-card.jpg',
    link: '/case/kodex',
  },
  {
    name: 'OVERWATCH',
    status: 'LIVE',
    description: 'Real-time civilian spatial intelligence platform.',
    detail: 'A live, multi-layer geospatial grid displaying aircraft, mesh nodes, BLE/WiFi signals, traffic flow, and local incidents across a city, in real time. Started as infrastructure for mesh network planning. Grew into a full urban intelligence layer with autonomous data ingestion and alert routing. Built from scratch, running in production.',
    tags: ['React', 'MapLibre', 'Supabase', 'Railway'],
    heroImage: '/overwatch-card.jpg',
    link: '/case/overwatch',
  },
  {
    name: 'Trade Post Mesh',
    status: 'ACTIVE / FIELD TESTING',
    description: 'Cloud-optional neighborhood OS built on LoRa mesh radio.',
    detail: 'A fully decentralized platform for local communities to trade, barter, request help, and broadcast alerts without internet or cell service. Built on Meshtastic LoRa hardware. No tracking, no central server, no dependency on infrastructure that can fail. If you can do commerce without the internet, messaging is already solved. Field-tested in real conditions.',
    tags: ['Meshtastic', 'Python', 'Raspberry Pi', 'LoRa'],
    demoUrl: 'https://trade-post-mesh-production.up.railway.app/app?demo=1',
    heroImage: '/tradepost-main.png',
    link: '/case/tradepost',
  },
  {
    name: 'ChiArts Supporter Hub',
    accent: '#C9A84C',
    description: 'Development operations tool for an arts school in crisis.',
    detail: 'When Chicago High School for the Arts lost its independent foundation board and returned to CPS, it lost the infrastructure that funded it. I built a development operations tool to replace it — a vetted directory of 97 partners and funders, a grant calendar, an outreach letter generator, and a corporate matching gifts lookup. Purpose-built for a school trying to rebuild its funding pipeline from scratch.',
    tags: ['React', 'Vite', 'Arts Education', 'Nonprofit', 'Development Ops'],
    demoUrl: 'https://chiarts.support',
    heroImage: '/chiarts-card.jpg',
    link: '/case/chiarts',
  },
  {
    name: 'TheBotique',
    status: 'LIVE',
    description: 'A marketplace designed for the autonomous agent economy.',
    detail: 'An agent commerce platform where humans and AI agents can discover, hire, and pay verified agents by task type using USDC on Base. The part that makes it genuinely new: agents can hire other agents to complete sub-tasks autonomously. Designed as a concept for where the agent economy is heading, built as a working platform to prove it.',
    tags: ['React', 'Base / USDC', 'Web3', 'Railway', 'API'],
    demoUrl: 'https://www.thebotique.ai',
    heroImage: '/thebotique-hero.jpg',
    link: '/case/botique',
  },
  {
    name: 'TDA iOS',
    status: 'CONCEPT',
    description: 'Intelligent operating system designed for retail marketing at scale.',
    detail: 'During a 4-month engagement at Saatchi and Saatchi New York, embedded with the Toyota Dealer Association retail division, I designed TDA iOS: a centralized intelligence platform with a Knowledge Layer, Creative Intelligence Layer, and Governance Layer to connect fragmented teams, structured knowledge, and automation into one operating framework. Presented directly to client leadership and the technology team.',
    tags: ['AI Governance', 'Knowledge Systems', 'Creative Operations', 'Workflow Design'],
    heroImage: '/tdaios-card.png',
    link: '/tda',
  },
]

const agiBook: Project = {
  name: 'After Intelligence',
  status: 'IN PROGRESS',
  description: '21 chapters on AGI, written before it was a mainstream conversation.',
  detail: 'A long-form podcast series and written collection started years before AGI entered the cultural zeitgeist. 21 chapters covering machine consciousness, rights and identity, governance frameworks, the singularity, and what comes after. The thinking here predates most of what people are only now starting to argue about. The podcast is still in production. The chapters are already worth reading.',
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
    'CONCEPT': 'bg-purple-50 text-purple-600',
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
        /* Book card, editorial style */
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
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">{project.detail}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 font-medium">
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <Link
                to={project.link}
                state={{ from: '/#projects' }}
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:opacity-80"
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
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">{project.detail}</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:opacity-80"
                  style={{ backgroundColor: '#fff7f3', color: '#E85D04', border: '1px solid #E85D04' }}
                >
                  ▶ Live Demo ↗
                </a>
              )}
              {project.link && (
                <Link
                  to={project.link}
                  state={{ from: '/#projects' }}
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:opacity-80"
                  style={{ backgroundColor: '#fff7f3', color: '#E85D04', border: '1px solid #E85D04' }}
                >
                  View Case Study →
                </Link>
              )}
            </div>
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
          <ProjectCard project={agiBook} index={projects.length} />
        </div>
      </div>
    </section>
  )
}
