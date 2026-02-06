export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-24 pb-20 overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="relative z-10 max-w-[44rem]">
        <h1 className="font-heading text-display font-bold text-charcoal mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}>
          Your business.<br />One system.
        </h1>
        <p className="text-lg md:text-xl text-graphite max-w-md leading-relaxed mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
          We build ERPs, inventory platforms, and custom software. One team. Clear scope. Software that scales.
        </p>
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}>
          <a href="contact.html" className="btn-primary">
            Book a call
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-6 md:left-12">
        <a href="#positioning" className="flex flex-col items-center gap-2 text-graphite/50 hover:text-charcoal transition-colors">
          <span className="block w-px h-12 bg-current" />
        </a>
      </div>
    </section>
  )
}
