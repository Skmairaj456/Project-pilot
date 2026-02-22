import { motion } from 'framer-motion'

/* Hero: strong hierarchy, warm depth, premium feel */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-[100vh] min-h-[100dvh] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-28 sm:pt-32 pb-20 sm:pb-24 overflow-hidden bg-gradient-hero"
      aria-labelledby="hero-heading"
    >
      {/* Background: grid + warm blob + grain for depth */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-blob" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <div className="relative z-10 max-w-content w-full mx-auto">
        <motion.div
          className="max-w-[38rem]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="mb-5 sm:mb-6">
            <p className="eyebrow">Smart websites &amp; automation for growing brands</p>
            <span className="mt-3 block w-14 h-0.5 rounded-full bg-gradient-to-r from-champagne to-transparent" aria-hidden="true" />
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="font-heading font-bold text-charcoal tracking-tight mb-6 sm:mb-8"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
            variants={item}
          >
            <span className="block">We Build Smart Websites &amp;</span>
            <span className="block font-serif italic font-normal text-champagne mt-1 sm:mt-2">
              Automation That Grow Your Business
            </span>
          </motion.h1>

          <motion.p
            className="font-sans text-base sm:text-lg text-graphite max-w-prose leading-relaxed mb-9 sm:mb-11"
            variants={item}
          >
            Web solutions with built-in automation and smart features to convert visitors, automate workflows, and save you time.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#case-studies" className="font-heading text-[13px] font-semibold text-charcoal link-underline py-2">
              View Case Studies
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-4 sm:left-6 md:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <a href="#what-we-do" className="flex flex-col items-center gap-1.5 text-graphite/50 hover:text-charcoal transition-colors duration-300 p-2 min-h-[44px] justify-end" aria-label="Scroll to services">
          <span className="text-[10px] font-heading uppercase tracking-[0.2em]">Scroll</span>
          <motion.span className="block w-px h-10 bg-current origin-top" animate={{ scaleY: [0.3, 1] }} transition={{ delay: 1.1, duration: 0.6 }} />
        </a>
      </motion.div>
    </section>
  )
}
