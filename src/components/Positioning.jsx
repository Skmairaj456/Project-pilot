import { useInView } from '../hooks/useInView'

const stats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '10+', label: 'ERPs & business systems' },
  { value: '95%', label: 'Client satisfaction' },
]

export default function Positioning() {
  const [ref, inView] = useInView()
  return (
    <section
      ref={ref}
      id="positioning"
      className={`relative z-10 py-16 md:py-20 px-6 md:px-10 border-y border-charcoal/[0.07] bg-cream/50 transition-all duration-600 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <p className="font-heading text-base md:text-lg font-medium text-charcoal max-w-2xl mb-10 md:mb-12 leading-snug">
          We work with manufacturers, distributors, and businesses that outgrew spreadsheets. One team handles strategy, design, and build—so you get a system that fits how you work.
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-2 text-graphite">
          {stats.map(({ value, label }) => (
            <span key={label} className="font-heading text-sm font-semibold text-charcoal">
              {value}
              <span className="font-sans font-normal text-graphite ml-1.5">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
