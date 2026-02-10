export default function Footer() {
  return (
    <footer className="relative z-10 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-10 border-t border-charcoal/[0.06] bg-platinum">
      <div className="max-w-content mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
        <a href="#" className="font-heading text-[14px] font-bold text-charcoal hover:opacity-70 transition-opacity tracking-tight">
          Project Pilot
        </a>
        <nav className="flex flex-wrap gap-8 sm:gap-10">
          <a href="services.html" className="font-heading text-[12px] text-graphite hover:text-charcoal transition-colors duration-200 link-underline py-1 min-h-[44px] flex items-center tracking-wide">Services</a>
          <a href="projects.html" className="font-heading text-[12px] text-graphite hover:text-charcoal transition-colors duration-200 link-underline py-1 min-h-[44px] flex items-center tracking-wide">Projects</a>
          <a href="contact.html" className="font-heading text-[12px] text-graphite hover:text-charcoal transition-colors duration-200 link-underline py-1 min-h-[44px] flex items-center tracking-wide">Contact</a>
        </nav>
      </div>
      <div className="max-w-content mx-auto mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-charcoal/[0.05]">
        <p className="text-graphite/80 text-[11px] sm:text-[12px] tracking-wide">
          © 2025 Project Pilot
        </p>
      </div>
    </footer>
  )
}
