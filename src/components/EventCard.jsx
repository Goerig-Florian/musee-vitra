import { Mail } from 'lucide-react'
import { typesRendezVous, typesDe } from '../data/programme'
import { jourNum, moisCourt, jourSemaine, dateLongue } from '../lib/dates'
import { mailtoReservation } from '../lib/reservation'

/* Carte d'un rendez-vous : date, type, titre, horaire, un bouton.
   Les conditions communes (nocturne, billet, réservation, capacité)
   sont affichées une seule fois sous la grille : <RdvConditions />. */
export default function EventCard({ rdv, sombre = false, Titre = 'h3' }) {
  const types = typesDe(rdv)
  const plusieurs = rdv.moments.length > 1
  return (
    <article
      className={`group flex h-full flex-col border-t-[3px] pt-4 ${sombre ? 'border-creme text-creme' : 'border-anthracite text-anthracite'}`}
      aria-labelledby={`${rdv.id}-titre`}
    >
      <p className="flex items-end gap-3">
        <span className="sr-only">{dateLongue(rdv.date)}</span>
        <span className="font-display text-6xl font-extrabold leading-[0.8] tracking-titre" aria-hidden="true">{jourNum(rdv.date)}</span>
        <span className="pb-0.5 text-sm font-semibold uppercase leading-tight tracking-[0.1em]" aria-hidden="true">
          {jourSemaine(rdv.date).slice(0, 3)}. {moisCourt(rdv.date)}
        </span>
      </p>

      <p className="mt-5 flex flex-wrap gap-2">
        {types.map((t) => <span key={t} className="tag">{typesRendezVous[t].label}</span>)}
      </p>

      <Titre id={`${rdv.id}-titre`} className="mt-3 font-display text-2xl font-bold leading-tight">{rdv.titre}</Titre>

      <p className="mt-2 text-[15px] font-semibold tabular-nums">
        {plusieurs
          ? rdv.moments.map((m) => `${m.heure} ${typesRendezVous[m.type].label.toLowerCase()}`).join(' · ')
          : rdv.moments[0].heure}
      </p>
      {rdv.note && <p className="mt-1 text-sm">{rdv.note}</p>}

      <div className="mt-auto pt-6">
        <a
          href={mailtoReservation({ activite: `Rendez-vous culturel — ${rdv.titre}`, date: dateLongue(rdv.date), rappelBillet: true })}
          className={`btn min-h-[44px] py-2.5 text-sm ${sombre ? 'btn-jaune' : 'btn-dark'}`}
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> Réserver
          <span className="sr-only"> : contacter le musée pour le rendez-vous « {rdv.titre} » du {dateLongue(rdv.date)} (ouvre votre messagerie)</span>
        </a>
      </div>
    </article>
  )
}
