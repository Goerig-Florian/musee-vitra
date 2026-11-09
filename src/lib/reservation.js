import { musee, reservationAvertissement } from '../data/musee'

/* Construit un courriel prérempli : aucune réservation n'est
   enregistrée par le site, la demande part vers le musée. */
export function mailtoReservation({ activite, date, places, rappelBillet = false }) {
  const lignes = [
    'Bonjour,',
    '',
    'Je souhaite faire une demande de réservation :',
    `- Activité : ${activite}`,
    `- Date : ${date}`,
    `- Nombre de places demandées : ${places ?? '(à préciser)'}`,
    '',
  ]
  if (rappelBillet) {
    lignes.push('J’ai bien noté que cette réservation ne remplace pas le billet ou le justificatif de gratuité.', '')
  }
  lignes.push(`J’ai bien noté que : « ${reservationAvertissement} »`, '', 'Nom :', 'Téléphone (facultatif) :', '', 'Merci.')
  const sujet = `Demande de réservation — ${activite} — ${date}`
  return `mailto:${musee.contact.reservations}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(lignes.join('\n'))}`
}
