import { Megaphone, Facebook, Users, Search, TrendingUp } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const learnings = [
  {
    num: '01',
    icon: Megaphone,
    title: 'Meta Ads',
    desc: 'Learn the fundamentals of creating and running effective Meta Ads.',
  },
  {
    num: '02',
    icon: Facebook,
    title: 'Facebook & Instagram Advertising',
    desc: 'Understand how businesses can use Facebook and Instagram to reach potential customers.',
  },
  {
    num: '03',
    icon: Users,
    title: 'Audience Targeting',
    desc: 'Learn how to identify and target the right audience for your business.',
  },
  {
    num: '04',
    icon: Search,
    title: 'Google Ads',
    desc: 'Understand the basics of Google Ads and how they can help generate customers.',
  },
  {
    num: '05',
    icon: TrendingUp,
    title: 'Customer Acquisition',
    desc: 'Learn practical ways online advertising can help attract customers and grow a new business.',
  },
];

export function LearningSection() {
  return (
    <section id="learn" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
            What You'll Learn
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            What You'll Learn
          </h2>
          <p className="mt-3 text-lg text-ink-600">
            A practical 2-hour introduction to Meta Ads, Google Ads and online customer acquisition.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learnings.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.num} delay={i * 70}>
                <article className="group h-full rounded-2xl border border-ink-200 bg-white p-6 transition-all hover:border-ink-300 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-ink-50 transition-transform group-hover:scale-105">
                      <Icon size={20} />
                    </span>
                    <span className="text-2xl font-extrabold text-ink-200">{item.num}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{item.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
