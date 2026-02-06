const items = [
  { title: 'ERP & business systems', outcome: 'One platform for workflows, reporting, and operations.' },
  { title: 'Inventory & operations', outcome: 'Stock, orders, and dashboards built for daily use.' },
  { title: 'Web, product & APIs', outcome: 'Sites, apps, and integrations that scale.' },
  { title: 'Strategy & scope', outcome: 'Clear goals and roadmap before we write code.' },
]

import { useInView } from '../hooks/useInView'

export default function WhatWeDo() {
  const [ref, inView] = useInView()
  return (
    <section
      ref={ref}
      id="what-we-do"
      className={`relative z-10 py-24 md:py-32 px-6 md:px-10 transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-14 md:mb-16">
          What we build.
        </h2>
        <ul className="space-y-0">
          {items.map(({ title, outcome }, i) => (
            <li key={title} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 md:py-7 border-b border-charcoal/[0.08] first:pt-0">
              <span className="font-heading text-[13px] font-semibold text-charcoal md:w-[220px] shrink-0">
                {title}
              </span>
              <span className="text-graphite text-[15px] leading-relaxed md:max-w-md">
                {outcome}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <a href="services.html" className="font-heading text-sm font-semibold text-charcoal link-underline">
            Full services →
          </a>
        </p>
      </div>
    </section>
  )
}
