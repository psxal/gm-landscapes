import Image from 'next/image'
import {
  Layers,
  Fence,
  Grid3x3,
  Sprout,
  Blocks,
  Flower2,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  image: string
  alt: string
}

const services: Service[] = [
  {
    icon: Layers,
    title: 'Decking',
    description:
      'Timber & composite decks, raised platforms, integrated steps and balustrades built to last.',
    image: '/portfolio/deck-large-timber.png',
    alt: 'Large timber deck with steps built against a tall boundary fence',
  },
  {
    icon: Fence,
    title: 'Fencing & Gates',
    description:
      'Feather-edge, panel and picket fencing plus bespoke timber gates, installed square and solid.',
    image: '/portfolio/fence-boundary-panels.png',
    alt: 'New timber panel fencing running the length of a garden boundary',
  },
  {
    icon: Grid3x3,
    title: 'Patios & Paving',
    description:
      'Natural Indian sandstone, block paving and pathways laid with precise falls and jointing.',
    image: '/portfolio/patio-sandstone-birdbath.png',
    alt: 'Indian sandstone patio with planters and a bird bath',
  },
  {
    icon: Sprout,
    title: 'Turfing & Lawns',
    description:
      'Full lawn installation, levelling and preparation for a lush, hard-wearing finish.',
    image: '/portfolio/transformation-finished.png',
    alt: 'Freshly laid, manicured lawn edged with timber sleepers',
  },
  {
    icon: Blocks,
    title: 'Sleeper Walls & Raised Beds',
    description:
      'Timber sleeper retaining walls and raised beds that add structure and level to any garden.',
    image: '/portfolio/sleeper-raised-beds.png',
    alt: 'Timber sleeper raised beds beside a lawn and trellis fencing',
  },
  {
    icon: Flower2,
    title: 'Garden Structures & Design',
    description:
      'Pergolas, planting schemes and full garden design to tie your outdoor space together.',
    image: '/portfolio/sandstone-path-pergola.png',
    alt: 'Sandstone path leading to a raised deck with a pergola',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What we do
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Complete landscaping, built by one trusted team
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From a single deck to a full garden transformation, every project is
            handled end to end with the same care and finish.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              delay={(i % 3) * 80}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg bg-background/90 text-accent shadow-sm backdrop-blur-sm">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
