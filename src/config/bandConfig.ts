/**
 * CONFIGURACIÓN CENTRAL DE INDÓMITA LUZ
 * --------------------------------------------------------------------------
 */

export const BAND_CONFIG = {
  brand: {
    name: 'INDÓMITA LUZ',
    tagline: 'EL ROCK NACIONAL SIGUE VIVO',
    subtitle: 'Grandes canciones. Rock en vivo.',
    location: 'Córdoba, Argentina',
    priorityZone: 'Córdoba Capital (especialmente zona norte) y alrededores',
    showDuration: 'Aprox. 60 minutos',
    repertoireCount: 'Aprox. 20 canciones',
    equipment: 'Sonido propio',
    formationCount: '4 músicos en escena',
  },

  contact: {
    whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.trim() || '',
    email: (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim() || '',
    defaultWhatsappGreeting:
      'Hola Indómita Luz, me contacto desde la web para consultar disponibilidad y presupuesto para un show en vivo.',
  },

  social: {
    instagramHandle: 'indomitaluzbanda',
    instagramUrl:
      'https://www.instagram.com/indomitaluzbanda?utm_source=ig_web_button_share_sheet&cnvx=ZDNlZDc0MzIxNw==',
  },

  media: {
    heroBackgroundUrl: '/assets/aistudio/IMG-20260926-WA0040_2a9d67e7.jpg',
  },

  analytics: {
    ga4MeasurementId: (import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined)?.trim() || '',
    gtmId: (import.meta.env.VITE_GTM_ID as string | undefined)?.trim() || '',
  },
} as const;

export function sanitizeWhatsappDigits(raw: string): string {
  return raw.replace(/\D/g, '');
}

export function isWhatsAppConfigured(): boolean {
  const digits = sanitizeWhatsappDigits(BAND_CONFIG.contact.whatsappNumber);
  return digits.length >= 8;
}

export function buildWhatsAppUrl(customMessage?: string): string | null {
  const digits = sanitizeWhatsappDigits(BAND_CONFIG.contact.whatsappNumber);
  if (digits.length < 8) {
    return null;
  }
  const text = customMessage?.trim() || BAND_CONFIG.contact.defaultWhatsappGreeting;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export function isInstagramConfigured(): boolean {
  return true;
}

export function getInstagramDisplayHandle(): string {
  return `@${BAND_CONFIG.social.instagramHandle}`;
}

export function getInstagramUrl(): string {
  return BAND_CONFIG.social.instagramUrl;
}