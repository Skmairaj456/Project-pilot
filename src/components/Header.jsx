import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'What we build', href: '#what-we-do' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: 'contact.html' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-platinum/95 backdrop-blur-sm py-3 border-b border-charcoal/[0.06]' : 'py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#" className="font-heading text-[17px] font-bold text-charcoal tracking-tight hover:opacity-80 transition-opacity">
          Project Pilot
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-heading text-[13px] font-medium text-graphite hover:text-charcoal transition-colors link-underline"
            >
              {label}
            </a>
          ))}
          <a href="contact.html" className="btn-primary ml-2">
            Book a call
          </a>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className={`block w-5 h-0.5 bg-charcoal transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-platinum border-b border-charcoal/[0.06] py-6 px-6">
          <nav className="flex flex-col gap-0">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-heading font-medium py-3.5 text-charcoal border-b border-charcoal/5"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <a href="contact.html" className="btn-primary mt-4 w-fit" onClick={() => setMobileOpen(false)}>
              Book a call
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
