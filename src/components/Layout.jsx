import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AFFICHER_BARRE_DEMO } from '../config'
import DemoBar from './DemoBar'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const main = useRef(null)
  const premier = useRef(true)

  /* Changement de page : retour en haut (ou ancre) et focus sur le contenu */
  useEffect(() => {
    if (premier.current) { premier.current = false; if (!hash) return }
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) { setTimeout(() => { el.scrollIntoView(); el.focus({ preventScroll: true }) }, 30); return }
    }
    window.scrollTo(0, 0)
    main.current?.focus({ preventScroll: true })
  }, [pathname, hash])

  return (
    <>
      <a href="#contenu" onClick={(e) => { e.preventDefault(); main.current?.focus() }} className="sr-only z-[60] bg-jaune px-4 py-3 font-semibold focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Aller au contenu
      </a>
      {AFFICHER_BARRE_DEMO && <DemoBar />}
      <Header />
      <main id="contenu" ref={main} tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
