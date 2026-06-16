import { GesturaLogo } from '@/components/gestura-logo'
import { siteLinks } from '@/lib/site-links'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <a
            href="#top"
            className="flex items-center justify-center gap-2 text-base font-semibold tracking-tight md:justify-start"
          >
            <GesturaLogo />
            Gestura
          </a>
          <p className="mt-2 text-sm text-muted-foreground">Sign. Be Heard.</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a
            href={siteLinks.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={siteLinks.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={siteLinks.researchPaper}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Research Paper
          </a>
        </nav>

        <p className="text-xs text-muted-foreground">
          Built by Saksham Jain · Bennett University · 2026
        </p>
      </div>
    </footer>
  )
}
