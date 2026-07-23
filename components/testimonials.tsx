import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

const reviews = [
  {
    name: 'Anna Cleary',
    quote:
      'Absolutely delighted with our new garden. Professional from start to finish, brilliant attention to detail and everything was left spotless. Highly recommend.',
  },
  {
    name: 'Lisa Duncan',
    quote:
      'Reliable, hardworking and genuinely lovely to deal with. The decking they built for us looks fantastic and was finished exactly when they said it would be.',
  },
  {
    name: 'Shania',
    quote:
      'Great job on our patio and fencing. Really tidy workers who took pride in the finish. Would happily use them again.',
  },
  {
    name: 'Anthony McDonagh',
    quote:
      'Top-quality work at a fair price. Turned our overgrown garden into something we actually want to spend time in. Couldn’t be happier.',
  },
  {
    name: 'John McDonagh',
    quote:
      'Excellent from quote to completion. Professional, polite and the workmanship is first class. Kept everything clean and tidy throughout.',
  },
  {
    name: 'Tommylee Moran',
    quote:
      'Really impressed with the whole job. Hard-working team, great communication and a superb finished result. Thoroughly recommend GM Landscapes.',
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Reviews
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Rated 5.0 by customers across South London
            </h2>
          </div>
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60"
          >
            See all reviews on Google
          </a>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              as="article"
              delay={(i % 3) * 80}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <Quote
                className="h-7 w-7 text-accent/40"
                aria-hidden="true"
              />
              <div className="mt-3 flex" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                {review.quote}
              </p>
              <p className="mt-5 font-semibold text-foreground">
                {review.name}
              </p>
              <p className="text-sm text-muted-foreground">Google Review</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
