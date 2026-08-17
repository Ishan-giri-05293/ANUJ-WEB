import { workshopConfig } from '@/config/workshop';

export function Footer() {
  const { instructor, workshop } = workshopConfig;

  return (
    <footer className="border-t border-ink-200 bg-ink-50 py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={workshopConfig.assets.academyLogo}
              alt="SkillUp Academy"
              className="h-10 w-auto max-w-[132px] object-contain"
              loading="lazy"
            />
            <span className="text-sm font-semibold text-ink-800">{instructor.name}</span>
          </div>
          <p className="text-center text-xs text-ink-500 sm:text-right">
            {workshop.title} • {workshop.date} • {workshop.platform}
          </p>
        </div>
        <p className="mt-6 text-center text-xs text-ink-400">
          © {new Date().getFullYear()} {instructor.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
