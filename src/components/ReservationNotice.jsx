import { Info } from 'lucide-react'
import { reservationAvertissement } from '../data/musee'

export default function ReservationNotice({ className = '', sombre = false }) {
  return (
    <p className={`flex items-start gap-2 text-sm leading-snug ${sombre ? 'text-creme' : 'text-anthracite'} ${className}`}>
      <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span><strong>{reservationAvertissement}</strong> Le site n’enregistre aucune réservation : le bouton ouvre un courriel prérempli adressé au musée.</span>
    </p>
  )
}
