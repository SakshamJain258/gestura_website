'use client'

import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GesturaLogo } from '@/components/gestura-logo'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Product', href: '#what' },
  { label: 'How it works', href: '#how' },
  { label: 'Get started', href: '#start' },
  { label: 'Tech', href: '#tech' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a
          href="#top"
          className="flex items-center gap-2 text-base font-semibold tracking-tight"
        >
          <GesturaLogo />
          Gestura
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <Button
          size="lg"
          className="gap-2 bg-primary text-primary-foreground shadow-[0_0_24px_-4px] shadow-primary/50 hover:bg-primary/90"
          nativeButton={false}
          render={<a href="#start" />}
        >
          <Download className="size-4" />
          Download
        </Button>
      </nav>
    </header>
  )
}
