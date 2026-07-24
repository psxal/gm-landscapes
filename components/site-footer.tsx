import { Leaf, Phone, Mail, MapPin, Star } from 'lucide-react'
import { navLinks, serviceAreas, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <Leaf className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-semibold">
                GM Landscapes
              </span>
            </div>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-primary-foreground/70">
              Specialist landscape gardening — decking, patios, fencing, turfing
              and garden design across Purley and South London.
            </p>
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 px-4 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              <Star className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
              5.0 on Google
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Service Area
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              {serviceAreas.slice(0, 6).map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-primary-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {site.address.line1}, {site.address.town},{' '}
                  {site.address.postcode}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} GM Landscapes. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
