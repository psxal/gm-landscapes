import { Phone } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Services } from '@/components/services'
import { CaseStudy } from '@/components/case-study'
import { Portfolio } from '@/components/portfolio'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Testimonials } from '@/components/testimonials'
import { Process } from '@/components/process'
import { ServiceArea } from '@/components/service-area'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/lib/site'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <CaseStudy />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Process />
        <ServiceArea />
        <Contact />
      </main>
      <SiteFooter />

      {/* Mobile sticky call-now bar */}
      <a
        href={site.phoneHref}
        className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-lg sm:hidden"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call {site.phoneDisplay}
      </a>
    </>
  )
}
