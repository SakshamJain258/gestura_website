import { Reveal } from '@/components/reveal'

const stats = [
  {
    head: '1 in 7 people',
    body: 'have some form of speech or hearing disability',
  },
  {
    head: 'Video calls',
    body: 'remain inaccessible for most unvocal users',
  },
  {
    head: 'No solution',
    body: 'exists that works inside live video calls natively',
  },
]

export function Problem() {
  return (
    <section className="relative px-5 py-28 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-7xl font-bold tracking-tight text-glow sm:text-8xl md:text-9xl">
            <span className="bg-gradient-to-b from-foreground to-primary bg-clip-text text-transparent">
              70M+
            </span>
          </p>
          <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
            deaf individuals worldwide
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal
              key={s.head}
              delay={i * 120}
              className="rounded-2xl border border-border bg-card/60 p-7 text-center backdrop-blur-sm"
            >
              <p className="text-2xl font-semibold tracking-tight">{s.head}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-20 text-center">
          <p className="mx-auto max-w-3xl text-balance text-2xl font-light italic leading-snug text-foreground/90 sm:text-3xl md:text-4xl">
            “They can sign fluently. The world just isn&apos;t listening.”
          </p>
        </Reveal>
      </div>
    </section>
  )
}
