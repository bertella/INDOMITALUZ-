import { BAND_CONFIG } from '../config/bandConfig';

export type AnalyticsEventName =
  | 'whatsapp_click'
  | 'form_submit'
  | 'instagram_click'
  | 'video_play'
  | 'booking_click';

export interface AnalyticsParams {
  origin?: string;
  label?: string;
  event_type?: string;
  media_id?: string;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

/**
 * Inicializa Google Tag Manager y/o Google Analytics 4 únicamente cuando
 * existen identificadores reales configurados en BAND_CONFIG o .env.
 */
export function initAnalytics(): void {
  if (initialized || typeof window === 'undefined') {
    return;
  }
  initialized = true;

  window.dataLayer = window.dataLayer || [];

  const { ga4MeasurementId, gtmId } = BAND_CONFIG.analytics;

  if (gtmId) {
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    document.head.appendChild(gtmScript);
  }

  if (ga4MeasurementId) {
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4MeasurementId)}`;
    document.head.appendChild(gaScript);

    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args as unknown as Record<string, unknown>);
    };
    window.gtag('js', new Date());
    window.gtag('config', ga4MeasurementId);
  }
}

/**
 * Registra eventos clave de conversión e interacción en GA4 / GTM:
 * - whatsapp_click (Clic en WhatsApp)
 * - form_submit (Envío de formulario)
 * - instagram_click (Clic en Instagram)
 * - video_play (Reproducción de videos)
 * - booking_click (Clic en contrataciones)
 */
export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsParams = {}): void {
  if (typeof window === 'undefined') {
    return;
  }

  const payload = {
    event: eventName,
    ...params,
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}
