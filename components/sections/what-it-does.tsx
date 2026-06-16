import Image from 'next/image'
import { Sparkle, Mic, Video, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const points = [
  'Reads your webcam in real time',
  'Detects ASL gestures using AI (300-word vocabulary)',
  'Burns captions directly onto your video feed',
  'Outputs as a virtual camera — “Gestura Cam”',
  'Other participants see your face + captions automatically',
  'Works on Google Meet, Zoom, Microsoft Teams, and any app that supports a webcam input',
]

export function WhatItDoes() {
  return (
    <section id="what" className="relative px-5 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            What Gestura Does
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          {/* Video call mockup */}
          <Reveal>
            <div className="relative rounded-2xl border border-border bg-card/80 p-3 shadow-2xl shadow-primary/10 ring-1 ring-primary/15">
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-tr from-primary/30 via-transparent to-blue-500/20 blur-md" />
              {/* meet top bar */}
              <div className="flex items-center justify-between px-2 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-500/80" />
                  <span className="size-2.5 rounded-full bg-amber-400/80" />
                  <span className="size-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[11px] font-medium text-muted-foreground">
                  Gestura Cam · Live
                </span>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-xl bg-background">
                <Image
                  src="/images/signing-figure.png"
                  alt="An abstract figure signing, shown with a glowing skeletal hand-landmark overlay"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* rec pill */}
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-medium backdrop-blur">
                  <span className="size-1.5 rounded-full bg-red-500 animate-caption-blink" />
                  REC
                </div>
                {/* caption bar */}
                <div className="absolute inset-x-3 bottom-3 rounded-lg bg-background/70 px-4 py-2.5 backdrop-blur-md ring-1 ring-border">
                  <p className="text-center text-sm font-medium tracking-wide text-foreground">
                    HELLO WHAT IS YOUR NAME
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* bullets */}
          <div>
            <ul className="space-y-4">
              {points.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 80}>
                  <div className="flex items-start gap-3">
                    <Sparkle className="mt-0.5 size-5 shrink-0 fill-primary text-primary" />
                    <span className="text-base leading-relaxed text-foreground/90">
                      {p}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal
              delay={120}
              className="mt-8 rounded-xl border border-border bg-secondary/50 p-4"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                No screen sharing required. No extra software for other
                participants. Just your gestures.
              </p>
            </Reveal>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5">
                <Mic className="size-3.5 text-primary" /> Real-time
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5">
                <Video className="size-3.5 text-primary" /> Virtual camera
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5">
                <Users className="size-3.5 text-primary" /> Everyone sees it
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
