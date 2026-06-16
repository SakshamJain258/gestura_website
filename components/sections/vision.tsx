import { CheckCircle2, Loader2, Square } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const milestones = [
  {
    status: 'done' as const,
    title: 'Layer 1 — Gesture Recognition',
    body: '300-word ASL vocabulary. Real-time prediction. GestureTransformer trained on WLASL-300.',
  },
  {
    status: 'done' as const,
    title: 'Layer 2 — Fingerspelling Fallback',
    body: 'A–Z letter recognition for names, places, and words outside the core vocabulary.',
  },
  {
    status: 'done' as const,
    title: 'Layer 3 — LLM Grammar Correction',
    body: 'Gemini API converts raw ASL word streams into grammatically correct natural English.',
  },
]

function StatusBadge({ status }: { status: 'done' | 'progress' | 'planned' }) {
  if (status === 'done')
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
        <CheckCircle2 className="size-3.5" /> Shipped
      </span>
    )
  if (status === 'progress')
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
        <Loader2 className="size-3.5 animate-spin" /> In progress
      </span>
    )
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
      <Square className="size-3.5" /> Planned
    </span>
  )
}

export function Vision() {
  return (
    <section className="relative px-5 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Where This Is Going
          </h2>
        </Reveal>

        <div className="mt-14 space-y-5">
          {milestones.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 120}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold tracking-tight">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.body}
                </p>
              </div>
              <StatusBadge status={m.status} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Built by a 3rd-year CS student. Powered by obsession with building
            things that matter.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
