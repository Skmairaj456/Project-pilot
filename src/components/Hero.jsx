import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const tags = ['ERPs', 'Inventory', 'APIs', 'One team']

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] min-h-[100dvh] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden bg-gradient-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-blob" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      {/* Section watermark — 01 */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[15%] sm:translate-x-[10%] md:translate-x-[5%] pointer-events-none select-none hidden sm:block"
        aria-hidden="true"
      >
        <span
          className="font-heading font-bold text-transparent opacity-[0.12]"
          style={{
            fontSize: 'clamp(8rem, 25vw, 18rem)',
            lineHeight: 0.85,
            letterSpacing: '-0.06em',
            WebkitTextStroke: '2px rgba(26, 26, 26, 0.25)',
            paintOrder: 'stroke fill',
          }}
        >
          01
        </span>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 max-w-content w-full mx-auto">
        <motion.div
          className="max-w-tight w-full"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="mb-4 sm:mb-5">
            <p className="eyebrow">Digital partners for growing businesses</p>
            <span className="mt-3 block w-12 h-0.5 rounded-full bg-gradient-to-r from-champagne to-transparent" aria-hidden="true" />
          </motion.div>
          <motion.h1
            className="font-heading text-display font-bold text-charcoal mb-5 sm:mb-6 tracking-tight"
            variants={item}
          >
            <span className="block">Your business.</span>
            <span className="block font-serif italic font-normal text-gradient-hero">
              One system.
            </span>
          </motion.h1>
          <motion.p
            className="font-sans text-[15px] sm:text-lg text-graphite max-w-prose leading-relaxed mb-8 sm:mb-10"
            variants={item}
          >
            We build ERPs, inventory platforms, and custom software. One team. Clear scope. Software that scales.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="contact.html" className="btn-primary">
              Start a Project
            </a>
            <a href="#work" className="font-heading text-[13px] font-semibold text-charcoal link-underline">
              View our work
            </a>
          </motion.div>
        </motion.div>

        {/* Floating tags — creative accent */}
        <motion.div
          className="hidden lg:flex flex-col gap-3 shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {tags.map((label, i) => (
            <motion.span
              key={label}
              className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/60 border border-charcoal/12 hover:border-champagne/50 hover:text-charcoal/80 px-4 py-2.5 rounded-full w-fit transition-colors duration-300"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 md:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a href="#positioning" className="flex flex-col items-center gap-1 text-graphite/50 hover:text-charcoal transition-colors duration-300 p-2 min-h-[44px] justify-end" aria-label="Scroll down">
          <span className="text-[10px] font-heading uppercase tracking-[0.2em]">Scroll</span>
          <motion.span className="block w-px h-8 sm:h-10 bg-current origin-top" animate={{ scaleY: [0.4, 1] }} transition={{ delay: 1.2, duration: 0.5 }} />
        </a>
      </motion.div>
    </section>
  )
}
