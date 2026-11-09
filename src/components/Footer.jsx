import { Link } from 'react-router-dom'
import { musee, horaires } from '../data/musee'
import { useNavItems } from './Header'
import Logo from './Logo'

export default function Footer() {
  const items = useNavItems()
  return (
    <footer className="on-dark relative overflow-hidden bg-nuit text-creme">
      <div className="h-3 bg-jaune" aria-hidden="true" />
      <div className="wrap relative grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo clair />
          <p className="mt-6 max-w-xs font-display text-3xl font-bold leading-tight">Vitra, le design se vit.</p>
        </div>
        <div className="md:col-span-3">
          <h2 className="eyebrow mb-4 text-jaune">Adresse</h2>
          <address className="not-italic leading-relaxed">
            {musee.nom}<br />{musee.adresse.rue}<br />{musee.adresse.ville}
          </address>
          <p className="mt-3 text-sm leading-relaxed">Tram T2 — arrêt Ateliers</p>
        </div>
        <div className="md:col-span-2">
          <h2 className="eyebrow mb-4 text-jaune">Horaires</h2>
          <p className="leading-relaxed">{horaires.jours}<br />{horaires.heures}<br />{horaires.fermeture}</p>
        </div>
        <div className="md:col-span-3">
          <h2 className="eyebrow mb-4 text-jaune">Contact</h2>
          <p className="leading-relaxed">
            Réservations et informations<br />
            <a className="lien" href={`mailto:${musee.contact.reservations}`}>{musee.contact.reservations}</a>
          </p>
          <p className="mt-3 leading-relaxed">
            Presse<br />
            <a className="lien" href={`mailto:${musee.contact.presse}`}>{musee.contact.presse}</a>
          </p>
        </div>
        <nav aria-label="Plan du site" className="border-t border-creme/30 pt-6 md:col-span-12">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            <li><Link to="/" className="hover:underline">Accueil</Link></li>
            {items.map((it) => <li key={it.to}><Link to={it.to} className="hover:underline">{it.label}</Link></li>)}
          </ul>
        </nav>
        <p className="text-xs leading-relaxed text-creme/80 md:col-span-12">
          Prototype réalisé dans le cadre d’un projet de communication publique (BUT MMI 3). La ville de Valmont-sur-Rive,
          l’adresse, les courriels et les conditions de réouverture sont fictifs. Ce site n’est pas celui du Vitra Design Museum.
        </p>
      </div>
    </footer>
  )
}
