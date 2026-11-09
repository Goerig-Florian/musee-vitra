/* ==========================================================
   PHOTOGRAPHIES — emplacements à remplacer.
   1. Déposer le fichier dans /public/photos/ (ex. exterieur.jpg)
   2. Renseigner src: 'photos/exterieur.jpg' et vérifier l'alt.
   Photos de nuit fournies par l'équipe (nov. 2026) : src/assets/photos/,
   au format WebP, avec la mention discrète « Visuel d'illustration ».
   position = cadrage (object-position CSS) quand l'image est recadrée.
   demo: true = illustration graphique de démonstration (src/assets/demo),
   signalée comme telle à l'écran : retirer ce drapeau avec la vraie photo.
   Si src vaut null, un placeholder identifié « Photo à venir » s'affiche.
   Utiliser uniquement vos photographies du musée (droits OK).
   ========================================================== */

import photo_musee_crepuscule from '../assets/photos/musee-crepuscule.webp'
import photo_musee_entree from '../assets/photos/musee-entree.webp'
import photo_architecture_angle from '../assets/photos/architecture-angle.webp'
import photo_tour_observation from '../assets/photos/tour-observation.webp'
import photo_musee_etang from '../assets/photos/musee-etang-jour.webp'
import photo_musee_jour from '../assets/photos/musee-jour.webp'
import photo_musee_nuit from '../assets/photos/musee-nuit.webp'
import photo_musee_mapping from '../assets/photos/musee-mapping.webp'
import photo_musee_bord_eau from '../assets/photos/musee-bord-eau.webp'
import photo_dome from '../assets/photos/dome.webp'
import photo_jardin from '../assets/photos/jardin.webp'
import photo_batiment_brique from '../assets/photos/batiment-brique.webp'
import photo_batiment_circulaire from '../assets/photos/batiment-circulaire.webp'
import demo_architecture_exterieure from '../assets/demo/architecture-exterieure.svg'
import demo_architecture_facade from '../assets/demo/architecture-facade.svg'
import demo_architecture_escalier from '../assets/demo/architecture-escalier.svg'
import demo_architecture_verriere from '../assets/demo/architecture-verriere.svg'
import demo_espace_interieur from '../assets/demo/espace-interieur.svg'
import demo_objet_chaise from '../assets/demo/objet-chaise.svg'
import demo_objet_fauteuil from '../assets/demo/objet-fauteuil.svg'
import demo_objet_lampe from '../assets/demo/objet-lampe.svg'
import demo_visite_flash from '../assets/demo/visite-flash.svg'
import demo_atelier from '../assets/demo/atelier.svg'
import demo_nocturne from '../assets/demo/nocturne.svg'
import demo_convivialite from '../assets/demo/convivialite.svg'

export const images = {
  'hero-architecture': {
    src: photo_musee_etang, position: '56% center', /* photo de l'équipe, visite de septembre 2026 */
    alt: 'Le bâtiment principal du musée, aux volumes blancs sculptés, vu depuis l’étang sous un ciel nuageux',
    label: 'Architecture extérieure — vue d’ensemble',
    pilier: 'jaune',
  },
  'reouverture-architecture': {
    src: photo_musee_entree, mention: 'Visuel d’illustration', position: 'center',
    alt: 'L’entrée du musée éclairée de nuit, avec son escalier et son auvent',
    label: 'Architecture — détail de façade',
    pilier: 'nuit',
  },
  'architecture-detail-1': {
    src: photo_architecture_angle, mention: 'Visuel d’illustration', position: '30% center',
    alt: 'Un bâtiment aux murs de béton et au toit en pointe, éclairé de nuit',
    label: 'Détail architectural',
    pilier: 'jaune',
  },
  'architecture-detail-2': {
    src: photo_tour_observation, mention: 'Visuel d’illustration', position: 'center',
    alt: 'Une tour d’observation métallique avec son toboggan en spirale, de nuit',
    label: 'Détail architectural',
    pilier: 'rouge',
  },
  'espace-interieur': {
    src: demo_espace_interieur, demo: true,
    alt: 'Un espace intérieur du musée',
    label: 'Espace intérieur',
    pilier: 'nuit',
  },
  'collection-objet-1': {
    src: demo_objet_chaise, demo: true,
    alt: 'Objet des collections',
    label: 'Collections — objet',
    pilier: 'jaune',
  },
  'collection-objet-2': {
    src: demo_objet_fauteuil, demo: true,
    alt: 'Pièce de mobilier des collections',
    label: 'Collections — mobilier',
    pilier: 'rouge',
  },
  'collection-objet-3': {
    src: demo_objet_lampe, demo: true,
    alt: 'Objet des collections',
    label: 'Collections — objet',
    pilier: 'nuit',
  },
  'experience-decouvrir': {
    src: demo_visite_flash, demo: true,
    alt: 'Visite flash dans les collections',
    label: 'Expérience — visite flash',
    pilier: 'jaune',
  },
  'experience-participer': {
    src: demo_atelier, demo: true,
    alt: 'Atelier du samedi',
    label: 'Expérience — atelier',
    pilier: 'rouge',
  },
  'experience-retrouver': {
    src: photo_musee_mapping, mention: 'Visuel d’illustration', position: 'center',
    alt: 'Le bâtiment principal du musée de nuit, sa façade parcourue de rayons lumineux projetés',
    label: 'Expérience — nocturne',
    pilier: 'nuit',
  },
  'convivialite': {
    src: demo_convivialite, demo: true,
    alt: 'Espace de convivialité',
    label: 'Espace de convivialité',
    pilier: 'jaune',
  },
  'vitratv-une': {
    src: photo_musee_crepuscule, mention: 'Visuel d’illustration', position: 'center',
    alt: 'Le bâtiment principal du musée illuminé au crépuscule',
    label: 'Vitra TV — à la une',
    pilier: 'nuit',
  },
  'vitratv-apercu': {
    src: photo_musee_nuit, mention: 'Visuel d’illustration', position: 'center',
    alt: 'Le bâtiment principal du musée éclairé de nuit',
    label: 'Vitra TV — aperçu',
    pilier: 'nuit',
  },
  'site-dome': {
    src: photo_dome, mention: 'Visuel d’illustration', position: '45% center',
    alt: 'Un dôme géodésique éclairé parmi les arbres, de nuit',
    label: 'Le site — dôme',
    pilier: 'nuit',
  },
  'site-jardin': {
    src: photo_jardin, mention: 'Visuel d’illustration', position: 'center',
    alt: 'Un jardin aux allées éclairées, avec un dôme en arrière-plan',
    label: 'Le site — jardin',
    pilier: 'jaune',
  },
  'site-brique': {
    src: photo_batiment_brique, mention: 'Visuel d’illustration', position: 'center',
    alt: 'Un long bâtiment de brique éclairé, un cycliste passe devant',
    label: 'Le site — bâtiment de brique',
    pilier: 'rouge',
  },
  'site-bord-eau': {
    src: photo_musee_bord_eau, mention: 'Visuel d’illustration', position: 'center',
    alt: 'Le musée illuminé, reflété dans un bassin la nuit',
    label: 'Le site — bassin',
    pilier: 'nuit',
  },
  'site-circulaire': {
    src: photo_batiment_circulaire, mention: 'Visuel d’illustration', position: 'center',
    alt: 'Un bâtiment circulaire au bardage blanc, éclairé de nuit',
    label: 'Le site — bâtiment circulaire',
    pilier: 'nuit',
  },
  'musee-jour': {
    src: photo_musee_jour, mention: 'Visuel d’illustration', position: '40% center',
    alt: 'Le bâtiment principal du musée, aux volumes blancs sculptés, sous un ciel clair',
    label: 'Architecture — vue de jour',
    pilier: 'jaune',
  },
}
