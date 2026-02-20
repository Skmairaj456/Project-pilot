import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

const points = [
  {
    title: 'Studio mindset, not vendor',
    body: 'We think in systems, constraints, and outcomes — and we protect the craft.',
  },
  {
    title: 'Built for scale',
    body: 'The work holds up when teams, volume, and complexity increase.',
  },
  {
    title: 'Clear communication & execution',
    body: 'Simple decisions, tight scope, and visible progress without chaos.',
  },
  {
    title: 'Long-term thinking',
    body: 'We build what can be maintained, extended, and trusted for years.',
  },
]

export default function Positioning() {
  const ref = useScrollReveal({ y: 28, duration: 0.8 })
  return (
    <section
      ref={ref}
      id="why"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-surface border-y border-line overflow-hidden"
    >
      <div className="relative z-10 max-w-content mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-text mb-8 sm:mb-10">
          Why Project Pilot
        </h2>
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 md:flex md:flex-wrap gap-3 sm:gap-4 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {points.map(({ title, body }) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card-soft flex flex-col px-5 py-5 sm:px-7 sm:py-7 w-full min-w-0 md:min-w-[240px]"
            >
              <span className="font-heading text-base sm:text-lg font-bold text-text tracking-tight">
                {title}
              </span>
              <span className="font-sans text-muted text-[13px] sm:text-[14px] mt-2 leading-relaxed">
                {body}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
