import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { serviceAreas, site } from '@/lib/site'

export function ServiceArea() {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Where we work
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Proudly serving Purley &amp; the wider South London area
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Based in Purley, we cover Croydon, Surrey and the surrounding towns
              and villages. Not sure if we reach you? Just ask.
            </p>
          </Reveal>

          <Reveal className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2.5 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm font-medium"
              >
                <MapPin
                  className="h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="text-primary-foreground/90">{area}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="overflow-hidden rounded-2xl border border-primary-foreground/15">
          <iframe
            title="Map showing GM Landscapes location at 48 Croftleigh Ave, Purley CR8 4BT"
            src={`https://www.google.com/maps?q=${site.mapsQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full lg:h-[440px]"
          />
        </Reveal>
      </div>
    </section>
  )
}
