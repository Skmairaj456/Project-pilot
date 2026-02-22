import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '10+', label: 'Industries Served' },
  { value: '95%', label: 'Client Satisfaction' },
]

export default function Positioning() {
  const ref = useScrollReveal({ y: 28, duration: 0.8 })
  return (
    <section
      ref={ref}
      id="positioning"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 border-y border-charcoal/[0.06] bg-gradient-section overflow-hidden"
    >
      {/* Giant background section number */}
      <span
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 font-heading font-bold text-charcoal/[0.04] pointer-events-none select-none"
        style={{ fontSize: 'clamp(6rem, 18vw, 12rem)', lineHeight: 0.9, letterSpacing: '-0.05em' }}
        aria-hidden="true"
      >
        01
      </span>

      <div className="relative z-10 max-w-content mx-auto">
        <p className="font-heading text-[15px] sm:text-[16px] md:text-lg font-medium text-charcoal max-w-prose leading-relaxed mb-8 sm:mb-10 md:mb-12">
          We partner with startup founders and growing business owners who want smart websites and automation, not generic templates. One integrated team handles strategy, design, and build—so you get solutions that actually drive results.
        </p>
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
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card-soft flex flex-col px-5 py-4 sm:px-7 sm:py-6 w-full min-w-0 md:min-w-[160px] transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 border-l-4 border-transparent hover:border-champagne"
            >
              <span className="font-heading text-2xl sm:text-3xl md:text-[2rem] font-bold text-charcoal tracking-tight leading-none">
                {value}
              </span>
              <span className="font-sans text-graphite text-[13px] sm:text-[14px] mt-2">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
