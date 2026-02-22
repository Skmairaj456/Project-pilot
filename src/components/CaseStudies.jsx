import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'

/* Real Results: trust-building case study cards with problem/solution/results */
const studies = [
  {
    industry: 'SaaS Startup',
    problem: 'Low sign-up conversion and high bounce on pricing page.',
    solution: 'Redesigned pricing and onboarding flow with clear CTAs and social proof.',
    results: '42% increase in sign-ups, 28% lower bounce in 3 months.',
    href: 'projects.html',
  },
  {
    industry: 'E-commerce (D2C)',
    problem: 'Cart abandonment and slow mobile experience.',
    solution: 'Mobile-first redesign, one-tap checkout options, and post-purchase automation.',
    results: 'Mobile conversion up 35%, recovery emails added for abandoned carts.',
    href: 'projects.html',
  },
  {
    industry: 'B2B Services',
    problem: 'Leads not qualifying; sales team wasting time on cold prospects.',
    solution: 'AI-powered lead scoring, chatbot for qualification, and CRM integration.',
    results: 'Qualified lead volume up 50%, faster response time with automation.',
    href: 'projects.html',
  },
]

const list = { visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
const listItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

export default function CaseStudies() {
  const ref = useScrollReveal({ y: 28, duration: 0.8 })
  return (
    <section
      ref={ref}
      id="case-studies"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-gradient-section overflow-hidden"
    >
      <div className="max-w-content mx-auto">
        <h2 className="font-heading text-display-sm font-bold text-charcoal mb-3 sm:mb-4">
          Real Results We&apos;ve Delivered
        </h2>
        <p className="text-graphite text-[15px] sm:text-base max-w-prose mb-10 sm:mb-12">
          Measurable impact for startups and growing businesses.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          variants={list}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {studies.map(({ industry, problem, solution, results, href }) => (
            <motion.article
              key={industry}
              variants={listItem}
              className="rounded-xl card-soft p-6 sm:p-7 flex flex-col transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-l-2 border-transparent hover:border-champagne"
            >
              <p className="eyebrow mb-3">{industry}</p>
              <p className="text-graphite text-[14px] sm:text-[15px] leading-relaxed mb-3">
                <strong className="text-charcoal font-semibold">Problem:</strong> {problem}
              </p>
              <p className="text-graphite text-[14px] sm:text-[15px] leading-relaxed mb-3">
                <strong className="text-charcoal font-semibold">Solution:</strong> {solution}
              </p>
              <p className="text-charcoal font-heading text-[13px] font-semibold mt-auto mb-5">
                {results}
              </p>
              <a
                href={href}
                className="font-heading text-[13px] font-semibold text-charcoal link-underline inline-flex items-center gap-1 w-fit"
              >
                View Details →
              </a>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-8">
          <a href="projects.html" className="font-heading text-[13px] font-semibold text-charcoal link-underline inline-block">
            All case studies →
          </a>
        </p>
      </div>
    </section>
  )
}
