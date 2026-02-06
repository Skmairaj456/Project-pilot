const testimonial = {
  quote: "They built our entire operations system—inventory, orders, reporting. One platform. We should have done it earlier.",
  author: "Operations Director",
  context: "Manufacturing",
}

import { useInView } from '../hooks/useInView'

export default function TrustSignals() {
  const [ref, inView] = useInView()
  return (
    <section
      ref={ref}
      className={`relative z-10 py-24 md:py-32 px-6 md:px-10 bg-cream/60 border-y border-charcoal/[0.06] transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <blockquote className="max-w-2xl">
          <p className="font-serif text-2xl md:text-[1.65rem] text-charcoal leading-snug">
            "{testimonial.quote}"
          </p>
          <footer className="mt-8 flex items-baseline gap-2 text-graphite text-[14px]">
            <span className="font-heading font-semibold text-charcoal">{testimonial.author}</span>
            <span>·</span>
            <span>{testimonial.context}</span>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
