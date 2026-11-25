import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/bandConfig';
import { trackEvent } from '../utils/analytics';

export function FloatingWhatsApp() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent('whatsapp_click', {
          origin: 'floating_button',
        })
      }
      aria-label="Consultar por WhatsApp a Indómita Luz"
      className="group fixed right-4 bottom-4 z-30 inline-flex h-11 items-center gap-2 rounded-sm border border-[#B68B5A]/65 bg-[#191817]/95 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#E9E0D0] backdrop-blur-md transition-colors duration-150 hover:bg-[#B68B5A] hover:text-[#191817] sm:right-6 sm:bottom-6"
    >
      <MessageCircle
        className="h-4 w-4 shrink-0 text-[#B68B5A] transition-colors group-hover:text-[#191817]"
        aria-hidden="true"
      />
      <span className="whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
