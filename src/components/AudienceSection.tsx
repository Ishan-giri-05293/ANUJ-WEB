import { GraduationCap, Briefcase, Store, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students',
    desc: 'Looking to start earning online and explore new income opportunities.',
  },
  {
    icon: Briefcase,
    title: 'Freelancers',
    desc: 'Looking to attract more clients and grow their freelance work.',
  },
  {
    icon: Store,
    title: 'Business Owners',
    desc: 'Looking to attract more customers and grow their business online.',
  },
];

const beforePoints = [
  'I don’t know where to start.',
  'I wasted money on ads.',
  'My competitors are ahead.',
  'Social media feels like a mystery.',
  'I have zero online sales.',
  'Content creation is exhausting.',
  'I feel stuck and overwhelmed.',
];

const afterPoints = [
  'Now, I have a clear path to follow.',
  'I finally know what works and why.',
  'My ads are bringing real customers.',
  'Social media can become a consistent income channel.',
  'I can see how online marketing creates new opportunities.',
  'Content creation feels easier and more purposeful.',
  'I feel confident, free, unstoppable.',
];

export function AudienceSection() {
  return (
    <section
      id="audience"
      className="border-y border-ink-200 bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6">

        {/* Before / After */}
        <Reveal>
          <div className="mb-14">
            <div className="mb-8 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                The transformation
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                From feeling stuck to knowing what to do next.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Before */}
              <div className="rounded-3xl border border-ink-200 bg-ink-50 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-sm font-bold text-white">
                    01
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                      Before the workshop
                    </p>

                    <h3 className="mt-0.5 text-xl font-bold text-ink-900">
                      Frustration
                    </h3>
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  {beforePoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-400" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="rounded-3xl border border-ink-900 bg-ink-900 p-6 text-white shadow-lift sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-ink-900">
                    02
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      After the workshop
                    </p>

                    <h3 className="mt-0.5 text-xl font-bold text-white">
                      Freedom
                    </h3>
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  {afterPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-white/85"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-ink-500">
              <span>Learn the skills</span>
              <ArrowRight size={16} />
              <span>Understand what works</span>
              <ArrowRight size={16} />
              <span>Take action</span>
            </div>
          </div>
        </Reveal>

        {/* Audience */}
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Who is this workshop for?
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {audiences.map((a, i) => {
            const Icon = a.icon;

            return (
              <Reveal key={a.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-ink-200 bg-ink-50 p-6 transition-all hover:border-ink-300 hover:bg-white hover:shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-ink-50">
                    <Icon size={20} />
                  </span>

                  <h3 className="mt-4 text-lg font-semibold text-ink-900">
                    {a.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {a.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-base font-medium text-ink-600">
            If you're looking for a practical way to explore digital marketing
            and online growth, this workshop is for you.
          </p>
        </Reveal>

      </div>
    </section>
  );
}