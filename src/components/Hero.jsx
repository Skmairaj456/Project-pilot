export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] min-h-[92dvh] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-content w-full mx-auto">
        <p className="eyebrow mb-5">Premium digital product &amp; AI studio</p>
        <h1 className="font-heading text-display font-bold text-text tracking-tight max-w-[18ch]">
          Custom software &amp; AI systems for companies that want to scale.
        </h1>
        <p className="mt-6 text-[15px] sm:text-lg text-muted leading-relaxed max-w-prose">
          We remove operational bottlenecks and build systems that stay fast as your business grows.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <a href="#contact" className="btn-primary">
            Start a Project
          </a>
          <a href="#work" className="font-heading text-[13px] font-semibold text-text link-underline">
            View Our Work
          </a>
        </div>
      </div>
    </section>
  )
}
