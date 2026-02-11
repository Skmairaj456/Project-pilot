import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonial = {
  quote: "They built our entire operations system—inventory, orders, reporting. One platform. We should have done it earlier.",
  author: "Operations Director",
  context: "Manufacturing",
}

export default function TrustSignals() {
  const ref = useScrollReveal({ y: 28, duration: 0.8 })
  return (
    <section
      ref={ref}
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-warm/30 border-y border-charcoal/[0.06] overflow-hidden"
    >
      {/* Giant decorative quote mark */}
      <span
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 font-serif text-charcoal/[0.06] pointer-events-none select-none"
        style={{ fontSize: 'clamp(8rem, 22vw, 14rem)', lineHeight: 0.9 }}
        aria-hidden="true"
      >
        "
      </span>

      <div className="relative z-10 max-w-content mx-auto">
        <p className="eyebrow mb-2">05 — What clients say</p>
        <blockquote className="relative max-w-prose pl-6 sm:pl-8 md:pl-12 py-6 sm:py-8 border-l-4 border-champagne">
          <p className="font-serif text-xl sm:text-2xl md:text-[1.6rem] text-charcoal leading-snug tracking-tight">
            {testimonial.quote}
          </p>
          <footer className="mt-6 flex flex-wrap items-baseline gap-2.5 text-graphite text-[13px]">
            <span className="font-heading font-semibold text-charcoal tracking-tight">{testimonial.author}</span>
            <span className="text-charcoal/30">·</span>
            <span>{testimonial.context}</span>
          </footer>
        </blockquote>
        <p className="mt-8">
          <a href="contact.html" className="font-heading text-[13px] font-semibold text-charcoal link-underline inline-block">
            Let's connect →
          </a>
        </p>
      </div>
    </section>
  )
}
