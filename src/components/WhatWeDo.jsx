import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

/* Conversion-focused services: outcomes, not just features. Learn More + hover. */
const services = [
  {
    title: 'AI-Powered Website Development',
    description: 'Websites that capture leads and guide visitors to action—faster load times, clear CTAs, and smart structure that converts.',
    href: 'contact.html',
  },
  {
    title: 'Conversion-Focused UI/UX Design',
    description: 'Design that reduces friction and builds trust. Every screen is built to move users toward a goal.',
    href: 'contact.html',
  },
  {
    title: 'Business Automation & AI Integration',
    description: 'Connect your site to CRMs, email, and workflows. Automate follow-ups and qualify leads without extra manual work.',
    href: 'contact.html',
  },
  {
    title: 'Website Performance Optimization',
    description: 'Faster pages, better Core Web Vitals, and a smoother experience so more visitors stay and convert.',
    href: 'contact.html',
  },
]

const list = { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }
const listItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

export default function WhatWeDo() {
  const ref = useScrollReveal({ y: 36, duration: 0.85 })
  return (
    <section
      ref={ref}
      id="what-we-do"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-cream/50 overflow-hidden"
    >
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

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
          initial="hidden"
          variants={list}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map(({ title, description, href }) => (
            <motion.li key={title} variants={listItem}>
              <a
                href={href}
                className="group block h-full rounded-xl card-soft p-6 sm:p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-l-2 border-transparent hover:border-champagne focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne/50 focus-visible:ring-offset-2"
              >
                <h3 className="font-heading text-lg sm:text-xl font-bold text-charcoal mt-0 mb-2 group-hover:text-graphite transition-colors">
                  {title}
                </h3>
                <p className="text-graphite text-[14px] sm:text-[15px] leading-relaxed mb-5">
                  {description}
                </p>
                <span className="font-heading text-[13px] font-semibold text-charcoal link-underline inline-flex items-center gap-1">
                  Learn More <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mt-8">
          <a href="contact.html" className="font-heading text-[13px] font-semibold text-charcoal link-underline inline-block">
            Discuss your project →
          </a>
        </p>
      </div>
    </section>
  )
}
