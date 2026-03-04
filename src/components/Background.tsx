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
            Creative Generalist. AI Alchemist. Human-Centered Futurist.
          </h2>

          <div className="space-y-6 text-neutral-600 leading-relaxed">
            <p>
              In a rapidly evolving advertising landscape, I've built a career rooted in creativity, strategy, and innovation. My passion lies in leveraging emerging technologies like AI and automation to reimagine how we connect with audiences in meaningful ways.
            </p>
            <p>
              Over the past three years, I've led advancements in how creative teams collaborate — integrating cutting-edge tools and crafting campaigns that leave a lasting impact. Beyond campaigns, I've driven programs to upskill talent, enabling teams to adopt new technologies and reimagine workflows.
            </p>
            <p>
              My approach blends bold creativity with a focus on solving problems in smarter, more impactful ways — whether that's rethinking email, digital, or social strategies, or empowering teams with tools to stay ahead of the curve.
            </p>
            <p>
              My work extends beyond advertising. From decentralized art collections and mural projects to exploring the intersection of AI, creativity, and ethics — I believe personal curiosity fuels professional growth. Bold ideas paired with actionable insights can shape not just campaigns, but the way we work, collaborate, and create.
            </p>
            <p className="font-medium text-neutral-800">
              If you're looking for a creative partner who doesn't just adapt to change but drives it — let's connect.
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
