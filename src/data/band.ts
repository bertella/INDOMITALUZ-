export interface BandRole {
  id: string;
  instrument: string;
  roleTitle: string;
  description: string;
}

export interface TechnicalHighlight {
  id: string;
  label: string;
  value: string;
  detail: string;
}

export const BAND_FORMATION: BandRole[] = [
  {
    id: 'voz',
    instrument: 'Voz femenina',
    roleTitle: 'Voz principal',
    description:
      'Interpretación frontal, presencia escénica y matices para sostener tanto los climas íntimos como la fuerza del rock en vivo.',
  },
  {
    id: 'guitarra',
    instrument: 'Guitarra eléctrica',
    roleTitle: 'Riffs, solos y texturas',
    description:
      'Cuerpo armónico vintage con dinámica adaptable a bares íntimos, cervecerías concurridas y escenarios al aire libre.',
  },
  {
    id: 'bajo',
    instrument: 'Bajo eléctrico',
    roleTitle: 'Pulso y groove',
    description:
      'Base sólida que conecta la época dorada del rock nacional con el pulso bailable del pop rock ochentoso.',
  },
  {
    id: 'bateria',
    instrument: 'Batería',
    roleTitle: 'Ritmo y dinámica',
    description:
      'Control de volumen real según el espacio: pegada firme en escenarios grandes y toque contenido en locales gastronómicos.',
  },
];

export const SHOW_HIGHLIGHTS: TechnicalHighlight[] = [
  {
    id: 'duracion',
    label: 'Duración del show',
    value: '~60 min',
    detail: 'Bloque continuo o dividido en dos tandas según la dinámica del lugar.',
  },
  {
    id: 'repertorio',
    label: 'Lista en escena',
    value: '~20 temas',
    detail: 'Clásicos reconocidos del rock y pop nacional de los años 70 y 80.',
  },
  {
    id: 'sonido',
    label: 'Equipamiento',
    value: 'Sonido propio',
    detail: 'Resolución técnica autónoma para bares, pubs, salones y eventos privados.',
  },
  {
    id: 'cobertura',
    label: 'Cobertura',
    value: 'Córdoba Capital',
    detail: 'Prioridad en zona norte y alrededores de la ciudad de Córdoba.',
  },
];

export const VENUE_TYPES = [
  'Bares, pubs y cervecerías',
  'Restaurantes y paradores',
  'Espacios culturales y teatros',
  'Eventos privados y celebraciones',
  'Productoras y ciclos musicales',
] as const;

export interface BacklineItem {
  id: string;
  item: string;
  detail: string;
}

export interface WorkSummaryItem {
  id: string;
  label: string;
  value: string;
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
}

export const BACKLINE_OWN: BacklineItem[] = [
  {
    id: 'bateria',
    item: 'Batería completa',
    detail:
      'Cuerpos acústicos, platos y fierros propios, con control real de volumen según el tamaño del salón.',
  },
  {
    id: 'amplis',
    item: 'Amplificación de guitarra y bajo',
    detail:
      'Equipos propios para escenarios chicos o medianos, con salida directa cuando el lugar opera con PA.',
  },
  {
    id: 'voces',
    item: 'Microfonía de voces',
    detail:
      'Micrófonos para voz principal y coros, pies y cableado completo propio.',
  },
  {
    id: 'pa',
    item: 'Sistema de sonido propio (PA)',
    detail:
      'Consola y cajas activas disponibles para bares, patios y eventos privados sin equipamiento instalado.',
  },
];

export const VENUE_REQUIREMENTS: BacklineItem[] = [
  {
    id: 'espacio',
    item: 'Espacio mínimo en escena',
    detail:
      'Superficie aproximada de 4 × 3 metros para ubicar cómodamente a los cuatro músicos.',
  },
  {
    id: 'energia',
    item: 'Alimentación eléctrica',
    detail:
      'Toma de 220V cercana al sector del escenario con descarga a tierra.',
  },
  {
    id: 'consola-lugar',
    item: 'Si el lugar ya cuenta con sonido',
    detail:
      'Consola con al menos 6 canales libres y retorno básico para escenario.',
  },
  {
    id: 'ingreso',
    item: 'Acceso previo para armado',
    detail:
      'Ventana de ingreso antes de la apertura al público para descargar, armar y probar sonido sin apuro.',
  },
];

export const WORK_SUMMARY: WorkSummaryItem[] = [
  {
    id: 'duracion',
    label: 'Duración del show',
    value: 'Aprox. 60 minutos (un bloque continuo o dos tandas)',
  },
  {
    id: 'repertorio',
    label: 'Repertorio',
    value: 'Alrededor de 20 clásicos de rock y pop nacional (70 y 80)',
  },
  {
    id: 'previa',
    label: 'Armado y prueba',
    value: 'Llegada 60 a 90 minutos antes del inicio',
  },
  {
    id: 'zona',
    label: 'Zona de trabajo',
    value: 'Córdoba Capital (prioridad zona norte) y alrededores',
  },
];

export const WORK_STEPS: WorkStep[] = [
  {
    number: '01.',
    title: 'Consulta y coordinación inicial',
    description:
      'Nos contás la fecha, el espacio y el formato de la noche. Confirmamos disponibilidad y definimos si llevamos sonido propio o nos conectamos al equipo del lugar.',
  },
  {
    number: '02.',
    title: 'Acuerdo directo y claro',
    description:
      'Definimos horario, duración (un set completo de una hora o dos bloques con intervalo) y condiciones de trabajo directamente con la banda, sin intermediarios.',
  },
  {
    number: '03.',
    title: 'Armado y prueba de sonido',
    description:
      'Llegamos con tiempo antes de que entre la gente para armar el backline y ajustar el volumen a la acústica del salón o patio.',
  },
  {
    number: '04.',
    title: 'Show en vivo y desarme ordenado',
    description:
      'Presentamos el repertorio completo y al finalizar desarmamos rápido para que el local siga su ritmo normal.',
  },
];

