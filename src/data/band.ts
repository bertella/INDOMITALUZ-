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
