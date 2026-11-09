import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { usePhase } from '../context/Phase'
import Logo from './Logo'
import Shape from './Shape'

const mobileLien = ({ isActive }) =>
  `flex items-center justify-between border-b border-gris py-4 font-display text-3xl font-bold ${isActive ? 'underline decoration-4 underline-offset-8' : ''}`

export function useNavItems() {
  const { apres } = usePhase()
  return [
    { to: '/musee', label: 'Le musée' },
    { to: '/agenda', label: 'Activités & agenda' },
    { to: '/infos', label: 'Infos pratiques' },
    { to: '/vitra-tv', label: 'Vitra TV' },
    ...(apres ? [{ to: '/avis', label: 'Votre avis' }] : []),
  ]
}

export default function Header() {
  const items = useNavItems()
  const [ouvert, setOuvert] = useState(false)
  const bouton = useRef(null)
  const panneau = useRef(null)
  const fermer = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => { setOuvert(false) }, [pathname])

  useEffect(() => {
    if (!ouvert) return
    document.body.style.overflow = 'hidden'
    panneau.current?.querySelector('a')?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') { setOuvert(false); bouton.current?.focus() }
      if (e.key === 'Tab' && panneau.current) {
        const f = [fermer.current, ...panneau.current.querySelectorAll('a')]
        const i = f.indexOf(document.activeElement)
        if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus() }
        else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey) }
  }, [ouvert])

  const lien = ({ isActive }) =>
    `relative py-2 text-[15px] font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:origin-left after:bg-anthracite after:transition-transform ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-40 border-b border-anthracite bg-creme">
      <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link to="/" aria-label="Musée Vitra — accueil" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {items.map((it) => (
              <li key={it.to}><NavLink to={it.to} className={lien}>{it.label}</NavLink></li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/infos" className="btn btn-dark hidden min-h-[44px] py-2.5 text-sm sm:inline-flex">
            Préparer ma visite <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            ref={bouton}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-anthracite lg:hidden"
            aria-expanded={ouvert}
            aria-controls="menu-mobile"
            onClick={() => setOuvert((o) => !o)}
          >
            {ouvert ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        ref={panneau}
        hidden={!ouvert}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-0 z-50 overflow-y-auto bg-creme lg:hidden"
      >
        <div className="wrap flex h-[var(--header-h)] items-center justify-between border-b border-anthracite">
          <Logo />
          <button
            ref={fermer}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-anthracite"
            onClick={() => { setOuvert(false); bouton.current?.focus() }}
          >
            <X aria-hidden="true" /><span className="sr-only">Fermer le menu</span>
          </button>
        </div>
        <nav aria-label="Navigation mobile" className="wrap flex flex-col py-6">
          <ul className="flex flex-col">
            <li><NavLink to="/" end className={mobileLien}>Accueil <ArrowRight className="h-6 w-6" aria-hidden="true" /></NavLink></li>
            {items.map((it) => (
              <li key={it.to}><NavLink to={it.to} className={mobileLien}>{it.label} <ArrowRight className="h-6 w-6" aria-hidden="true" /></NavLink></li>
            ))}
          </ul>
          <Link to="/infos" className="btn btn-dark mt-8 justify-center">Préparer ma visite <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          <div className="mt-8 flex items-end gap-2" aria-hidden="true">
            <Shape forme="cercle" couleur="jaune" className="h-14 w-14 anim-flotte" />
            <Shape forme="carre" couleur="rouge" className="h-14 w-14" />
            <Shape forme="demi" couleur="nuit" className="h-14 w-14" />
          </div>
        </nav>
      </div>
    </header>
  )
}
