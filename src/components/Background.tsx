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
            Most people have a career or a curiosity. I built both into the same job.
          </h2>

          <div className="space-y-6 text-neutral-600 leading-relaxed text-base">
            <p>
              I've worked across every layer of the advertising business — from production at Bridges Media Group, directing TV and radio commercials, casting talent, learning how ideas actually get made. Then FCB, where I worked on global product launches for Nokia and Sony. Then Mess Marketing, where I ran experiential campaigns for Camel, connecting the brand to independent music culture across major markets.
            </p>
            <p>
              The longest chapter was Leo Burnett — 17 years as Associate Creative Director on serious accounts: Marlboro, Kellogg's, Kimberly-Clark, United Airlines. High-stakes, high-volume, unforgiving. That environment teaches you how to think clearly under pressure, sell ideas that scare people, and execute at a level most agencies never reach.
            </p>
            <p>
              Four years ago I pivoted hard into AI — not as a user, but as a builder. I architected multi-agent systems, built generative workflows, designed prompt frameworks with governance built in, and shipped production tools that run autonomously. Most recently I was embedded at Saatchi & Saatchi New York as Creative Director, Digital & Technology for the Toyota Dealer Association, where I operationalized AI inside one of the most complex retail advertising systems in the country.
            </p>
            <p>
              What makes me useful is the combination. I understand the creative process at a deep level and I can build the systems that scale it. I can lead strategy in the morning and deploy a feature in the afternoon. That translation layer between creative and technology is rare, and it's where I do my best work.
            </p>
            <p className="text-neutral-800 font-medium">
              I'm not here to grow into a role. I'm here to change what's possible inside one.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#E85D04' }}
            >
              Let's talk →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
