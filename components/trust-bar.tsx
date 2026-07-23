import { Star, ShieldCheck, FileText, MapPin, Hammer } from 'lucide-react'

const items = [
  { icon: Star, label: '5.0 Google Rating' },
  { icon: ShieldCheck, label: 'Fully Insured' },
  { icon: FileText, label: 'Free, No-Obligation Quotes' },
  { icon: MapPin, label: 'Serving Purley & South London' },
  { icon: Hammer, label: 'Skilled, Tidy Craftsmen' },
]

export function TrustBar() {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-4 px-5 py-6 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2.5 text-sm font-medium"
          >
            <item.icon
              className="h-5 w-5 shrink-0 text-accent"
              aria-hidden="true"
            />
            <span className="text-pretty text-primary-foreground/90">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
