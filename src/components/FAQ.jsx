import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope. A discovery and proposal usually takes 1–2 weeks. Build phases range from a few weeks for a focused module to several months for a full ERP. We break work into phases so you see progress early.',
  },
  {
    q: 'Do you work with our existing tech stack?',
    a: 'Yes. We integrate with common ERPs, databases, and APIs. We’ll align on your stack during discovery and recommend changes only when they clearly benefit the outcome.',
  },
  {
    q: 'What does discovery cost?',
    a: 'Discovery is a short, fixed-scope engagement. We’ll give you a clear quote after an initial call so you can decide before any build work starts.',
  },
  {
    q: 'What if we only need one module (e.g. inventory)?',
    a: 'We often start with one module—inventory, orders, or reporting—and expand from there. You get value sooner and we design so it can grow into a full system.',
  },
  {
    q: 'Where are you based?',
    a: 'We’re based in India and work with clients globally. Calls and collaboration are over video; time zones are agreed up front so communication stays smooth.',
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
