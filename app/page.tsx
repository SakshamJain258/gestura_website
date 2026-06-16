import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/sections/hero'
import { Problem } from '@/components/sections/problem'
import { WhatItDoes } from '@/components/sections/what-it-does'
import { Demo } from '@/components/sections/demo'
import { HowItWorks } from '@/components/sections/how-it-works'
import { GetStarted } from '@/components/sections/get-started'
import { TechStack } from '@/components/sections/tech-stack'
import { Vision } from '@/components/sections/vision'
import { FinalCta } from '@/components/sections/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <Problem />
        <WhatItDoes />
        <Demo />
        <HowItWorks />
        <GetStarted />
        <TechStack />
        <Vision />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
