import { GraduationCap, Briefcase, Store } from 'lucide-react';
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

export function AudienceSection() {
  return (
    <section id="audience" className="border-y border-ink-200 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
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
                  <h3 className="mt-4 text-lg font-semibold text-ink-900">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-base font-medium text-ink-600">
            If you're looking for a practical way to explore digital marketing and online growth,
            this workshop is for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
