import { useLayoutEffect, useRef } from 'react'

/* Apparition progressive au défilement (désactivée si mouvement réduit) */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    /* déjà à l'écran au chargement : visible tout de suite (pas d'écran vide) */
    if (el.getBoundingClientRect().top < window.innerHeight) { el.classList.add('is-visible'); return }
    if (!('IntersectionObserver' in window)) { el.classList.add('is-visible'); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('is-visible'); io.disconnect() }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  )
}
