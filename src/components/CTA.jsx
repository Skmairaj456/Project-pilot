import { useScrollReveal } from '../hooks/useScrollReveal'
import { useState } from 'react'

export default function CTA() {
  const ref = useScrollReveal({ y: 24, duration: 0.8 })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function onSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('https://formspree.io/f/mjgegkgq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="relative z-10 py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-surface border-y border-line overflow-hidden"
    >
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <h2 className="font-heading text-display-sm font-bold text-text leading-[1.05] tracking-tight">
            Let’s build something serious.
          </h2>
          <p className="mt-5 text-muted text-[15px] sm:text-base leading-relaxed max-w-prose">
            Share what you’re building. We’ll reply with clear next steps.
          </p>
          <p className="mt-8">
            <a
              href="mailto:services@projectpilot.co.in"
              className="font-heading text-[13px] font-semibold text-text link-underline inline-flex items-center min-h-[44px]"
            >
              services@projectpilot.co.in
            </a>
          </p>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="card-soft p-6 sm:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-[12px] font-heading font-semibold tracking-wide text-muted">Name</span>
                <input
                  name="name"
                  autoComplete="name"
                  required
                  className="w-full rounded-md bg-surface-2 border border-line-strong px-3.5 py-3 text-text placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-bronze/40"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[12px] font-heading font-semibold tracking-wide text-muted">Email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md bg-surface-2 border border-line-strong px-3.5 py-3 text-text placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-bronze/40"
                  placeholder="you@company.com"
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[12px] font-heading font-semibold tracking-wide text-muted">Company (optional)</span>
                <input
                  name="company"
                  autoComplete="organization"
                  className="w-full rounded-md bg-surface-2 border border-line-strong px-3.5 py-3 text-text placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-bronze/40"
                  placeholder="Company name"
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[12px] font-heading font-semibold tracking-wide text-muted">What are we building?</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-md bg-surface-2 border border-line-strong px-3.5 py-3 text-text placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-bronze/40 resize-y"
                  placeholder="A short note on the system, timeline, and what success looks like."
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Start a Project'}
              </button>
              <p className="text-[13px] text-muted">
                {status === 'success' && 'Received. We’ll reply within 1–2 business days.'}
                {status === 'error' && 'Something went wrong. Please email us instead.'}
                {status === 'idle' && 'No sales language. Just clarity.'}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
