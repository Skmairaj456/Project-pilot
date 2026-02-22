import { useState, useEffect } from 'react'
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
  const [step, setStep] = useState(1) // Progressive steps

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
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
        }, 2500)
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-platinum via-cream to-warm px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-br from-champagne to-warm rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
          >
            <span className="text-4xl">✓</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-3xl font-bold text-charcoal mb-3"
          >
            Perfect!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-graphite text-lg mb-4 leading-relaxed"
          >
            We got your details. Now let's find a time that works for your strategy call.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-graphite/60"
          >
            Opening your calendar...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum via-cream to-warm py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Let's Talk About Your Project
          </h1>
          <p className="text-graphite text-lg max-w-prose mx-auto">
            Share a bit about what you're building. We'll review it and send you a calendar link to book your strategy call.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                className={`h-2 flex-1 rounded-full mr-2 transition-colors ${
                  step >= num ? 'bg-champagne' : 'bg-charcoal/10'
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
              />
            ))}
          </div>
          <p className="text-sm text-graphite/60 text-center">
            Step {step} of 3
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Step 1: Contact Info */}
            {step === 1 && (
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block font-heading text-sm font-semibold text-charcoal mb-3">
                    What's your name? *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoFocus
                    className="w-full px-4 py-3.5 rounded-lg border-2 border-charcoal/10 bg-white text-charcoal placeholder-graphite/40 focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block font-heading text-sm font-semibold text-charcoal mb-3">
                    Your email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-lg border-2 border-charcoal/10 bg-white text-charcoal placeholder-graphite/40 focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all"
                    placeholder="john@company.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="company" className="block font-heading text-sm font-semibold text-charcoal mb-3">
                    Your company or business
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-lg border-2 border-charcoal/10 bg-white text-charcoal placeholder-graphite/40 focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all"
                    placeholder="Your Business"
                  />
                </motion.div>
              </motion.div>
            )}

            {/* Step 2: Project Details */}
            {step === 2 && (
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="goal" className="block font-heading text-sm font-semibold text-charcoal mb-3">
                    What's your main goal? *
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    required
                    autoFocus
                    className="w-full px-4 py-3.5 rounded-lg border-2 border-charcoal/10 bg-white text-charcoal focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all"
                  >
                    <option value="">Select what you need</option>
                    <option value="new-website">Build a new website</option>
                    <option value="redesign">Redesign existing site</option>
                    <option value="conversion">Increase conversions</option>
                    <option value="automation">Set up automation & AI</option>
                    <option value="other">Something else</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="timeline" className="block font-heading text-sm font-semibold text-charcoal mb-3">
                    When do you want to launch? *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-lg border-2 border-charcoal/10 bg-white text-charcoal focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all"
                  >
                    <option value="">Select timeframe</option>
                    <option value="asap">ASAP (1-2 months)</option>
                    <option value="3months">3 months</option>
                    <option value="6months">6 months+</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </motion.div>
              </motion.div>
            )}

            {/* Step 3: Message */}
            {step === 3 && (
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block font-heading text-sm font-semibold text-charcoal mb-3">
                    Tell us a bit more (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    autoFocus
                    className="w-full px-4 py-3.5 rounded-lg border-2 border-charcoal/10 bg-white text-charcoal placeholder-graphite/40 focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all resize-none"
                    placeholder="Budget, specific features, or anything else we should know..."
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="p-4 bg-warm rounded-lg">
                  <p className="text-sm text-graphite">
                    <span className="font-semibold">Quick note:</span> We'll send you a calendar link after you submit. Pick 30 minutes and we'll discuss next steps.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 pt-6"
          >
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                disabled={loading}
                className="px-6 py-3 rounded-lg border-2 border-charcoal/20 text-charcoal font-heading font-semibold hover:border-charcoal/40 transition-colors disabled:opacity-50"
              >
                Back
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 py-3 bg-charcoal text-cream font-heading font-semibold rounded-lg hover:bg-graphite transition-colors"
              >
                Next →
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 bg-charcoal text-cream font-heading font-semibold rounded-lg hover:bg-graphite transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Let\'s Talk →'}
              </button>
            )}
          </motion.div>

          <p className="text-center text-graphite/60 text-sm">
            We respond within 24 hours. Your info stays private.
          </p>
        </form>
      </div>
    </div>
  )
}
