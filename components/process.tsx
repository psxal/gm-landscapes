import { PhoneCall, PencilRuler, Hammer, KeyRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: PhoneCall,
    title: 'Free Consultation & Quote',
    description:
      'We visit, listen to your ideas and provide a clear, no-obligation written quote.',
  },
  {
    icon: PencilRuler,
    title: 'Design & Materials',
    description:
      'We agree the design, finishes and materials so you know exactly what you are getting.',
  },
  {
    icon: Hammer,
    title: 'Installation',
    description:
      'Our team builds your project on schedule, keeping the site tidy from start to finish.',
  },
  {
    icon: KeyRound,
    title: 'Handover & Aftercare',
    description:
      'We walk you through the finished garden and share simple care advice to keep it looking great.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            How we work
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            A simple, transparent process
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              key={step.title}
              as="li"
              delay={i * 90}
              className="relative"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-serif text-4xl font-semibold text-border">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
