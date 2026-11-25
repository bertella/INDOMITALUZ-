import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {
  BAND_CONFIG,
  buildWhatsAppUrl,
  getInstagramDisplayHandle,
  getInstagramUrl,
  isInstagramConfigured,
} from '../config/bandConfig';
import { trackEvent } from '../utils/analytics';
import { InstagramIcon } from './InstagramIcon';

const NAV_LINKS = [
  { href: '#la-experiencia', label: 'La experiencia' },
  { href: '#en-escena', label: 'En escena' },
  { href: '#contrataciones', label: 'Contrataciones' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappUrl = buildWhatsAppUrl();
  const instagramConfigured = isInstagramConfigured();
  const instagramUrl = getInstagramUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleBookingClick = () => {
    trackEvent('booking_click', { origin: 'navbar' });
    trackEvent('whatsapp_click', { origin: 'navbar' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled || mobileOpen
          ? 'bg-[#191817]/95 backdrop-blur-md border-b border-[#E9E0D0]/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#portada"
          className="font-display text-lg font-semibold tracking-wide text-[#E9E0D0] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#B68B5A]"
        >
          {BAND_CONFIG.brand.name}
        </a>

        {/* Zone 2: Navigation Links */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#E9E0D0]/80 transition-colors duration-150 hover:text-[#E9E0D0] hover:underline underline-offset-4 decoration-[#B68B5A] whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Instagram Icon + Primary Action + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {instagramConfigured && instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('instagram_click', { origin: 'navbar' })}
              aria-label={`Instagram de ${BAND_CONFIG.brand.name} (${getInstagramDisplayHandle()})`}
              title={`Instagram ${getInstagramDisplayHandle()}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-[#E9E0D0]/80 transition-colors duration-150 hover:text-[#B68B5A]"
            >
              <InstagramIcon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBookingClick}
            className="hidden sm:inline-flex items-center justify-center rounded-sm border border-[#B68B5A]/75 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-[#E9E0D0] transition-colors duration-150 hover:bg-[#B68B5A] hover:text-[#191817] whitespace-nowrap shrink-0"
          >
            Contratar
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-10 w-10 items-center justify-center text-[#E9E0D0] transition-colors hover:text-[#B68B5A] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Menú móvil"
          className="border-t border-[#E9E0D0]/10 bg-[#191817] px-5 py-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 text-base text-[#E9E0D0] transition-colors hover:text-[#B68B5A]"
              >
                {link.label}
              </a>
            ))}
            {instagramConfigured && instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent('instagram_click', { origin: 'navbar_mobile' });
                  setMobileOpen(false);
                }}
                className="inline-flex items-center gap-2.5 py-1.5 text-base text-[#E9E0D0] transition-colors hover:text-[#B68B5A]"
              >
                <InstagramIcon className="h-4 w-4 text-[#B68B5A]" aria-hidden="true" />
                <span>Instagram ({getInstagramDisplayHandle()})</span>
              </a>
            )}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBookingClick}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[#B68B5A] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#191817] transition-colors hover:bg-[#c59a69]"
            >
              Contratar a Indómita Luz
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
