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
  accent?: string
}

const projects: Project[] = [
  {
    name: 'KØDEX',
    status: 'LIVE',
    description: 'Full-stack AI platform for serious comic collectors.',
    detail: 'A personal obsession shipped as a real product. KØDEX runs an autonomous enrichment pipeline across 1.9M+ ComicVine catalog records, matches cover art, tracks live market pricing, and cross-references your collection against convention signing guests. The insights dashboard treats your collection the way a financial advisor treats a portfolio. Every piece built to scale — for 10,000 collectors, not just one.',
    tags: ['React', 'Vite', 'TypeScript', 'Supabase', 'Railway', 'ComicVine API', 'AI Enrichment', 'Autonomous Pipeline'],
    heroImage: '/kodex-card.jpg',
    link: '/case/kodex',
  },
  {
    name: 'OVERWATCH',
    status: 'LIVE',
    description: 'Real-time civilian spatial intelligence platform.',
    detail: '19 live intelligence layers — aircraft, mesh nodes, BLE/WiFi signals, IDOT traffic cameras, weather, protests, incidents — unified into one geospatial grid. Built from scratch on field-collected data from a Raspberry Pi in a Jeep. Not a demo: 1.5M+ data points, running in production, with an AI query console that lets you ask the map questions in plain English.',
    tags: ['React', 'MapLibre GL', 'TypeScript', 'Supabase', 'Railway', 'ADS-B', 'Meshtastic', 'Gemini AI'],
    heroImage: '/overwatch-card.jpg',
    link: '/case/overwatch',
  },
  {
    name: 'Trade Post Mesh',
    status: 'ACTIVE / FIELD TESTING',
    description: 'Neighborhood OS that works when the grid doesn\'t.',
    detail: 'A decentralized platform for trading, bartering, requesting help, and broadcasting alerts — no internet, no cell service, no central server. Built on Meshtastic LoRa hardware. The same platform that handles an insulin emergency in a blackout also handles everyday mutual aid, neighborhood coordination, and barter economy. Field-tested. Runs on a $35 radio.',
    tags: ['Meshtastic', 'LoRa / RF', 'React', 'Supabase', 'MQTT', 'Raspberry Pi', 'Offline-First'],
    demoUrl: 'https://trade-post-mesh-production.up.railway.app/app?demo=1',
    heroImage: '/tradepost-main.png',
    link: '/case/tradepost',
  },
  {
    name: 'ChiArts Supporter Hub',
    status: 'LIVE' as const,
    accent: '#C9A84C',
    description: 'Development infrastructure for a school that lost its funding foundation.',
    detail: 'When the ChiArts Foundation board disbanded, the school kept going. The fundraising infrastructure didn\'t. I built a development operations platform to replace it: 97 vetted partners and funders across 12 categories, a grant calendar with deadline urgency tracking, an outreach letter generator that writes in 60 seconds, and a corporate matching gifts guide. No commission. No brief. Just a problem that needed solving.',
    tags: ['React', 'Vite', 'TypeScript', 'Nonprofit Tech', 'Arts Education', 'Product Strategy', 'No-Code Adjacent'],
    demoUrl: 'https://chiarts.support',
    heroImage: '/chiarts-card.jpg',
    link: '/case/chiarts',
  },
  {
    name: 'TheJacket',
    status: 'LIVE' as const,
    description: 'Civic transparency platform. Every Cook County candidate. Every dollar. Every flag.',
    detail: '81 candidates, 44 races, 23 judges — all on one platform with A–F transparency grades, documented red flags sourced to original FEC and court records, a live AI enrichment pipeline, and a personal ballot builder that saves only on your device. The data was always public. The problem was making it usable by someone with 10 minutes before they walk into a booth.',
    tags: ['Next.js 15', 'TypeScript', 'Civic Tech', 'AI Enrichment', 'FEC / ILSBE Data', 'Scoring Engine', 'Vercel'],
    demoUrl: 'https://thejacket.cc',
    heroImage: '/jacket-main.png',
    link: '/case/jacket',
  },
  {
    name: 'TheBotique',
    status: 'LIVE',
    description: 'A marketplace built for the autonomous agent economy.',
    detail: 'A commerce platform where humans and AI agents can discover, hire, and pay verified agents by task — using USDC on Base. The part that makes it genuinely new: agents can hire other agents to complete sub-tasks without a human in the loop. Designed as a concept for where the agent economy is heading. Built as a working platform to prove it\'s already here.',
    tags: ['React', 'TypeScript', 'Web3', 'Base / USDC', 'Agent Commerce', 'Railway', 'Solidity Adjacent'],
    demoUrl: 'https://www.thebotique.ai',
    heroImage: '/thebotique-hero.jpg',
    link: '/case/botique',
  },
  {
    name: 'TDA iOS',
    status: 'CONCEPT',
    description: 'Intelligent operating system for retail marketing at national scale.',
    detail: 'Designed during a 4-month engagement at Saatchi & Saatchi NY, embedded with the Toyota Dealer Association retail division. TDA iOS is a three-layer intelligence platform: a Knowledge Layer that centralizes institutional memory, a Creative Intelligence Layer that surfaces insights at brief, and a Governance Layer that keeps 1,200+ dealers and four agency tiers aligned. Presented to client leadership and the technology team.',
    tags: ['AI Strategy', 'Knowledge Architecture', 'Creative Operations', 'Workflow Design', 'Agency System Design'],
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
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                  style={{ backgroundColor: '#E85D04', color: '#fff' }}
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
                  style={{ backgroundColor: 'transparent', color: '#E85D04', border: '1px solid #E85D04' }}
                >
                  Case Study →
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
