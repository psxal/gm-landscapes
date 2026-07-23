import Image from 'next/image'
import { Star, ArrowRight, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden">
      <Image
        src="/portfolio/transformation-finished.png"
        alt="A completed garden transformation featuring fresh turf framed by timber sleeper walls and new fencing"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:px-8 lg:pb-24">
        <div className="max-w-2xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur-sm">
            Purley &middot; Croydon &middot; South London
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Landscaping that transforms your garden into living space
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Bespoke decking, patios &amp; paving, fencing, turfing and complete
            garden design — designed and built with craftsman-level attention to
            detail across Purley and South London.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/15"
            >
              View Our Work
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-primary-foreground/85">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </span>
              <span className="font-medium">5.0 Google rating</span>
            </span>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 font-medium transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
