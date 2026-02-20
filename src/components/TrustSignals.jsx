import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "They built our entire operations system—inventory, orders, reporting. One platform. We should have done it earlier.",
    author: "Operations Director",
    context: "Manufacturing",
  },
  {
    quote: "Project Pilot took our messy spreadsheets and turned them into a single system we actually use every day. Clear, fast, and no more duplicate data.",
    author: "Head of Supply Chain",
    context: "Distribution",
  },
  {
    quote: "We needed custom reporting and workflows—they delivered on time and the team was easy to work with. Would recommend.",
    author: "CFO",
    context: "Logistics",
  },
  {
    quote: "From discovery to launch, the process was transparent. We got a scalable ERP that fits how we work, not the other way around.",
    author: "COO",
    context: "Manufacturing",
  },
  {
    quote: "Finally, one place for orders, stock, and production. Support after go-live has been solid too.",
    author: "Operations Manager",
    context: "FMCG",
  },
]

const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

export default function TrustSignals() {
  const ref = useScrollReveal({ y: 28, duration: 0.8 })
  const featured = testimonials[0]
  const marqueeItems = [...testimonials, ...testimonials]

  return (
    <section
      ref={ref}
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-warm/30 border-y border-charcoal/[0.06] overflow-hidden"
    >
      {/* Section watermark */}
      <span
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 font-heading font-bold text-charcoal/[0.04] pointer-events-none select-none"
        style={{ fontSize: 'clamp(6rem, 18vw, 12rem)', lineHeight: 0.9, letterSpacing: '-0.05em' }}
        aria-hidden="true"
      >
        05
      </span>

      <div className="relative z-10 max-w-content mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-8 sm:mb-10 md:mb-12">
          What clients <span className="italic font-serif text-champagne">say.</span>
        </h2>

        {/* Featured quote — big and bold */}
        <motion.blockquote
          className="relative max-w-3xl pl-8 sm:pl-10 pr-4 py-8 sm:py-10 border-l-4 border-champagne bg-white/40 rounded-r-xl backdrop-blur-sm mb-12 sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={item}
        >
          <span className="absolute left-6 top-6 font-serif text-6xl sm:text-7xl text-champagne/50 leading-none select-none" aria-hidden="true">"</span>
          <p className="font-serif text-xl sm:text-2xl md:text-[1.75rem] text-charcoal leading-snug tracking-tight relative">
            {featured.quote}
          </p>
          <footer className="mt-6 flex flex-wrap items-baseline gap-2 text-graphite text-[14px]">
            <span className="font-heading font-semibold text-charcoal">{featured.author}</span>
            <span className="text-charcoal/30">·</span>
            <span>{featured.context}</span>
          </footer>
        </motion.blockquote>

        {/* Scrolling marquee — more reviews */}
        <div className="overflow-hidden" aria-hidden="true">
          <div className="flex w-max animate-marquee gap-6 pb-2">
            {marqueeItems.map(({ quote, author, context }, i) => (
              <div
                key={`${author}-${i}`}
                className="w-[320px] sm:w-[400px] shrink-0 pl-6 border-l-2 border-champagne/60 py-4 bg-white/25 rounded-r-lg min-w-0"
              >
                <p className="font-sans text-[15px] text-charcoal leading-relaxed">
                  {quote}
                </p>
                <p className="mt-3 font-heading text-[12px] font-semibold text-charcoal/80">
                  {author} <span className="text-charcoal/40 font-normal">— {context}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10">
          <a href="contact.html" className="font-heading text-[13px] font-semibold text-charcoal link-underline inline-block">
            Let's connect →
          </a>
        </p>
      </div>
    </section>
  )
}
