/* Formes géométriques des piliers :
   cercle = Découvrir · carré = Participer · demi-cercle = Se retrouver */
const fills = { jaune: 'fill-jaune', rouge: 'fill-rouge', nuit: 'fill-nuit', creme: 'fill-creme', anthracite: 'fill-anthracite', gris: 'fill-gris' }

export default function Shape({ forme = 'cercle', couleur = 'jaune', className = '' }) {
  const f = fills[couleur]
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      {forme === 'cercle' && <circle cx="50" cy="50" r="50" className={f} />}
      {forme === 'carre' && <rect width="100" height="100" className={f} />}
      {forme === 'demi' && <path d="M0 100a50 50 0 0 1 100 0z" transform="translate(0 -25)" className={f} />}
      {forme === 'quart' && <path d="M0 0h100v100A100 100 0 0 1 0 0z" className={f} />}
    </svg>
  )
}
