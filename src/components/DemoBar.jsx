import { usePhase } from '../context/Phase'

/* Barre de démonstration : rend explicite le caractère de prototype
   et permet de basculer entre les deux états du site. */
export default function DemoBar() {
  const { phase, setPhase } = usePhase()
  const opt = (val, label) => (
    <button
      type="button"
      aria-pressed={phase === val}
      onClick={() => setPhase(val)}
      className={`px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors sm:px-3 ${phase === val ? 'bg-jaune text-anthracite' : 'text-creme hover:bg-creme/10'}`}
    >
      {label}
    </button>
  )
  return (
    <aside aria-label="Prototype de démonstration" className="on-dark bg-anthracite text-creme">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-1.5">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em]">
          Prototype pédagogique <span aria-hidden="true">·</span> <span className="normal-case tracking-normal opacity-80">scénario et ville fictifs</span>
        </p>
        <div role="group" aria-label="Mode de démonstration" className="flex items-center gap-1">
          <span className="mr-1 hidden text-[11px] opacity-80 sm:inline">Démo :</span>
          {opt('avant', 'Avant réouverture')}
          {opt('apres', 'Après réouverture')}
        </div>
      </div>
    </aside>
  )
}
