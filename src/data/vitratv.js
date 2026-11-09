/* ==========================================================
   VITRA TV — projet proposé à la municipalité (non lancé).
   Projet proposé à la municipalité : non adopté à ce jour.
   Pour rendre une vidéo lisible : déposer le fichier dans
   /public/videos/ et renseigner src (et poster si besoin).
   Tant que src vaut null, la vidéo est affichée « à venir ».
   image = vignette (clé de data/images.js).
   Ne jamais ajouter de compteur de vues ni de captation
   qui n'a pas réellement été tournée.
   ========================================================== */

export const vitraTvUne = {
  id: 'une',
  titre: 'Le Musée Vitra rouvre ses portes',
  sousTitre: 'Découvrez le musée autrement.',
  description: 'Une première vidéo pour accompagner la réouverture : le bâtiment, les collections et les nouveaux usages du musée.',
  src: null,
  poster: null,
  imageSlot: 'vitratv-une',
}

export const rubriques = [
  {
    id: 'nocturnes',
    titre: 'Les nocturnes en replay',
    description: 'Revivre les temps forts des soirées du premier et du troisième vendredi, à partir de captations autorisées.',
    couleur: 'nuit',
    videos: [
      { id: 'noc-1', titre: 'Premier replay de nocturne', src: null, image: 'tv-vitrahaus-nuit' },
      { id: 'noc-2', titre: 'Replay de nocturne', src: null, image: 'tv-tour-nuit' },
    ],
  },
  {
    id: 'rencontres',
    titre: 'Rencontres autour du design',
    description: 'Les échanges organisés au musée, pour celles et ceux qui n’ont pas pu y assister.',
    couleur: 'rouge',
    videos: [
      { id: 'ren-1', titre: 'Rencontre autour des objets du quotidien', src: null, liee: 'rdv-2027-02-05', image: 'tv-maison-japonaise' },
      { id: 'ren-2', titre: 'Rencontre avec un créateur', src: null, liee: 'rdv-2027-03-05', image: 'tv-bureau' },
    ],
  },
  {
    id: 'objet',
    titre: 'Un objet, une histoire',
    description: 'Un format court consacré à un objet des collections : sa forme, sa matière, son usage.',
    couleur: 'jaune',
    videos: [
      { id: 'obj-1', titre: 'L’éléphant en bois', src: null, image: 'tv-elephant' },
      { id: 'obj-2', titre: 'La chaise en porte-à-faux', src: null, image: 'tv-table-panton' },
    ],
  },
  {
    id: 'images',
    titre: 'Vitra en images',
    description: 'L’architecture, les espaces et la vie du musée, filmés au fil des saisons.',
    couleur: 'jaune',
    videos: [
      { id: 'img-1', titre: 'Le bâtiment', src: null, image: 'tv-facade' },
      { id: 'img-2', titre: 'L’escalier en spirale', src: null, image: 'tv-escalier' },
    ],
  },
]

export const objectifsTv = [
  { titre: 'Promouvoir la réouverture', texte: 'Présenter le musée en vidéo et donner envie de venir dès février 2027.' },
  { titre: 'Valoriser les activités', texte: 'Faire connaître ateliers, visites flash et nocturnes sur la durée.' },
  { titre: 'Prolonger les rendez-vous', texte: 'Diffuser des captations autorisées pour les personnes absentes.' },
  { titre: 'Encourager les visites', texte: 'Chaque vidéo renvoie vers l’agenda et les informations pratiques.' },
]
