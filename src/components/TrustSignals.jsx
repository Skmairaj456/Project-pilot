import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

/* Trust section: testimonial slider (3), stats bar, optional client logo strip */
const testimonials = [
  {
    quote: 'Project Pilot built our site and set up lead capture. We went from scattered inquiries to a clear pipeline in weeks.',
    author: 'Founder',
    context: 'SaaS startup',
  },
  {
    quote: 'They understood our audience and made the site convert. Sign-ups and demo requests both went up noticeably.',
    author: 'Marketing Lead',
    context: 'B2B services',
  },
  {
    quote: 'Fast, professional, and focused on results. Our mobile experience and checkout flow are finally where they should be.',
    author: 'Operations',
    context: 'E-commerce',
  },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Industries Served' },
]

/* Client names — mix of startups and mid-range Indian companies */
const clientStrip = ['AbhiBus', 'Britannia', 'EventHub', 'Delhivery', 'Urban Company']

export default function TrustSignals() {
  const ref = useScrollReveal({ y: 28, duration: 0.8 })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      ref={ref}
      id="trust"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-warm/30 border-y border-charcoal/[0.06] overflow-hidden"
    >
      <div className="max-w-content mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-8 sm:mb-10 md:mb-12">
          What clients <span className="italic font-serif text-champagne">say.</span>
        </h2>

        {/* Stats bar — clean, credible */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-14">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal tracking-tight">
                {value}
              </p>
              <p className="font-sans text-graphite text-[12px] sm:text-[13px] mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial slider — 3 placeholders, minimal */}
        <div className="relative max-w-2xl min-h-[140px] sm:min-h-[160px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`transition-opacity duration-400 ${i === activeIndex ? 'opacity-100 relative' : 'absolute inset-0 opacity-0 pointer-events-none'}`}
              aria-hidden={i !== activeIndex}
            >
              <blockquote className="pl-6 sm:pl-8 border-l-4 border-champagne py-4">
                <p className="font-serif text-lg sm:text-xl text-charcoal leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 flex flex-wrap items-baseline gap-2 text-graphite text-[14px]">
                  <span className="font-heading font-semibold text-charcoal">{t.author}</span>
                  <span className="text-charcoal/30">·</span>
                  <span>{t.context}</span>
                </footer>
              </blockquote>
            </div>
          ))}
          <div className="flex gap-2 mt-6" role="tablist" aria-label="Testimonials">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-label={`View testimonial ${i + 1}`}
                aria-selected={i === activeIndex}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 sm:w-2 sm:h-2 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center rounded-full transition-colors duration-200 ${
                  i === activeIndex ? 'bg-champagne' : 'bg-charcoal/20 hover:bg-charcoal/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Optional client logo strip — placeholders */}
        <div className="mt-12 sm:mt-14 pt-10 border-t border-charcoal/[0.08]">
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/50 text-center mb-6">
            Trusted by growing teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 sm:gap-x-12">
            {clientStrip.map((name) => (
              <span
                key={name}
                className="font-heading text-sm sm:text-base font-medium text-charcoal/60"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-10">
          <a href="contact.html" className="font-heading text-[13px] font-semibold text-charcoal link-underline inline-block">
            Let&apos;s connect →
          </a>
        </p>
      </div>
    </section>
  )
}
