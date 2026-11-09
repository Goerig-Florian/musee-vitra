/* Note de 1 à 5 : groupe de boutons radio natifs (clavier : flèches) */
export default function Rating({ name, legend, value, onChange, error, num }) {
  const libelles = { 1: 'Très insatisfaisant', 5: 'Très satisfaisant' }
  return (
    <fieldset aria-describedby={error ? `${name}-err` : undefined} aria-invalid={Boolean(error) || undefined}>
      <legend className="font-display text-2xl font-bold leading-tight"><span className="mr-3 text-base tabular-nums">{num}</span>{legend}</legend>
      <div className="mt-5 grid max-w-xl grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} className="relative cursor-pointer">
            <input type="radio" name={name} value={n} checked={value === n} onChange={() => onChange(n)} className="peer sr-only" />
            <span className="flex h-14 items-center justify-center border-2 border-anthracite font-display text-2xl font-bold transition-colors hover:bg-jaune peer-checked:bg-anthracite peer-checked:text-creme peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-anthracite">
              {n}
            </span>
            <span className="sr-only">{libelles[n] ? ` sur 5 — ${libelles[n]}` : ' sur 5'}</span>
          </label>
        ))}
      </div>
      <div className="mt-2 flex max-w-xl justify-between text-sm" aria-hidden="true"><span>1 · {libelles[1]}</span><span>{libelles[5]} · 5</span></div>
      {error && <p id={`${name}-err`} className="mt-2 font-semibold text-anthracite">⚠ {error}</p>}
    </fieldset>
  )
}
