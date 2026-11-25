import { BACKLINE_OWN, VENUE_REQUIREMENTS } from '../data/band';

export function BacklineSection() {
  return (
    <section
      id="backline"
      className="border-t border-[#E9E0D0]/10 bg-[#191817] py-24 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Editorial Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8D403C]">
            Backline y sonido
          </p>
          <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-[#E9E0D0] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
            Lo que llevamos y lo que necesita el espacio.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#E9E0D0]/80">
            Trabajamos tanto en bares y salas con sonido instalado como en espacios sin equipamiento
            previo. Todo el backline se adapta a la acústica del lugar.
          </p>
        </div>

        {/* Two-Column Hairline Spec Lists */}
        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-xl font-semibold text-[#B68B5A]">
              01. Equipamiento propio de la banda
            </h3>
            <dl className="mt-6 divide-y divide-[#E9E0D0]/10 border-t border-b border-[#E9E0D0]/10">
              {BACKLINE_OWN.map((entry) => (
                <div key={entry.id} className="py-5">
                  <dt className="text-base font-medium text-[#E9E0D0]">{entry.item}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-[#A39B8F]">{entry.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-[#B68B5A]">
              02. Requerimientos del lugar
            </h3>
            <dl className="mt-6 divide-y divide-[#E9E0D0]/10 border-t border-b border-[#E9E0D0]/10">
              {VENUE_REQUIREMENTS.map((entry) => (
                <div key={entry.id} className="py-5">
                  <dt className="text-base font-medium text-[#E9E0D0]">{entry.item}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-[#A39B8F]">{entry.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
