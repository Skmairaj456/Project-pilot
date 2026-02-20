import { useScrollReveal } from '../hooks/useScrollReveal'

const problems = [
  {
    title: 'Operational inefficiency',
    body: 'Systems that eliminate handoffs, rework, and “where is this?” moments.',
  },
  {
    title: 'Manual workflows',
    body: 'Automation that reduces human load without adding complexity.',
  },
  {
    title: 'Poor data visibility',
    body: 'Dashboards and reporting built for decisions, not vanity metrics.',
  },
  {
    title: 'Scaling limitations',
    body: 'Architecture that supports new teams, regions, and volume.',
  },
]

export default function WhatWeSolve() {
  const ref = useScrollReveal({ y: 28, duration: 0.8 })

  return (
    <section ref={ref} id="solve" className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 border-t border-line">
      <div className="max-w-content mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-text mb-8 sm:mb-10">
          What we solve
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {problems.map(({ title, body }) => (
            <div key={title} className="card-soft p-6 sm:p-7">
              <p className="font-heading text-lg sm:text-xl font-bold text-text mb-2">
                {title}
              </p>
              <p className="text-muted text-[14px] sm:text-[15px] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

