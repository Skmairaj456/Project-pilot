import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTA() {
  const ref = useScrollReveal({ y: 24, duration: 0.8 })
  return (
    <section ref={ref} className="relative z-10 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-gradient-cta text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} aria-hidden="true" />
      {/* Section watermark */}
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 font-heading font-bold text-cream/[0.06] pointer-events-none select-none"
        style={{ fontSize: 'clamp(5rem, 16vw, 10rem)', lineHeight: 0.9, letterSpacing: '-0.05em' }}
        aria-hidden="true"
      >
        06
      </span>
      <div className="relative z-10 max-w-content mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-10">
          <div className="min-w-0">
            <h2 className="font-heading text-display-sm font-bold mb-3 leading-[1.1] tracking-tight">
              Ready to streamline
              <br />
              your operations?
            </h2>
            <p className="text-cream/80 text-[15px] sm:text-base md:text-lg max-w-prose leading-relaxed mb-6 lg:mb-0">
              Book a call. We'll discuss your needs and next steps—no pitch, no pressure.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 shrink-0">
            <a
              href="mailto:services@projectpilot.co.in"
              className="font-heading text-[13px] font-semibold text-cream/90 hover:text-cream transition-colors py-2 min-h-[44px] inline-flex items-center"
            >
              services@projectpilot.co.in
            </a>
            <a href="contact.html" className="btn-primary-invert w-full sm:w-auto text-center inline-flex justify-center">
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
