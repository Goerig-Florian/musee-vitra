import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { PHASE_PAR_DEFAUT } from '../config'

const CLE = 'vitra-demo-phase'
const PHASES = ['avant', 'apres']
const PhaseContext = createContext(null)

function phaseDepuisUrl() {
  const chercher = (s) => new URLSearchParams(s).get('phase')
  const hashQuery = window.location.hash.includes('?') ? window.location.hash.split('?')[1] : ''
  const p = chercher(window.location.search) || chercher(hashQuery)
  return PHASES.includes(p) ? p : null
}

function phaseInitiale() {
  const url = phaseDepuisUrl()
  if (url) return url
  try {
    const memo = localStorage.getItem(CLE)
    if (PHASES.includes(memo)) return memo
  } catch { /* stockage indisponible */ }
  return PHASE_PAR_DEFAUT
}

export function PhaseProvider({ children }) {
  const [phase, setPhaseState] = useState(phaseInitiale)

  const setPhase = useCallback((p) => {
    if (!PHASES.includes(p)) return
    setPhaseState(p)
    try { localStorage.setItem(CLE, p) } catch { /* ignoré */ }
  }, [])

  useEffect(() => { document.documentElement.dataset.phase = phase }, [phase])

  return (
    <PhaseContext.Provider value={{ phase, setPhase, apres: phase === 'apres', avant: phase === 'avant' }}>
      {children}
    </PhaseContext.Provider>
  )
}

export const usePhase = () => useContext(PhaseContext)
