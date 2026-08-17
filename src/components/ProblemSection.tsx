import { Reveal } from '@/components/Reveal';

const problems = [
  { bold: 'Business start karna hai,', rest: 'but online ads samajh nahi aa rahe' },
  { bold: 'Meta Ads chalane hain,', rest: 'but pata nahi kahan se start karein' },
  { bold: 'Google Ads setup karna hai,', rest: 'but budget aur targeting confuse kar rahi hai' },
  { bold: 'Online customers laana hai,', rest: 'but reach sahi audience tak nahi pahunch rahi' },
  { bold: 'Naya business grow karna hai,', rest: 'but online advertising kaam nahi kar rahi' },
];

export function ProblemSection() {
  return (
    <section className="border-y border-ink-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink-900 text-balance sm:text-4xl">
            Business start karna hai, but online ads samajh nahi aa rahe?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 text-lg text-ink-600">
            Agar aapki bhi yahi problems hai, you're not alone.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal as="li" key={i} delay={i * 60}>
              <div className="flex items-start gap-3 rounded-xl border border-ink-200 bg-ink-50 px-4 py-4 transition-colors hover:border-ink-300">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                <p className="text-[0.95rem] leading-relaxed text-ink-700">
                  <span className="font-semibold text-ink-900">{p.bold}</span>{' '}
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
    </section>
  );
}
