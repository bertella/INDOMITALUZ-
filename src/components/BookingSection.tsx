import { useState, type FormEvent } from 'react';
import { Check, Copy, ExternalLink, MessageCircle } from 'lucide-react';
import {
  BAND_CONFIG,
  buildWhatsAppUrl,
  getInstagramDisplayHandle,
  getInstagramUrl,
  isInstagramConfigured,
  isWhatsAppConfigured,
} from '../config/bandConfig';
import { trackEvent } from '../utils/analytics';

interface BookingFormState {
  venueName: string;
  contactName: string;
  estimatedDate: string;
  location: string;
  eventType: string;
  phone: string;
  message: string;
}

type FormErrors = Partial<Record<keyof BookingFormState, string>>;

const INITIAL_STATE: BookingFormState = {
  venueName: '',
  contactName: '',
  estimatedDate: '',
  location: '',
  eventType: 'Bar / Pub / Cervecería',
  phone: '',
  message: '',
};

const EVENT_TYPE_OPTIONS = [
  'Bar / Pub / Cervecería',
  'Restaurante / Parador',
  'Espacio cultural',
  'Evento privado',
  'Productora / Ciclo musical',
  'Otro',
];

function validateForm(values: BookingFormState): FormErrors {
  const errors: FormErrors = {};

  if (values.venueName.trim().length < 2) {
    errors.venueName = 'Indicá el nombre del establecimiento o evento.';
  }
  if (values.contactName.trim().length < 2) {
    errors.contactName = 'Ingresá tu nombre y apellido.';
  }
  if (!values.estimatedDate.trim()) {
    errors.estimatedDate = 'Indicá una fecha estimada.';
  }
  if (values.location.trim().length < 2) {
    errors.location = 'Indicá la localidad o zona.';
  }
  if (!values.eventType.trim()) {
    errors.eventType = 'Seleccioná el tipo de evento.';
  }

  const phoneDigits = values.phone.replace(/\D/g, '');
  if (phoneDigits.length < 7) {
    errors.phone = 'Ingresá un teléfono o WhatsApp válido (mínimo 7 dígitos).';
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Contanos brevemente sobre el lugar o la fecha (mín. 10 caracteres).';
  }

  return errors;
}

function formatWhatsAppInquiry(values: BookingFormState): string {
  return [
    'Hola Indómita Luz, quiero consultar para contratar un show en vivo:',
    '',
    `*Establecimiento / Evento:* ${values.venueName.trim()}`,
    `*Contacto:* ${values.contactName.trim()}`,
    `*Fecha estimada:* ${values.estimatedDate.trim()}`,
    `*Localidad:* ${values.location.trim()}`,
    `*Tipo de evento:* ${values.eventType.trim()}`,
    `*Teléfono / WhatsApp:* ${values.phone.trim()}`,
    `*Mensaje:* ${values.message.trim()}`,
  ].join('\n');
}

export function BookingSection() {
  const [form, setForm] = useState<BookingFormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const whatsappConfigured = isWhatsAppConfigured();
  const directWhatsappUrl = submittedMessage ? buildWhatsAppUrl(submittedMessage) : null;
  const quickWhatsappUrl = buildWhatsAppUrl();
  const instagramConfigured = isInstagramConfigured();
  const instagramUrl = getInstagramUrl();

  const handleChange = (field: keyof BookingFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const compiled = formatWhatsAppInquiry(form);
    setSubmittedMessage(compiled);
    setCopied(false);

    trackEvent('form_submit', {
      origin: 'booking_section',
      event_type: form.eventType,
    });
  };

  const handleCopyMessage = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contrataciones"
      className="border-t border-[#E9E0D0]/10 bg-[#191817] py-24 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left Column: Core Show Specs & Direct WhatsApp CTA */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8D403C]">
              Contrataciones
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-[#E9E0D0] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              Llevá a Indómita Luz a tu escenario.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#E9E0D0]/80">
              Disponible para presentaciones en bares, pubs, restaurantes, espacios culturales y
              eventos privados.
            </p>

            <ul className="mt-8 space-y-2.5 text-sm text-[#E9E0D0]/75">
              <li>Show de aproximadamente 60 minutos</li>
              <li>Formación de cuatro músicos</li>
              <li>Sonido propio</li>
              <li>Córdoba y alrededores</li>
            </ul>

            {/* Direct WhatsApp Button */}
            <div className="mt-10">
              {whatsappConfigured && quickWhatsappUrl ? (
                <a
                  href={quickWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { origin: 'contact_primary' })}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-sm bg-[#B68B5A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#191817] transition-colors duration-150 hover:bg-[#c59a69]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Contactar por WhatsApp</span>
                </a>
              ) : (
                <div className="space-y-2">
                  <a
                    href="#formulario-contacto"
                    onClick={() => trackEvent('whatsapp_click', { origin: 'contact_to_form' })}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-sm bg-[#B68B5A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#191817] transition-colors duration-150 hover:bg-[#c59a69]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Contactar por WhatsApp</span>
                  </a>
                  <p className="text-xs text-[#A39B8F]">
                    Configurá <span className="text-[#E9E0D0]">VITE_WHATSAPP_NUMBER</span> o{' '}
                    <span className="text-[#E9E0D0]">src/config/bandConfig.ts</span> para activar
                    el enlace directo.
                  </p>
                </div>
              )}
            </div>

            {/* Quiet Secondary Links */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#E9E0D0]/10 pt-6 text-sm text-[#A39B8F]">
              {instagramConfigured && instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('instagram_click', { origin: 'contact_section' })}
                  className="transition-colors hover:text-[#B68B5A]"
                >
                  Instagram ({getInstagramDisplayHandle()})
                </a>
              ) : (
                <span>Instagram: {getInstagramDisplayHandle()}</span>
              )}

              {BAND_CONFIG.contact.email && (
                <a
                  href={`mailto:${BAND_CONFIG.contact.email}?subject=${encodeURIComponent(
                    'Consulta de contratación - Indómita Luz'
                  )}`}
                  className="transition-colors hover:text-[#B68B5A]"
                >
                  {BAND_CONFIG.contact.email}
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Clean Minimalist Validated Form */}
          <div id="formulario-contacto" className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="venueName"
                    className="block text-xs uppercase tracking-[0.14em] text-[#A39B8F]"
                  >
                    Establecimiento o evento *
                  </label>
                  <input
                    id="venueName"
                    name="venueName"
                    type="text"
                    value={form.venueName}
                    onChange={(e) => handleChange('venueName', e.target.value)}
                    placeholder="Ej. Bar, espacio cultural o evento privado"
                    aria-invalid={Boolean(errors.venueName)}
                    aria-describedby={errors.venueName ? 'error-venueName' : undefined}
                    className="mt-2 w-full border-b border-[#E9E0D0]/20 bg-transparent py-2.5 text-sm text-[#E9E0D0] placeholder-[#A39B8F]/50 transition-colors focus:border-[#B68B5A] focus:outline-none"
                  />
                  {errors.venueName && (
                    <p id="error-venueName" className="mt-1.5 text-xs text-[#B68B5A]">
                      {errors.venueName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-xs uppercase tracking-[0.14em] text-[#A39B8F]"
                  >
                    Nombre del contacto *
                  </label>
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    value={form.contactName}
                    onChange={(e) => handleChange('contactName', e.target.value)}
                    placeholder="Tu nombre y apellido"
                    aria-invalid={Boolean(errors.contactName)}
                    aria-describedby={errors.contactName ? 'error-contactName' : undefined}
                    className="mt-2 w-full border-b border-[#E9E0D0]/20 bg-transparent py-2.5 text-sm text-[#E9E0D0] placeholder-[#A39B8F]/50 transition-colors focus:border-[#B68B5A] focus:outline-none"
                  />
                  {errors.contactName && (
                    <p id="error-contactName" className="mt-1.5 text-xs text-[#B68B5A]">
                      {errors.contactName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="estimatedDate"
                    className="block text-xs uppercase tracking-[0.14em] text-[#A39B8F]"
                  >
                    Fecha estimada *
                  </label>
                  <input
                    id="estimatedDate"
                    name="estimatedDate"
                    type="date"
                    value={form.estimatedDate}
                    onChange={(e) => handleChange('estimatedDate', e.target.value)}
                    aria-invalid={Boolean(errors.estimatedDate)}
                    aria-describedby={errors.estimatedDate ? 'error-estimatedDate' : undefined}
                    className="mt-2 w-full border-b border-[#E9E0D0]/20 bg-transparent py-2.5 text-sm text-[#E9E0D0] transition-colors focus:border-[#B68B5A] focus:outline-none [color-scheme:dark]"
                  />
                  {errors.estimatedDate && (
                    <p id="error-estimatedDate" className="mt-1.5 text-xs text-[#B68B5A]">
                      {errors.estimatedDate}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-xs uppercase tracking-[0.14em] text-[#A39B8F]"
                  >
                    Localidad *
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={form.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    placeholder="Córdoba y alrededores"
                    aria-invalid={Boolean(errors.location)}
                    aria-describedby={errors.location ? 'error-location' : undefined}
                    className="mt-2 w-full border-b border-[#E9E0D0]/20 bg-transparent py-2.5 text-sm text-[#E9E0D0] placeholder-[#A39B8F]/50 transition-colors focus:border-[#B68B5A] focus:outline-none"
                  />
                  {errors.location && (
                    <p id="error-location" className="mt-1.5 text-xs text-[#B68B5A]">
                      {errors.location}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-xs uppercase tracking-[0.14em] text-[#A39B8F]"
                  >
                    Tipo de evento *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={form.eventType}
                    onChange={(e) => handleChange('eventType', e.target.value)}
                    aria-invalid={Boolean(errors.eventType)}
                    aria-describedby={errors.eventType ? 'error-eventType' : undefined}
                    className="mt-2 w-full border-b border-[#E9E0D0]/20 bg-[#191817] py-2.5 text-sm text-[#E9E0D0] transition-colors focus:border-[#B68B5A] focus:outline-none"
                  >
                    {EVENT_TYPE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <p id="error-eventType" className="mt-1.5 text-xs text-[#B68B5A]">
                      {errors.eventType}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-[0.14em] text-[#A39B8F]"
                  >
                    Teléfono o WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="351 000 0000"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'error-phone' : undefined}
                    className="mt-2 w-full border-b border-[#E9E0D0]/20 bg-transparent py-2.5 text-sm text-[#E9E0D0] placeholder-[#A39B8F]/50 transition-colors focus:border-[#B68B5A] focus:outline-none"
                  />
                  {errors.phone && (
                    <p id="error-phone" className="mt-1.5 text-xs text-[#B68B5A]">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-[0.14em] text-[#A39B8F]"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Horario estimado, características del espacio o cualquier detalle de la fecha."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                  className="mt-2 w-full border-b border-[#E9E0D0]/20 bg-transparent py-2.5 text-sm text-[#E9E0D0] placeholder-[#A39B8F]/50 transition-colors focus:border-[#B68B5A] focus:outline-none"
                />
                {errors.message && (
                  <p id="error-message" className="mt-1.5 text-xs text-[#B68B5A]">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex min-h-[46px] items-center justify-center rounded-sm border border-[#E9E0D0]/30 px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#E9E0D0] transition-colors duration-150 hover:border-[#B68B5A] hover:bg-[#B68B5A] hover:text-[#191817]"
              >
                Preparar consulta por WhatsApp
              </button>
            </form>

            {/* Validated WhatsApp Ready Output */}
            {submittedMessage && (
              <div
                role="status"
                aria-live="polite"
                className="mt-8 border-t border-[#B68B5A]/45 pt-6"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#B68B5A]">
                  Consulta lista para enviar
                </p>
                <pre className="mt-3 whitespace-pre-wrap text-xs leading-relaxed text-[#E9E0D0]/85">
                  {submittedMessage}
                </pre>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  {directWhatsappUrl ? (
                    <a
                      href={directWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent('whatsapp_click', {
                          origin: 'booking_form_confirmed',
                          event_type: form.eventType,
                        })
                      }
                      className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-sm bg-[#B68B5A] px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#191817] transition-colors hover:bg-[#c59a69]"
                    >
                      <span>Abrir en WhatsApp</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="text-xs text-[#A39B8F]">
                      Falta configurar <span className="text-[#E9E0D0]">VITE_WHATSAPP_NUMBER</span>{' '}
                      para abrir WhatsApp directo.
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex min-h-[42px] items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[#E9E0D0] transition-colors hover:text-[#B68B5A]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#B68B5A]" aria-hidden="true" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copiar mensaje</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
