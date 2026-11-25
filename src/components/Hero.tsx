import { useState } from 'react';
import { BAND_CONFIG } from '../config/bandConfig';

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="portada"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#191817] pt-24 pb-16 sm:pb-24"
    >
      {/* Protagonist Analog Stage Photograph */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <img
            src={BAND_CONFIG.media.heroBackgroundUrl}
            alt="Indómita Luz tocando en vivo sobre escenario con iluminación cálida"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-[58%_32%]"
          />
        ) : (
          <div aria-hidden="true" className="h-full w-full bg-[#131211]" />
        )}

        {/* Measured Analog Scrim for High Contrast without Flashy Gradients */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#191817] via-[#191817]/45 to-[#191817]/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#191817]/80 via-[#191817]/25 to-transparent"
        />
      </div>

      {/* Editorial Cover Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#B68B5A]">
            {BAND_CONFIG.brand.name} · {BAND_CONFIG.brand.location}
          </p>

          <h1 className="mt-4 font-display text-balance text-4xl font-semibold tracking-tight text-[#E9E0D0] sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]">
            Hay canciones que nunca se van.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#E9E0D0]/85 sm:text-lg">
            Rock, pop y grandes clásicos argentinos de los años 70 y 80 en vivo. Cuatro músicos en
            escena para volver a sentir las canciones de siempre.
          </p>
        </div>
      </div>
    </section>
  );
}
