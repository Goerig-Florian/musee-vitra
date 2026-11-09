import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Ticket, MapPin, TramFront, CalendarCheck } from 'lucide-react'
import { horaires, tarifs, musee, transports } from '../data/musee'

/* Récapitulatif des informations pratiques */
export default function PracticalSummary({ titreId }) {
  const blocs = [
    {
      Icone: Clock, titre: 'Horaires',
      contenu: <>{horaires.jours}, {horaires.heures}<br />Dernière entrée {horaires.derniereEntree}<br /><strong>{horaires.fermeture}</strong></>,
    },
    {
      Icone: Ticket, titre: 'Tarifs',
      contenu: (
        <ul>{tarifs.map((t) => <li key={t.public} className="flex justify-between gap-3 border-b border-anthracite/15 py-0.5 last:border-0"><span>{t.public}</span><strong className="tabular-nums">{t.prix}</strong></li>)}</ul>
      ),
    },
    {
      Icone: MapPin, titre: 'Adresse',
      contenu: <address className="not-italic">{musee.nom}<br />{musee.adresse.rue}<br />{musee.adresse.ville}</address>,
    },
    {
      Icone: TramFront, titre: 'Transports',
      contenu: <>Tram {transports.tram.ligne}, arrêt {transports.tram.arret}, à {transports.tram.distance}<br />{transports.vendredi}<br />{transports.velo}</>,
    },
    {
      Icone: CalendarCheck, titre: 'Réservations',
      contenu: <>Visite libre sans réservation, dans la limite de la capacité du musée.<br />Ateliers et rendez-vous du soir : <strong>sur réservation auprès du musée</strong>.</>,
    },
  ]
  return (
    <div>
      <div className="grid border-l border-t border-anthracite sm:grid-cols-2 lg:grid-cols-5">
        {blocs.map(({ Icone, titre, contenu }) => (
          <section key={titre} aria-labelledby={`${titreId}-${titre}`} className="border-b border-r border-anthracite p-5 transition-colors hover:bg-jaune">
            <Icone className="h-6 w-6" aria-hidden="true" strokeWidth={1.75} />
            <h3 id={`${titreId}-${titre}`} className="mt-6 font-display text-xl font-bold">{titre}</h3>
            <div className="mt-2 text-[15px] leading-relaxed">{contenu}</div>
          </section>
        ))}
      </div>
      <Link to="/infos" className="btn btn-dark mt-8">Toutes les informations pratiques <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
    </div>
  )
}
