import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

const items = [
  { title: 'Custom software platforms', outcome: 'Core products and internal platforms built for daily execution.' },
  { title: 'AI-driven systems', outcome: 'Applied AI that reduces cost, time, and operational noise.' },
  { title: 'ERPs & internal tools', outcome: 'Operations, reporting, and workflows in one coherent system.' },
  { title: 'MVPs for startups', outcome: 'Fast, high-quality builds that support fundraising and growth.' },
]

const list = { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }
const listItem = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

export default function WhatWeDo() {
  const ref = useScrollReveal({ y: 36, duration: 0.85 })
  return (
    <section
      ref={ref}
      id="build"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-surface border-y border-line overflow-hidden"
    >
      <div className="relative z-10 max-w-content mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-text mb-8 sm:mb-10 md:mb-12">
          What we build
        </h2>

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
              className={`group relative overflow-hidden card-soft p-6 sm:p-7 ${i === 0 ? 'md:row-span-2 md:flex md:flex-col md:justify-center' : ''}`}
            >
              <h3 className="relative font-heading text-lg sm:text-xl font-bold text-text mt-0 mb-2">
                {title}
              </h3>
              <p className="relative text-muted text-[14px] sm:text-[15px] leading-relaxed">
                {outcome}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
