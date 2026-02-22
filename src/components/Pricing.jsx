import { useScrollReveal } from '../hooks/useScrollReveal'

/* Premium pricing: 3 tiers, Growth highlighted, Book Strategy Call CTA */
const plans = [
  {
    name: 'Starter',
    price: '₹49,999',
    description: 'Conversion-focused website for early-stage businesses.',
    features: [
      'Conversion-focused website',
      'Mobile responsive',
      'Basic SEO setup',
      'Speed optimization',
      '2 weeks support',
    ],
    cta: 'Book Strategy Call',
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹99,999',
    description: 'For teams ready to scale leads and automate follow-up.',
    features: [
      'Everything in Starter',
      'Advanced UI/UX',
      'Lead capture automation',
      'WhatsApp/chat integration',
      'Basic AI feature',
      '1 month support',
    ],
    cta: 'Book Strategy Call',
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹1,99,999+',
    description: 'Custom AI, funnels, and priority delivery.',
    features: [
      'Everything in Growth',
      'Custom AI integration',
      'Funnel optimization',
      'Analytics setup',
      'Priority delivery',
      '3 months support',
    ],
    cta: 'Book Strategy Call',
    popular: false,
  },
]

export default function Pricing() {
  const ref = useScrollReveal({ y: 28, duration: 0.8 })
  return (
    <section
      ref={ref}
      id="pricing"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-platinum overflow-hidden"
    >
      <div className="max-w-content mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-3 sm:mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-graphite text-[15px] sm:text-base max-w-prose mb-10 sm:mb-12">
          Choose a plan that fits your stage. All include a strategy call to align on goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl card-soft p-6 sm:p-7 flex flex-col transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
                plan.popular ? 'ring-2 ring-champagne/60 shadow-soft-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block font-heading text-[11px] font-bold uppercase tracking-wider text-charcoal bg-champagne/90 px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal mt-0 mb-1">
                {plan.name}
              </h3>
              <p className="font-heading text-2xl sm:text-3xl font-bold text-charcoal tracking-tight mb-3">
                {plan.price}
              </p>
              <p className="text-graphite text-[14px] sm:text-[15px] leading-relaxed mb-6">
                {plan.description}
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-graphite text-[14px] sm:text-[15px]">
                    <span className="text-champagne mt-0.5 shrink-0" aria-hidden>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="contact.html"
                className={`block w-full text-center font-heading text-[13px] font-semibold tracking-wide py-3.5 rounded-md transition-all duration-300 min-h-[48px] flex items-center justify-center ${
                  plan.popular
                    ? 'btn-primary'
                    : 'bg-charcoal/5 text-charcoal border border-charcoal/15 hover:bg-charcoal/10 hover:border-champagne/40'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
