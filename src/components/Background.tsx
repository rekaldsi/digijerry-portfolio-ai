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
              Nearly two decades in advertising. Seventeen of those years as Associate Creative Director at Leo Burnett, working on the kind of brands that don't forgive bad work. Marlboro. Kellogg's. Pull-Ups. United. You learn fast or you don't last.
            </p>
            <p>
              Before that: Mess Marketing, running experiential campaigns for Camel — connecting the brand to independent record labels and launching new product lines across major markets. Before Mess, FCB, where I worked on the Nokia N-Series launch, Sony Bravia TVs, and spirits. Before that, Bridges Media Group — TV and radio commercials, including Mike Ditka for Majestic Star Casino and Culligan Water. That's where I learned production from the ground up.
            </p>
            <p>
              Four years ago I started building with AI before most people knew what to call it. Not using tools. Architecting systems. Custom agents, generative workflows, prompt frameworks with governance baked in, autonomous pipelines that run while I sleep. Most recently embedded at Saatchi and Saatchi as Creative Director, Digital and Technology for Toyota TDA — operationalizing AI inside one of the most complex retail advertising systems in the country.
            </p>
            <p>
              The rare thing I bring is that I can hold both ends of the problem at the same time. I can sit in a strategy session and reframe the brief. I can also open a terminal and ship a feature. Most people do one. I do both, and I know which one the moment needs.
            </p>
            <p className="text-neutral-800 font-medium">
              I'm not looking for a job to grow into. I'm looking for a room where the problems are hard enough to be worth solving.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="mailto:sketchandslogan@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
