import { Check, MessageCircle, Award } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { workshopConfig } from '@/config/workshop';
import { openWhatsAppRegistration } from '@/lib/whatsapp';

const features = [
  '2-hour live workshop',
  'Meta Ads & Facebook/Instagram Advertising',
  'Google Ads & Audience Targeting',
  'Customer Acquisition strategies',
  'Interactive Q&A',
  'Certificate of Completion',
];

export function PricingSection() {
  const { workshop } = workshopConfig;

  return (
    <section id="pricing" className="border-y border-ink-200 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-5 sm:px-6">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-accent-600">
            The Offer
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Join the Live Workshop for ₹{workshop.price}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-ink-200 bg-ink-50 shadow-lift">
            <div className="border-b border-ink-200 bg-white px-6 py-8 text-center sm:px-10">
              <p className="text-6xl font-extrabold tracking-tight text-ink-900">
                ₹{workshop.price}
              </p>
              <p className="mt-3 text-base text-ink-600">
                One live workshop. Practical learning. Real interaction.
              </p>
            </div>

            <div className="px-6 py-6 sm:px-10">
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-ink-800">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openWhatsAppRegistration}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-base font-semibold text-ink-50 transition-all hover:bg-ink-800 active:scale-95"
              >
                <MessageCircle size={18} />
                Join Workshop — ₹{workshop.price}
              </button>

              <div className="mt-6 rounded-xl border border-ink-200 bg-white p-4">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-ink-800">
                  <Award size={16} className="text-accent-500" />
                  Certificate of Completion
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">
                  Every registered participant will receive a Certificate of Completion after the workshop.
                </p>
                <div className="mt-4 overflow-hidden rounded-lg border border-ink-200 bg-ink-50">
                  <img
                    src={workshopConfig.assets.certificatePreview}
                    alt="Certificate of Completion preview"
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
