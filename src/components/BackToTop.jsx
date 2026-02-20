import { useState, useEffect } from 'react'

const SHOW_AFTER = 400

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-surface-2 text-text border border-line shadow-card hover:border-bronze/50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base"
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </a>
  )
}
