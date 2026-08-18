import { Calendar, Clock, Video, Check, MessageCircle } from 'lucide-react';
import { workshopConfig } from '@/config/workshop';
import { openWhatsAppRegistration } from '@/lib/whatsapp';

const reassurances = ['Live on Google Meet', 'Beginner Friendly', 'Practical Learning'];

export function Hero() {
  const { workshop, instructor } = workshopConfig;

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent-200/30 blur-3xl" />
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-ink-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-300 bg-accent-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-600" />
              </span>
              {workshop.eyebrow}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-[3.4rem]">
              Learn How to Run Meta Ads
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 text-pretty">
              Learn how to use Meta Ads and Google Ads to attract customers online and grow a new
              business through practical, beginner-friendly advertising strategies.
            </p>

            {/* Workshop meta */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 text-sm font-medium text-ink-700">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={16} className="text-accent-600" />
                {workshop.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={16} className="text-accent-600" />
                {workshop.time}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Video size={16} className="text-accent-600" />
                {workshop.duration} • {workshop.platform}
              </span>
            </div>

            <button
              onClick={openWhatsAppRegistration}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-base font-semibold text-ink-50 shadow-lift transition-all hover:bg-ink-800 hover:shadow-lift active:scale-95"
            >
              <MessageCircle size={18} />
              Join the Workshop — ₹{workshop.price}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-ink-500">
              {reassurances.map((item, i) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  {i > 0 && <span className="text-ink-300">•</span>}
                  <Check size={14} className="text-ink-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: offer card */}
          <div className="lg:pl-8">
            <div className="relative rounded-2xl border border-ink-200 bg-white p-6 shadow-lift sm:p-8">
              <div className="mb-6 overflow-hidden rounded-xl border border-ink-200 bg-ink-50">
                <img
                  src={workshopConfig.assets.workshopPoster}
                  alt="Learn How to Run Meta Advertisements workshop poster"
                  className="mx-auto h-auto max-h-[460px] w-full object-contain"
                />
              </div>
              <div className="absolute -top-3 left-6 rounded-full bg-accent-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                Live Workshop
              </div>

              <p className="text-sm font-medium text-ink-500">With {instructor.name}</p>

              <div className="mt-3">
                <span className="text-5xl font-extrabold tracking-tight text-ink-900">
                  ₹{workshop.price}
                </span>
              </div>

              <div className="mt-6 space-y-3 border-t border-ink-100 pt-5">
                <DetailRow icon={<Calendar size={17} />} label="Date" value={workshop.date} />
                <DetailRow icon={<Clock size={17} />} label="Time" value={workshop.time} />
                <DetailRow icon={<Video size={17} />} label="Platform" value={`${workshop.duration} • ${workshop.platform}`} />
              </div>

              <button
                onClick={openWhatsAppRegistration}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-700 active:scale-95"
              >
                <MessageCircle size={18} />
                Join the Workshop — ₹{workshop.price}
              </button>

              <p className="mt-3 text-center text-xs text-ink-400">
                Register via WhatsApp to confirm your seat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-ink-600">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</p>
        <p className="truncate text-sm font-semibold text-ink-800">{value}</p>
      </div>
    </div>
  );
}
