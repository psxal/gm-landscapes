'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'

type Category =
  | 'Decking'
  | 'Fencing'
  | 'Paving'
  | 'Turf & Lawns'
  | 'Full Transformations'

type Project = {
  image: string
  alt: string
  caption: string
  categories: Category[]
}

const projects: Project[] = [
  {
    image: '/portfolio/transformation-finished.png',
    alt: 'Manicured lawn with timber sleeper walls and planted borders',
    caption: 'Full garden rebuild with sleeper walls & new turf',
    categories: ['Full Transformations', 'Turf & Lawns'],
  },
  {
    image: '/portfolio/deck-large-timber.png',
    alt: 'Large timber deck with steps against a tall fence',
    caption: 'Multi-level timber deck with integrated steps',
    categories: ['Decking'],
  },
  {
    image: '/portfolio/composite-black-balustrade.png',
    alt: 'Grey composite deck with black metal balustrade on a brick base',
    caption: 'Composite deck with steel balustrade',
    categories: ['Decking'],
  },
  {
    image: '/portfolio/patio-sandstone-birdbath.png',
    alt: 'Indian sandstone patio with planters and a bird bath',
    caption: 'Natural Indian sandstone patio',
    categories: ['Paving'],
  },
  {
    image: '/portfolio/fence-boundary-panels.png',
    alt: 'New timber panel fencing along a garden boundary',
    caption: 'Full boundary panel fencing',
    categories: ['Fencing'],
  },
  {
    image: '/portfolio/deck-raised-sandstone.png',
    alt: 'Raised timber deck with steps down to sandstone paving',
    caption: 'Raised deck with sandstone steps',
    categories: ['Decking', 'Paving'],
  },
  {
    image: '/portfolio/sleeper-raised-beds.png',
    alt: 'Timber sleeper raised beds beside a lawn and trellis fence',
    caption: 'Sleeper raised beds & trellis screening',
    categories: ['Full Transformations', 'Fencing'],
  },
  {
    image: '/portfolio/deck-gravel-border.png',
    alt: 'Timber deck with a gravel border beside a summerhouse',
    caption: 'Timber deck with gravel detail border',
    categories: ['Decking'],
  },
  {
    image: '/portfolio/sandstone-path-pergola.png',
    alt: 'Sandstone path leading to a raised deck with a pergola',
    caption: 'Sandstone pathway to a pergola deck',
    categories: ['Paving', 'Decking'],
  },
  {
    image: '/portfolio/turf-in-progress.png',
    alt: 'New sleeper walls with turf being laid',
    caption: 'Levelling & fresh turf installation',
    categories: ['Turf & Lawns', 'Full Transformations'],
  },
  {
    image: '/portfolio/fence-install-progress.png',
    alt: 'Fence posts and panels being installed',
    caption: 'Feather-edge fence installation',
    categories: ['Fencing'],
  },
  {
    image: '/portfolio/deck-white-pergola.png',
    alt: 'Raised timber deck with a white pergola and brick wall',
    caption: 'Raised deck with painted pergola',
    categories: ['Decking'],
  },
  {
    image: '/portfolio/patio-hillside-view.png',
    alt: 'Sandstone patio with a hillside view and feather-edge fence',
    caption: 'Patio & fencing with a view',
    categories: ['Paving', 'Fencing'],
  },
  {
    image: '/portfolio/deck-rope-balustrade.png',
    alt: 'Timber deck with rope-and-post balustrade and sleeper edge',
    caption: 'Deck with rope-and-post balustrade',
    categories: ['Decking'],
  },
  {
    image: '/portfolio/deck-square-gravel.png',
    alt: 'Square timber deck platform on gravel',
    caption: 'Freestanding timber deck platform',
    categories: ['Decking'],
  },
  {
    image: '/portfolio/gate-picket-brick.png',
    alt: 'Timber picket gate between brick walls',
    caption: 'Bespoke picket gate & fencing',
    categories: ['Fencing'],
  },
]

const filters: ('All' | Category)[] = [
  'All',
  'Decking',
  'Fencing',
  'Paving',
  'Turf & Lawns',
  'Full Transformations',
]

export function Portfolio() {
  const [active, setActive] = useState<'All' | Category>('All')

  const filtered = useMemo(
    () =>
      active === 'All'
        ? projects
        : projects.filter((p) => p.categories.includes(active)),
    [active],
  )

  return (
    <section id="work" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our work
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Recent transformations across South London
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Real gardens, finished by our team. Filter by the work you have in
            mind.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === filter
                  ? 'border-accent bg-accent text-accent-foreground'
                  : 'border-border bg-card text-foreground/70 hover:border-accent/50 hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((project) => (
            <figure
              key={project.image}
              className="group relative break-inside-avoid overflow-hidden rounded-xl border border-border bg-card"
            >
              <Image
                src={project.image}
                alt={project.alt}
                width={800}
                height={1000}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-primary/90 to-transparent p-4 text-sm font-medium text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {project.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
