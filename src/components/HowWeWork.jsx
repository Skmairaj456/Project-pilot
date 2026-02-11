import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Discover', body: 'We align on goals, constraints, and scope. No build on assumption.' },
  { title: 'Design', body: 'Structure and flows. We iterate with you until it fits.' },
  { title: 'Build', body: 'Clean code, phased delivery. You see progress early.' },
  { title: 'Launch', body: 'Go live. We stay for iterations and scale.' },
]

const container = { visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

export default function HowWeWork() {
  const ref = useScrollReveal({ y: 36, duration: 0.85 })
  return (
    <section
      ref={ref}
      id="process"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-platinum overflow-hidden"
    >
      <div className="max-w-content mx-auto relative">
        <p className="eyebrow mb-2">04 — Process</p>
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-8 sm:mb-10 md:mb-12">
          How we <span className="italic font-serif text-champagne">work.</span>
        </h2>

        {/* Timeline: vertical line + nodes */}
        <div className="relative pl-8 sm:pl-10 md:pl-12">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] sm:left-[13px] md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-champagne/60 via-champagne/40 to-transparent"
            aria-hidden="true"
          />

          <motion.div
            className="space-y-0"
            initial="hidden"
            variants={container}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {steps.map(({ title, body }, i) => (
              <motion.div
                key={title}
                variants={item}
                className="relative flex gap-4 sm:gap-6 py-6 sm:py-8 first:pt-0 last:pb-0 border-b border-charcoal/[0.06] last:border-0"
              >
                {/* Node circle */}
                <div className="absolute left-[-29px] sm:left-[-31px] md:left-[-34px] top-8 w-6 h-6 rounded-full bg-platinum ring-4 ring-champagne/70 flex items-center justify-center shrink-0">
                  <span className="font-heading text-[9px] font-bold text-charcoal">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex-1 min-w-0 pt-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal mb-2 group-hover:text-graphite transition-colors">
                    {title}
                  </h3>
                  <p className="text-graphite text-[14px] sm:text-[15px] leading-[1.65] max-w-prose">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
