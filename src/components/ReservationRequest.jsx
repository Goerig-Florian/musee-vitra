import { useId, useState } from 'react'
import { Mail } from 'lucide-react'
import { mailtoReservation } from '../lib/reservation'
import { dateLongue } from '../lib/dates'
import ReservationNotice from './ReservationNotice'

/* Prépare une demande de réservation par courriel.
   Aucune donnée n'est envoyée par le site. */
export default function ReservationRequest({ activite, dates, max, rappelBillet = false, sombre = false }) {
  const id = useId()
  const [date, setDate] = useState(dates[0])
  const [places, setPlaces] = useState(1)
  const valide = Number.isInteger(places) && places >= 1 && places <= max
  const champ = `mt-1 block min-h-[48px] w-full border-2 px-3 text-base ${sombre ? 'border-creme bg-nuit text-creme' : 'border-anthracite bg-creme text-anthracite'}`

  return (
    <div className={`p-5 sm:p-6 ${sombre ? 'border-2 border-creme' : 'bg-creme text-anthracite'}`}>
      <p className="font-display text-xl font-bold">Préparer ma demande</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-date`} className="text-sm font-semibold">Date souhaitée</label>
          <select id={`${id}-date`} value={date} onChange={(e) => setDate(e.target.value)} className={champ}>
            {dates.map((d) => <option key={d} value={d}>{dateLongue(d)}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-places`} className="text-sm font-semibold">Nombre de places (1 à {max})</label>
          <input
            id={`${id}-places`} type="number" min="1" max={max} inputMode="numeric" value={places}
            onChange={(e) => setPlaces(Number(e.target.value))}
            aria-describedby={!valide ? `${id}-err` : undefined} aria-invalid={!valide}
            className={champ}
          />
          {!valide && <p id={`${id}-err`} className="mt-1 text-sm font-semibold">Indiquez un nombre entre 1 et {max}.</p>}
        </div>
      </div>
      <a
        href={valide ? mailtoReservation({ activite, date: dateLongue(date), places, rappelBillet }) : undefined}
        aria-disabled={!valide}
        className={`btn mt-5 w-full justify-center sm:w-auto ${sombre ? 'btn-jaune' : 'btn-dark'} ${!valide ? 'pointer-events-none opacity-50' : ''}`}
      >
        <Mail className="h-5 w-5" aria-hidden="true" /> Contacter le musée pour réserver
        <span className="sr-only"> (ouvre votre messagerie)</span>
      </a>
      <ReservationNotice className="mt-4" sombre={sombre} />
    </div>
  )
}
