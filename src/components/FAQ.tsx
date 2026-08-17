import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { workshopConfig } from '@/config/workshop';

const { workshop } = workshopConfig;

const faqs = [
  {
    q: 'Is this workshop live?',
    a: `Yes. The workshop will be conducted live on ${workshop.platform}.`,
  },
  {
    q: 'Who is this workshop for?',
    a: 'Students, freelancers and business owners looking to explore new earning and growth opportunities through digital marketing.',
  },
  {
    q: 'What will I learn?',
    a: 'The workshop covers online marketing, social media advertising, Meta Ads, Google Ads, SEO / Google Business Profile basics and lead generation.',
  },
  {
    q: 'How much does it cost?',
    a: `The workshop registration fee is ₹${workshop.price}.`,
  },
  {
    q: 'Will I receive a certificate?',
    a: 'Yes. Registered participants will receive a Certificate of Completion after the workshop.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-5 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-8 divide-y divide-ink-200 border-y border-ink-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 40}>
                <div>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-ink-900">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-ink-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-ink-600">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
