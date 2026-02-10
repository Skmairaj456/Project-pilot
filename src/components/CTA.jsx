import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

export default function CTA() {
  const ref = useScrollReveal({ y: 24, duration: 0.8 })
  return (
    <section ref={ref} className="relative z-10 py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-charcoal text-cream">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10 sm:gap-12">
        <div className="min-w-0">
          <p className="text-cream/60 text-[11px] font-heading uppercase tracking-[0.2em] mb-4">Get in touch</p>
          <h2 className="font-heading text-display-sm font-bold mb-4 leading-tight tracking-tight">
            Ready to streamline your operations?
          </h2>
          <p className="text-cream/75 text-[15px] sm:text-base md:text-lg max-w-md leading-relaxed">
            Book a call. We'll discuss your needs and next steps—no pitch, no pressure.
          </p>
        </div>
        <motion.a
          href="contact.html"
          className="btn-primary-invert shrink-0 w-full sm:w-auto text-center inline-flex justify-center"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Book a call
        </motion.a>
      </div>
    </section>
  )
}
