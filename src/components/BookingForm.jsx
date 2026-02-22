import { useState } from 'react'
import { motion } from 'framer-motion'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    goal: '',
    timeline: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Using Formspree for email handling
      const response = await fetch('https://formspree.io/f/mjgegkgq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          goal: formData.goal,
          timeline: formData.timeline,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        // Redirect to Calendly booking after success
        setTimeout(() => {
          window.location.href = 'https://calendly.com/services-projectpilot/30min'
        }, 2000)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-platinum px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md text-center"
        >
          <div className="w-16 h-16 bg-champagne rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">✓</span>
          </div>
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">Got it!</h2>
          <p className="text-graphite mb-4">
            Thanks for reaching out. We'll review your details and send you a calendar link to book your strategy call.
          </p>
          <p className="text-sm text-graphite/60">
            Redirecting to calendar in a moment...
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-platinum py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Let's Build Something Great
          </h1>
          <p className="text-graphite text-lg">
            Tell us about your project. We'll review it and send you a calendar link to pick a time that works best.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-heading text-sm font-semibold text-charcoal mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-white text-charcoal placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-champagne"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-heading text-sm font-semibold text-charcoal mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-white text-charcoal placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-champagne"
              placeholder="john@company.com"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block font-heading text-sm font-semibold text-charcoal mb-2">
              Company / Business Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-white text-charcoal placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-champagne"
              placeholder="Your Business"
            />
          </div>

          {/* Primary Goal */}
          <div>
            <label htmlFor="goal" className="block font-heading text-sm font-semibold text-charcoal mb-2">
              What's your main goal? *
            </label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-champagne"
            >
              <option value="">Select an option</option>
              <option value="new-website">Build a new website</option>
              <option value="redesign">Redesign existing site</option>
              <option value="conversion">Increase conversions</option>
              <option value="automation">Set up automation</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Timeline */}
          <div>
            <label htmlFor="timeline" className="block font-heading text-sm font-semibold text-charcoal mb-2">
              When do you want to launch? *
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-champagne"
            >
              <option value="">Select timeframe</option>
              <option value="asap">ASAP (1-2 months)</option>
              <option value="3months">3 months</option>
              <option value="6months">6 months</option>
              <option value="exploring">Just exploring</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-heading text-sm font-semibold text-charcoal mb-2">
              Anything else we should know?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-white text-charcoal placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-champagne resize-none"
              placeholder="Tell us about your project, budget, or any specific needs..."
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-charcoal text-cream font-heading font-semibold rounded-lg hover:bg-graphite transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Get a Strategy Call →'}
          </button>

          <p className="text-center text-graphite text-sm">
            We respond within 24 hours. No spam, no pressure.
          </p>
        </form>
      </div>
    </div>
  )
}
