/**
 * ARCHIVO AUDIOVISUAL DE INDÓMITA LUZ
 * --------------------------------------------------------------------------
 * Incluye las fotografías reales en vivo de la banda y espacios preparados
 * para sumar videos de conciertos y clips verticales.
 */

export type MediaCategory = 'videos' | 'clips' | 'escenarios' | 'integrantes';

export interface MediaSlot {
  id: string;
  category: MediaCategory;
  categoryLabel: string;
  title: string;
  aspect: '16:9' | '9:16' | '4:3' | '3:4';
  formatNote: string;
  description: string;
  isProvisional: boolean;
  /** Ruta local en /public o URL externa de foto/video real */
  mediaUrl?: string;
  /** Segundo inicial para la miniatura previa del video */
  previewStartSeconds?: number;
  /** ID de YouTube si el video está alojado en YouTube */
  youtubeId?: string;
  /** Miniatura opcional para videos */
  posterUrl?: string;
  altText: string;
}

export const MEDIA_CATEGORIES: { id: 'all' | MediaCategory; label: string }[] = [
  { id: 'all', label: 'Todo' },
  { id: 'escenarios', label: 'Fotografías' },
  { id: 'videos', label: 'Videos' },
  { id: 'clips', label: 'Clips' },
];

export const MEDIA_SLOTS: MediaSlot[] = [
  {
    id: 'escenario-real-01',
    category: 'escenarios',
    categoryLabel: 'Fotografía en vivo',
    title: 'Indómita Luz en escenario',
    aspect: '16:9',
    formatNote: 'Registro real en vivo',
    description:
      'Formación completa de cuatro músicos en vivo con voz femenina, guitarra, bajo y batería.',
    isProvisional: false,
    mediaUrl: '/assets/aistudio/IMG-20260926-WA0040_2a9d67e7.jpg',
    altText: 'Indómita Luz tocando en vivo sobre escenario con iluminación cálida',
  },
  {
    id: 'clip-vertical-01',
    category: 'clips',
    categoryLabel: 'Video en vivo · 9:16',
    title: 'Clip en vivo · Escenario',
    aspect: '9:16',
    formatNote: 'Registro real en vivo',
    description:
      'Fragmento vertical en blanco y negro de Indómita Luz tocando en vivo.',
    isProvisional: false,
    previewStartSeconds: 0.5,
    mediaUrl:
      '/assets/aistudio/_Mary_Poppins_y_el_Deshollinador__cocherabar__indomitaluzbanda_en_vivo_rocknacional__indomital_d8f96484.mp4',
    altText: 'Video en vivo de Indómita Luz interpretando rock nacional',
  },
  {
    id: 'clip-vertical-02',
    category: 'clips',
    categoryLabel: 'Video en vivo · 9:16',
    title: 'Noche al aire libre · En vivo',
    aspect: '9:16',
    formatNote: 'Registro real en vivo',
    description:
      'Presentación nocturna en patio al aire libre con formación completa.',
    isProvisional: false,
    previewStartSeconds: 10,
    mediaUrl:
      '/assets/aistudio/No_te_alejes_tanto_de_m__Lo_de_Lola_Bar__lodelola_bar__10_de_enero_de_2026_12396f29.mp4',
    altText: 'Video en vivo de Indómita Luz tocando al aire libre con iluminación cálida',
  },
  {
    id: 'escenario-real-02',
    category: 'escenarios',
    categoryLabel: 'Fotografía en vivo',
    title: 'Voz al frente',
    aspect: '4:3',
    formatNote: 'Registro real en vivo',
    description:
      'Interpretación vocal en vivo bajo la iluminación cálida del escenario.',
    isProvisional: false,
    mediaUrl: '/assets/aistudio/IMG-20260926-WA0053_beaa761c.jpg',
    altText: 'Cantante de Indómita Luz cantando en vivo frente al micrófono',
  },
  {
    id: 'escenario-real-03',
    category: 'escenarios',
    categoryLabel: 'Fotografía en vivo',
    title: 'Guitarra y coros',
    aspect: '4:3',
    formatNote: 'Registro real en vivo',
    description:
      'Guitarra eléctrica y voz de apoyo durante el recital en vivo.',
    isProvisional: false,
    mediaUrl: '/assets/aistudio/IMG-20260926-WA0047_3ca42a04.jpg',
    altText: 'Guitarrista de Indómita Luz cantando al micrófono en vivo',
  },
  {
    id: 'escenario-real-04',
    category: 'escenarios',
    categoryLabel: 'Fotografía en vivo',
    title: 'Batería en escena',
    aspect: '4:3',
    formatNote: 'Registro real en vivo',
    description:
      'Pulso rítmico y percusión en directo sobre ladrillo visto e iluminación ámbar.',
    isProvisional: false,
    mediaUrl: '/assets/aistudio/IMG-20260926-WA0055_7b0de446.jpg',
    altText: 'Baterista de Indómita Luz tocando en vivo con iluminación cálida',
  },
  {
    id: 'escenario-real-05',
    category: 'escenarios',
    categoryLabel: 'Fotografía en vivo',
    title: 'Luz ámbar sobre los parches',
    aspect: '4:3',
    formatNote: 'Registro real en vivo',
    description:
      'Detalle de platillos y cuerpos de batería en plena presentación nocturna.',
    isProvisional: false,
    mediaUrl: '/assets/aistudio/IMG-20260926-WA0043_ee460144.jpg',
    altText: 'Detalle de batería y platillo iluminados en ámbar durante recital de Indómita Luz',
  },
  {
    id: 'escenario-real-06',
    category: 'escenarios',
    categoryLabel: 'Fotografía en vivo',
    title: 'Clima íntimo de concierto',
    aspect: '4:3',
    formatNote: 'Registro real en vivo',
    description:
      'Primer plano de interpretación vocal en una noche de rock y pop nacional.',
    isProvisional: false,
    mediaUrl: '/assets/aistudio/IMG-20260926-WA0057_1721af80.jpg',
    altText: 'Primer plano de la cantante de Indómita Luz en vivo',
  },
  {
    id: 'video-show-completo',
    category: 'videos',
    categoryLabel: 'Video de concierto · 16:9',
    title: 'Registro en vivo · Show completo',
    aspect: '16:9',
    formatNote: 'Espacio para video 16:9',
    description:
      'Espacio preparado para incorporar el video principal de concierto o sesión en vivo.',
    isProvisional: true,
    altText: 'Espacio preparado para video de concierto de Indómita Luz',
  },
  {
    id: 'video-ensayo-sonido',
    category: 'videos',
    categoryLabel: 'Video en sala · 16:9',
    title: 'Toma directa en vivo',
    aspect: '16:9',
    formatNote: 'Espacio para video 16:9',
    description:
      'Espacio reservado para video de presentación con audio directo para productores y espacios.',
    isProvisional: true,
    altText: 'Espacio preparado para toma directa en vivo',
  },
];
