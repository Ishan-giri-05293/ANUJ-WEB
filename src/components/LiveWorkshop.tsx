import { Radio, BookOpen, MessagesSquare, GraduationCap, Calendar, Clock, Video, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { workshopConfig } from '@/config/workshop';
import { openWhatsAppRegistration } from '@/lib/whatsapp';

const benefits = [
  { icon: Radio, label: 'Live explanation' },
  { icon: BookOpen, label: 'Practical examples' },
  { icon: MessagesSquare, label: 'Interactive Q&A' },
  { icon: GraduationCap, label: 'Beginner-friendly guidance' },
];

export function LiveWorkshop() {
  const { workshop } = workshopConfig;

  return (
    <section id="live" className="bg-ink-900 py-16 text-ink-50 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-800 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
                </span>
                This is Live
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Learn It Live. Ask Questions. Understand How It Works.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-lg leading-relaxed text-ink-300">
                Join {workshopConfig.instructor.name} live on {workshop.platform} for a practical
                {' '}{workshop.duration} workshop covering online marketing, advertising and lead
                generation.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <Reveal key={b.label} delay={i * 50}>
                    <div className="flex items-center gap-3 rounded-xl border border-ink-700 bg-ink-800/60 px-4 py-3">
                      <Icon size={18} className="shrink-0 text-accent-400" />
                      <span className="text-sm font-medium text-ink-100">{b.label}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Details card */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-ink-700 bg-ink-800 p-6 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-400">
                Workshop Details
              </h3>
              <div className="mt-5 space-y-4">
                <Detail icon={<Calendar size={18} />} value={workshop.date} />
                <Detail icon={<Clock size={18} />} value={workshop.time} />
                <Detail icon={<Video size={18} />} value={`${workshop.duration} • ${workshop.platform}`} />
              </div>
              <button
                onClick={openWhatsAppRegistration}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-500 active:scale-95"
              >
                <MessageCircle size={18} />
                Join the Workshop — ₹{workshop.price}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Detail({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-700 text-accent-400">
        {icon}
      </span>
      <span className="text-base font-medium text-ink-100">{value}</span>
    </div>
  );
}
