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

import { useInView } from '../hooks/useInView'

export default function SelectedWork() {
  const [ref, inView] = useInView()
  return (
    <section
      ref={ref}
      id="work"
      className={`relative z-10 py-24 md:py-32 px-6 md:px-10 bg-warm/30 transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-14 md:mb-16">
          Selected work.
        </h2>

        <a href={featured.href} className="group block mb-16 md:mb-20">
          <div className="aspect-[2.4/1] md:aspect-[3/1] overflow-hidden bg-charcoal/5">
            <img
              src={featured.image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="mt-6 md:mt-8">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-charcoal group-hover:text-graphite transition-colors">
              {featured.title}
            </h3>
            <p className="text-graphite text-[15px] mt-2 max-w-xl leading-relaxed">
              {featured.outcome}
            </p>
          </div>
        </a>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {more.map(({ title, outcome, image, href }) => (
            <a key={title} href={href} className="group block">
              <div className="aspect-[16/10] overflow-hidden bg-charcoal/5">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-charcoal mt-4 group-hover:text-graphite transition-colors">
                {title}
              </h3>
              <p className="text-graphite text-[14px] mt-1.5 leading-relaxed">
                {outcome}
              </p>
            </a>
          ))}
        </div>

        <p className="mt-12">
          <a href="projects.html" className="font-heading text-sm font-semibold text-charcoal link-underline">
            All projects →
          </a>
        </p>
      </div>
    </section>
  )
}
