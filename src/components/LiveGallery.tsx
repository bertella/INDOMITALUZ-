import { useEffect, useState } from 'react';
import { Camera, Film, Play, Smartphone, X } from 'lucide-react';
import { MEDIA_CATEGORIES, MEDIA_SLOTS, type MediaCategory, type MediaSlot } from '../data/media';
import { trackEvent } from '../utils/analytics';

function getCategoryIcon(category: MediaCategory) {
  switch (category) {
    case 'videos':
      return Film;
    case 'clips':
      return Smartphone;
    case 'escenarios':
    case 'integrantes':
      return Camera;
  }
}

function getAspectClass(aspect: MediaSlot['aspect']): string {
  switch (aspect) {
    case '16:9':
      return 'aspect-video';
    case '9:16':
      return 'aspect-[9/16]';
    case '4:3':
      return 'aspect-[4/3]';
    case '3:4':
      return 'aspect-[3/4]';
  }
}

export function LiveGallery() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | MediaCategory>('all');
  const [activeSlot, setActiveSlot] = useState<MediaSlot | null>(null);

  useEffect(() => {
    if (!activeSlot) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveSlot(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeSlot]);

  const visibleSlots =
    selectedCategory === 'all'
      ? MEDIA_SLOTS
      : MEDIA_SLOTS.filter((item) => item.category === selectedCategory);

  const handleOpenSlot = (slot: MediaSlot) => {
    setActiveSlot(slot);
    if (slot.category === 'videos' || slot.category === 'clips') {
      trackEvent('video_play', {
        media_id: slot.id,
        label: slot.title,
        provisional: slot.isProvisional,
      });
    }
  };

  return (
    <section
      id="en-escena"
      className="border-t border-[#E9E0D0]/10 bg-[#131211] py-24 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Editorial Header & Text Filter Links */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8D403C]">
              En escena
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-[#E9E0D0] sm:text-4xl">
              Archivo vivo de escenarios y ensayos.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#A39B8F]">
              Fotografías reales y espacios preparados para sumar registros en video y nuevas tomas
              de conciertos.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar archivo audiovisual"
            className="flex flex-wrap gap-x-6 gap-y-2 border-b border-[#E9E0D0]/10 pb-2"
          >
            {MEDIA_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`pb-1 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-150 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'border-b-2 border-[#B68B5A] text-[#E9E0D0]'
                      : 'text-[#A39B8F] hover:text-[#E9E0D0]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual-First Grid (Featured real image spans 2 cols on desktop when showing all) */}
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSlots.map((slot, index) => {
            const Icon = getCategoryIcon(slot.category);
            const hasRealMedia = Boolean(slot.mediaUrl || slot.youtubeId);
            const isLeadRealItem = selectedCategory === 'all' && index === 0 && hasRealMedia;

            return (
              <article
                key={slot.id}
                className={`group flex flex-col ${isLeadRealItem ? 'sm:col-span-2' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => handleOpenSlot(slot)}
                  aria-label={`Abrir vista previa: ${slot.title}`}
                  className="relative w-full overflow-hidden bg-[#191817] text-left focus-visible:outline-none"
                >
                  <div
                    className={`relative w-full ${getAspectClass(slot.aspect)} ${
                      isLeadRealItem ? 'max-h-[420px]' : 'max-h-72'
                    }`}
                  >
                    {hasRealMedia && slot.mediaUrl && !slot.youtubeId ? (
                      slot.category === 'videos' || slot.category === 'clips' ? (
                        <div className="relative h-full w-full">
                          <video
                            src={`${slot.mediaUrl}#t=${slot.previewStartSeconds ?? 0.5}`}
                            poster={slot.posterUrl}
                            preload="metadata"
                            muted
                            playsInline
                            className="h-full w-full object-cover object-[center_20%] transition-opacity duration-200 group-hover:opacity-85"
                          />
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#191817]/25"
                          >
                            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E9E0D0]/60 bg-[#191817]/75 text-[#E9E0D0] transition-colors duration-150 group-hover:border-[#B68B5A] group-hover:text-[#B68B5A]">
                              <Play className="ml-0.5 h-5 w-5" />
                            </span>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={slot.mediaUrl}
                          alt={slot.altText}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover object-[center_22%] transition-transform duration-300 group-hover:scale-[1.015]"
                        />
                      )
                    ) : (
                      /* Analog Film Contact Frame for Pending Real Media */
                      <div className="flex h-full w-full flex-col justify-between border border-[#E9E0D0]/12 bg-[#191817] p-5 transition-colors duration-200 group-hover:border-[#B68B5A]/55">
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#A39B8F]">
                          <span>{slot.aspect}</span>
                          <span className="text-[#B68B5A]">Espacio preparado</span>
                        </div>

                        <div className="my-auto flex flex-col items-center justify-center text-center">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E9E0D0]/20 text-[#E9E0D0] transition-colors duration-150 group-hover:border-[#B68B5A] group-hover:text-[#B68B5A]">
                            {slot.category === 'videos' || slot.category === 'clips' ? (
                              <Play className="ml-0.5 h-4 w-4" aria-hidden="true" />
                            ) : (
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            )}
                          </div>
                          <p className="mt-3 text-xs tracking-wide text-[#A39B8F]">
                            {slot.formatNote}
                          </p>
                        </div>

                        <span className="text-[11px] text-[#A39B8F]/70">
                          Material real pendiente
                        </span>
                      </div>
                    )}
                  </div>
                </button>

                <div className="mt-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#A39B8F]">
                    {slot.categoryLabel}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-[#E9E0D0] transition-colors group-hover:text-[#B68B5A]">
                    <button
                      type="button"
                      onClick={() => handleOpenSlot(slot)}
                      className="text-left"
                    >
                      {slot.title}
                    </button>
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Unobstructed Lightbox Viewer */}
      {activeSlot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="media-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActiveSlot(null)}
        >
          <div
            className="relative w-full max-w-3xl border border-[#E9E0D0]/15 bg-[#191817] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E9E0D0]/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#B68B5A]">
                  {activeSlot.categoryLabel}
                </p>
                <h3
                  id="media-modal-title"
                  className="mt-1 font-display text-2xl font-semibold text-[#E9E0D0]"
                >
                  {activeSlot.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveSlot(null)}
                aria-label="Cerrar vista previa"
                className="inline-flex h-10 w-10 items-center justify-center text-[#A39B8F] transition-colors hover:text-[#E9E0D0]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6">
              {activeSlot.youtubeId ? (
                <div className="aspect-video w-full overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeSlot.youtubeId}?autoplay=1`}
                    title={activeSlot.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              ) : activeSlot.mediaUrl ? (
                activeSlot.category === 'videos' || activeSlot.category === 'clips' ? (
                  <video
                    src={activeSlot.mediaUrl}
                    controls
                    autoPlay
                    playsInline
                    className="mx-auto max-h-[72vh] w-full bg-black object-contain"
                  />
                ) : (
                  <img
                    src={activeSlot.mediaUrl}
                    alt={activeSlot.altText}
                    referrerPolicy="no-referrer"
                    className="mx-auto max-h-[72vh] w-full object-contain"
                  />
                )
              ) : (
                <div className="py-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8D403C]">
                    Espacio preparado para material real
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-[#E9E0D0]/85">
                    {activeSlot.description}
                  </p>
                  <p className="mt-5 text-xs text-[#A39B8F]">
                    Para publicar el archivo definitivo en este lugar, definí{' '}
                    <span className="text-[#E9E0D0]">mediaUrl</span> o{' '}
                    <span className="text-[#E9E0D0]">youtubeId</span> en{' '}
                    <span className="text-[#B68B5A]">src/data/media.ts</span>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
