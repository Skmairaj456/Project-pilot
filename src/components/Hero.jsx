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

const pills = ['ERPs', 'Inventory', 'APIs', 'One team']

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] min-h-[100dvh] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden bg-gradient-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-blob" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      {/* Giant outline number — right side */}
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
            <span className="mt-3 block w-12 h-0.5 bg-champagne/80 rounded-full" aria-hidden="true" />
          </motion.div>
          <motion.h1
            className="font-heading text-display font-bold text-charcoal mb-5 sm:mb-6 tracking-tight"
            variants={item}
          >
            <span className="block">Your business.</span>
            <span className="block text-gradient-hero">
              One system.
            </span>
          </motion.h1>
          <motion.p
            className="font-serif text-[15px] sm:text-lg md:text-xl text-graphite max-w-prose leading-relaxed mb-8 sm:mb-10"
            variants={item}
          >
            We build ERPs, inventory platforms, and custom software. One team. Clear scope. Software that scales.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 sm:gap-6">
            <motion.a
              href="contact.html"
              className="btn-primary inline-block"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
            </motion.a>
            <motion.a
              href="#work"
              className="font-heading text-[13px] font-semibold text-charcoal link-underline"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              View our work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating pill strip */}
        <motion.div
          className="hidden lg:flex flex-col gap-3 shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {pills.map((label, i) => (
            <motion.span
              key={label}
              className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-charcoal/50 border border-charcoal/15 px-4 py-2 rounded-full w-fit animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
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
        <a href="#positioning" className="flex flex-col items-center gap-1 text-graphite/40 hover:text-charcoal transition-colors duration-300 p-2 min-h-[44px] justify-end" aria-label="Scroll down">
          <span className="text-[10px] font-heading uppercase tracking-[0.2em]">Scroll</span>
          <span className="block w-px h-8 sm:h-10 bg-current" />
        </a>
      </motion.div>
    </section>
  )
}
