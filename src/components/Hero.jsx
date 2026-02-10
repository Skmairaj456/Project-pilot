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

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] min-h-[100dvh] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <motion.div
        className="relative z-10 max-w-tight w-full"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="eyebrow text-sand/90 mb-4 sm:mb-5"
          variants={item}
        >
          Digital partners for growing businesses
        </motion.p>
        <motion.h1
          className="font-heading text-display font-bold text-charcoal mb-6 sm:mb-8 tracking-tight"
          variants={item}
        >
          Your business.
          <br />
          One system.
        </motion.h1>
        <motion.p
          className="text-[15px] sm:text-lg md:text-xl text-graphite max-w-prose leading-relaxed mb-10 sm:mb-12"
          variants={item}
        >
          We build ERPs, inventory platforms, and custom software. One team. Clear scope. Software that scales.
        </motion.p>
        <motion.div variants={item}>
          <motion.a
            href="contact.html"
            className="btn-primary inline-block"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a Project
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-4 sm:left-6 md:left-12"
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
