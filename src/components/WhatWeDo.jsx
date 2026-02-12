import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

const items = [
  { title: 'ERP & business systems', outcome: 'One platform for workflows, reporting, and operations.' },
  { title: 'Inventory & operations', outcome: 'Stock, orders, and dashboards built for daily use.' },
  { title: 'Web, product & APIs', outcome: 'Sites, apps, and integrations that scale.' },
  { title: 'Strategy & scope', outcome: 'Clear goals and roadmap before we write code.' },
]

const list = { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }
const listItem = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

export default function WhatWeDo() {
  const ref = useScrollReveal({ y: 36, duration: 0.85 })
  return (
    <section
      ref={ref}
      id="what-we-do"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-cream/50 overflow-hidden"
    >
      {/* Section watermark */}
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 font-heading font-bold text-charcoal/[0.04] pointer-events-none select-none"
        style={{ fontSize: 'clamp(5rem, 16vw, 10rem)', lineHeight: 0.9, letterSpacing: '-0.05em' }}
        aria-hidden="true"
      >
        02
      </span>
      <div className="relative z-10 max-w-content mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-8 sm:mb-10 md:mb-12">
          What we <span className="italic font-serif text-champagne">build.</span>
        </h2>

        {/* Bento-style grid: 2 cols on md+, varying heights */}
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
          initial="hidden"
          variants={list}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map(({ title, outcome }, i) => (
            <motion.li
              key={title}
              variants={listItem}
              className={`group relative overflow-hidden rounded-xl card-soft p-6 sm:p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-l-2 border-transparent hover:border-champagne ${
                i === 0 ? 'md:row-span-2 md:flex md:flex-col md:justify-center border-l-champagne/40' : ''
              }`}
            >
              <h3 className="relative font-heading text-lg sm:text-xl font-bold text-charcoal mt-0 mb-2 group-hover:text-graphite transition-colors">
                {title}
              </h3>
              <p className="relative text-graphite text-[14px] sm:text-[15px] leading-relaxed">
                {outcome}
              </p>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mt-8">
          <a href="services.html" className="font-heading text-[13px] font-semibold text-charcoal link-underline inline-block">
            Full services →
          </a>
        </p>
      </div>
    </section>
  )
}
