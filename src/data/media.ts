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
    categoryLabel: 'Cochera Bar · Córdoba',
    title: 'Los cuatro en el escenario, frente a la gente',
    aspect: '16:9',
    formatNote: 'Registro en vivo',
    description:
      'Formación completa en Cochera Bar: voz, guitarra, bajo y batería compartiendo la noche de cerca con el público.',
    isProvisional: false,
    mediaUrl: '/assets/aistudio/IMG-20260926-WA0040_2a9d67e7.jpg',
    altText: 'Los cuatro integrantes de Indómita Luz tocando en vivo en Cochera Bar con el público enfrente',
  },
  {
    id: 'clip-vertical-01',
    category: 'clips',
    categoryLabel: 'Cochera Bar · En vivo',
    title: 'Mary Poppins y el Deshollinador',
    aspect: '9:16',
    formatNote: 'Video en vivo',
    description:
      'Un pasaje de la noche en Cochera Bar tocando este clásico de Serú Girán.',
    isProvisional: false,
    previewStartSeconds: 0.5,
    mediaUrl:
      '/assets/aistudio/_Mary_Poppins_y_el_Deshollinador__cocherabar__indomitaluzbanda_en_vivo_rocknacional__indomital_d8f96484.mp4',
    altText: 'Indómita Luz tocando Mary Poppins y el Deshollinador en vivo en Cochera Bar',
  },
  {
    id: 'clip-vertical-02',
    category: 'clips',
    categoryLabel: 'Lo de Lola Bar · Enero 2026',
    title: 'No te alejes tanto de mí, noche al aire libre',
    aspect: '9:16',
    formatNote: 'Video en vivo',
    description:
      'Tocando en el patio de Lo de Lola Bar la noche del 10 de enero de 2026.',
    isProvisional: false,
    previewStartSeconds: 10,
    mediaUrl:
      '/assets/aistudio/No_te_alejes_tanto_de_m__Lo_de_Lola_Bar__lodelola_bar__10_de_enero_de_2026_12396f29.mp4',
    altText: 'Indómita Luz tocando No te alejes tanto de mí al aire libre en Lo de Lola Bar',
  },
  {
    id: 'escenario-real-02',
    category: 'escenarios',
    categoryLabel: 'Cochera Bar · Voz',
    title: 'Arrancando la lista, cara a cara con la gente',
    aspect: '4:3',
    formatNote: 'Registro en vivo',
    description:
      'Primeros temas de la noche en Cochera Bar, con el público bien cerca del micrófono.',
    isProvisional: false,
    mediaUrl: '/assets/aistudio/IMG-20260926-WA0053_beaa761c.jpg',
    altText: 'Cantante de Indómita Luz frente al micrófono durante el show en Cochera Bar',
  },
  {
    id: 'escenario-real-03',
    category: 'escenarios',
    categoryLabel: 'Cochera Bar · Guitarra y coros',
    title: 'Sumando coros en el estribillo',
    aspect: '4:3',
    formatNote: 'Registro en vivo',
    description:
      'Guitarra y voces de apoyo en uno de los momentos más cantados de la noche.',
    isProvisional: false,
    mediaUrl: '/assets/aistudio/IMG-20260926-WA0047_3ca42a04.jpg',
    altText: 'Guitarrista de Indómita Luz haciendo coros en vivo en Cochera Bar',
  },
  {
    id: 'escenario-real-04',
    category: 'escenarios',
    categoryLabel: 'Cochera Bar · Batería',
    title: 'Metido de lleno en el ritmo del tema',
    aspect: '4:3',
    formatNote: 'Registro en vivo',
    description:
      'Ojos cerrados y pulso firme desde la batería en plena mitad del recital.',
    isProvisional: false,
    mediaUrl: '/assets/aistudio/IMG-20260926-WA0055_7b0de446.jpg',
    altText: 'Baterista de Indómita Luz tocando con auriculares y los ojos cerrados en vivo',
  },
  {
    id: 'escenario-real-05',
    category: 'escenarios',
    categoryLabel: 'Cochera Bar · Escenario',
    title: 'De frente a los parches en medio de la noche',
    aspect: '4:3',
    formatNote: 'Registro en vivo',
    description:
      'Vista desde el costado del escenario entre tema y tema, con los fierros sonando.',
    isProvisional: false,
    mediaUrl: '/assets/aistudio/IMG-20260926-WA0043_ee460144.jpg',
    altText: 'Batería de Indómita Luz en pleno show en vivo en Cochera Bar',
  },
  {
    id: 'escenario-real-06',
    category: 'escenarios',
    categoryLabel: 'Cochera Bar · Voz',
    title: 'Un momento bien sentido del show',
    aspect: '4:3',
    formatNote: 'Registro en vivo',
    description:
      'De esos temas que se cantan con todo cuando la noche ya entró en confianza.',
    isProvisional: false,
    mediaUrl: '/assets/aistudio/IMG-20260926-WA0057_1721af80.jpg',
    altText: 'Primer plano de la cantante de Indómita Luz cantando con el micrófono en la mano',
  },
  {
    id: 'video-show-completo',
    category: 'videos',
    categoryLabel: 'Próximamente · Video',
    title: 'Show completo en vivo',
    aspect: '16:9',
    formatNote: 'Espacio para video 16:9',
    description:
      'Espacio reservado para subir el video de una presentación completa de la banda.',
    isProvisional: true,
    altText: 'Espacio preparado para video de show completo de Indómita Luz',
  },
  {
    id: 'video-ensayo-sonido',
    category: 'videos',
    categoryLabel: 'Próximamente · Sala de ensayo',
    title: 'Un rato desde la sala de ensayo',
    aspect: '16:9',
    formatNote: 'Espacio para video 16:9',
    description:
      'Espacio reservado para compartir una toma directa desde nuestro lugar de ensayo.',
    isProvisional: true,
    altText: 'Espacio preparado para video de ensayo de Indómita Luz',
  },
];
