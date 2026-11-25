const FORMATION_MEMBERS = ['Voz femenina', 'Guitarra', 'Bajo', 'Batería'] as const;

export function AboutBand() {
  return (
    <section
      id="la-experiencia"
      className="border-t border-[#E9E0D0]/10 bg-[#191817] py-24 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Editorial Title Column */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8D403C]">
              La experiencia
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-[#E9E0D0] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              El pulso vivo de los clásicos de siempre.
            </h2>

            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[#A39B8F]">
              {FORMATION_MEMBERS.join(' · ')}
            </p>
          </div>

          {/* Concise Musical Proposal */}
          <div className="lg:col-span-7 lg:flex lg:items-center">
            <div className="max-w-xl space-y-5 text-base leading-relaxed text-[#E9E0D0]/85 sm:text-lg sm:leading-relaxed">
              <p>
                Indómita Luz interpreta rock, pop y grandes clásicos argentinos, principalmente de
                los años 70 y 80. Canciones que despiertan recuerdos, atraviesan distintas edades y
                vuelven a sonar con el pulso real de una banda sobre el escenario.
              </p>
              <p>
                Una propuesta cercana y auténtica, pensada para emocionar al público y acompañar la
                noche de bares, restaurantes, espacios culturales y celebraciones privadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
