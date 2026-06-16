import { Reveal } from '@/components/reveal'

const stack = [
  { name: 'PyTorch', desc: 'Gesture Transformer model (1.8M params)' },
  { name: 'MediaPipe', desc: 'Real-time landmark extraction (258 features/frame)' },
  { name: 'pyvirtualcam', desc: 'Virtual camera output pipeline' },
  { name: 'PyQt6', desc: 'Desktop application UI' },
  { name: 'Gemini API', desc: 'LLM grammar correction layer' },
  { name: 'OpenCV', desc: 'Frame processing and caption compositor' },
]

export function TechStack() {
  return (
    <section
      id="tech"
      className="relative px-5 py-28 md:py-36 border-y border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Built With
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 100}
              className="group rounded-2xl border border-border bg-background/60 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              <p className="font-mono text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                {t.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Trained on{' '}
            <span className="font-medium text-foreground">WLASL-300</span> —
            3,667 videos across 300 ASL word classes.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
