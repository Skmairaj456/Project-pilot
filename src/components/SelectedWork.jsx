import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Operations ERP for a manufacturing team',
    outcome: 'One system for orders, inventory, production tracking, and reporting.',
    impact: 'Replaced 5 internal tools',
  },
  {
    title: 'Workflow automation layer for a service business',
    outcome: 'Reduced manual follow-ups and eliminated duplicate entry across teams.',
    impact: 'Fewer handoffs, faster throughput',
  },
  {
    title: 'Executive reporting & data visibility suite',
    outcome: 'Decision-grade dashboards with clean definitions, ownership, and access.',
    impact: 'Single source of truth',
  },
  {
    title: 'AI-assisted operations for repetitive tasks',
    outcome: 'Applied AI to compress time-to-completion without adding fragility.',
    impact: 'Lower ops load',
  },
]

export default function SelectedWork() {
  const ref = useScrollReveal({ y: 36, duration: 0.85 })
  return (
    <section
      ref={ref}
      id="work"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 border-t border-line"
    >
      <div className="relative z-10 max-w-content mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-text mb-8 sm:mb-10">
          Selected work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {projects.map(({ title, outcome, impact }) => (
            <a
              key={title}
              href="#contact"
              className="group card-soft p-6 sm:p-7 block"
              aria-label={`${title} — discuss this project`}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow">Flagship</p>
                <span className="text-muted text-[12px] font-heading tracking-wide transition-transform duration-300 group-hover:translate-x-1">
                  Discuss →
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold text-text tracking-tight">
                {title}
              </h3>
              <p className="mt-3 text-muted text-[14px] sm:text-[15px] leading-relaxed">
                {outcome}
              </p>
              <p className="mt-6 text-[13px] font-heading font-semibold text-bronze tracking-wide">
                {impact}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
