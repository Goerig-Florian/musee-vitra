import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { nocturnes, rendezVousCulturels, reservationAvertissement } from '../data/musee'

/* Conditions communes à tous les rendez-vous, affichées une seule fois */
export default function RdvConditions({ sombre = false, children }) {
  const faits = [
    ['Horaires', `Nocturne ${nocturnes.heures}`],
    ['Prix', rendezVousCulturels.billet],
    ['Réservation', 'Gratuite et obligatoire, même pour les moins de 18 ans'],
    ['Places', `${rendezVousCulturels.capacite} par rendez-vous`],
  ]
  return (
    <div role="note" aria-label="Conditions des rendez-vous" className={`mt-12 border-t-2 pt-6 ${sombre ? 'border-creme' : 'border-anthracite'}`}>
      <p className="eyebrow">Pour tous les rendez-vous</p>
      <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
        {faits.map(([t, d]) => (
          <div key={t}><dt className="text-sm">{t}</dt><dd className="font-display text-lg font-bold leading-snug">{d}</dd></div>
        ))}
      </dl>
      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-3xl text-sm">
          Le bouton « Réserver » prépare un courriel au musée. <strong>{reservationAvertissement}</strong> {rendezVousCulturels.remplacement}
        </p>
        <Link to="/infos#reservations" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold underline decoration-2 underline-offset-4">
          Conditions de réservation <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      {children}
    </div>
  )
}
