'use client'

import { Download, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LandmarkBackground } from '@/components/landmark-background'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-16"
    >
      <LandmarkBackground />

      {/* glow gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px] animate-pulse-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 -z-0 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary text-glow">
          <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
          For the unvocal. For the specially-abled.
        </span>

        <h1 className="mt-8 text-balance text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Sign.
          <br />
          <span className="bg-gradient-to-r from-primary via-violet-400 to-blue-400 bg-clip-text text-transparent">
            Be Heard.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Gestura converts your ASL gestures into live captions directly on your
          video feed — visible to everyone in your Google Meet, Zoom, or Teams
          call. No screen share. No typing. Just sign.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
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
            render={<a href="#demo" />}
          >
            <Play className="size-4" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
