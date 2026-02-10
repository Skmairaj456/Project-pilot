import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Discover', body: 'We align on goals, constraints, and scope. No build on assumption.' },
  { title: 'Design', body: 'Structure and flows. We iterate with you until it fits.' },
  { title: 'Build', body: 'Clean code, phased delivery. You see progress early.' },
  { title: 'Launch', body: 'Go live. We stay for iterations and scale.' },
]

const container = { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

export default function HowWeWork() {
  const ref = useScrollReveal({ y: 36, duration: 0.85 })
  return (
    <section
      ref={ref}
      id="process"
      className="relative z-10 py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="eyebrow mb-4">Process</p>
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-12 sm:mb-16 md:mb-20">
          How we work.
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8"
          initial="hidden"
          variants={container}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {steps.map(({ title, body }, i) => (
            <motion.div key={title} variants={item} className="group">
              <span className="font-heading text-[11px] font-bold text-sand/90 tracking-[0.2em]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-lg font-bold text-charcoal mt-3 mb-2 group-hover:text-graphite transition-colors duration-200">
                {title}
              </h3>
              <p className="text-graphite text-[14px] leading-[1.65]">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
