import { WORK_STEPS, WORK_SUMMARY } from '../data/band';

export function WorkModeSection() {
  return (
    <section
      id="modalidad"
      className="border-t border-[#E9E0D0]/10 bg-[#131211] py-24 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Intro + Key Practical Facts */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8D403C]">
              Modalidad de trabajo
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-[#E9E0D0] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              Cómo preparamos cada fecha.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#E9E0D0]/80">
              Una dinámica simple y ordenada para que la noche salga bien desde la prueba de sonido
              hasta el último acorde.
            </p>

            <dl className="mt-10 divide-y divide-[#E9E0D0]/10 border-t border-b border-[#E9E0D0]/10">
              {WORK_SUMMARY.map((item) => (
                <div key={item.id} className="py-4">
                  <dt className="text-xs uppercase tracking-[0.16em] text-[#A39B8F]">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-[#E9E0D0] tabular-nums">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Column: Numbered Workflow Steps */}
          <div className="lg:col-span-7">
            <ol className="divide-y divide-[#E9E0D0]/10 border-t border-b border-[#E9E0D0]/10">
              {WORK_STEPS.map((step) => (
                <li
                  key={step.number}
                  className="grid grid-cols-1 gap-2 py-7 sm:grid-cols-12 sm:gap-6"
                >
                  <span className="font-display text-lg font-semibold text-[#B68B5A] tabular-nums sm:col-span-2">
                    {step.number}
                  </span>
                  <div className="sm:col-span-10">
                    <h3 className="font-display text-xl font-semibold text-[#E9E0D0]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A39B8F]">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
