/* ==========================================================
   DONNÉES OFFICIELLES DU MUSÉE (scénario municipal)
   Ne pas modifier sans validation : ces informations
   proviennent des documents officiels du scénario.
   Ville, adresse et courriels sont fictifs.
   ========================================================== */

export const musee = {
  nom: 'Musée Vitra',
  ville: 'Valmont-sur-Rive',
  adresse: { rue: '12, quai des Ateliers', ville: 'Valmont-sur-Rive' },
  contact: {
    reservations: 'musee@valmont.example',
    presse: 'presse@valmont.example',
  },
}

export const reouverture = {
  iso: '2027-02-02T10:00:00',
  libelle: 'mardi 2 février 2027 à 10 h',
  court: '2 février 2027',
}

export const horaires = {
  jours: 'Du mardi au dimanche',
  heures: '10 h – 18 h',
  derniereEntree: '17 h 30',
  fermeture: 'Fermé le lundi',
}

export const tarifs = [
  { public: 'Plein tarif', prix: '10 €' },
  { public: 'Étudiants', prix: '5 €' },
  { public: "Demandeurs d'emploi", prix: '5 €' },
  { public: 'Moins de 18 ans', prix: 'Gratuit' },
]
export const tarifsNote = 'Les tarifs sont les mêmes quel que soit le lieu de résidence.'

export const billetComprend = [
  'L’accès aux collections',
  'L’exposition temporaire',
  'Les visites flash',
  'L’accès à la nocturne du même jour, lorsqu’elle a lieu',
  'L’accès aux rendez-vous culturels nocturnes, sous réserve de réservation obligatoire',
]

export const visitesFlash = {
  quand: 'Tous les jours d’ouverture',
  heures: ['14 h', '16 h'],
  reservation: 'Sans réservation, dans la limite des places disponibles',
  description: 'Présentation d’objets et de leurs usages, accessible sans connaissances préalables.',
}

export const atelier = {
  nom: 'Atelier du samedi',
  quand: 'Tous les samedis',
  heure: '14 h 30',
  tarif: '5 € par participant',
  tarifNote: 'Ce tarif comprend aussi la visite en journée le même jour : aucun billet supplémentaire n’est à ajouter.',
  capacite: 12,
  reservation: 'Réservation obligatoire, confirmée par le musée',
  materiel: 'Matériel fourni',
  collections: 'Aucun objet des collections n’est manipulé',
  public: 'Pour débutants',
}

export const nocturnes = {
  quand: 'Premier et troisième vendredis du mois',
  heures: '18 h – 22 h',
  billet: 'Le billet du jour reste valable le soir.',
  soireeSeule: 'Si vous venez uniquement pour la soirée, prenez un billet au tarif habituel (sauf gratuité).',
  supplement: 'Aucun supplément nocturne.',
}

export const rendezVousCulturels = {
  formats: 'Concerts, rencontres et performances selon le programme',
  billet: 'Inclus dans le billet',
  reservation: 'Réservation gratuite obligatoire pour tous les participants, y compris les moins de 18 ans',
  capacite: 60,
  confirmation: 'La réservation est confirmée uniquement après validation du musée.',
  remplacement: 'Réserver un rendez-vous ne remplace pas le billet ou le justificatif de gratuité.',
}

export const convivialite = {
  capacite: 40,
  acces: 'Accès sans billet',
  consommation: 'Aucune obligation de consommer',
  offre: 'Boissons et petite restauration payantes',
  horaires: '10 h – 18 h les jours d’ouverture, jusqu’à 22 h pendant les nocturnes',
}

export const capacite = {
  total: 180,
  note: 'personnes présentes simultanément, espace de convivialité compris. L’accueil peut réguler les entrées.',
}

export const transports = {
  tram: { ligne: 'T2', arret: 'Ateliers', distance: '250 mètres du musée' },
  frequences: [
    { quand: 'En semaine', freq: 'toutes les 20 minutes' },
    { quand: 'Le dimanche', freq: 'toutes les 30 minutes' },
  ],
  vendredi: 'Service jusqu’à 23 h le vendredi',
  velo: 'Arceaux vélos à proximité',
}

export const renovation = {
  annee: 2026,
  travaux: [
    'L’amélioration de l’accueil des visiteurs',
    'Une meilleure organisation de l’attente et de la billetterie',
    'Une signalétique harmonisée',
    'L’amélioration de certains aménagements d’accessibilité',
    'L’ajout d’assises',
    'Le confort des espaces',
    'La remise à niveau des installations techniques et de sécurité',
  ],
  inchange: 'Les collections et l’architecture du musée restent inchangées.',
  investissement: { total: '1,8 million d’euros', ville: '1,2 million d’euros', partenaires: '600 000 €' },
}

export const reservationAvertissement = 'Votre réservation sera effective après confirmation par le musée.'

/* Période du questionnaire de premières impressions */
export const questionnaire = { debut: '2 février 2027', fin: 'début avril 2027' }
