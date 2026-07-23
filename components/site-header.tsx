'use client'

import { useEffect, useState } from 'react'
import { Phone, Menu, X, Leaf } from 'lucide-react'
import { navLinks, site } from '@/lib/site'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border/60 bg-background/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <a
          href="#top"
          className={`flex items-center gap-2.5 transition-colors ${
            scrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
          aria-label="GM Landscapes home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
            <Leaf className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-semibold leading-none tracking-tight">
            GM Landscapes
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-foreground/80' : 'text-primary-foreground/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden ${
              scrolled
                ? 'text-foreground'
                : 'text-primary-foreground'
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-5 py-3"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-base font-medium text-foreground last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
