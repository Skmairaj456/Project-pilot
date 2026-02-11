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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] ${
        scrolled ? 'bg-platinum/98 backdrop-blur-md pb-2.5 sm:pb-3 border-b border-charcoal/[0.06]' : 'pb-4 sm:pb-5'
      }`}
      style={{
        paddingTop: `calc(env(safe-area-inset-top, 0px) + ${scrolled ? '0.625rem' : '1rem'})`,
      }}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2.5 font-heading text-[15px] sm:text-base font-bold text-charcoal tracking-tight hover:opacity-70 transition-opacity shrink-0">
          <img src="/favicon-48.png" alt="" className="w-8 h-8 sm:w-9 sm:h-9" width="48" height="48" />
          Project Pilot
        </a>

        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-heading text-[12px] font-medium text-graphite hover:text-charcoal transition-colors duration-200 link-underline tracking-wide"
            >
              {label}
            </a>
          ))}
          <a href="contact.html" className="btn-primary ml-3">
            Book a call
          </a>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 p-3 -mr-2 min-w-[44px] min-h-[44px] justify-center items-center"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className={`block w-5 h-0.5 bg-charcoal transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-platinum/98 backdrop-blur-md border-b border-charcoal/[0.06] py-5 px-4 sm:px-6 max-h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="flex flex-col gap-0">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-heading font-medium py-4 text-charcoal border-b border-charcoal/[0.06] min-h-[48px] flex items-center text-[15px]"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <a href="contact.html" className="btn-primary mt-5 w-full sm:w-fit text-center" onClick={() => setMobileOpen(false)}>
              Book a call
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
