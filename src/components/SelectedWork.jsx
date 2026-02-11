import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

const featured = {
  title: 'Full ERP for a manufacturing client',
  outcome: 'One system for orders, inventory, production tracking, and reporting. Replaced spreadsheets and multiple tools.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85',
  href: 'projects.html',
  caseNum: '01',
}

const more = [
  { title: 'Inventory & operations platform', outcome: 'Real-time stock, orders, and dashboards.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=82', href: 'projects.html', caseNum: '02' },
  { title: 'Enterprise SaaS & collaboration', outcome: 'Project and team tools with real-time sync.', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=82', href: 'projects.html', caseNum: '03' },
]

export default function SelectedWork() {
  const ref = useScrollReveal({ y: 36, duration: 0.85 })
  return (
    <section
      ref={ref}
      id="work"
      className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-gradient-section overflow-hidden"
    >
      {/* Section watermark */}
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 font-heading font-bold text-charcoal/[0.04] pointer-events-none select-none"
        style={{ fontSize: 'clamp(5rem, 16vw, 10rem)', lineHeight: 0.9 }}
        aria-hidden="true"
      >
        03
      </span>

      <div className="relative z-10 max-w-content mx-auto">
        <p className="eyebrow mb-2">03 — Work</p>
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-5 sm:mb-6 md:mb-8">
          Selected <span className="italic font-serif text-champagne">work.</span>
        </h2>

        {/* Bento: featured large, then 2 in a row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          <motion.a
            href={featured.href}
            className="group block lg:col-span-8"
            initial={false}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <div className="relative">
              <span className="absolute -top-3 -left-1 z-10 font-heading text-[10px] font-bold text-champagne tracking-[0.3em] bg-platinum/95 px-3 py-1.5 rounded">
                CASE {featured.caseNum}
              </span>
              <div className="overflow-hidden rounded-xl shadow-card-hover bg-charcoal/[0.06] ring-1 ring-charcoal/[0.06] transition-all duration-300 group-hover:shadow-elevated group-hover:ring-champagne/30">
                <div className="aspect-[16/10] sm:aspect-[2.2/1] overflow-hidden relative">
                  <img
                    src={featured.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
              <div className="mt-3 sm:mt-4 pl-1">
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-charcoal group-hover:text-graphite transition-colors duration-200">
                  {featured.title}
                </h3>
                <p className="text-graphite text-[14px] sm:text-[15px] mt-1.5 max-w-xl leading-relaxed">
                  {featured.outcome}
                </p>
              </div>
            </div>
          </motion.a>

          <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-4">
            {more.map(({ title, outcome, image, href, caseNum }) => (
              <motion.a
                key={title}
                href={href}
                className="group block"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative h-full flex flex-col rounded-xl overflow-hidden shadow-card bg-white/90 ring-1 ring-charcoal/[0.06] transition-all duration-300 hover:shadow-card-hover hover:ring-champagne/20">
                  <span className="absolute top-3 left-3 z-10 font-heading text-[9px] font-bold text-champagne tracking-[0.25em] bg-white/90 px-2 py-1 rounded">
                    CASE {caseNum}
                  </span>
                  <div className="aspect-[4/3] overflow-hidden relative min-h-[120px]">
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-heading text-base sm:text-lg font-bold text-charcoal group-hover:text-graphite transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="text-graphite text-[13px] sm:text-[14px] mt-1 leading-relaxed line-clamp-2">
                      {outcome}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <p className="mt-6">
          <a href="projects.html" className="font-heading text-[13px] font-semibold text-charcoal link-underline inline-block">
            All projects →
          </a>
        </p>
      </div>
    </section>
  )
}
