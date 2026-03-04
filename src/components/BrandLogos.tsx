import { motion } from 'framer-motion'

const logos = [
  { name: 'Camel', file: '/logos/Camel.png' },
  { name: 'Marlboro', file: '/logos/Marlboro.png' },
  { name: 'Copenhagen', file: '/logos/Copenhagen.png' },
  { name: 'Skoal', file: '/logos/Skoal.png' },
  { name: 'Altria', file: '/logos/Altria.png' },
  { name: "Kellogg's", file: '/logos/Kelloggs.png' },
  { name: 'Huggies', file: '/logos/Huggies.png' },
  { name: 'Pull-Ups', file: '/logos/Pull-Ups.png' },
  { name: 'Dunkin\'', file: '/logos/Dunkin.png' },
  { name: 'Heineken Silver', file: '/logos/Heineken_Silver.png' },
  { name: 'Basil Hayden', file: '/logos/Basil_Hayden.png' },
  { name: 'Beef', file: '/logos/Beef.png' },
  { name: 'Samsung', file: '/logos/Samsung.png' },
  { name: 'Sony', file: '/logos/Sony.png' },
  { name: 'Nokia', file: '/logos/Nokia.png' },
  { name: 'United Airlines', file: '/logos/United.png' },
  // Toyota TDA — placeholder, add logo file when ready
  // { name: 'Toyota TDA', file: '/logos/ToyotaTDA.png' },
]

export default function BrandLogos() {
  return (
    <section className="py-20" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: '#E85D04' }}
          >
            25 Years of Brands
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Clients I've shaped.
          </h2>
          <p className="text-neutral-500 mt-3 text-base max-w-xl mx-auto">
            From Leo Burnett to Saatchi & Saatchi — Fortune 500 brands across tobacco, CPG, tech, food, and automotive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-10 items-center justify-items-center"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-center justify-center"
              title={logo.name}
            >
              <img
                src={logo.file}
                alt={logo.name}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                style={{ height: '80px', width: '200px', objectFit: 'contain' }}
              />
            </motion.div>
          ))}

          {/* Toyota TDA placeholder — slot reserved */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: logos.length * 0.04 }}
            className="flex items-center justify-center w-full"
            title="Toyota TDA — coming soon"
          >
            <div style={{ height: '80px', width: '200px' }} className="rounded border border-dashed border-neutral-700 opacity-30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
