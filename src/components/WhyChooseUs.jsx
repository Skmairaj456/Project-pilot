import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

/* Why Choose Us: differentiators focused on outcomes and reliability */
const differentiators = [
  {
    title: 'Built for Conversion & Growth',
    description: 'Every design decision is made to increase sign-ups, sales, and customer engagement. We focus on results, not just aesthetics.',
  },
  {
    title: 'Smart Automation That Saves Hours',
    description: 'Automate repetitive workflows, lead qualification, and follow-ups so your team can focus on what matters.',
  },
  {
    title: 'Professional UX That Increases Engagement',
    description: 'User experiences designed for clarity and trust. Your visitors will understand your value immediately.',
  },
  {
    title: 'Reliable Support & Results-Oriented Delivery',
    description: 'Dedicated partnerships with clear metrics. We stay accountable to your growth and business outcomes.',
  },
]

const list = { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }
const listItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

export default function WhyChooseUs() {
  const ref = useScrollReveal({ y: 36, duration: 0.85 })
  return (
    <section
      ref={ref}
      id="why-choose-us"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-platinum/50 overflow-hidden"
    >
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 font-heading font-bold text-charcoal/[0.04] pointer-events-none select-none"
        style={{ fontSize: 'clamp(5rem, 16vw, 10rem)', lineHeight: 0.9, letterSpacing: '-0.05em' }}
        aria-hidden="true"
      >
        03
      </span>
      <div className="relative z-10 max-w-content mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-8 sm:mb-10 md:mb-12">
          Why Clients <span className="italic font-serif text-champagne">Choose Us</span>
        </h2>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          initial="hidden"
          variants={list}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {differentiators.map(({ title, description }) => (
            <motion.li key={title} variants={listItem}>
              <div className="rounded-xl card-soft p-6 sm:p-7 h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-l-2 border-transparent hover:border-champagne">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-charcoal mt-0 mb-3 flex items-start gap-2">
                  <span className="text-champagne text-2xl leading-none mt-0.5 flex-shrink-0">✔</span>
                  <span>{title}</span>
                </h3>
                <p className="text-graphite text-[14px] sm:text-[15px] leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
