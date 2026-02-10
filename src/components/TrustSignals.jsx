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
      className="relative z-10 py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 bg-cream/50 border-y border-charcoal/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="eyebrow mb-6">What clients say</p>
        <blockquote className="max-w-prose">
          <p className="font-serif text-xl sm:text-2xl md:text-[1.6rem] text-charcoal leading-snug tracking-tight">
            "{testimonial.quote}"
          </p>
          <footer className="mt-10 flex items-baseline gap-2.5 text-graphite text-[13px]">
            <span className="font-heading font-semibold text-charcoal tracking-tight">{testimonial.author}</span>
            <span className="text-charcoal/30">·</span>
            <span>{testimonial.context}</span>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
