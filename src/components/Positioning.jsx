import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '10+', label: 'ERPs & business systems' },
  { value: '95%', label: 'Client satisfaction' },
]

export default function Positioning() {
  const ref = useScrollReveal({ y: 28, duration: 0.8 })
  return (
    <section
      ref={ref}
      id="positioning"
      className="relative z-10 py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 border-y border-charcoal/[0.06] bg-cream/40"
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="font-heading text-[15px] sm:text-[16px] md:text-lg font-medium text-charcoal max-w-prose leading-relaxed mb-10 sm:mb-12 md:mb-14">
          We work with manufacturers, distributors, and businesses that outgrew spreadsheets. One team handles strategy, design, and build—so you get a system that fits how you work.
        </p>
        <div className="flex flex-wrap gap-x-10 sm:gap-x-12 gap-y-4">
          {stats.map(({ value, label }) => (
            <span key={label} className="font-heading text-[13px] font-semibold text-charcoal tracking-tight">
              {value}
              <span className="font-sans font-normal text-graphite ml-2">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
