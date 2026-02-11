import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

const items = [
  { title: 'ERP & business systems', outcome: 'One platform for workflows, reporting, and operations.', num: '01' },
  { title: 'Inventory & operations', outcome: 'Stock, orders, and dashboards built for daily use.', num: '02' },
  { title: 'Web, product & APIs', outcome: 'Sites, apps, and integrations that scale.', num: '03' },
  { title: 'Strategy & scope', outcome: 'Clear goals and roadmap before we write code.', num: '04' },
]

const list = { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }
const listItem = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

export default function WhatWeDo() {
  const ref = useScrollReveal({ y: 36, duration: 0.85 })
  return (
    <section
      ref={ref}
      id="what-we-do"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-platinum overflow-hidden"
    >
      <div className="max-w-content mx-auto">
        <p className="eyebrow mb-2">02 — What we do</p>
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
          {items.map(({ title, outcome, num }, i) => (
            <motion.li
              key={title}
              variants={listItem}
              className={`group relative overflow-hidden rounded-xl card-soft p-6 sm:p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 ${
                i === 0 ? 'md:row-span-2 md:flex md:flex-col md:justify-center' : ''
              }`}
            >
              {/* Big background number */}
              <span
                className="absolute -right-2 -top-2 font-heading font-bold text-charcoal/[0.06] select-none pointer-events-none"
                style={{ fontSize: '4.5rem', lineHeight: 1 }}
              >
                {num}
              </span>
              <span className="relative font-heading text-[11px] font-bold text-champagne tracking-[0.2em]">
                {num}
              </span>
              <h3 className="relative font-heading text-lg sm:text-xl font-bold text-charcoal mt-2 mb-2 group-hover:text-graphite transition-colors">
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
