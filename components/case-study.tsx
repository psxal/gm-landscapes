import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CaseStudy() {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Featured transformation
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            From bare ground to a garden built for living
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            A tired, uneven garden stripped back, levelled and rebuilt with
            timber sleeper retaining walls, fresh rolled turf and clean, defined
            borders — a complete reset from the ground up.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-xl border border-primary-foreground/15">
            <div className="relative aspect-[4/3]">
              <Image
                src="/portfolio/turf-in-progress.png"
                alt="Garden mid-project with new sleeper retaining walls and turf being rolled out"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-primary/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              During
            </span>
          </Reveal>

          <Reveal
            delay={120}
            className="relative overflow-hidden rounded-xl border border-primary-foreground/15"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/portfolio/transformation-finished.png"
                alt="The finished garden with a manicured lawn, sleeper walls and planted borders"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              After
            </span>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Start your transformation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
