import { useScrollReveal } from '../hooks/useScrollReveal'

const featured = {
  title: 'Full ERP for a manufacturing client',
  outcome: 'One system for orders, inventory, production tracking, and reporting. Replaced spreadsheets and multiple tools.',
  metric: '5 tools replaced · One platform',
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
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-5 sm:mb-6 md:mb-8">
          Selected <span className="italic font-serif text-champagne">work.</span>
        </h2>

        {/* Bento: featured large, then 2 in a row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          <a href={featured.href} className="group block lg:col-span-8">
            <div className="relative">
              <div className="overflow-hidden rounded-xl shadow-card bg-charcoal/[0.06] ring-1 ring-charcoal/[0.06] transition-all duration-300 group-hover:shadow-elevated group-hover:ring-champagne/25 group-hover:-translate-y-1">
                <div className="aspect-[16/10] sm:aspect-[2.2/1] overflow-hidden relative">
                  <img
                    src={featured.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                  <span className="absolute bottom-4 left-4 right-4 font-heading text-[13px] font-semibold text-cream tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    View project <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 pl-1">
                <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-champagne mb-1.5">
                  {featured.metric}
                </p>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-charcoal group-hover:text-graphite transition-colors duration-200">
                  {featured.title}
                </h3>
                <p className="text-graphite text-[14px] sm:text-[15px] mt-1.5 max-w-xl leading-relaxed">
                  {featured.outcome}
                </p>
              </div>
            </div>
          </a>

          <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-4">
            {more.map(({ title, outcome, image, href }) => (
              <a key={title} href={href} className="group block">
                <div className="relative h-full flex flex-col rounded-xl overflow-hidden shadow-card bg-white/90 ring-1 ring-charcoal/[0.06] transition-all duration-300 hover:shadow-card-hover hover:ring-champagne/20 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden relative min-h-[120px]">
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <span className="absolute bottom-3 left-3 right-3 font-heading text-[11px] font-semibold text-cream tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View project →
                    </span>
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-heading text-base sm:text-lg font-bold text-charcoal group-hover:text-graphite transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="text-graphite text-[13px] sm:text-[14px] mt-1 leading-relaxed">
                      {outcome}
                    </p>
                  </div>
                </div>
              </a>
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
