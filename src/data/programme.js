/* ==========================================================
   PROGRAMMATION — premiers rendez-vous officiellement annoncés.
   Pour ajouter un rendez-vous : copier un objet et compléter.
   Ne pas ajouter d'intervenants, artistes, durées ou places
   disponibles tant qu'ils ne sont pas officiellement annoncés.
   ========================================================== */

export const typesRendezVous = {
  rencontre: { label: 'Rencontre', pluriel: 'Rencontres' },
  concert: { label: 'Concert', pluriel: 'Concerts' },
  performance: { label: 'Performance', pluriel: 'Performances' },
}

export const rendezVous = [
  {
    id: 'rdv-2027-02-05',
    date: '2027-02-05',
    titre: 'Objets du quotidien et concert acoustique',
    moments: [
      { heure: '19 h 30', label: 'Rencontre autour des objets du quotidien', type: 'rencontre' },
      { heure: '20 h', label: 'Petit concert acoustique', type: 'concert' },
    ],
    note: 'Une seule réservation pour les deux.',
  },
  {
    id: 'rdv-2027-02-19',
    date: '2027-02-19',
    titre: 'Performance',
    moments: [{ heure: '20 h', label: 'Performance', type: 'performance' }],
  },
  {
    id: 'rdv-2027-03-05',
    date: '2027-03-05',
    titre: 'Rencontre avec un créateur',
    moments: [{ heure: '19 h 30', label: 'Rencontre avec un créateur', type: 'rencontre' }],
  },
  {
    id: 'rdv-2027-03-19',
    date: '2027-03-19',
    titre: 'Petit concert',
    moments: [{ heure: '20 h', label: 'Petit concert', type: 'concert' }],
  },
]

export const typesDe = (rdv) => [...new Set(rdv.moments.map((m) => m.type))]
