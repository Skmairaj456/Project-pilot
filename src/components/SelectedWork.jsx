import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

const featured = {
  title: 'Full ERP for a manufacturing client',
  outcome: 'One system for orders, inventory, production tracking, and reporting. Replaced spreadsheets and multiple tools.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85',
  href: 'projects.html',
}

const more = [
  { title: 'Inventory & operations platform', outcome: 'Real-time stock, orders, and dashboards.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=82', href: 'projects.html' },
  { title: 'Enterprise SaaS & collaboration', outcome: 'Project and team tools with real-time sync.', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=82', href: 'projects.html' },
]

export default function SelectedWork() {
  const ref = useScrollReveal({ y: 36, duration: 0.85 })
  return (
    <section
      ref={ref}
      id="work"
      className="relative z-10 py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 bg-warm/25"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="eyebrow mb-4">Work</p>
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-12 sm:mb-16 md:mb-20">
          Selected work.
        </h2>

        <motion.a
          href={featured.href}
          className="group block mb-12 sm:mb-16 md:mb-20"
          initial={false}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <div className="aspect-[16/10] sm:aspect-[2.4/1] md:aspect-[3/1] overflow-hidden bg-charcoal/[0.04] rounded-sm">
            <img
              src={featured.image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <div className="mt-5 sm:mt-6 md:mt-8">
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-charcoal group-hover:text-graphite transition-colors duration-200">
              {featured.title}
            </h3>
            <p className="text-graphite text-[14px] sm:text-[15px] mt-2 max-w-xl leading-relaxed">
              {featured.outcome}
            </p>
          </div>
        </motion.a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {more.map(({ title, outcome, image, href }) => (
            <motion.a
              key={title}
              href={href}
              className="group block"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-charcoal/[0.04] rounded-sm">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-charcoal mt-4 group-hover:text-graphite transition-colors duration-200">
                {title}
              </h3>
              <p className="text-graphite text-[13px] sm:text-[14px] mt-1.5 leading-relaxed">
                {outcome}
              </p>
            </motion.a>
          ))}
        </div>

        <p className="mt-14">
          <a href="projects.html" className="font-heading text-[13px] font-semibold text-charcoal link-underline inline-block">
            All projects →
          </a>
        </p>
      </div>
    </section>
  )
}
