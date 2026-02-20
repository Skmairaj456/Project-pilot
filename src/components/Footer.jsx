export default function Footer() {
  return (
    <footer className="relative z-10 py-8 sm:py-10 md:py-12 pb-[max(2rem,env(safe-area-inset-bottom))] px-4 sm:px-6 md:px-10 border-t border-line bg-base">
      <div className="max-w-content mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
        <a href="#top" className="font-heading text-[14px] font-bold text-text hover:opacity-80 transition-opacity tracking-tight">
          Project Pilot
        </a>
        <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
          <a href="#work" className="font-heading text-[12px] text-muted hover:text-text transition-colors duration-200 link-underline py-1 min-h-[44px] flex items-center tracking-wide">Work</a>
          <a href="#solve" className="font-heading text-[12px] text-muted hover:text-text transition-colors duration-200 link-underline py-1 min-h-[44px] flex items-center tracking-wide">Solve</a>
          <a href="#build" className="font-heading text-[12px] text-muted hover:text-text transition-colors duration-200 link-underline py-1 min-h-[44px] flex items-center tracking-wide">Build</a>
          <a href="#why" className="font-heading text-[12px] text-muted hover:text-text transition-colors duration-200 link-underline py-1 min-h-[44px] flex items-center tracking-wide">Why</a>
          <a href="#contact" className="btn-primary-outline text-center py-2.5 px-5">
            Start a Project
          </a>
        </nav>
      </div>
      <div className="max-w-content mx-auto mt-6 sm:mt-8 pt-6 border-t border-line">
        <p className="text-muted text-[11px] sm:text-[12px] tracking-wide">
          © 2025 Project Pilot
        </p>
      </div>
    </footer>
  )
}
