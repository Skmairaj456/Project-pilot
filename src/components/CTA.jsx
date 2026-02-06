export default function CTA() {
  return (
    <section className="relative z-10 py-24 md:py-28 px-6 md:px-10 bg-charcoal text-cream">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <h2 className="font-heading text-display-sm font-bold mb-4 leading-tight">
            Ready to streamline your operations?
          </h2>
          <p className="text-cream/80 text-base md:text-lg max-w-md leading-relaxed">
            Book a call. We'll discuss your needs and next steps—no pitch, no pressure.
          </p>
        </div>
        <a href="contact.html" className="btn-primary-invert shrink-0">
          Book a call
        </a>
      </div>
    </section>
  )
}
