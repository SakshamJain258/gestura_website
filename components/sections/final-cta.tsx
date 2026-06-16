import { Download, GitBranch } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { siteLinks } from '@/lib/site-links'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-32 md:py-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px] animate-pulse-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight text-glow sm:text-6xl">
          Every voice deserves
          <br />
          <span className="bg-gradient-to-r from-primary via-violet-400 to-blue-400 bg-clip-text text-transparent">
            to be heard.
          </span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Download Gestura. Sign freely.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-12 gap-2 px-6 text-base bg-primary text-primary-foreground shadow-[0_0_36px_-6px] shadow-primary/60 hover:bg-primary/90"
            nativeButton={false}
            render={<a href="#start" />}
          >
            <Download className="size-5" />
            Download for Windows
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 gap-2 px-6 text-base"
            nativeButton={false}
            render={
              <a
                href={siteLinks.github}
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            <GitBranch className="size-4" />
            View on GitHub
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
