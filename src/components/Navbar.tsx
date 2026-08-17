import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { workshopConfig } from '@/config/workshop';
import { openWhatsAppRegistration } from '@/lib/whatsapp';

const navLinks = [
  { label: 'What You\'ll Learn', href: '#learn' },
  { label: 'Live Workshop', href: '#live' },
  { label: 'Who It\'s For', href: '#audience' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-50/85 backdrop-blur-md border-b border-ink-200 shadow-soft'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-ink-900"
          aria-label={`${workshopConfig.instructor.name} — Home`}
        >
          <img
            src={workshopConfig.assets.academyLogo}
            alt="SkillUp Academy"
            className="h-8 w-auto max-w-[36px] object-contain"
          />
          <span>{workshopConfig.instructor.name}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={openWhatsAppRegistration}
            className="flex items-center gap-1.5 rounded-full bg-ink-900 px-5 py-2 text-sm font-semibold text-ink-50 transition-all hover:bg-ink-800 hover:shadow-lift active:scale-95"
          >
            <MessageCircle size={15} />
            Join Workshop — ₹149
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-800 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-ink-200 bg-ink-50 md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                openWhatsAppRegistration();
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-ink-50 transition-all hover:bg-ink-800 active:scale-95"
            >
              <MessageCircle size={16} />
              Join Workshop — ₹149
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
