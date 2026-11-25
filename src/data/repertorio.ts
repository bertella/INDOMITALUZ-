/**
 * UNIVERSO MUSICAL Y BANDAS DE REFERENCIA DE INDÓMITA LUZ
 * --------------------------------------------------------------------------
 * Lista configurable e interactiva con las bandas y artistas que inspiran y
 * dan forma al repertorio en vivo de la banda (~20 canciones, ~60 minutos).
 * Para sumar o editar bandas, modificá el arreglo REPERTOIRE_BANDS.
 */

export interface BandReference {
  id: string;
  name: string;
  era: string;
  style: string;
  liveMood: string;
}

export const REPERTOIRE_BANDS: BandReference[] = [
  {
    id: 'charly-garcia',
    name: 'Charly García',
    era: 'Años 70 y 80',
    style: 'Rock y pop nacional',
    liveMood:
      'Armonías frontales, intensidad lírica y esa energía eléctrica que sostiene los momentos centrales del show.',
  },
  {
    id: 'luis-alberto-spinetta',
    name: 'Luis Alberto Spinetta',
    era: 'Años 70 y 80',
    style: 'Rock argentino',
    liveMood:
      'Clima poético y sutileza instrumental para bajar las luces en los pasajes más íntimos de la noche.',
  },
  {
    id: 'los-abuelos-de-la-nada',
    name: 'Los Abuelos de la Nada',
    era: 'Años 80',
    style: 'Pop rock',
    liveMood:
      'Estribillos inmediatos y pulso festivo que invitan a cantar desde las mesas y levantan la energía del lugar.',
  },
  {
    id: 'fito-paez',
    name: 'Fito Páez',
    era: 'Años 80 y 90',
    style: 'Rock y canción popular',
    liveMood:
      'Guitarras y melodías reconocibles al instante, con arreglos pensados para el formato de cuatro músicos en vivo.',
  },
  {
    id: 'fabiana-cantilo',
    name: 'Fabiana Cantilo',
    era: 'Años 80 y 90',
    style: 'Rock nacional',
    liveMood:
      'Fuerza vocal femenina al frente de la escena, con actitud cruda y espíritu directo de bar y escenario.',
  },
  {
    id: 'man-ray',
    name: 'Man Ray',
    era: 'Años 90',
    style: 'Pop rock argentino',
    liveMood:
      'Sensibilidad nocturna, elegancia melódica y protagonismo vocal para acompañar el clima de bares y pubs.',
  },
  {
    id: 'los-fabulosos-cadillacs',
    name: 'Los Fabulosos Cadillacs',
    era: 'Años 90',
    style: 'Rock y groove latino',
    liveMood:
      'Base rítmica envolvente de bajo y batería que aporta cadencia cálida y dinámica durante la segunda mitad del set.',
  },
  {
    id: 'los-tipitos',
    name: 'Los Tipitos',
    era: 'Años 2000',
    style: 'Pop rock argentino',
    liveMood:
      'Canciones de pulso constante y coros amplios que tienden un puente natural con todo tipo de público.',
  },
  {
    id: 'bandalos-chinos',
    name: 'Bandalos Chinos',
    era: 'Escena contemporánea',
    style: 'Pop rock actual',
    liveMood:
      'Frescura rítmica heredera del pop ochentoso, conectando los clásicos de siempre con una sonoridad actual.',
  },
];
