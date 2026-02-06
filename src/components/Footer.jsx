export default function Footer() {
  return (
    <footer className="relative z-10 py-8 md:py-10 px-6 md:px-10 border-t border-charcoal/[0.06]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <a href="#" className="font-heading text-sm font-bold text-charcoal hover:opacity-80 transition-opacity">
          Project Pilot
        </a>
        <nav className="flex gap-8">
          <a href="services.html" className="font-heading text-[13px] text-graphite hover:text-charcoal transition-colors link-underline">Services</a>
          <a href="projects.html" className="font-heading text-[13px] text-graphite hover:text-charcoal transition-colors link-underline">Projects</a>
          <a href="contact.html" className="font-heading text-[13px] text-graphite hover:text-charcoal transition-colors link-underline">Contact</a>
        </nav>
      </div>
      <div className="max-w-[1200px] mx-auto mt-6 pt-6 border-t border-charcoal/[0.05]">
        <p className="text-graphite text-[13px]">
          © {new Date().getFullYear()} Project Pilot
        </p>
      </div>
    </footer>
  )
}
