'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, CheckCircle2, Upload } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

const projectTypes = [
  'Decking',
  'Fencing & Gates',
  'Patios & Paving',
  'Turfing & Lawns',
  'Sleeper Walls & Raised Beds',
  'Garden Structures & Design',
  'Full Garden Transformation',
  'Something else',
]

const inputClass =
  'w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/30'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
    .then(() => setSubmitted(true))
    .catch((error) => alert(error))
  }


  return (
    <section id="contact" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Get in touch
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Request your free quote
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tell us about your garden and we’ll get back to you to arrange a
              free, no-obligation visit and quote.
            </p>
          </Reveal>

          <Reveal className="mt-8 space-y-4">
            <a
              href={site.phoneHref}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">
                  Call us
                </span>
                <span className="block font-semibold text-foreground">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">
                  Email us
                </span>
                <span className="block font-semibold text-foreground">
                  {site.email}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">
                  Find us
                </span>
                <span className="block font-semibold text-foreground">
                  {site.address.line1}, {site.address.town},{' '}
                  {site.address.postcode}
                </span>
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
              <CheckCircle2
                className="h-14 w-14 text-accent"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                Thank you
              </h3>
              <p className="mt-2 max-w-sm text-pretty leading-relaxed text-muted-foreground">
                Your enquiry has been received. We’ll be in touch shortly to
                arrange your free quote. For anything urgent, call{' '}
                <a
                  href={site.phoneHref}
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  {site.phoneDisplay}
                </a>
                .
              </p>
            </div>
          ) : (
           <form
  name="contact"
  method="POST"
  data-netlify="true"
  onSubmit={handleSubmit}
  className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
>
  <input type="hidden" name="form-name" value="contact" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="Best number to reach you"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="postcode"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Postcode
                  </label>
                  <input
                    id="postcode"
                    name="postcode"
                    type="text"
                    autoComplete="postal-code"
                    className={inputClass}
                    placeholder="e.g. CR8 4BT"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="projectType"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Project type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${inputClass} resize-y`}
                    placeholder="Tell us a little about your garden and what you have in mind…"
                  />
                </div>

                <div className="sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium text-foreground">
                    Photos (optional)
                  </span>
                  <label
                    htmlFor="photos"
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border bg-background px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-accent/60"
                  >
                    <Upload className="h-5 w-5 text-accent" aria-hidden="true" />
                    <span>
                      {fileName ?? 'Upload photos of your space'}
                    </span>
                    <input
                      id="photos"
                      name="photos"
                      type="file"
                      accept="image/*"
                      multiple
                      className="sr-only"
                      onChange={(e) =>
                        setFileName(
                          e.target.files && e.target.files.length > 0
                            ? `${e.target.files.length} file(s) selected`
                            : null,
                        )
                      }
                    />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.01]"
              >
                Send my enquiry
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                No obligation. We’ll only use your details to respond to your
                enquiry.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
