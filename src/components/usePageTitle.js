import { useEffect } from 'react'
export default function usePageTitle(titre) {
  useEffect(() => { document.title = titre ? `${titre} — Musée Vitra` : 'Musée Vitra — Le design se vit' }, [titre])
}
