import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { siteLinks } from '@/lib/site-links'

const steps = [
  {
    n: '01',
    title: 'Download',
    body: 'Download Gestura_v1.zip from the button below. Contains the app and the one-time driver installer.',
    cta: true,
  },
  {
    n: '02',
    title: 'Install Virtual Camera Driver',
    body: 'Run install_virtualcam_driver.exe once. This lets Gestura push your captioned feed as a camera input. (Powered by OBS Virtual Camera)',
  },
  {
    n: '03',
    title: 'Sign and Be Heard',
    body: "Open Gestura.exe → click Start → open your meeting app → select 'Gestura Cam' as your camera. Start signing. Everyone sees your captions.",
  },
]

export function GetStarted() {
  return (
    <section id="start" className="relative px-5 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Get Started in 3 Steps
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 130}
              className="flex flex-col rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-sm"
            >
              <span className="bg-gradient-to-b from-foreground to-primary bg-clip-text font-mono text-5xl font-bold text-transparent">
                {s.n}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              {s.cta && (
                <Button
                  size="lg"
                  className="mt-6 gap-2 bg-primary text-primary-foreground shadow-[0_0_28px_-6px] shadow-primary/50 hover:bg-primary/90"
                  nativeButton={false}
                  render={
                    <a
                      href={siteLinks.download}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <Download className="size-4" />
                  Download for Windows
                </Button>
              )}
            </Reveal>
          ))}
        </div>


        <Reveal delay={120} className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Windows 10 / 11 · Webcam · 4GB RAM minimum · Internet connection
            (for LLM grammar correction)
          </p>
        </Reveal>
      </div>
    </section>
  )
}
