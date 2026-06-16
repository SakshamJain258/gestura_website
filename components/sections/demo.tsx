import { Play } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { siteLinks } from '@/lib/site-links'

export function Demo() {
  return (
    <section id="demo" className="relative px-5 py-28 md:py-36">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            See It In Action
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            Watch Gestura work live in a real video call.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="relative mx-auto w-full max-w-5xl md:w-[80%]">
            <div
              aria-hidden="true"
              className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-tr from-primary/40 via-blue-500/20 to-primary/30 opacity-70 blur-2xl"
            />
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-primary/30 bg-card ring-1 ring-primary/20">
              <iframe
                className="h-full w-full"
                src={siteLinks.youtubeEmbed}
                title="Gestura demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 grid place-items-center"
              >
                <span className="sr-only">Play the Gestura demo</span>
              </div>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Play className="size-3.5 text-primary" /> Gestura demo on YouTube
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
