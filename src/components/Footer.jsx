export default function Footer() {
  return (
    <footer className="relative z-10 py-6 sm:py-8 md:py-10 pb-[max(1.5rem,env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-6 sm:pr-6 md:pl-10 md:pr-10 border-t border-charcoal/[0.08] bg-gradient-to-b from-cream/80 to-platinum shadow-[0_-2px_20px_rgba(26,26,26,0.04)]">
      <div className="max-w-content mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
        <a href="#" className="font-heading text-[14px] font-bold text-charcoal hover:opacity-70 transition-opacity tracking-tight">
          Project Pilot
        </a>
        <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
          <a href="#what-we-do" className="font-heading text-[12px] text-graphite hover:text-charcoal transition-colors duration-200 link-underline py-1 min-h-[44px] flex items-center tracking-wide">Services</a>
          <a href="#case-studies" className="font-heading text-[12px] text-graphite hover:text-charcoal transition-colors duration-200 link-underline py-1 min-h-[44px] flex items-center tracking-wide">Case Studies</a>
          <a href="#pricing" className="font-heading text-[12px] text-graphite hover:text-charcoal transition-colors duration-200 link-underline py-1 min-h-[44px] flex items-center tracking-wide">Pricing</a>
          <a href="#faq" className="font-heading text-[12px] text-graphite hover:text-charcoal transition-colors duration-200 link-underline py-1 min-h-[44px] flex items-center tracking-wide">FAQ</a>
          <a href="contact.html" className="font-heading text-[12px] text-graphite hover:text-charcoal transition-colors duration-200 link-underline py-1 min-h-[44px] flex items-center tracking-wide">Contact</a>
          <a href="/book" className="btn-primary-outline text-center py-2.5 px-5">
            Get a Strategy Call
          </a>
        </nav>
      </div>
      <div className="max-w-content mx-auto mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-charcoal/[0.05] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-graphite/80 text-[11px] sm:text-[12px] tracking-wide">
          © 2025 Project Pilot
        </p>
      </div>
    </footer>
  )
}
