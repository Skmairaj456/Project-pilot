import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'How long does a project typically take?',
    a: 'Timeline depends on scope. Most website projects take 4–8 weeks from discovery to launch. Automation and AI integrations may add 2–4 additional weeks. We work in phases so you see results early and can launch before everything is 100% done.',
  },
  {
    q: 'What\'s your process?',
    a: 'Discovery → Design → Build → Launch. We start with strategy calls to understand your business goals, design the solution, build it clean, and support you post-launch. Regular updates keep you in the loop.',
  },
  {
    q: 'Will this actually increase conversions?',
    a: 'Yes, but results depend on your traffic and current setup. We\'ll audit your current site during discovery, identify friction points, and set clear metrics before we build. Our goal is measurable ROI.',
  },
  {
    q: 'Do you handle ongoing maintenance?',
    a: 'Our plans include support for 2 weeks to 3 months depending on tier. For ongoing needs beyond that, we offer retainer support packages. Most clients stay with us for updates and optimization.',
  },
  {
    q: 'Can you integrate with tools we already use?',
    a: 'Absolutely. CRM, email, chat, analytics, payment processors—we integrate with what you\'re using. If something\'s not compatible, we\'ll recommend alternatives during discovery.',
  },
]

export default function FAQ() {
  const ref = useScrollReveal({ y: 24, duration: 0.7 })
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section
      ref={ref}
      id="faq"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-platinum overflow-hidden"
    >
      <div className="max-w-content mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-8 sm:mb-10 md:mb-12">
          FAQ
        </h2>
        <ul className="space-y-2">
          {faqs.map(({ q, a }, i) => (
            <li key={i} className="border-b border-charcoal/[0.08] last:border-0">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-5 sm:py-6 flex items-start justify-between gap-4 font-heading text-base sm:text-lg font-semibold text-charcoal hover:text-graphite transition-colors"
                aria-expanded={openIndex === i}
              >
                <span>{q}</span>
                <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-charcoal/[0.06] text-charcoal text-sm transition-transform duration-200" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'none' }} aria-hidden>+</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="font-sans text-[15px] sm:text-base text-graphite leading-relaxed pb-5 sm:pb-6 pl-0 pr-12">
                  {a}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
