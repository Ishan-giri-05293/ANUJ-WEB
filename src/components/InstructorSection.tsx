import { Award } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { workshopConfig } from '@/config/workshop';

export function InstructorSection() {
  const { instructor } = workshopConfig;

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <div className="grid items-center gap-10 sm:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="mx-auto max-w-xs overflow-hidden rounded-2xl border border-ink-200 bg-ink-100 shadow-lift">
              {instructor.photoUrl ? (
                <img
                  src={instructor.photoUrl}
                  alt={instructor.name}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-ink-200 to-ink-300">
                  <span className="text-6xl font-extrabold text-ink-500">
                    {instructor.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                Your Instructor
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                Meet {instructor.name}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-lg leading-relaxed text-ink-600 text-pretty">
                {instructor.bio}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Teaching live — no pre-recorded sessions
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700">
                  <Award size={15} className="text-accent-600" />
                  Certificate of Completion included
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
