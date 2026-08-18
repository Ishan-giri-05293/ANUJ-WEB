import { Reveal } from '@/components/Reveal';

const problems = [
  {
    bold: '“Business start karna hai...”',
    rest: 'but online ads samajh nahi aa rahe.',
  },
  {
    bold: '“Meta Ads chalane hain...”',
    rest: 'but pata nahi kahan se start karein.',
  },
  {
    bold: '“Google Ads setup karna hai...”',
    rest: 'but budget aur targeting confuse kar rahi hai.',
  },
  {
    bold: '“Online customers laane hain...”',
    rest: 'but samajh nahi aa raha right audience kaun hai.',
  },
  {
    bold: '“Naya business grow karna hai...”',
    rest: 'but online advertising kaise kaam karti hai, clear nahi hai.',
  },
];

const academyBenefits = [
  {
    title: 'Practical, Not Just Theory',
    text: 'Learn through practical examples instead of getting lost in complicated theory.',
  },
  {
    title: 'Clear Direction',
    text: 'Understand where to start with Meta Ads, Google Ads and online marketing.',
  },
  {
    title: 'Beginner Friendly',
    text: 'No complicated jargon or prior digital marketing experience required.',
  },
  {
    title: 'Focused On Growth',
    text: 'Understand how digital marketing can support client acquisition and business growth.',
  },
  {
    title: 'Learn What Matters',
    text: 'Focus on the fundamentals instead of getting overwhelmed by hundreds of tools.',
  },
  {
    title: 'Actionable Learning',
    text: 'Leave with a clearer idea of what to learn, what to try and where to go next.',
  },
];

export function ProblemSection() {
  return (
    <section className="overflow-hidden border-y border-ink-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        {/* Problem Section */}
        <Reveal>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl">
            Business start karna hai, but online ads samajh nahi aa rahe?
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-4 text-lg text-ink-600">
            Agar aapki bhi yahi problems hain, you're not alone.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal as="li" key={i} delay={i * 60}>
              <div className="flex items-start gap-3 rounded-xl border border-ink-200 bg-ink-50 px-4 py-4 transition-colors hover:border-ink-300">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-500" />

                <p className="text-[0.95rem] leading-relaxed text-ink-700">
                  <span className="font-semibold text-ink-900">
                    {p.bold}
                  </span>{' '}
                  {p.rest}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mt-8 text-base font-medium text-ink-700">
            If you relate to even 2–3 of these, this workshop is for you.
          </p>
        </Reveal>
      </div>

      {/* Skill UP Academy Benefits */}
      <div className="mt-16 sm:mt-20">
        <Reveal>
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              Skill UP Academy
            </p>

            <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              Learn skills you can actually use.
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-600 sm:text-base">
              A practical approach to digital marketing, built to give you
              clarity instead of more confusion.
            </p>
          </div>
        </Reveal>

        {/* Infinite Moving Track */}
        <div className="relative mt-9 w-full overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24" />

          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24" />

          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {/* First set */}
            {academyBenefits.map((benefit, index) => (
              <div
                key={`first-${index}`}
                className="w-[280px] shrink-0 rounded-2xl border border-ink-200 bg-ink-50 p-5 transition-colors hover:border-ink-300 hover:bg-white sm:w-[320px]"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-500" />

                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Skill UP Academy
                  </span>
                </div>

                <h4 className="text-base font-bold text-ink-900">
                  {benefit.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {benefit.text}
                </p>
              </div>
            ))}

            {/* Duplicate set for seamless infinite loop */}
            {academyBenefits.map((benefit, index) => (
              <div
                key={`second-${index}`}
                aria-hidden="true"
                className="w-[280px] shrink-0 rounded-2xl border border-ink-200 bg-ink-50 p-5 transition-colors hover:border-ink-300 hover:bg-white sm:w-[320px]"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-500" />

                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Skill UP Academy
                  </span>
                </div>

                <h4 className="text-base font-bold text-ink-900">
                  {benefit.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local animation */}
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }

        .animate-marquee {
          animation: marquee 38s linear infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 32s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}