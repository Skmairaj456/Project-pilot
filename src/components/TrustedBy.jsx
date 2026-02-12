import { useScrollReveal } from '../hooks/useScrollReveal'

const sectors = ['Manufacturing', 'Distribution', 'Logistics', 'FMCG', 'Retail']

export default function TrustedBy() {
  const ref = useScrollReveal({ y: 20, duration: 0.6 })
  return (
    <section
      ref={ref}
      className="relative z-10 py-8 sm:py-10 px-4 sm:px-6 md:px-10 border-y border-charcoal/[0.06] bg-platinum/60"
    >
      <div className="max-w-content mx-auto">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/50 text-center mb-6">
          Trusted by teams in
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 sm:gap-x-12">
          {sectors.map((label) => (
            <span
              key={label}
              className="font-heading text-sm sm:text-base font-medium text-charcoal/70"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
