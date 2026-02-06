const steps = [
  { title: 'Discover', body: 'We align on goals, constraints, and scope. No build on assumption.' },
  { title: 'Design', body: 'Structure and flows. We iterate with you until it fits.' },
  { title: 'Build', body: 'Clean code, phased delivery. You see progress early.' },
  { title: 'Launch', body: 'Go live. We stay for iterations and scale.' },
]

import { useInView } from '../hooks/useInView'

export default function HowWeWork() {
  const [ref, inView] = useInView()
  return (
    <section
      ref={ref}
      id="process"
      className={`relative z-10 py-24 md:py-32 px-6 md:px-10 transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-14 md:mb-16">
          How we work.
        </h2>
        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map(({ title, body }, i) => (
            <div key={title}>
              <span className="font-heading text-[11px] font-bold text-sand tracking-widest">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-lg font-bold text-charcoal mt-2 mb-2">
                {title}
              </h3>
              <p className="text-graphite text-[14px] leading-[1.6]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
