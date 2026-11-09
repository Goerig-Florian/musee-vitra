/* ==========================================================
   PHOTOGRAPHIES — photos prises par l'équipe lors de la visite
   du 16 septembre 2026 (src/assets/photos, WebP sans données GPS).
   Pour changer une image : déposer le fichier dans src/assets/photos/,
   l'importer ci-dessous et le renseigner dans src.
   position = cadrage (object-position CSS) quand l'image est recadrée.
   Si src vaut null, un placeholder « Photo à venir » s'affiche.
   ========================================================== */

import photo_dome_jour from '../assets/photos/dome-jour.webp'
import photo_dome_nuit from '../assets/photos/dome-nuit.webp'
import photo_escalier_spirale from '../assets/photos/escalier-spirale.webp'
import photo_espace_bureau from '../assets/photos/espace-bureau.webp'
import photo_musee_etang from '../assets/photos/musee-etang.webp'
import photo_musee_facade from '../assets/photos/musee-facade.webp'
import photo_musee_nuit from '../assets/photos/musee-nuit.webp'
import photo_objet_elephant from '../assets/photos/objet-elephant.webp'
import photo_roue_chaises from '../assets/photos/roue-chaises.webp'
import photo_salon_collections from '../assets/photos/salon-collections.webp'
import photo_terrasse from '../assets/photos/terrasse.webp'
import photo_toboggan_spirale from '../assets/photos/toboggan-spirale.webp'
import photo_tour_nuit from '../assets/photos/tour-nuit.webp'
import photo_vitrahaus_jour from '../assets/photos/vitrahaus-jour.webp'
import photo_vitrahaus_nuit from '../assets/photos/vitrahaus-nuit.webp'
import photo_salle_manger from '../assets/photos/salle-manger.webp'
import photo_table_panton from '../assets/photos/table-panton.webp'
import photo_maison_japonaise from '../assets/photos/maison-japonaise.webp'

export const images = {
  'hero-architecture': {
    src: photo_musee_etang, position: '56% center',
    alt: 'Le bâtiment principal du musée, aux volumes blancs sculptés, vu depuis l’étang',
    label: 'Le bâtiment principal du musée, aux volumes blancs sculptés, vu depuis l’étang',
    pilier: 'jaune',
  },
  'reouverture-architecture': {
    src: photo_musee_facade, position: 'center',
    alt: 'La façade blanche et courbe du musée, avec ses toits de zinc',
    label: 'La façade blanche et courbe du musée, avec ses toits de zinc',
    pilier: 'nuit',
  },
  'musee-jour': {
    src: photo_vitrahaus_jour, position: 'center',
    alt: 'Un bâtiment aux volumes de maisons empilées et aux grandes baies vitrées',
    label: 'Un bâtiment aux volumes de maisons empilées et aux grandes baies vitrées',
    pilier: 'jaune',
  },
  'architecture-detail-1': {
    src: photo_escalier_spirale, position: 'center',
    alt: 'Un escalier en spirale blanc, vu d’en haut',
    label: 'Un escalier en spirale blanc, vu d’en haut',
    pilier: 'jaune',
  },
  'architecture-detail-2': {
    src: photo_toboggan_spirale, position: 'center',
    alt: 'Le toboggan en spirale de la tour, vu d’en dessous',
    label: 'Le toboggan en spirale de la tour, vu d’en dessous',
    pilier: 'rouge',
  },
  'site-dome': {
    src: photo_dome_jour, position: '40% center',
    alt: 'Un dôme géodésique blanc dans une prairie',
    label: 'Un dôme géodésique blanc dans une prairie',
    pilier: 'nuit',
  },
  'collection-objet-1': {
    src: photo_objet_elephant, position: 'center',
    alt: 'Un petit éléphant en bois moulé exposé en vitrine',
    label: 'Un petit éléphant en bois moulé exposé en vitrine',
    pilier: 'jaune',
  },
  'collection-objet-2': {
    src: photo_roue_chaises, position: 'center',
    alt: 'Des dizaines de chaises colorées disposées en roue devant une baie vitrée',
    label: 'Des dizaines de chaises colorées disposées en roue devant une baie vitrée',
    pilier: 'rouge',
  },
  'collection-objet-3': {
    src: photo_salon_collections, position: 'center',
    alt: 'Un salon meublé de canapés jaunes, de fauteuils et d’un tapis coloré',
    label: 'Un salon meublé de canapés jaunes, de fauteuils et d’un tapis coloré',
    pilier: 'nuit',
  },
  'experience-participer': {
    src: photo_salle_manger, position: 'center',
    alt: 'Une grande table ronde entourée de fauteuils, prête pour un atelier',
    label: 'Une grande table ronde entourée de fauteuils',
    pilier: 'rouge',
  },
  'convivialite': {
    src: photo_terrasse, position: 'center',
    alt: 'Une terrasse en contrebas avec tables et chaises, entre murs de béton et baies vitrées',
    label: 'Une terrasse en contrebas avec tables et chaises, entre murs de béton et baies vitrées',
    pilier: 'jaune',
  },
  'experience-retrouver': {
    src: photo_vitrahaus_nuit, position: 'center',
    alt: 'Un bâtiment aux grandes baies vitrées illuminé de nuit',
    label: 'Un bâtiment aux grandes baies vitrées illuminé de nuit',
    pilier: 'nuit',
  },
  'vitratv-une': {
    src: photo_musee_nuit, position: 'center',
    alt: 'Le musée illuminé, reflété dans l’étang la nuit',
    label: 'Le musée illuminé, reflété dans l’étang la nuit',
    pilier: 'nuit',
  },
  'vitratv-apercu': {
    src: photo_dome_nuit, position: 'center',
    alt: 'Le dôme géodésique illuminé de nuit',
    label: 'Le dôme géodésique illuminé de nuit',
    pilier: 'nuit',
  },
  'site-tour': {
    src: photo_tour_nuit, position: 'center',
    alt: 'La tour d’observation et son toboggan, éclairés de nuit',
    label: 'La tour d’observation et son toboggan, éclairés de nuit',
    pilier: 'nuit',
  },
  'site-dome-nuit': {
    src: photo_dome_nuit, position: 'center',
    alt: 'Le dôme géodésique illuminé de nuit',
    label: 'Le dôme géodésique illuminé de nuit',
    pilier: 'nuit',
  },
  'site-musee-nuit': {
    src: photo_musee_nuit, position: 'center',
    alt: 'Le musée illuminé, reflété dans l’étang la nuit',
    label: 'Le musée illuminé, reflété dans l’étang la nuit',
    pilier: 'nuit',
  },
  'site-vitrahaus-nuit': {
    src: photo_vitrahaus_nuit, position: 'center',
    alt: 'Un bâtiment aux grandes baies vitrées illuminé de nuit',
    label: 'Un bâtiment aux grandes baies vitrées illuminé de nuit',
    pilier: 'nuit',
  },
  'tv-salle-manger': {
    src: photo_salle_manger, position: 'center',
    alt: 'Une table ronde blanche entourée de fauteuils coques, sous un luminaire en treillis',
    label: 'Une table ronde blanche entourée de fauteuils coques, sous un luminaire en treillis',
    pilier: 'nuit',
  },
  'tv-table-panton': {
    src: photo_table_panton, position: 'center',
    alt: 'Une longue table entourée de chaises noires en porte-à-faux, dans une galerie vitrée',
    label: 'Une longue table entourée de chaises noires en porte-à-faux, dans une galerie vitrée',
    pilier: 'nuit',
  },
  'tv-maison-japonaise': {
    src: photo_maison_japonaise, position: 'center',
    alt: 'Une pièce de style japonais avec tatamis, table basse et banquette bleue',
    label: 'Une pièce de style japonais avec tatamis, table basse et banquette bleue',
    pilier: 'nuit',
  },
  'tv-elephant': {
    src: photo_objet_elephant, position: 'center',
    alt: 'Un petit éléphant en bois moulé exposé en vitrine',
    label: 'Un petit éléphant en bois moulé exposé en vitrine',
    pilier: 'nuit',
  },
  'tv-facade': {
    src: photo_musee_facade, position: 'center',
    alt: 'La façade blanche et courbe du musée, avec ses toits de zinc',
    label: 'La façade blanche et courbe du musée, avec ses toits de zinc',
    pilier: 'nuit',
  },
  'tv-escalier': {
    src: photo_escalier_spirale, position: 'center',
    alt: 'Un escalier en spirale blanc, vu d’en haut',
    label: 'Un escalier en spirale blanc, vu d’en haut',
    pilier: 'nuit',
  },
  'tv-tour-nuit': {
    src: photo_tour_nuit, position: 'center 30%',
    alt: 'La tour d’observation et son toboggan, éclairés de nuit',
    label: 'La tour d’observation et son toboggan, éclairés de nuit',
    pilier: 'nuit',
  },
  'tv-vitrahaus-nuit': {
    src: photo_vitrahaus_nuit, position: 'center',
    alt: 'Un bâtiment aux grandes baies vitrées illuminé de nuit',
    label: 'Un bâtiment aux grandes baies vitrées illuminé de nuit',
    pilier: 'nuit',
  },
  'tv-bureau': {
    src: photo_espace_bureau, position: 'center',
    alt: 'Un espace de travail avec bureaux, chaises et étagères murales',
    label: 'Un espace de travail avec bureaux, chaises et étagères murales',
    pilier: 'nuit',
  },
}
