import Image from 'next/image'
import { Ruler, Sparkles, ShieldCheck, Handshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const points = [
  {
    icon: Ruler,
    title: 'Attention to Detail',
    description:
      'Clean lines, level surfaces and neat joints. The finish is what people notice — so we obsess over it.',
  },
  {
    icon: Sparkles,
    title: 'Reliable & Tidy',
    description:
      'We turn up when we say we will, keep the site clean throughout and leave your garden spotless.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured',
    description:
      'Every project is covered, so you have complete peace of mind from first visit to handover.',
  },
  {
    icon: Handshake,
    title: 'Local & Trusted',
    description:
      'A local Purley team building a reputation on hard work and word of mouth across South London.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-muted py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-2xl border border-border">
          <div className="relative aspect-[4/5] lg:aspect-[4/4.5]">
            <Image
              src="/portfolio/deck-steps-handrail.png"
              alt="Neatly finished timber deck with precise steps and handrail detailing"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Why choose us
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Craftsmanship you can rely on
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {points.map((point, i) => (
              <Reveal
                key={point.title}
                delay={(i % 2) * 80}
                className="rounded-xl border border-border bg-card p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <point.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
