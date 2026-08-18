import { Reveal } from '@/components/Reveal';
import { workshopConfig } from '@/config/workshop';
import { openWhatsAppRegistration } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';

export function FinalCTA() {
  const { workshop } = workshopConfig;

  return (
    <section className="bg-ink-900 py-16 text-ink-50 sm:py-24">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl text-balance">
            Ready to Start Attracting Customers Online?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 text-lg text-ink-300">
            Join Anuj's LIVE workshop and learn how Meta Ads and Google Ads can help you grow your business online.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <button
            onClick={openWhatsAppRegistration}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-base font-semibold text-white shadow-lift transition-all hover:bg-accent-500 active:scale-95"
          >
            <MessageCircle size={20} />
            Join Workshop — ₹{workshop.price}
          </button>
          <p className="mt-4 text-sm text-ink-400">
            Sunday, 23 August • {workshop.time} • {workshop.platform}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
