import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

const items = [
  { title: 'ERP & business systems', outcome: 'One platform for workflows, reporting, and operations.' },
  { title: 'Inventory & operations', outcome: 'Stock, orders, and dashboards built for daily use.' },
  { title: 'Web, product & APIs', outcome: 'Sites, apps, and integrations that scale.' },
  { title: 'Strategy & scope', outcome: 'Clear goals and roadmap before we write code.' },
]

const list = { visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }
const listItem = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

export default function WhatWeDo() {
  const ref = useScrollReveal({ y: 36, duration: 0.85 })
  return (
    <section
      ref={ref}
      id="what-we-do"
      className="relative z-10 py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-content mx-auto">
        <p className="eyebrow mb-4">What we do</p>
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-12 sm:mb-16 md:mb-20">
          What we build.
        </h2>
        <motion.ul
          className="space-y-0"
          initial="hidden"
          variants={list}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map(({ title, outcome }) => (
            <motion.li
              key={title}
              variants={listItem}
              className="flex flex-col md:flex-row md:items-baseline gap-1.5 sm:gap-2 md:gap-10 py-6 sm:py-7 md:py-8 border-b border-charcoal/[0.07] first:pt-0"
            >
              <span className="font-heading text-[13px] font-semibold text-charcoal md:w-[240px] shrink-0 tracking-tight">
                {title}
              </span>
              <span className="text-graphite text-[14px] sm:text-[15px] leading-relaxed md:max-w-md pb-1">
                {outcome}
              </span>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mt-12">
          <a href="services.html" className="font-heading text-[13px] font-semibold text-charcoal link-underline inline-block">
            Full services →
          </a>
        </p>
      </div>
    </section>
  )
}
