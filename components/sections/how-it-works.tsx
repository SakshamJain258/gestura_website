import { Hand, BrainCircuit, Video } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const stages = [
  {
    n: '01',
    icon: Hand,
    title: 'Gesture Recognition',
    body: 'Your signing is captured by your webcam. MediaPipe extracts 258 skeletal landmarks per frame — tracking your hands, fingers, and pose in real time.',
  },
  {
    n: '02',
    icon: BrainCircuit,
    title: 'AI Word Prediction',
    body: 'A custom-trained Transformer model (GestureTransformer, 1.8M parameters) analyzes 60 frames at a time and predicts the signed word from a 300-word ASL vocabulary. If confidence is low, a fingerspelling fallback model reads individual letters (A–Z) to spell out names, places, and technical terms.',
  },
  {
    n: '03',
    icon: Video,
    title: 'Caption Overlay + Virtual Camera',
    body: 'Predicted words accumulate into a caption string. After a natural signing pause, an LLM (Gemini) reconstructs the raw word stream into grammatically correct English. Captions are burned onto your video frames and pushed as a virtual camera — “Gestura Cam” — at 1280×720, 30fps.',
  },
]

const pipeline = [
  'Webcam',
  'MediaPipe',
  'GestureTransformer',
  'CaptionBuffer',
  'Fingerspelling (fallback)',
  'Gemini API (grammar)',
  'FrameCompositor',
  'Virtual Camera',
  'Your Meeting',
]

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative px-5 py-28 md:py-36 border-y border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            Three layers of AI working together.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stages.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 130}
              className="relative flex flex-col rounded-2xl border border-border bg-background/60 p-7 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <s.icon className="size-5" />
                </span>
                <span className="font-mono text-sm text-muted-foreground">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* pipeline diagram */}
        <Reveal delay={120} className="mt-12">
          <div className="overflow-x-auto rounded-2xl border border-border bg-background/80 p-6">
            <div className="flex items-center gap-1 whitespace-nowrap font-mono text-xs sm:text-sm">
              <span className="mr-3 select-none text-muted-foreground">
                {'// pipeline'}
              </span>
              {pipeline.map((step, i) => (
                <span key={step} className="flex items-center gap-1">
                  <span className="rounded-md bg-primary/10 px-2.5 py-1 text-primary ring-1 ring-primary/20">
                    {step}
                  </span>
                  {i < pipeline.length - 1 && (
                    <span className="text-muted-foreground">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
