import { motion } from 'framer-motion'

/* Conversion-focused hero: AI-powered positioning, clear CTAs */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] min-h-[92dvh] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden bg-gradient-hero-tech"
      aria-labelledby="hero-heading"
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <div className="relative z-10 max-w-content w-full mx-auto">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={item} className="eyebrow mb-4 sm:mb-5">
            AI-powered websites &amp; automation for growing businesses
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="font-heading text-display font-bold text-charcoal mb-5 sm:mb-6 tracking-tight"
            variants={item}
          >
            We Build AI-Powered Websites That Turn Visitors Into Customers
          </motion.h1>
          <motion.p
            className="font-sans text-[15px] sm:text-lg text-graphite max-w-prose leading-relaxed mb-8 sm:mb-10"
            variants={item}
          >
            Helping startups and growing businesses automate, scale, and convert better with smart web and AI solutions.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="contact.html" className="btn-primary">
              Get a Free Strategy Call
            </a>
            <a href="#case-studies" className="font-heading text-[13px] font-semibold text-charcoal link-underline">
              View Case Studies
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 md:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <a href="#what-we-do" className="flex flex-col items-center gap-1 text-graphite/50 hover:text-charcoal transition-colors duration-300 p-2 min-h-[44px] justify-end" aria-label="Scroll to services">
          <span className="text-[10px] font-heading uppercase tracking-[0.2em]">Scroll</span>
          <motion.span className="block w-px h-8 sm:h-10 bg-current origin-top" animate={{ scaleY: [0.4, 1] }} transition={{ delay: 1, duration: 0.5 }} />
        </a>
      </motion.div>
    </section>
  )
}
