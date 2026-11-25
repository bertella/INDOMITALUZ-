import {
  BAND_CONFIG,
  buildWhatsAppUrl,
  getInstagramDisplayHandle,
  getInstagramUrl,
  isInstagramConfigured,
  isWhatsAppConfigured,
} from '../config/bandConfig';
import { trackEvent } from '../utils/analytics';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl();
  const instagramUrl = getInstagramUrl();

  return (
    <footer className="border-t border-[#E9E0D0]/10 bg-[#191817] py-12">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="font-display text-base font-semibold tracking-wide text-[#E9E0D0]">
            {BAND_CONFIG.brand.name}
          </p>
          <p className="mt-1 text-xs text-[#A39B8F]">
            © {currentYear} · {BAND_CONFIG.brand.location}
          </p>
        </div>

        <nav
          aria-label="Enlaces de pie de página"
          className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.14em] text-[#A39B8F]"
        >
          {isInstagramConfigured() && instagramUrl ? (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('instagram_click', { origin: 'footer' })}
              className="transition-colors hover:text-[#E9E0D0]"
            >
              Instagram ({getInstagramDisplayHandle()})
            </a>
          ) : (
            <a
              href="#contrataciones"
              onClick={() => trackEvent('instagram_click', { origin: 'footer_fallback' })}
              className="transition-colors hover:text-[#E9E0D0]"
            >
              Instagram
            </a>
          )}

          {isWhatsAppConfigured() && whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { origin: 'footer' })}
              className="transition-colors hover:text-[#B68B5A]"
            >
              WhatsApp
            </a>
          ) : (
            <a
              href="#contrataciones"
              onClick={() => trackEvent('whatsapp_click', { origin: 'footer_fallback' })}
              className="transition-colors hover:text-[#B68B5A]"
            >
              WhatsApp
            </a>
          )}

          <a
            href="#contrataciones"
            onClick={() => trackEvent('booking_click', { origin: 'footer' })}
            className="text-[#B68B5A] transition-colors hover:text-[#E9E0D0]"
          >
            Contrataciones
          </a>
        </nav>
      </div>
    </footer>
  );
}
